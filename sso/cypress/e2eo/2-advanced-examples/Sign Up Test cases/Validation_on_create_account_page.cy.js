/// <reference types="cypress" />

describe("Verify the functionality of Validations on create account page", function(){


    // This it block is for the Validations on create account page
    it("Verify the functionality of Validations on create account page"  ,function(){


        cy.visit("https://www.seebiz.cloud")
        cy.wait(2000)
        cy.contains('Create Account').click()
        cy.wait(2000)
        cy.contains('Create account').click()

        
    })

})