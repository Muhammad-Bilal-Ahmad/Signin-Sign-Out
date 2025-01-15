// <reference types="cypress" />

describe('TC-34.1 To check the functionality on enter wrong OTP code', function(){

   

    it('TC-34.1 To check the functionality on enter wrong OTP code',function(){

        const waitforexecutionstep = 4000;
        const validpassword = "Bilal7500";
        const validemail = "bilalseebiz7500+341@gmail.com"
        const wrongpassword = "Change123"
        const invalidotp = "8832"


        cy.visit("https://www.seebiz.cloud")

        cy.contains("Sign In").click()

      //  cy.wait(waitforexecutionstep)

        cy.get('#email').type(validemail)
        cy.get('#password > input').type(validpassword)

        cy.contains("Sign in").click()

        cy.get('#number1').type('1')
        cy.get('#number2').type('1')
        cy.get('#number3').type('1')
        cy.get('#number4').type('1')

        cy.wait(13000)

        cy.get('.sso-user-img > img').click()

        cy.contains('My Account').invoke('removeAttr', 'target').click();
        cy.wait(waitforexecutionstep)

        cy.contains("Privacy & Security").click()

        cy.wait(2000)
        cy.get('#deleteAccountSubMenu > :nth-child(1) > a').click()

        cy.wait(2000)

         cy.contains("Disable Two Way Auth").click()
         cy.wait(2000)
         

        cy.contains("TURN OFF").click()

        cy.contains("Yes").click()

        cy.wait(2000)
//        cy.get('#password').invoke('removeAttr', 'class')
        cy.get("#password").type("Bilal7500")

        cy.contains("Next").click()
        cy.wait(waitforexecutionstep)

        cy.get('#otp').type(invalidotp)

        cy.contains('Next').click()

        cy.contains('Please enter valid code').should('be.visible')

    })
    
  })
