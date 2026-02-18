import {faker} from "@faker-js/faker";
import homePage from "../support/pages/homePage";
import loginPage from "../support/pages/loginPage";

const resolutions = require("../fixtures/resolutions.json");

resolutions.forEach((resolution) => {
    describe("Login", () => {
        const email = faker.internet.email();
        const invalidEmail = faker.internet.email().replace("@", "");
        const password = faker.internet.password(6);
        const passwordInvalid = faker.string.alphanumeric(5);

        beforeEach(() => {
            if (resolution !== "desktop") {
                cy.viewport(resolution);
            }

            homePage.accessLoginPage();
        });

        it("Login com credenciais válidas", () => {
            loginPage.loginSuccessful(email, password);
            loginPage.validateLoginSuccessful(email);
        });

        it("Login com senha inválida", () => {
            loginPage.loginWithInvalidPassword(email, passwordInvalid);
            loginPage.validateInvalidPassword();
        });

        it("Login com email inválido", () => {
            loginPage.loginWithInvalidEmail(invalidEmail, password);
            loginPage.validateInvalidEmail();
        });
    });
});
