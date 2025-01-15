/// <reference types="cypress" />

describe("Verify the functionality of Resend code multiple times", function(){


    it("Verify the functionality of Resend code multiple times"  ,function(){
       
        const randomemail = "bilalseebiz7500+" + Math.random().toString(36).substring(2,4) + "@gmail.com";
        

        cy.visit("https://www.seebiz.cloud")
        cy.contains("Create Account").click({force:true})

        cy.wait(2000)
        cy.contains("Create account").click()
        
    })
    
})