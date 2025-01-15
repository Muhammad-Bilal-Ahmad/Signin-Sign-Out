/// <reference types='cypress' />

describe('TC-35.1 valid code not give error message', () => {

    it('TC-35.1 valid code not give error message', () => {

        cy.visit('https://www.seebiz.cloud/')


        const mail = "bilalseebiz7500+128@gmail.com"
        const password = "Bilal7500"

        cy.contains('Sign In').click()
        cy.get('#email').type(mail)
        cy.get('input[placeholder="Password"]').type(password)

        cy.get('#remember-me').check()

        cy.contains('Sign in').click()
    })
})