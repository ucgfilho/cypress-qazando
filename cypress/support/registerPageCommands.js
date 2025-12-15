// Cadastro válido
Cypress.Commands.add("registerSuccessful", (name, email, password) => {
  cy.get("#user").type(name);
  cy.get("#email").type(email);
  cy.get("#password").type(password);
  cy.get("#btnRegister").click();
});

// Cadastro sem nome
Cypress.Commands.add("registerWithoutName", (email, password) => {
  cy.get("#email").type(email);
  cy.get("#password").type(password);
  cy.get("#btnRegister").click();
});

// Cadastro sem email
Cypress.Commands.add("registerWithoutEmail", (name, password) => {
  cy.get("#user").type(name);
  cy.get("#password").type(password);
  cy.get("#btnRegister").click();
});

// Cadastro com email inválido
Cypress.Commands.add("registerWithInvalidEmail", (name, invalidEmail, password) => {
  cy.get("#user").type(name);
  cy.get("#email").type(invalidEmail);
  cy.get("#password").type(password);
  cy.get("#btnRegister").click();
});

// Cadastro sem senha
Cypress.Commands.add("registerWithoutPassword", (name, email) => {
  cy.get("#user").type(name);
  cy.get("#email").type(email);
  cy.get("#btnRegister").click();
});

// Cadastro com senha inválida
Cypress.Commands.add("registerWithInvalidPassword", (name, email, passwordInvalid) => {
  cy.get("#user").type(name);
  cy.get("#email").type(email);
  cy.get("#password").type(passwordInvalid);
  cy.get("#btnRegister").click();
});

// Valida erro de nome
Cypress.Commands.add("validateNameError", () => {
  cy.get("#errorMessageFirstName")
    .should("be.visible")
    .and("contain", "O campo nome deve ser prenchido");
});

// Valida erro de email
Cypress.Commands.add("validateEmailError", () => {
  cy.get("#errorMessageFirstName")
    .should("be.visible")
    .and("contain", "O campo e-mail deve ser prenchido corretamente");
});

// Valida erro de senha
Cypress.Commands.add("validatePasswordError", () => {
  cy.get("#errorMessageFirstName")
    .should("be.visible")
    .and("contain", "O campo senha deve ter pelo menos 6 dígitos");
});

// Valida cadastro realizado com sucesso
Cypress.Commands.add("validateRegister", (name) => {
  cy.get(".swal2-popup")
    .should("be.visible")
    .and("contain", "Cadastro realizado!")
    .and("contain", "Bem-vindo " + name);
});