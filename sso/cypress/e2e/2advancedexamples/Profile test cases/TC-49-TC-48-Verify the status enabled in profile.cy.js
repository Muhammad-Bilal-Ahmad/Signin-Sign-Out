

/// <reference types = "cypress" />

describe('TC-49-TC-48 Verify the functionality that 2 step authentication status is enabled in profile',function(){

    const waitforexecutionstep = 4000;
    const sihninpageloadtime = 11000;

    it('TC-49-TC-48 Verify the functionality that 2 step authentication status is enabled in profile',function(){

        cy.visit("https://www.seebiz.cloud")

        cy.contains("Sign In").click()

        cy.wait(2000)

        cy.get('#email').type("bilalseebiz7500+339@gmail.com")  

        cy.get('#password > input').type("Bilal7500")

        cy.contains("Sign in").click()

        cy.wait(waitforexecutionstep)

        cy.get('#number1').type('1')
        cy.get('#number2').type('1')
        cy.get('#number3').type('1')
        cy.get('#number4').type('1')

        cy.wait(sihninpageloadtime)

        cy.get('.sso-user-img > img').click()

        cy.contains('My Account').invoke('removeAttr', 'target').click();

        cy.wait(waitforexecutionstep)

      //  cy.get(':nth-child(6) > .profile-header > .info > .color-2020').should('equal','Not Activated')

        cy.contains('Two Way Authentication').should('be.visible')
        cy.contains('Activated').should('be.visible')

         

    })
})