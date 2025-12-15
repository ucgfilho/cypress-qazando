import { faker } from "@faker-js/faker";

describe("Cadastro", () => {
  const name = faker.person.fullName();
  const email = faker.internet.email();
  const invalidEmail = faker.internet.email().replace("@", "");
  const password = faker.internet.password(6);
  const passwordInvalid = faker.string.alphanumeric(5);

  beforeEach(() => {
    cy.accessRegisterPage();
  });

  it("Cadastro com nome vazio", () => {
    cy.registerWithoutName(email, password);
    cy.validateNameError();
  });

  it("Cadastro com e-mail vazio", () => {
    cy.registerWithoutEmail(name, password);
    cy.validateEmailError();
  });

  it("Cadastro com e-mail inválido", () => {
    cy.registerWithInvalidEmail(name, invalidEmail, password);
    cy.validateEmailError();
  });

  it("Cadastro com senha vazia", () => {
    cy.registerWithoutPassword(name, email);
    cy.validatePasswordError();
  });

  it("Cadastro com senha inválida", () => {
    cy.registerWithInvalidPassword(name, email, passwordInvalid);
    cy.validatePasswordError();
  });

  it("Cadastro efetuado com sucesso", () => {
    cy.registerSuccessful(name, email, password);
    cy.validateRegister(name);
  });
});