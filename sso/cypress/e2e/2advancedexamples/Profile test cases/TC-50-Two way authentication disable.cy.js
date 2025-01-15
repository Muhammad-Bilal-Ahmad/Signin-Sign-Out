


/// <reference types = "cypress" />

describe("TC-50-two way authentication disabled" , function(){

    it("TC-50-two way authentication disabled", function(){


        cy.visit("https://www.seebiz.cloud")

        cy.contains("Sign In").click()

        cy.wait(2000)

        cy.get('#email').type("bilalseebiz7500+338@gmail.com")

        cy.get('#password > input').type("Bilal7500")

        cy.contains("Sign in").click()

        cy.wait(10000)

        cy.get('.sso-user-img > img').click()

        cy.contains('My Account').invoke('removeAttr', 'target').click();

        cy.wait(4000)

      //  cy.get(':nth-child(6) > .profile-header > .info > .color-2020').should('equal','Not Activated')
      cy.contains('Not Activated').should('be.visible')



    })
})