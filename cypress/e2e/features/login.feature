Feature: Login
    Eu como cliente
    Quero fazer login no sistema
    Para acessar minha conta e realizar uma compra

    Background:
        Given I am on the login page

    Scenario: Login com credenciais válidas
        And I fill a valid email
        And I fill a valid password
        When I click on the login button
        Then I see the login message "Login realizado"

    Scenario: Login com email inválido
        And I fill an invalid email
        And I fill a valid password
        When I click on the login button
        Then I see the login message "E-mail inválido."

    Scenario: Login com senha inválida
        And I fill a valid email
        And I fill an invalid password
        When I click on the login button
        Then I see the login message "Senha inválida."
