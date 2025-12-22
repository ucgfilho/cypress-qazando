import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import homePage from "../pages/homePage";
import registerPage from "../pages/registerPage";

// Background
Given("I am on the registration page", () => {
  homePage.accessRegisterPage();
});

// Preenchimento de campos
When("I fill in the name {string}", (name) => {
  registerPage.fillName(name);
});

When("I fill in the email {string}", (email) => {
  registerPage.fillEmail(email);
});

When("I fill in the password {string}", (password) => {
  registerPage.fillPassword(password);
});

When("I fill in the invalid email {string}", (invalidEmail) => {
  registerPage.fillEmail(invalidEmail);
});

// Campos vazios
When("I leave the name empty", () => {
  registerPage.elements.inputs.name().clear();
});

When("I leave the email empty", () => {
  registerPage.elements.inputs.email().clear();
});

When("I leave the password empty", () => {
  registerPage.elements.inputs.password().clear();
});

// Ação
When("I click on the registration button", () => {
  registerPage.clickRegisterButton();
});

// Validações
Then("I see the register message {string}", (message) => {
  cy.contains(message).should("be.visible");
});

Then("I see my name in the welcome message", () => {
  registerPage.elements.messages.success().should("be.visible");
});
