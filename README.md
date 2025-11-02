# Open QR Code Generator

![QR Code Generator](https://img.shields.io/badge/Open%20Source-Yes-brightgreen)
![License](https://img.shields.io/badge/License-MIT-blue)
![PWA](https://img.shields.io/badge/PWA-Enabled-success)

Um gerador de QR Code totalmente gratuito, open source e sem anúncios, desenvolvido como prova de conceito de desenvolvimento colaborativo com IA.

## Sobre o Projeto

Eu queria um gerador de QR Code que eu pudesse usar sem receio de ter os meus dados rastreados ou deturpados quando quisesse, por exemplo, transformar uma chave PIX "copia e cola" em um QR Code. Testei a geração do código com diversos chats de IA e obtive a melhor resposta combinando o Deepseek para o módulo de geração do QR Code, o Claude para o HTML e CSS, e Exceto por este parágrafo, o GitHub Copilot para o README.

Este projeto é um gerador de QR Code moderno e responsivo que funciona como uma Progressive Web App (PWA), permitindo:

- ✅ Gerar QR Codes a partir de qualquer texto ou URL
- ✅ Download dos QR Codes em PNG
- ✅ Compartilhamento nativo
- ✅ Funcionamento offline
- ✅ Instalação como aplicativo
- ✅ Interface em Português e Inglês
- ✅ Totalmente gratuito e sem anúncios

## Tecnologias Utilizadas

- **HTML5** + **CSS3** + **JavaScript Vanilla**
- **ES Modules** para modularização
- **PWA** (Service Worker, Manifest)
- **QR Code Generation** (implementação própria)
- **Design Responsivo**
- **Multi-idioma** (PT-BR/EN)

## Como Usar

### Uso Online
Acesse [https://openqrcodegenerator-dnqhb.ondigitalocean.app](https://openqrcodegenerator-dnqhb.ondigitalocean.app) e comece a gerar QR Codes instantaneamente.

### Instalação como App
1. Acesse o site pelo seu navegador
2. Clique em "Instalar como App" quando o prompt aparecer
3. Use o app offline quando precisar

## Funcionalidades

- **Geração Rápida**: QR Codes gerados instantaneamente
- **Download**: Baixe os QR Codes em alta qualidade
- **Compartilhamento**: Compartilhe via APIs nativas do dispositivo
- **Offline**: Funciona completamente sem internet
- **Responsivo**: Adapta-se a qualquer tamanho de tela
- **Acessível**: Interface limpa e intuitiva

## Desenvolvimento

### Estrutura do Projeto

```
├── index.html             # Página principal da aplicação
├── manifest.json         # Configurações do PWA
├── sw.js                # Service Worker para funcionalidade offline
├── favicon/             # Ícones e assets do PWA
│   ├── android-chrome-*.png
│   ├── apple-touch-icon.png
│   ├── favicon-*.png
│   └── site.webmanifest
├── styles/              # Estilos CSS
│   └── main.css        # Estilos principais da aplicação
└── scripts/            # JavaScript modular
    ├── qrcode-generetor.js  # Implementação do gerador QR Code
    ├── qrcode.js          # Interface de usuário do QR Code
    ├── translations.js    # Sistema de internacionalização
    └── pwa.js            # Configuração do PWA
```

### Desenvolvimento Local

```bash
# Clone o repositório
git clone https://github.com/filipechgs/Open-QR-Code-Generator.git

# Sirva os arquivos com um servidor local
# É necessário um servidor devido ao uso de ES modules
python -m http.server 8000
# ou
npx serve .
```

## Desenvolvimento com IA

Este projeto foi desenvolvido como prova de conceito de colaboração entre diferentes modelos de IA:

### DeepSeek

Responsável por: Módulo completo de geração de QR Codes (qrcode-generetor.js)

Contribuição: Implementação do algoritmo de codificação QR desde os princípios fundamentais, incluindo:

- Codificação de dados
- Correção de erro (Reed-Solomon)
- Padrões de máscara
- Renderização do canvas

### Claude

Responsável por: Interface web completa (index.html, demais scripts)

Contribuição: Desenvolvimento da PWA com:

- Design moderno e responsivo
- Sistema de multi-idioma
- Funcionalidades de PWA
- Experiência de usuário otimizada
- Modularização do código

## Licença

Este projeto está licenciado sob a MIT License - veja o arquivo LICENSE para detalhes.

Você pode:

- ✅ Copiar, modificar e distribuir
- ✅ Usar para fins comerciais
- ✅ Estudar e aprender com o código
- ✅ Contribuir com melhorias

## Por que Open Source?

Acreditamos que ferramentas úteis devem ser acessíveis a todos. Este projeto demonstra que é possível criar aplicações completas e funcionais colaborando com IA, mantendo tudo transparente e livre.

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para:

- Reportar bugs
- Sugerir novas funcionalidades
- Enviar pull requests
- Melhorar a documentação

## Contato

Tem dúvidas ou sugestões? Abra uma issue ou entre em contato!
