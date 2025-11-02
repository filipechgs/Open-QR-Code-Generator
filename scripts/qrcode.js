// Import QRCode from qrcode-generetor.js
import QRCode from './qrcode-generetor.js';

// QR Code Functions
let currentQRCodeCanvas = null;

function generateQRCode() {
    const text = document.getElementById('textInput').value.trim();
    const qrcodeContainer = document.getElementById('qrcodeContainer');
    const actionButtons = document.getElementById('actionButtons');

    if (!text) {
        showStatus(translations[currentLang].errorEmpty, 'error');
        return;
    }

    try {
        // Clear previous QR code
        qrcodeContainer.innerHTML = '';
        currentQRCodeCanvas = null;

        // Create new QR code
        new QRCode(qrcodeContainer, {
            text: text,
            width: 256,
            height: 256,
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
        });

        // Get the canvas element
        currentQRCodeCanvas = qrcodeContainer.querySelector('canvas');

        // Show action buttons and success message
        actionButtons.classList.add('show');
        showStatus(translations[currentLang].successGenerated, 'success');
    } catch (error) {
        showStatus(translations[currentLang].errorGenerate, 'error');
        console.error('Error generating QR code:', error);
    }
}

function clearQRCode() {
    const textInput = document.getElementById('textInput');
    const qrcodeContainer = document.getElementById('qrcodeContainer');
    const actionButtons = document.getElementById('actionButtons');
    const status = document.getElementById('status');

    textInput.value = '';
    qrcodeContainer.innerHTML = `
        <div style="color: #ccc; font-size: 14px;">
            ${translations[currentLang].qrPlaceholder}
        </div>
    `;
    actionButtons.classList.remove('show');
    status.classList.remove('show');
    currentQRCodeCanvas = null;
    textInput.focus();
}

function downloadQRCode() {
    if (!currentQRCodeCanvas) {
        showStatus(translations[currentLang].errorNeedQr, 'error');
        return;
    }

    try {
        const link = document.createElement('a');
        link.download = 'qrcode.png';
        link.href = currentQRCodeCanvas.toDataURL('image/png');
        link.click();
        showStatus(translations[currentLang].successDownload, 'success');
    } catch (error) {
        showStatus(translations[currentLang].errorDownload, 'error');
        console.error('Error downloading QR code:', error);
    }
}

async function shareQRCode() {
    if (!currentQRCodeCanvas) {
        showStatus(translations[currentLang].errorNeedQr, 'error');
        return;
    }

    try {
        // Convert canvas to blob
        const blob = await new Promise(resolve => {
            currentQRCodeCanvas.toBlob(resolve, 'image/png');
        });

        // Check if Web Share API is available
        if (navigator.share) {
            await navigator.share({
                files: [
                    new File([blob], 'qrcode.png', {
                        type: 'image/png'
                    })
                ]
            });
            showStatus(translations[currentLang].successShared, 'success');
        } else {
            // Fallback for browsers that don't support sharing files
            fallbackShare();
        }
    } catch (error) {
        if (error.name !== 'AbortError') {
            showStatus(translations[currentLang].errorShare, 'error');
            console.error('Error sharing QR code:', error);
        }
    }
}

function fallbackShare() {
    if (!currentQRCodeCanvas) return;

    // Copy image to clipboard
    currentQRCodeCanvas.toBlob(async (blob) => {
        try {
            await navigator.clipboard.write([
                new ClipboardItem({
                    'image/png': blob
                })
            ]);
            showStatus(translations[currentLang].successCopied, 'success');
        } catch (error) {
            showStatus(translations[currentLang].errorShare, 'error');
            console.error('Error copying to clipboard:', error);
        }
    });
}

function showStatus(message, type) {
    const status = document.getElementById('status');
    status.textContent = message;
    status.className = 'status show ' + type;

    // Hide after 3 seconds
    setTimeout(() => {
        status.classList.remove('show');
    }, 3000);
}

document.getElementById('textInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        generateQRCode();
    }
});

document.getElementById('textInput').focus();

window.addEventListener('online', () => {
    showStatus(translations[currentLang].statusOnline, 'success');
});

window.addEventListener('offline', () => {
    showStatus(translations[currentLang].statusOffline, 'error');
});