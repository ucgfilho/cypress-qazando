// Acessa página de cadastro
Cypress.Commands.add("accessRegisterPage", () => {
  // Acessa a home e clica no botão de cadastro
  cy.visit("/");
  cy.get(".fa-lock").click();

  // Verifica se está na página de cadastro
  cy.get(".account_form").should("contain.text", "Cadastro de usuário");
});

// Acessa página de login
Cypress.Commands.add("accessLoginPage", () => {
  // Acessa a home e clica no botão de login
    cy.visit("/");
    cy.get(".fa-user").click();

  // Verifica se está na página de login
  cy.get(".account_form").should("contain.text", "Login");
});