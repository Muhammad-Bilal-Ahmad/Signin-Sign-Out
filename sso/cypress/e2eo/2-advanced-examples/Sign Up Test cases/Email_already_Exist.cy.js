/// <reference types="cypress" />

describe("Verify the functionality that your account is already exist", function(){


    it("Verify the functionality of Partially Empty screen"  ,function(){
       
        const Password = "Bilal7500"
        const ConfirmPassword = "Bilal7500"

        cy.visit("https://www.seebiz.cloud")
        cy.contains("Create Account").click({force:true})

        //Enter registered Email
        cy.get("input[placeholder='Email']").type("bilalseebiz7500+338@gmail.com")

        // This is for Password
        cy.get("input[placeholder='Password']").type(Password)

        // This is for Confirm Password
        cy.get("input[placeholder='Confirm Password']").type(ConfirmPassword)

        cy.get('#inlineCheckbox1').check()

        // Click on the Create Account button
         cy.contains('Create account').click()
        
    })
    
})