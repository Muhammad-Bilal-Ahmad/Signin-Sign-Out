
/// <reference types = "cypress" />

describe('TC-34 To check the functionality on Password field', function(){

   
    it('TC-34 To check the functionality on Password field',function(){

        const waitforexecutionstep = 4000;
        const upperandlowercaseletters = "1afewert";
        const oldpassword = 'Bilal7500'
        const newpassword = 'Change123'
        const confirmnewpassword = 'Change123'

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

      
       cy.get('#Pasword > .input_box > .form-control').type(oldpassword).should('have.value',oldpassword)

       cy.get(':nth-child(2) > .input_box > input').type(newpassword).should('have.value',newpassword)


       cy.get(':nth-child(3) > .input_box > .form-control').type(confirmnewpassword).should('have.value',confirmnewpassword)




    })
})