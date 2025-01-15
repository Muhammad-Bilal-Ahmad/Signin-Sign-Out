/// <reference types="cypress" />



describe("Verify the functionality of Get Started Link", function(){

    
    it("Verify the functionality of Get Started Link"  ,function(){

        
        cy.visit("https://seebiz.cloud")
        cy.wait(2000)

        //click on the sign in button

         cy.contains("Sign In").click()
         cy.wait(4000)

        // Click on the Get started link

         cy.contains("Get Started").click({fore:true})

    })
})