
/// <reference types = "cypress" />

describe("Verify the functionality to reset password with atleast 8 characters enter", function(){
    beforeEach(() => {
        // run these tests as if in a desktop
        // browser with a 720p monitor
        cy.viewport(1600, 900)
      })

    it("Verify the functionality to reset password with atleast 8 characters enter"  ,function(){

        const correctemail = "Bilalseebiz7500+338@gmail.com";

        const correctpassword = "password"
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
        cy.wait(waitforexecutionstep)

        cy.get('#number1').type("1")
        cy.get('#number2').type("1")
        cy.get('#number3').type("1")
        cy.get('#number4').type("1")

        cy.wait(waitforexecutionstep)
        

        cy.get("input[placeholder='Password']").type(correctpassword)
        cy.get(':nth-child(1) > .toggle-password > svg > path').click()
    })
})