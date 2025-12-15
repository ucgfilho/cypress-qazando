import { faker } from "@faker-js/faker";
const resolutions = require("../fixtures/resolutions.json");

resolutions.forEach((resolution) => {
  describe("Login", () => {
    const email = faker.internet.email();
    const invalidEmail = faker.internet.email().replace("@", "");
    const password = faker.internet.password(6);
    const passwordInvalid = faker.string.alphanumeric(5);

    beforeEach(() => {
      if (resolution != "desktop") {
        cy.viewport(resolution);
      }

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
});