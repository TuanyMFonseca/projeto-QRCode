# Documentação do Projeto: Projeto-QRCode e Gerador de Senhas.

## Descrição:
Kit de utilidades para e-commerces, permitindo gerar QR Codes e senhas seguras via linha de comando.

## Estrutura de Pastas

```
projeto-qrcode/
├── .env
├── .gitignore
├── package.json
└── src/
    ├── index.js
    ├── prompts/
    │   ├── prompt-main.js
    │   └── prompt-qrcode.js
    └── services/
        └── qr-code/
            ├── create.js
            ├── handle.js
            └── password/
                ├── create.js
                └── handle.js
```

## Funcionalidades

- **Gerar QR Code:** Crie QR Codes a partir de links, exibindo no terminal.
- **Gerar Senha Segura:** Gera senhas conforme regras definidas no arquivo `.env`.

## Principais Arquivos

- `src/index.js`: Ponto de entrada do projeto.
- `src/prompts/prompt-main.js`: Prompt principal do menu.
- `src/prompts/prompt-qrcode.js`: Prompt para geração de QR Code.
- `src/services/qr-code/create.js`: Função para criar QR Code.
- `src/services/qr-code/handle.js`: Lógica de exibição do QR Code.
- `src/services/qr-code/password/create.js`: Função para criar senha.
- `src/services/qr-code/password/handle.js`: Lógica de geração de senha.

## Dependências

- [`chalk`](https://www.npmjs.com/package/chalk): Cores no terminal.
- [`prompt`](https://www.npmjs.com/package/prompt): Entrada de dados via terminal.
- [`qrcode-terminal`](https://www.npmjs.com/package/qrcode-terminal): Geração de QR Codes no terminal.
