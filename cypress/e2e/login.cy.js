import { faker } from "@faker-js/faker";

const user_invalid = require("../fixtures/user_invalid.json");

describe("Login", () => {
  const email = faker.internet.email();
  const password = faker.internet.password(6);
  const password_invalid = faker.string.alphanumeric(5);

  beforeEach(() => {
    // Acessa a home e clica no botão de login
    cy.visit("/");
    cy.get(".fa-user").click();
  });

  it("Login com credenciais válidas", () => {
    cy.get("#user").type(email);
    cy.get("#password").type(password);
    cy.get("#btnLogin").click();
    cy.get(".swal2-icon-success")
      .should("be.visible")
      .and("contain", "Login realizado")
      .and("contain", "Olá, " + email);
  });

  it("Login com senha inválida", () => {
    cy.get("#user").type(email);
    cy.get("#password").type(password_invalid);
    cy.get("#btnLogin").click();
    cy.contains("Senha inválida.")
      .should("be.visible");
  });

  it("Login com email inválido", () => {
    cy.get("#user").type(user_invalid.email);
    cy.get("#password").type(password);
    cy.get("#btnLogin").click();
    cy.contains("E-mail inválido.")
      .should("be.visible");
  });
});