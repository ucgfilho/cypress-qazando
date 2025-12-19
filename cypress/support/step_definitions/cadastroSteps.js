import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

// Elementos
const el = {
  inputs: {
    name: "#user",
    email: "#email",
    password: "#password",
  },
  buttons: {
    register: "#btnRegister",
  },
  messages: {
    error: "#errorMessageFirstName",
    success: ".swal2-popup",
  },
};

// Background
Given("I am on the registration page", () => {
  cy.accessRegisterPage();
});

// Preenchimento de campos
When("I fill in the name {string}", (name) => {
  cy.get(el.inputs.name).type(name);
});

When("I fill in the email {string}", (email) => {
  cy.get(el.inputs.email).type(email);
});

When("I fill in the password {string}", (password) => {
  cy.get(el.inputs.password).type(password);
});

When("I fill in the invalid email {string}", (invalidEmail) => {
  cy.get(el.inputs.email).type(invalidEmail);
});

// Campos vazios
When("I leave the name empty", () => {
  cy.get(el.inputs.name).clear();
});

When("I leave the email empty", () => {
  cy.get(el.inputs.email).clear();
});

When("I leave the password empty", () => {
  cy.get(el.inputs.password).clear();
});

// Ação
When("I click on the registration button", () => {
  cy.get(el.buttons.register).click();
});

// Validações
Then("I see the register message {string}", (message) => {
  cy.contains(message).should("be.visible");
});

Then("I see my name in the welcome message", () => {
  cy.get(el.messages.success).should("be.visible");
});
