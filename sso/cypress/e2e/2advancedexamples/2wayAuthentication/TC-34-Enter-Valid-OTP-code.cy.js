// <reference types="cypress" />

describe('TC-34 To check the functionality on enter valid OTP code', function(){

   

    it('TC-34 To check the functionality on enter valid OTP code',function(){

        const validemail = "bilalseebiz7500+" + Math.random().toString(36).substring(2,4) + "@gmail.com";
        const waitforexecutionstep = 4000;
        const validpassword = "Bilal7500";
        const wrongpassword = "Change123"
        const validotp = "1111"
        
        cy.visit("https://www.seebiz.cloud")
        cy.contains("Create Account").click({force:true})

        // This is for Email
           cy.get("input[placeholder='Email']").type(validemail)

        // This is for Password
        cy.get("input[placeholder='Password']").type('Bilal7500')

        // This is for Confirm Password
        cy.get("input[placeholder='Confirm Password']").type('Bilal7500')

        // Check the checkbox 
        cy.get('input[type="checkbox"]').check()

        // Click on the Create Account button
         cy.contains('Create account').click()


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

        cy.contains('Enable Two Way Auth').click()

        cy.wait(2000)

        cy.get(':nth-child(1) > .twoWayAuthData').check()

        cy.contains("Next").click()

        cy.wait(waitforexecutionstep)

        cy.get('#password').type(validpassword)
        cy.contains("Next").click()

        cy.get('#otp').type(validotp)
        cy.contains("Next").click()

        cy.wait(waitforexecutionstep)


        // Now disabled

        cy.contains("Privacy & Security").click()

        cy.wait(2000)
        cy.get('#deleteAccountSubMenu > :nth-child(1) > a').click()

        cy.wait(2000)

         cy.contains("Disable Two Way Auth").click()
         cy.wait(2000)
         

        cy.contains("TURN OFF").click()

        cy.contains("Yes").click()

        cy.wait(2000)
        cy.get("#password").type(validpassword)

        cy.contains("Next").click()

        cy.get('#otp').type(validotp)
        cy.contains("Next").click()


       

    })
    
    })