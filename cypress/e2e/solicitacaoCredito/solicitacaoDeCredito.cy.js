/// <reference types="cypress" />

context('Solicitação de crédito - Aprovação e Reporvação', () => {
    beforeEach(() => {
      cy.visit('https://angelofdiasg.tech/qaprogramador/sacfunc/')
    })
  
    it('Test_Credit-1 - Validar os campos obrigatórios', () => {
        cy.get('#nome').type("Anjo Dias")
        cy.get('#email').type("anjo@dias.com")
        cy.get('#renda').type(2000)
        cy.get('#cpf').type("001.002.003-45")
        cy.get('#credito').type(5000)
        cy.get('[type="submit"]').click()
        cy.get('#result').should('exist').should('be.visible')

    })
  
  })
  