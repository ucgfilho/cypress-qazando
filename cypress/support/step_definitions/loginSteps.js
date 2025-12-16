import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { faker } from "@faker-js/faker";

// Elementos
const el = {
  inputs: {
    email: "#user",
    password: "#password",
  },
  buttons: {
    login: "#btnLogin",
  },
  messages: {
    error: ".invalid_input",
    success: ".swal2-popup",
  },
};

const validEmail = faker.internet.email();
const validPassword = faker.internet.password(6);
const invalidEmail = faker.internet.email().replace("@", "");
const invalidPassword = faker.string.alphanumeric(5);

// Background
Given("I am on the login page", () => {
  cy.accessLoginPage();
});

// Preenchimento de campos
When("I fill a valid email", () => {
  cy.get(el.inputs.email).type(validEmail);
});

When("I fill a valid password", () => {
  cy.get(el.inputs.password).type(validPassword);
});

When("I fill an invalid email", () => {
  cy.get(el.inputs.email).type(invalidEmail);
});

When("I fill an invalid password", () => {
  cy.get(el.inputs.password).type(invalidPassword);
});

// Ação
When("I click on the login button", () => {
  cy.get(el.buttons.login).click();
});

// Validações
Then("I see the login message {string}", (message) => {
  cy.contains(message).should("be.visible");
});
