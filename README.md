# Cypress QAzando - Automação de Testes E2E

Suite de testes automatizados end-to-end para a aplicação [Automation Practice](https://automationpratice.com.br/) da Qazando.

---

## Tecnologias

| Tecnologia | Versão | Finalidade |
|------------|--------|------------|
| Cypress | 15.7.1 | Framework de testes E2E |
| Faker.js | 10.1.0 | Geração de dados dinâmicos |
| Cucumber | 24.0.0 | BDD com Gherkin |
| Node.js | 18+ | Runtime JavaScript |

---

## Estrutura do Projeto

```
cypress-qazando/
├── cypress/
│   ├── e2e/
│   │   ├── cadastro.cy.js
│   │   ├── login.cy.js
│   │   └── features/
│   │       ├── cadastro.feature
│   │       └── login.feature
│   ├── fixtures/
│   │   └── resolutions.json
│   └── support/
│       ├── e2e.js
│       ├── homePageCommands.js
│       ├── loginPageCommands.js
│       ├── registerPageCommands.js
│       └── step_definitions/
│           ├── cadastroSteps.js
│           └── loginSteps.js
├── cypress.config.js
└── package.json
```

---

## Padrões de Projeto

- **Page Object Pattern**: Custom Commands organizados por página
- **BDD (Behavior Driven Development)**: Cenários em Gherkin via Cucumber

---

## Funcionalidades

### Login
| Cenário | Tipo |
|---------|------|
| Credenciais válidas | Sucesso |
| E-mail inválido | Erro |
| Senha inválida | Erro |

### Cadastro
| Cenário | Tipo |
|---------|------|
| Dados válidos | Sucesso |
| Nome vazio | Erro |
| E-mail vazio | Erro |
| E-mail inválido | Erro |
| Senha vazia | Erro |
| Senha inválida | Erro |

---

## Testes Responsivos

| Dispositivo | Resolução |
|-------------|-----------|
| iPhone XR | 414 x 896 |
| iPad 2 | 768 x 1024 |
| MacBook 16 | 1536 x 960 |
| Desktop | 1920 x 1080 |

---

## Instalação

```bash
git clone https://github.com/ucgfilho/cypress-qazando.git
cd cypress-qazando
npm install
```

---

## Execução

```bash
# Modo interativo
npx cypress open

# Headless
npx cypress run

# Teste específico
npx cypress run --spec "cypress/e2e/login.cy.js"

# Apenas features BDD
npx cypress run --spec "cypress/e2e/features/**/*.feature"
```

---

## Autor

**Ubirajara Filho**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/ucgfilho/)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/ucgfilho)

---

## Licença

MIT