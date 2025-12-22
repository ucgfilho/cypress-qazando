class LoginPage {
  // Elementos
  elements = {
    inputs: {
      email: () => cy.get("#user"),
      password: () => cy.get("#password"),
    },
    buttons: {
      login: () => cy.get("#btnLogin"),
    },
    messages: {
      error: () => cy.get(".invalid_input"),
      success: () => cy.get(".swal2-popup"),
    },
  };

  // Preenche e-mail
  fillEmail(email) {
    this.elements.inputs.email().type(email);
  }

  // Preenche senha
  fillPassword(password) {
    this.elements.inputs.password().type(password);
  }

  // Clica no botão de login
  clickLoginButton() {
    this.elements.buttons.login().click();
  }

  // Login válido
  loginSuccessful(email, password) {
    this.fillEmail(email);
    this.fillPassword(password);
    this.clickLoginButton();
  }

  // Login com senha inválida
  loginWithInvalidPassword(email, passwordInvalid) {
    this.fillEmail(email);
    this.fillPassword(passwordInvalid);
    this.clickLoginButton();
  }

  // Login com e-mail inválido
  loginWithInvalidEmail(invalidEmail, password) {
    this.fillEmail(invalidEmail);
    this.fillPassword(password);
    this.clickLoginButton();
  }

  // Valida login bem-sucedido
  validateLoginSuccessful(email) {
    this.elements.messages
      .success()
      .should("be.visible")
      .and("contain", "Login realizado")
      .and("contain", "Olá, " + email);
  }

  // Valida senha inválida
  validateInvalidPassword() {
    this.elements.messages
      .error()
      .contains("Senha inválida.")
      .should("be.visible");
  }

  // Valida e-mail inválido
  validateInvalidEmail() {
    this.elements.messages
      .error()
      .contains("E-mail inválido.")
      .should("be.visible");
  }
}

export default new LoginPage();
