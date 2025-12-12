import { faker } from "@faker-js/faker";

const user_invalid = require("../fixtures/user_invalid.json");

describe("Cadastro", () => {
  const name = faker.person.fullName();
  const email = faker.internet.email();
  const password = faker.internet.password(6);
  const password_invalid = faker.string.alphanumeric(5);

  beforeEach(() => {
    // Acessa a home e clica no botão de cadastro
    cy.visit("/");
    cy.get(".fa-lock").click();
  });

  it("Cadastro com nome vazio", () => {
    cy.get("#email").type(email);
    cy.get("#password").type(password);
    cy.get("#btnRegister").click();
    cy.get("#errorMessageFirstName")
      .should("be.visible")
      .and("contain", "O campo nome deve ser prenchido");
  });

  it("Cadastro com e-mail vazio", () => {
    cy.get("#user").type(name);
    cy.get("#password").type(password);
    cy.get("#btnRegister").click();
    cy.get("#errorMessageFirstName")
      .should("be.visible")
      .and("contain", "O campo e-mail deve ser prenchido corretamente");
  });

  it("Cadastro com e-mail inválido", () => {
    cy.get("#user").type(name);
    cy.get("#email").type(user_invalid.email);
    cy.get("#password").type(password);
    cy.get("#btnRegister").click();
    cy.get("#errorMessageFirstName")
      .should("be.visible")
      .and("contain", "O campo e-mail deve ser prenchido corretamente");
  });

  it("Cadastro com senha vazia", () => {
    cy.get("#user").type(name);
    cy.get("#email").type(email);
    cy.get("#btnRegister").click();
    cy.get("#errorMessageFirstName")
      .should("be.visible")
      .and("contain", "O campo senha deve ter pelo menos 6 dígitos");
  });

  it("Cadastro com senha inválida", () => {
    cy.get("#user").type(name);
    cy.get("#email").type(email);
    cy.get("#password").type(password_invalid);
    cy.get("#btnRegister").click();
    cy.contains("O campo senha deve ter pelo menos 6 dígitos")
      .should("be.visible");
  });

  it("Cadastro efetuado com sucesso", () => {
    cy.get("#user").type(name);
    cy.get("#email").type(email);
    cy.get("#password").type(password);
    cy.get("#btnRegister").click();
    cy.get(".swal2-popup")
      .should("be.visible")
      .and("contain", "Cadastro realizado!")
      .and("contain", "Bem-vindo " + name);
  });
});