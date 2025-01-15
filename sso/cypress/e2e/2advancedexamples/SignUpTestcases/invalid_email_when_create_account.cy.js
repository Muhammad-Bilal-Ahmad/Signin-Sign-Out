/// <reference types="cypress" />

describe("Verify the functionality of invalid email when create account", function(){


    it("Verify the functionality of invalid email when create account"  ,function(){
       
        const wrongemail = "bilalseebiz7500+" + Math.random().toString(36).substring(2,4) + "gmail.com";

        cy.visit("https://www.seebiz.cloud")
        cy.contains("Create Account").click({force:true})

        // This is for Email
           cy.get("input[placeholder='Email']").type(wrongemail)

        // This is for Password
        cy.get("input[placeholder='Password']").type('Bilal7500')

        // This is for Confirm Password
        cy.get("input[placeholder='Confirm Password']").type('Bilal7500')

        // Check the checkbox 
        cy.get('input[type="checkbox"]').check()

        // Click on the Create Account button
         cy.contains('Create account').click()

        
    })
    
})