// Elementos
const el = {
  inputs: {
    email: "#user",
    password: "#password",
  },
  buttons: {
    login: "#btnLogin",
  },
  messages: {
    error: ".invalid_input",
    success: ".swal2-popup",
  },
};

// Login válido
Cypress.Commands.add("loginSuccessful", (email, password) => {
  cy.get(el.inputs.email).type(email);
  cy.get(el.inputs.password).type(password);
  cy.get(el.buttons.login).click();
});

// Login com senha inválida
Cypress.Commands.add("loginWithInvalidPassword", (email, passwordInvalid) => {
  cy.get(el.inputs.email).type(email);
  cy.get(el.inputs.password).type(passwordInvalid);
  cy.get(el.buttons.login).click();
});

// Login com e-mail inválido
Cypress.Commands.add("loginWithInvalidEmail", (invalidEmail, password) => {
  cy.get(el.inputs.email).type(invalidEmail);
  cy.get(el.inputs.password).type(password);
  cy.get(el.buttons.login).click();
});

// Valida login bem-sucedido
Cypress.Commands.add("validateLoginSuccessful", (email) => {
  cy.get(el.messages.success)
    .should("be.visible")
    .and("contain", "Login realizado")
    .and("contain", "Olá, " + email);
});

// Valida senha inválida
Cypress.Commands.add("validateInvalidPassword", () => {
  cy.get(el.messages.error)
    .contains("Senha inválida.").should("be.visible");
});

// Valida e-mail inválido
Cypress.Commands.add("validateInvalidEmail", () => {
  cy.get(el.messages.error)
    .contains("E-mail inválido.").should("be.visible");
});
