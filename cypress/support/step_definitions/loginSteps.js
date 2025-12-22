import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { faker } from "@faker-js/faker";
import homePage from "../pages/homePage";
import loginPage from "../pages/loginPage";

const validEmail = faker.internet.email();
const validPassword = faker.internet.password(6);
const invalidEmail = faker.internet.email().replace("@", "");
const invalidPassword = faker.string.alphanumeric(5);

// Background
Given("I am on the login page", () => {
  homePage.accessLoginPage();
});

// Preenchimento de campos
When("I fill a valid email", () => {
  loginPage.fillEmail(validEmail);
});

When("I fill a valid password", () => {
  loginPage.fillPassword(validPassword);
});

When("I fill an invalid email", () => {
  loginPage.fillEmail(invalidEmail);
});

When("I fill an invalid password", () => {
  loginPage.fillPassword(invalidPassword);
});

// Ação
When("I click on the login button", () => {
  loginPage.clickLoginButton();
});

// Validações
Then("I see the login message {string}", (message) => {
  cy.contains(message).should("be.visible");
});
