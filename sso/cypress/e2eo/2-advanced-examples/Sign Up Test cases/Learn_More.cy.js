/// <reference types="cypress" />

describe("Verify the functionality of Learn More", function(){


    it("Verify the functionality of Learn More"  ,function(){

       
        
        cy.visit("https://www.seebiz.cloud").should('exist')
        // Click on the Learn More 
        cy.contains("Learn More").click()


        
    })
})