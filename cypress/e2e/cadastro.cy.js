describe("Cadastro", () => {
  beforeEach(() => {
    // Acessa a home do site e clica no botão de cadastro
    cy.visit("/");
    cy.get(".fa-lock").click();
  });

  it("Valida campo nome vazio", () => {
    cy.get("#email").type("validUser@gmail.com");
    cy.get("#password").type("123456");
    cy.get("#btnRegister").click();
    cy.get("#errorMessageFirstName")
      .should("be.visible")
      .and("contain", "O campo nome deve ser prenchido");
  });

  it("Valida campo e-mail vazio", () => {
    cy.get("#user").type("validUser");
    cy.get("#password").type("123456");
    cy.get("#btnRegister").click();
    cy.get("#errorMessageFirstName")
      .should("be.visible")
      .and("contain", "O campo e-mail deve ser prenchido corretamente");
  });

  it("Valida campo e-mail invalido", () => {
    cy.get("#user").type("validUser");
    cy.get("#email").type("invalidUsergmail.com");
    cy.get("#password").type("123456");
    cy.get("#btnRegister").click();
    cy.get("#errorMessageFirstName")
      .should("be.visible")
      .and("contain", "O campo e-mail deve ser prenchido corretamente");
  });

  it("Valida campo senha vazio", () => {
    cy.get("#user").type("validUser");
    cy.get("#email").type("validUser@gmail.com");
    cy.get("#btnRegister").click();
    cy.get("#errorMessageFirstName")
      .should("be.visible")
      .and("contain", "O campo senha deve ter pelo menos 6 dígitos");
  });

  it("Valida campo senha invalido", () => {
    cy.get("#user").type("validUser");
    cy.get("#email").type("validUser@gmail.com");
    cy.get("#password").type("12345");
    cy.get("#btnRegister").click();
    cy.get("#errorMessageFirstName")
      .should("be.visible")
      .and("contain", "O campo senha deve ter pelo menos 6 dígitos");
  });

  it("Valida cadastro efetuado com sucesso", () => {
    cy.get("#user").type("validUser");
    cy.get("#email").type("validUser@gmail.com");
    cy.get("#password").type("123456");
    cy.get("#btnRegister").click();
    cy.get("#swal2-title")
      .should("be.visible")
      .and("contain", "Cadastro realizado!");
  });
});
