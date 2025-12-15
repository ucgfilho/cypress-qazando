# Projeto Cypress – Qazando

Testes automatizados E2E utilizando **Cypress** na aplicação **Automation Practice** da **Qazando**.

## Tecnologias

- **Node.js**
- **Cypress**
- **Faker.js**

## Instalação

```bash
npm install
```

## Como executar

### Rodar testes no modo interativo

```bash
npx cypress open
```

### Rodar testes no modo headless

```bash
npx cypress run
```

## Estrutura

```
cypress-qazando/
├── cypress/
│   ├── e2e/
│   │   ├── cadastro.cy.js       — testes de cadastro
│   │   └── login.cy.js          — testes de autenticação
│   ├── fixtures/
│   │   └── resolutions.json     — resoluções/presets de viewport
│   ├── screenshots/             — capturas de falhas geradas pelo Cypress
│   └── support/                 — suporte e comandos customizados
│       ├── e2e.js
│       ├── homePageCommands.js
│       ├── loginPageCommands.js
│       └── registerPageCommands.js
├── cypress.config.js            — configuração principal
├── package.json
└── README.md
```

## Funcionalidades testadas

- **Login** — validação com credenciais válidas e inválidas (email e senha)
- **Cadastro** — validação de campos obrigatórios e formatos de entrada
