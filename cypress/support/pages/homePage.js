class HomePage {
  // Elementos
  elements = {
    buttons: {
      accessRegister: () => cy.get(".fa-lock"),
      accessLogin: () => cy.get(".fa-user"),
    },
    pages: {
      register: () => cy.get(".account_form"),
      login: () => cy.get(".account_form"),
    },
  };

  // Acessa página de cadastro
  accessRegisterPage() {
    cy.visit("/");
    this.elements.buttons.accessRegister().click();
    this.elements.pages
      .register()
      .should("contain.text", "Cadastro de usuário");
  }

  // Acessa página de login
  accessLoginPage() {
    cy.visit("/");
    this.elements.buttons.accessLogin().click();
    this.elements.pages.login().should("contain.text", "Login");
  }
}

export default new HomePage();
