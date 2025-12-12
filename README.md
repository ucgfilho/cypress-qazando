# Projeto Cypress – Qazando

Testes automatizados E2E utilizando **Cypress** na aplicação **Automation Practice** da **Qazando**.

## Tecnologias

- **Node.js 20+**
- **Cypress 15.7.1**

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
│   ├── fixtures/                — dados de teste
│   ├── screenshots/             — capturas de falhas
│   └── support/                 — comandos customizados
├── cypress.config.js            — configuração principal
└── package.json
```

## Funcionalidades testadas

- **Login** — validação com credenciais válidas e inválidas (email e senha)
- **Cadastro** — validação de campos obrigatórios e formatos de entrada