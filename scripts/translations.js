// Language translations
const translations = {
    pt: {
        installPrompt: '📱 Instalar como App',
        installDesc: 'Use offline e tenha acesso rápido',
        installBtn: 'Instalar',
        title: 'Open QR Code Generator',
        subtitle: 'Gratuito • Open Source • Sem Anúncios',
        github: 'Ver no GitHub',
        inputPlaceholder: 'Digite texto, URL ou qualquer conteúdo...',
        btnGenerate: 'Gerar',
        btnClear: 'Limpar',
        btnDownload: '💾 Download',
        btnShare: '📤 Compartilhar',
        qrPlaceholder: 'Seu QR Code aparecerá aqui',
        footer: 'Feito com ♥ • Totalmente gratuito e open source',
        errorEmpty: 'Digite algum texto ou URL',
        errorGenerate: 'Erro ao gerar QR Code',
        errorDownload: 'Erro ao baixar',
        errorShare: 'Erro ao compartilhar',
        errorNeedQr: 'Gere um QR Code primeiro',
        successGenerated: '✓ QR Code gerado',
        successDownload: '✓ Download concluído',
        successShared: '✓ Compartilhado',
        successCopied: '✓ Texto copiado',
        statusOnline: '✓ Conectado',
        statusOffline: '⚠ Modo offline',
        characters: 'caracteres'
    },
    en: {
        installPrompt: '📱 Install as App',
        installDesc: 'Use offline and get quick access',
        installBtn: 'Install',
        title: 'Open QR Code Generator',
        subtitle: 'Free • Open Source • No Ads',
        github: 'View on GitHub',
        inputPlaceholder: 'Type text, URL or any content...',
        btnGenerate: 'Generate',
        btnClear: 'Clear',
        btnDownload: '💾 Download',
        btnShare: '📤 Share',
        qrPlaceholder: 'Your QR Code will appear here',
        footer: 'Made with ♥ • Completely free and open source',
        errorEmpty: 'Type some text or URL',
        errorGenerate: 'Error generating QR Code',
        errorDownload: 'Error downloading',
        errorShare: 'Error sharing',
        errorNeedQr: 'Generate a QR Code first',
        successGenerated: '✓ QR Code generated',
        successDownload: '✓ Download complete',
        successShared: '✓ Shared',
        successCopied: '✓ Text copied',
        statusOnline: '✓ Connected',
        statusOffline: '⚠ Offline mode',
        characters: 'characters'
    }
};

let currentLang = 'pt';

function setLanguage(lang) {
    currentLang = lang;
    const t = translations[lang];

    // Update all text content
    document.querySelector('.install-prompt p:first-child').textContent = t.installPrompt;
    document.querySelector('.install-prompt p:nth-child(2)').textContent = t.installDesc;
    document.querySelector('#installButton').textContent = t.installBtn;
    document.querySelector('.header h1').textContent = t.title;
    document.querySelector('.header p').textContent = t.subtitle;
    document.querySelector('.open-source').lastChild.textContent = t.github;
    document.querySelector('#textInput').placeholder = t.inputPlaceholder;
    document.querySelector('.button-group .btn-primary').textContent = t.btnGenerate;
    document.querySelector('.button-group .btn-secondary').textContent = t.btnClear;
    document.querySelector('#actionButtons .btn:first-child').textContent = t.btnDownload;
    document.querySelector('#actionButtons .btn:last-child').textContent = t.btnShare;
    document.querySelector('#qrcodeContainer div').textContent = t.qrPlaceholder;
    document.querySelector('.footer').textContent = t.footer;

    // Update language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.getElementById('lang' + lang.toUpperCase()).classList.add('active');
}