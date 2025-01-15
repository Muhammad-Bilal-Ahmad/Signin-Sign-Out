// <reference types="cypress" />

describe('TC-15 view details of marketplace', function(){

   

    it('TC-15 view details of marketplace',function(){

        const waitforexecutionstep = 4000;
        const validpassword = "Bilal7500";
        const validemail = "bilalseebiz7500+338@gmail.com"
        const wrongpassword = "Change123"
        const invalidotp = "8832"


        cy.visit("https://www.seebiz.cloud")

        cy.contains("Sign In").click()

      //  cy.wait(waitforexecutionstep)

        cy.get('#email').type(validemail)
        cy.get('#password > input').type(validpassword)

        cy.contains("Sign in").click()

        cy.wait(13000)

        cy.get('.sso-user-img > img').click()

        cy.contains('My Account').invoke('removeAttr', 'target').click();
        cy.wait(waitforexecutionstep)

        cy.contains("Payments & Subscriptions").click()

        cy.wait(waitforexecutionstep)

        cy.get(':nth-child(2) > .card > #headingOne').click()

        cy.contains("View details").click()







       

    })
    
    })