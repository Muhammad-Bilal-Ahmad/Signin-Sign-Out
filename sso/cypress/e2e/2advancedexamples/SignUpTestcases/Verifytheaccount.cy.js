/// <reference types="cypress" />

describe("Verify the functionality of Create Account button", function(){


    it("Verify the functionality of Create Account button"  ,function(){

        cy.visit("https://www.seebiz.cloud")
        cy.contains("Create Account").click({force:true})
        
    })
    
})