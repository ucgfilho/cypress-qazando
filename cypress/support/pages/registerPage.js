// Elementos
const el = {
  inputs: {
    name: "#user",
    email: "#email",
    password: "#password",
  },
  buttons: {
    register: "#btnRegister",
  },
  messages: {
    error: "#errorMessageFirstName",
    success: ".swal2-popup",
  },
};

// Cadastro válido
Cypress.Commands.add("registerSuccessful", (name, email, password) => {
  cy.get(el.inputs.name).type(name);
  cy.get(el.inputs.email).type(email);
  cy.get(el.inputs.password).type(password);
  cy.get(el.buttons.register).click();
});

// Cadastro sem nome
Cypress.Commands.add("registerWithoutName", (email, password) => {
  cy.get(el.inputs.email).type(email);
  cy.get(el.inputs.password).type(password);
  cy.get(el.buttons.register).click();
});

// Cadastro sem email
Cypress.Commands.add("registerWithoutEmail", (name, password) => {
  cy.get(el.inputs.name).type(name);
  cy.get(el.inputs.password).type(password);
  cy.get(el.buttons.register).click();
});

// Cadastro com email inválido
Cypress.Commands.add(
  "registerWithInvalidEmail",
  (name, invalidEmail, password) => {
    cy.get(el.inputs.name).type(name);
    cy.get(el.inputs.email).type(invalidEmail);
    cy.get(el.inputs.password).type(password);
    cy.get(el.buttons.register).click();
  }
);

// Cadastro sem senha
Cypress.Commands.add("registerWithoutPassword", (name, email) => {
  cy.get(el.inputs.name).type(name);
  cy.get(el.inputs.email).type(email);
  cy.get(el.buttons.register).click();
});

// Cadastro com senha inválida
Cypress.Commands.add(
  "registerWithInvalidPassword",
  (name, email, passwordInvalid) => {
    cy.get(el.inputs.name).type(name);
    cy.get(el.inputs.email).type(email);
    cy.get(el.inputs.password).type(passwordInvalid);
    cy.get(el.buttons.register).click();
  }
);

// Valida erro de nome
Cypress.Commands.add("validateNameError", () => {
  cy.get(el.messages.error)
    .contains("O campo nome deve ser prenchido")
    .should("be.visible");
});

// Valida erro de email
Cypress.Commands.add("validateEmailError", () => {
  cy.get(el.messages.error)
    .contains("O campo e-mail deve ser prenchido corretamente")
    .should("be.visible");
});

// Valida erro de senha
Cypress.Commands.add("validatePasswordError", () => {
  cy.get(el.messages.error)
    .contains("O campo senha deve ter pelo menos 6 dígitos")
    .should("be.visible");
});

// Valida cadastro realizado com sucesso
Cypress.Commands.add("validateRegister", (name) => {
  cy.get(el.messages.success)
    .should("be.visible")
    .and("contain", "Cadastro realizado!")
    .and("contain", "Bem-vindo " + name);
});
