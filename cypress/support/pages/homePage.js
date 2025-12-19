// Elementos
const el = {
  buttons: {
    accessRegister: ".fa-lock",
    accessLogin: ".fa-user",
  },
  pages: {
    register: ".account_form",
    login: ".account_form",
  },
};

// Acessa página de cadastro
Cypress.Commands.add("accessRegisterPage", () => {
  // Acessa a home e clica no botão de cadastro
  cy.visit("/");
  cy.get(el.buttons.accessRegister).click();

  // Verifica se está na página de cadastro
  cy.get(el.pages.register).should("contain.text", "Cadastro de usuário");
});

// Acessa página de login
Cypress.Commands.add("accessLoginPage", () => {
  // Acessa a home e clica no botão de login
  cy.visit("/");
  cy.get(el.buttons.accessLogin).click();

  // Verifica se está na página de login
  cy.get(el.pages.login).should("contain.text", "Login");
});
