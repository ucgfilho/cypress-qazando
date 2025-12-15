import { faker } from "@faker-js/faker";

describe("Login", () => {
  const email = faker.internet.email();
  const invalidEmail = faker.internet.email().replace("@", "");
  const password = faker.internet.password(6);
  const passwordInvalid = faker.string.alphanumeric(5);

  beforeEach(() => {
    cy.accessLoginPage();
  });

  it("Login com credenciais válidas", () => {
    cy.loginSuccessful(email, password);
    cy.validateLoginSuccessful(email);
  });

  it("Login com senha inválida", () => {
    cy.loginWithInvalidPassword(email, passwordInvalid);
    cy.validateInvalidPassword();
  });

  it("Login com email inválido", () => {
    cy.loginWithInvalidEmail(invalidEmail, password);
    cy.validateInvalidEmail();
  });
});