/// <reference types="cypress" />

describe("Verify the functionality of Resend code multiple times", function(){


    it("Verify the functionality of Resend code multiple times"  ,function(){
       
        const randomemail = "bilalseebiz7500+" + Math.random().toString(36).substring(2,4) + "@gmail.com";
        const Password = "Bilal7500"
        const ConfirmPassword = "Bilal7500"

        cy.visit("https://www.seebiz.cloud")
        cy.contains("Create Account").click({force:true})

        // This is for Email
           cy.get("input[placeholder='Email']").type(randomemail)

        // This is for Password
        cy.get("input[placeholder='Password']").type(Password)

        // This is for Confirm Password
        cy.get("input[placeholder='Confirm Password']").type(ConfirmPassword)

        // Click on the Create Account button
         cy.contains('Create account').click()
        
    })
    
})