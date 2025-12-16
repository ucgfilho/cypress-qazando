# Cypress QAzando - Automação de Testes E2E

Suite de testes automatizados end-to-end para a aplicação [Automation Practice](https://automationpratice.com.br/) da Qazando.

---

## Tecnologias

| Tecnologia | Versão | Finalidade |
|------------|--------|------------|
| Cypress | 15.7.1 | Framework de testes E2E |
| Faker.js | 9.8.0 | Geração de dados dinâmicos |
| Node.js | 18+ | Runtime JavaScript |

---

## Estrutura do Projeto

```
cypress-qazando/
├── cypress/
│   ├── e2e/
│   │   ├── login.cy.js          # Testes de login
│   │   └── register.cy.js       # Testes de cadastro
│   ├── fixtures/
│   │   └── resolutions.json     # Configurações de viewport
│   └── support/
│       ├── commands/
│       │   ├── loginCommands.js     # Comandos de login
│       │   └── registerCommands.js  # Comandos de cadastro
│       ├── elements/
│       │   ├── loginElements.js     # Seletores de login
│       │   └── registerElements.js  # Seletores de cadastro
│       ├── commands.js
│       └── e2e.js
├── cypress.config.js
└── package.json
```

---

## Padrão de Projeto

**Page Object Pattern** implementado via Custom Commands do Cypress:

- **Elements**: Centralização de seletores CSS
- **Commands**: Ações reutilizáveis e asserções
- **Specs**: Arquivos de teste organizados por funcionalidade

---

## Cenários de Teste

### Login
| Cenário | Descrição |
|---------|-----------|
| Login válido | Autenticação com credenciais corretas |
| Senha inválida | Validação de mensagem de erro |
| E-mail inválido | Validação de formato de e-mail |

### Cadastro
| Cenário | Descrição |
|---------|-----------|
| Cadastro completo | Registro com todos os campos válidos |
| Sem nome | Validação de campo obrigatório |
| Sem e-mail | Validação de campo obrigatório |
| Sem senha | Validação de campo obrigatório |
| E-mail inválido | Validação de formato |
| Senha inválida | Validação de requisitos mínimos |

---

## Testes Responsivos

Todos os testes são executados em 4 resoluções:

| Dispositivo | Resolução |
|-------------|-----------|
| iPhone XR | 414 x 896 |
| iPad 2 | 768 x 1024 |
| MacBook 16 | 1536 x 960 |
| Desktop | 1920 x 1080 |

---

## Instalação

```bash
# Clonar repositório
git clone https://github.com/ucgfilho/cypress-qazando.git

# Acessar diretório
cd cypress-qazando

# Instalar dependências
npm install
```

---

## Execução

```bash
# Modo interativo (Cypress UI)
npx cypress open

# Modo headless (linha de comando)
npx cypress run

# Executar teste específico
npx cypress run --spec "cypress/e2e/login.cy.js"
```

---

## Diferenciais

- **Dados dinâmicos**: Faker.js elimina dependência de dados fixos
- **Cobertura responsiva**: Validação em múltiplos dispositivos
- **Código escalável**: Estrutura modular para fácil manutenção
- **Nomenclatura consistente**: Padrão claro em todo o projeto

---

## Autor

Desenvolvido por **Ubirajara Filho**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/ucgfilho/)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/ucgfilho)

---

## Licença

Este projeto está sob a licença MIT.