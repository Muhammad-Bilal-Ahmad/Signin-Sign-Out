
/// <reference types = "cypress" />

describe('TC-40 & TC-41 To check the functionality of email rendering', function(){

    const waitforexecutionstep = 4000;

    it('TC-40 & TC-41 To check the functionality of email rendering',function(){

     

        cy.visit("https://www.seebiz.cloud")

        cy.contains("Sign In").click()

        cy.wait(waitforexecutionstep)

        cy.get('#email').type("bilalseebiz7500+338@gmail.com")

        cy.get('#password > input').type("Bilal7500")

        cy.contains("Sign in").click()

        cy.wait(10000)

        cy.get('.sso-user-img > img').click()

        cy.contains('My Account').invoke('removeAttr', 'target').click();

        cy.wait(waitforexecutionstep)

      
        cy.contains('Email').should('be.visible')
        cy.get(':nth-child(4) > .profile-header > .info > .color-2020').should("be.visible")
        




    })
})