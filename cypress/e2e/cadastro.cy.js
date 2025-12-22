import { faker } from "@faker-js/faker";
import homePage from "../support/pages/homePage";
import registerPage from "../support/pages/registerPage";
const resolutions = require("../fixtures/resolutions.json");

resolutions.forEach((resolution) => {
  describe("Cadastro", () => {
    const name = faker.person.fullName();
    const email = faker.internet.email();
    const invalidEmail = faker.internet.email().replace("@", "");
    const password = faker.internet.password(6);
    const passwordInvalid = faker.string.alphanumeric(5);

    beforeEach(() => {
      if (resolution != "desktop") {
        cy.viewport(resolution);
      }

      homePage.accessRegisterPage();
    });

    it("Cadastro com nome vazio", () => {
      registerPage.registerWithoutName(email, password);
      registerPage.validateNameError();
    });

    it("Cadastro com e-mail vazio", () => {
      registerPage.registerWithoutEmail(name, password);
      registerPage.validateEmailError();
    });

    it("Cadastro com e-mail inválido", () => {
      registerPage.registerWithInvalidEmail(name, invalidEmail, password);
      registerPage.validateEmailError();
    });

    it("Cadastro com senha vazia", () => {
      registerPage.registerWithoutPassword(name, email);
      registerPage.validatePasswordError();
    });

    it("Cadastro com senha inválida", () => {
      registerPage.registerWithInvalidPassword(name, email, passwordInvalid);
      registerPage.validatePasswordError();
    });

    it("Cadastro efetuado com sucesso", () => {
      registerPage.registerSuccessful(name, email, password);
      registerPage.validateRegister(name);
    });
  });
});
