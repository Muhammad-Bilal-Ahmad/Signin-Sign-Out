
/// <reference types = "cypress" />

describe("Verify the functionality to Valid rules is not marked", function(){
    beforeEach(() => {
        // run these tests as if in a desktop
        // browser with a 720p monitor
        cy.viewport(1600, 900)
      })

    it("Verify the functionality to Valid rules is not marked"  ,function(){

        const correctemail = "Bilalseebiz7500+338@gmail.com";

        const correctpassword = "bilal7500"
        const incorrectpassword = "Change123"
        const waitforexecutionstep = 4000;

        cy.visit("https://www.seebiz.cloud")

        cy.wait(waitforexecutionstep)

        cy.contains("Sign In").click()

        cy.wait(waitforexecutionstep)

        cy.contains('Forgot password?').click()

        cy.wait(waitforexecutionstep)

        cy.get('#email').type(correctemail)

        cy.get('#forgotPwd').click()
        cy.wait(6000)

        cy.get('#number1').type("1")
        cy.get('#number2').type("1")
        cy.get('#number3').type("1")
        cy.get('#number4').type("1")

        cy.wait(waitforexecutionstep)
        

        cy.get("input[placeholder='Password']").type(correctpassword)
        cy.get("input[placeholder='Confirm Password']").type(incorrectpassword)
    })
})