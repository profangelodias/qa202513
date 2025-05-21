import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given("eu acesso a página de solicitação de crédito", () => {
    cy.visit('https://angelofdiasg.tech/qaprogramador/sacfunc/')
})

When("eu preencha todos os campos obrigatórios com dados válidos", () => {
        cy.get('#nome').type("Anjo Dias")
        cy.get('#email').type("anjo@dias.com")
        cy.get('#renda').type(2000)
        cy.get('#cpf').type("001.002.003-45")
        cy.get('#credito').type(5000)
})

And("confirme a solicitação", () => {
    cy.get('[type="submit"]').click()
})

Then("o sistema irá informar que houve uma solicitação", () => {
    cy.get('#result').should('exist').should('be.visible')
})

When("eu preencha os campos obrigatórios com dados válidos", () => {
        cy.get('#nome').type("Anjo Dias")
        cy.get('#email').type("anjo@dias.com")
        cy.get('#cpf').type("001.002.003-45")
        cy.get('#credito').type(5000)
})

And("eu preenho o valor da renda que aprove", () => {
        cy.get('#renda').type(2000)
})

And("eu preenho o valor da renda que reprove", () => {
        cy.get('#renda').type(1000)
})

Then("o sistema irá informar que houve uma solicitação aprovada", () => {
    cy.get('#result').should('contain', 'APROVADA')
})

Then("o sistema irá informar que houve uma solicitação reprovada", () => {
    cy.get('#result').should('contain', 'REPROVADA')
})

And("eu preenho o valor da renda com {string}", (valor) => {
        cy.get('#renda').type(valor)
})

Then("o sistema irá informar que houve uma solicitação {string}", (status) => {
    cy.get('#result').should('contain', status)
})