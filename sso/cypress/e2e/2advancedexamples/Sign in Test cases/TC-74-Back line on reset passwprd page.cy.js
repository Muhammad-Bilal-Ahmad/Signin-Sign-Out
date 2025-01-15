
/// <reference types = "cypress" />

describe("Verify the functionality of Back link on the Reset Password Page", function(){


    it("Verify the functionality of Back link on the Reset Password Page"  ,function(){

        const correctemail = "bilalseebiz7500+338@gmail.com";

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
        cy.get('#signInBtn').click()


        cy.wait(2000)

        cy.contains('Back').click()

        
    })
})