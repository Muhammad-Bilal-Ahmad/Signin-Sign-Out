/// <reference types = "cypress" />

describe('TC-21 To check the functionality on Password field', function(){

   

    it('TC-21 To check the functionality on Password field',function(){

        const waitforexecutionstep = 4000;
        const validpassword = "Bilal7500";

        cy.visit("https://www.seebiz.cloud")

        cy.contains("Sign In").click()

      //  cy.wait(waitforexecutionstep)

        cy.get('#email').type("bilalseebiz7500+338@gmail.com")

        cy.get('#password > input').type("Bilal7500")

        cy.contains("Sign in").click()

        cy.wait(10000)

        cy.get('.sso-user-img > img').click()

        cy.contains('My Account').invoke('removeAttr', 'target').click();
        cy.wait(waitforexecutionstep)

        cy.contains("Privacy & Security").click()

        cy.wait(2000)
        cy.get('#deleteAccountSubMenu > :nth-child(1) > a').click()

        cy.wait(2000)

        cy.contains("Enable Two Way Auth").click()
        cy.wait(2000)
        cy.get(':nth-child(1) > .twoWayAuthData').check()

        cy.contains("Next").click()

        cy.wait(waitforexecutionstep)

        cy.get('#password').should("be.visible")
        cy.get('#password').type(validpassword)

    
    })
    
    })