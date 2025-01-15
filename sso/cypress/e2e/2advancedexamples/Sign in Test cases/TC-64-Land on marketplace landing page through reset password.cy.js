
/// <reference types = "cypress" />

describe("Verify the functionality of land on the marketplace with reset password", function(){
    beforeEach(() => {
        // run these tests as if in a desktop
        // browser with a 720p monitor
        cy.viewport(1600, 900)
      })

    it("Verify the functionality of land on the marketplace with reset password"  ,function(){

     
        const correctemail = "Bilalseebiz7500+338@gmail.com";

        const correctpassword = "Bilal7500"
        const incorrectpassword = "Change123"

        cy.visit("https://www.seebiz.cloud")

        cy.wait(2000)

        cy.contains("Sign In").click()

        cy.wait(2000)

        cy.contains('Forgot password?').click()

        cy.wait(2000)

        cy.get('#email').type(correctemail)

        cy.get('#forgotPwd').click()
        cy.wait(6000)

        cy.get('#number1').type("1")
        cy.get('#number2').type("1")
        cy.get('#number3').type("1")
        cy.get('#number4').type("1")

        cy.wait(2000)
        

        cy.get("input[placeholder='Password']").type(correctpassword)
        cy.get("input[placeholder='Confirm Password']").type(correctpassword)

        cy.get('.create-account').click()
      

        
    })
})