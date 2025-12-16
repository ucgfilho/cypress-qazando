Feature: Cadastro
    Eu como cliente
    Quero me registrar no sistema
    Para criar uma conta e realizar uma compra

    Background:
        Given I am on the registration page

    Scenario: Cadastro com dados válidos
        When I fill in the name "John Silva"
        And I fill in the email "john@email.com"
        And I fill in the password "Senha123"
        And I click on the registration button
        Then I see the register message "Cadastro realizado!"
        And I see my name in the welcome message

    Scenario: Cadastro com nome vazio
        When I leave the name empty
        And I fill in the email "customer@email.com"
        And I fill in the password "Senha123"
        And I click on the registration button
        Then I see the register message "O campo nome deve ser prenchido"

    Scenario: Cadastro com email vazio
        When I fill in the name "Maria Santos"
        And I leave the email empty
        And I fill in the password "Senha123"
        And I click on the registration button
        Then I see the register message "O campo e-mail deve ser prenchido corretamente"

    Scenario: Cadastro com email inválido
        When I fill in the name "Carlos Costa"
        And I fill in the invalid email "emailsemarroba"
        And I fill in the password "Senha123"
        And I click on the registration button
        Then I see the register message "O campo e-mail deve ser prenchido corretamente"

    Scenario: Cadastro com senha vazia
        When I fill in the name "Paula Oliveira"
        And I fill in the email "paula@email.com"
        And I leave the password empty
        And I click on the registration button
        Then I see the register message "O campo senha deve ter pelo menos 6 dígitos"

    Scenario: Cadastro com dados válidos
        When I fill in the name "John Silva"
        And I fill in the email "john@email.com"
        And I fill in the password "Senha123"
        And I click on the registration button
        Then I see the register message "Cadastro realizado!"
        And I see my name in the welcome message
