/// <reference types = "cypress" />

describe('TC-44 & TC-45 & TC-46  Click on the change number button', function(){

    const waitforexecutionstep = 4000;

    it('TC-44 & TC-45 & TC-46 Click on the change number button',function(){

     

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

        cy.contains("Edit Phone Number").click()

        cy.wait(waitforexecutionstep)

        cy.get('#phoneNumber').type('12423324234')

        cy.contains('Change Number').click()




    })
})