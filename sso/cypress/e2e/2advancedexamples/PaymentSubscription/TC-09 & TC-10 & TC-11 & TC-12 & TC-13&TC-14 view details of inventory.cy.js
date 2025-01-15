// <reference types="cypress" />

describe('TC-09 & TC-10 & TC-11 & TC-12 & TC-13 & TC-14 view details of inventory', function(){

   

    it('TC-09 & TC-10 & TC-11 & TC-12 & TC-13 & TC-14 view details of inventory',function(){

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

        cy.get('.inventory > .card > #headingOne').should('be.visible')
        cy.get('.inventory > .card > #headingOne').click()
        cy.wait(2000)
        cy.get('.inventory > .card > #collapseOne > .card-body > .table > #table-body > :nth-child(1) > :nth-child(7) > button').click()


        cy.wait(2000)
        cy.get('.modal-backdrop').click()
    })
    
    })