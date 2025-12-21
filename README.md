# Cypress QAzando - Automação de Testes E2E

Suite de testes automatizados end-to-end para a aplicação [Automation Practice](https://automationpratice.com.br/) da Qazando, com suporte a testes responsivos e múltiplos formatos (JavaScript e BDD).

---

## 🚀 Tecnologias

| Tecnologia | Versão | Finalidade                 |
| ---------- | ------ | -------------------------- |
| Cypress    | 15.8.0 | Framework de testes E2E    |
| Faker.js   | 10.1.0 | Geração de dados dinâmicos |
| Cucumber   | 24.0.0 | BDD com Gherkin            |
| Node.js    | 18+    | Runtime JavaScript         |

---

## Estrutura do Projeto

```
cypress-qazando/
├── .github/
│   └── workflows/
│       └── cypress.yml              # Pipeline de CI/CD
├── cypress/
│   ├── e2e/
│   │   ├── cadastro.cy.js          # Testes de cadastro (JavaScript)
│   │   ├── login.cy.js              # Testes de login (JavaScript)
│   │   └── features/                # Cenários BDD
│   │       ├── cadastro.feature     # Feature de cadastro
│   │       └── login.feature        # Feature de login
│   ├── fixtures/
│   │   └── resolutions.json         # Resoluções de tela
│   ├── reports/
│   │   └── html/                    # Relatórios gerados
│   └── support/
│       ├── e2e.js                   # Arquivo de configuração global
│       ├── pages/                   # Page Objects
│       │   ├── homePage.js          # Comandos de navegação
│       │   ├── loginPage.js         # Comandos de login
│       │   └── registerPage.js      # Comandos de cadastro
│       └── step_definitions/        # Steps do Cucumber
│           ├── cadastroSteps.js     # Steps de cadastro
│           └── loginSteps.js        # Steps de login
├── cypress.config.js                # Configurações do Cypress
└── package.json                     # Dependências do projeto
```

---

## Padrões de Projeto

- **Page Object Pattern**: Custom Commands organizados por página
- **BDD (Behavior Driven Development)**: Cenários em Gherkin via Cucumber

---

## CI/CD com GitHub Actions

O projeto conta com uma pipeline de Integração Contínua configurada no GitHub Actions, que é executada a cada Pull Request.

- **Workflow**: `.github/workflows/cypress.yml`
- **Jobs**:
  - Instalação de dependências
  - Execução dos testes E2E (Chrome)
  - Geração de artefatos (vídeos e screenshots em caso de falha)

---

## Funcionalidades

### Login

| Cenário             | Tipo    |
| ------------------- | ------- |
| Credenciais válidas | Sucesso |
| E-mail inválido     | Erro    |
| Senha inválida      | Erro    |

### Cadastro

| Cenário         | Tipo    |
| --------------- | ------- |
| Dados válidos   | Sucesso |
| Nome vazio      | Erro    |
| E-mail vazio    | Erro    |
| E-mail inválido | Erro    |
| Senha vazia     | Erro    |
| Senha inválida  | Erro    |

---

## Testes Responsivos

| Dispositivo | Resolução   |
| ----------- | ----------- |
| iPhone XR   | 414 x 896   |
| iPad 2      | 768 x 1024  |
| MacBook 16  | 1536 x 960  |
| Desktop     | 1920 x 1080 |

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

Este projeto está sob a licença MIT.
