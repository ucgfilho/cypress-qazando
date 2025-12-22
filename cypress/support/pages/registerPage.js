class RegisterPage {
  // Elementos
  elements = {
    inputs: {
      name: () => cy.get("#user"),
      email: () => cy.get("#email"),
      password: () => cy.get("#password"),
    },
    buttons: {
      register: () => cy.get("#btnRegister"),
    },
    messages: {
      error: () => cy.get("#errorMessageFirstName"),
      success: () => cy.get(".swal2-popup"),
    },
  };

  // Preenche nome
  fillName(name) {
    this.elements.inputs.name().type(name);
  }

  // Preenche e-mail
  fillEmail(email) {
    this.elements.inputs.email().type(email);
  }

  // Preenche senha
  fillPassword(password) {
    this.elements.inputs.password().type(password);
  }

  // Clica no botão de cadastro
  clickRegisterButton() {
    this.elements.buttons.register().click();
  }

  // Cadastro válido
  registerSuccessful(name, email, password) {
    this.fillName(name);
    this.fillEmail(email);
    this.fillPassword(password);
    this.clickRegisterButton();
  }

  // Cadastro sem nome
  registerWithoutName(email, password) {
    this.fillEmail(email);
    this.fillPassword(password);
    this.clickRegisterButton();
  }

  // Cadastro sem email
  registerWithoutEmail(name, password) {
    this.fillName(name);
    this.fillPassword(password);
    this.clickRegisterButton();
  }

  // Cadastro com email inválido
  registerWithInvalidEmail(name, invalidEmail, password) {
    this.fillName(name);
    this.fillEmail(invalidEmail);
    this.fillPassword(password);
    this.clickRegisterButton();
  }

  // Cadastro sem senha
  registerWithoutPassword(name, email) {
    this.fillName(name);
    this.fillEmail(email);
    this.clickRegisterButton();
  }

  // Cadastro com senha inválida
  registerWithInvalidPassword(name, email, passwordInvalid) {
    this.fillName(name);
    this.fillEmail(email);
    this.fillPassword(passwordInvalid);
    this.clickRegisterButton();
  }

  // Valida erro de nome
  validateNameError() {
    this.elements.messages
      .error()
      .contains("O campo nome deve ser prenchido")
      .should("be.visible");
  }

  // Valida erro de email
  validateEmailError() {
    this.elements.messages
      .error()
      .contains("O campo e-mail deve ser prenchido corretamente")
      .should("be.visible");
  }

  // Valida erro de senha
  validatePasswordError() {
    this.elements.messages
      .error()
      .contains("O campo senha deve ter pelo menos 6 dígitos")
      .should("be.visible");
  }

  // Valida cadastro realizado com sucesso
  validateRegister(name) {
    this.elements.messages
      .success()
      .should("be.visible")
      .and("contain", "Cadastro realizado!")
      .and("contain", "Bem-vindo " + name);
  }
}

export default new RegisterPage();
