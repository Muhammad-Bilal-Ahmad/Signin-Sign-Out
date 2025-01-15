

/// <reference types = "cypress" />

describe('TC-47 Phone number is not save when click on the cancel button', function(){

    const waitforexecutionstep = 4000;
    const singledigit = 1 ;
    const fiftydigits = 12345678911111111111111111234567891111111111111111;
    const morefiftydigits = 1234567891111111111111111123456789111111111111111122;

    it('TC-47 Phone number is not save when click on the cancel button',function(){

     

        cy.visit("https://www.seebiz.cloud")

        cy.contains("Sign In").click()

        cy.wait(2000)

        cy.get('#email').type("bilalseebiz7500+338@gmail.com")

        cy.get('#password > input').type("Bilal7500")

        cy.contains("Sign in").click()

        cy.wait(10000)

        cy.get('.sso-user-img > img').click()

        cy.contains('My Account').invoke('removeAttr', 'target').click();

        cy.wait(4000)

        cy.contains("Edit Phone Number").click()

        cy.wait(waitforexecutionstep)

        
        cy.get('#phoneNumber').type("1234567891111111111111111123456789111110")
        cy.wait(2000)
        cy.contains('Cancel').click()




    })
})