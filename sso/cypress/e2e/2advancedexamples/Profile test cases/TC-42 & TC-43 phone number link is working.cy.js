
/// <reference types = "cypress" />

describe('TC-43 and TC-42 Phone number link is working', function(){

    const waitforexecutionstep = 4000;

    it('TC-43 and TC-42 Phone number link is working',function(){

     

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

        cy.contains("Edit Phone Number").should("be.visible")
        cy.contains("Edit Phone Number").click()




    })
})