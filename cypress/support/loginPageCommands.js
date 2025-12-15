// Login válido
Cypress.Commands.add("loginSuccessful", (email, password) => {
  cy.get("#user").type(email);
  cy.get("#password").type(password);
  cy.get("#btnLogin").click();
});

// Login com senha inválida
Cypress.Commands.add("loginWithInvalidPassword", (email, passwordInvalid) => {
  cy.get("#user").type(email);
    cy.get("#password").type(passwordInvalid);
    cy.get("#btnLogin").click();
});

// Login com e-mail inválido
Cypress.Commands.add("loginWithInvalidEmail", (invalidEmail, password) => {
  cy.get("#user").type(invalidEmail);
  cy.get("#password").type(password);
  cy.get("#btnLogin").click();
});

// Valida login bem-sucedido
Cypress.Commands.add("validateLoginSuccessful", (email) => {
  cy.get(".swal2-icon-success")
      .should("be.visible")
      .and("contain", "Login realizado")
      .and("contain", "Olá, " + email);
});

// Valida senha inválida
Cypress.Commands.add("validateInvalidPassword", () => {
  cy.contains("Senha inválida.").should("be.visible");
});

// Valida e-mail inválido
Cypress.Commands.add("validateInvalidEmail", () => {
  cy.contains("E-mail inválido.").should("be.visible");
});