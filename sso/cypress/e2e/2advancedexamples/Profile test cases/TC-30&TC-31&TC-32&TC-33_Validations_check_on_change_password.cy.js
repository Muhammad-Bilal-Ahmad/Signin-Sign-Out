
/// <reference types = "cypress" />

describe('TC-30 & TC-31 & TC-32 & TC-33 To check the functionality on Password field', function(){

    

    it('TC-30 & TC-31 & TC-32 & TC-33 To check the functionality on Password field',function(){
        const waitforexecutionstep = 4000;
        const confirmpasswordforprofile = "Bilal7500";
     

        cy.visit("https://www.seebiz.cloud")

        cy.contains("Sign In").click()

        cy.wait(waitforexecutionstep)

        cy.get('#email').type("bilalseebiz7500+338@gmail.com")

        cy.get('#password > input').type("Bilal7500")

        cy.contains("Sign in").click()

        cy.wait(10000)

        cy.get('.sso-user-img > img').click()

        cy.contains('My Account').invoke('removeAttr', 'target').click();

        cy.wait(waitforexecutionstep)

      
       cy.contains('Change Password').click()

      

       cy.contains('Confirm New Password').should('be.visible')
       cy.get(':nth-child(3) > .input_box > .toggle-password > svg').should('be.visible')

       cy.get(':nth-child(3) > .input_box > .form-control').type(confirmpasswordforprofile)
       cy.get(':nth-child(3) > .input_box > .toggle-password > svg').click()




        




    })
})