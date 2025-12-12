describe("Login", () => {
  beforeEach(() => {
    // Acessa a home do site e clica no ícone de usuário para abrir a página de login
    cy.visit("/");
    cy.get(".fa-user").click();
  });

  it("Login com credenciais válidas", () => {
    cy.get("#user").type("validUser@gmail.com");
    cy.get("#password").type("123456");
    cy.get("#btnLogin").click();
    cy.contains("Login realizado").should("be.visible");
  });

  it("Login com senha inválida", () => {
    cy.get("#user").type("validUser@gmail.com");
    cy.get("#password").type("12345");
    cy.get("#btnLogin").click();
    cy.contains("Senha inválida.").should("be.visible");
  });

  it("Login com email inválido", () => {
    cy.get("#user").type("invalidUsergmail.com");
    cy.get("#password").type("123456");
    cy.get("#btnLogin").click();
    cy.contains("E-mail inválido.").should("be.visible");
  });

});
