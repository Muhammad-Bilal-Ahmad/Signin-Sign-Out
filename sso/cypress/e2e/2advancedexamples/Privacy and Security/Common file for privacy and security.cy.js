/// <reference types = "cypress" />

describe('Common file for Privacy and Security', function(){
  beforeEach(() => {
    cy.viewport(1920, 1080);

})
  it('TC-24 :To verify that "1 min timer " is shown on the 2 step verification page',function(){

    const waitforexecutionstep = 2000;
    const upperandlowercaseletters = "1afewert";

    cy.visit("https://www.seebiz.cloud")

    cy.contains("Sign in").click()

  //  cy.wait(waitforexecutionstep)

    cy.get('#email').type("bilalseebiz7500+338@gmail.com")

    cy.get('#password > input').type("Bilal7500")

    cy.contains("Sign in").click()

    cy.wait(10000)

    cy.get('.sso-user-img > img').click()

    cy.contains('My Account').invoke('removeAttr', 'target').click();
    cy.wait(waitforexecutionstep)

    cy.contains("Privacy & Security").click()

    cy.wait(2000)
    cy.get('#deleteAccountSubMenu > :nth-child(1) > a').click()

    cy.wait(2000)

    cy.contains("Enable Two Way Auth").click()
    cy.wait(2000)
    cy.get(':nth-child(1) > .twoWayAuthData').check()

    cy.contains("Next").click()

    cy.wait(waitforexecutionstep)

    cy.get('#customInput').type("Bilal7500")

    cy.wait(2000)
    cy.contains("Next").click()

    cy.wait(2000)

    cy.contains("Resend code").click()

    cy.wait(2000)
    cy.get('#countDown').should("be.visible")


})
  it('TC-23 :To verify that "Resend code link" on the 2 step verification page is clickable',function(){

    const waitforexecutionstep = 4000;
    const upperandlowercaseletters = "1afewert";

    cy.visit("https://www.seebiz.cloud")

    cy.contains("Sign in").click()

  //  cy.wait(waitforexecutionstep)

    cy.get('#email').type("bilalseebiz7500+338@gmail.com")

    cy.get('#password > input').type("Bilal7500")

    cy.contains("Sign in").click()

    cy.wait(10000)

    cy.get('.sso-user-img > img').click()

    cy.contains('My Account').invoke('removeAttr', 'target').click();
    cy.wait(waitforexecutionstep)

    cy.contains("Privacy & Security").click()

    cy.wait(2000)
    cy.get('#deleteAccountSubMenu > :nth-child(1) > a').click()

    cy.wait(2000)

    cy.contains("Enable Two Way Auth").click()
    cy.wait(2000)
    cy.get(':nth-child(1) > .twoWayAuthData').check()

    cy.contains("Next").click()

    cy.wait(waitforexecutionstep)

    cy.get('#customInput').type("Bilal7500")

    cy.wait(2000)
    cy.contains("Next").click()

    cy.wait(2000)

    cy.contains("Resend code").click()

    cy.wait(2000)
    cy.get('#countDown').should("be.visible")


})
    it('TC-22 : To verify that "Resend code link" on the 2 step verification page is shown',function(){

        const waitforexecutionstep = 2000;
        const upperandlowercaseletters = "1afewert";

        cy.visit("https://www.seebiz.cloud")

        cy.contains("Sign in").click()

      //  cy.wait(waitforexecutionstep)

        cy.get('#email').type("bilalseebiz7500+338@gmail.com")

        cy.get('#password > input').type("Bilal7500")

        cy.contains("Sign in").click()

        cy.wait(10000)

        cy.get('.sso-user-img > img').click()

        cy.contains('My Account').invoke('removeAttr', 'target').click();
        cy.wait(waitforexecutionstep)

        cy.contains("Privacy & Security").click()

        cy.wait(2000)
        cy.get('#deleteAccountSubMenu > :nth-child(1) > a').click()

        cy.wait(2000)

        cy.contains("Enable Two Way Auth").click()
        cy.wait(2000)
        cy.get(':nth-child(1) > .twoWayAuthData').check()

        cy.contains("Next").click()

        cy.wait(waitforexecutionstep)

        cy.get('#customInput').type("Bilal7500")

        cy.wait(2000)
        cy.contains("Next").click()

        cy.wait(2000)

        cy.contains("Resend code").click()

        cy.wait(2000)
        cy.get('#countDown').should("be.visible")
    
    
    })

    it('TC-21 To check the functionality on Password field',function(){

        const waitforexecutionstep = 2000;
        const validpassword = "Bilal7500";

        cy.visit("https://www.seebiz.cloud")

        cy.contains("Sign in").click()

      //  cy.wait(waitforexecutionstep)

        cy.get('#email').type("bilalseebiz7500+338@gmail.com")

        cy.get('#password > input').type("Bilal7500")

        cy.contains("Sign in").click()

        cy.wait(10000)

        cy.get('.sso-user-img > img').click()

        cy.contains('My Account').invoke('removeAttr', 'target').click();
        cy.wait(waitforexecutionstep)

        cy.contains("Privacy & Security").click()

        cy.wait(2000)
        cy.get('#deleteAccountSubMenu > :nth-child(1) > a').click()

        cy.wait(2000)

        cy.contains("Enable Two Way Auth").click()
        cy.wait(2000)
        cy.get(':nth-child(1) > .twoWayAuthData').check()

        cy.contains("Next").click()

        cy.wait(waitforexecutionstep)

        cy.get('#customInput').should("be.visible")
        cy.get('#customInput').type(validpassword)

    
    })

    it('TC-20 To check the functionality on Password field',function(){

        const waitforexecutionstep = 2000;
        const validpassword = "Bilal7500";
        const validotp = "1111"


        cy.visit("https://www.seebiz.cloud")

        cy.contains("Sign in").click()

      //  cy.wait(waitforexecutionstep)

        cy.get('#email').type("bilalseebiz7500+338@gmail.com")

        cy.get('#password > input').type("Bilal7500")

        cy.contains("Sign in").click()

        cy.wait(10000)

        cy.get('.sso-user-img > img').click()

        cy.contains('My Account').invoke('removeAttr', 'target').click();
        cy.wait(waitforexecutionstep)

        cy.contains("Privacy & Security").click()

        cy.wait(2000)
        cy.get('#deleteAccountSubMenu > :nth-child(1) > a').click()

        cy.wait(2000)

        cy.contains("Enable Two Way Auth").click()
        cy.wait(2000)
        cy.get(':nth-child(1) > .twoWayAuthData').check()

        cy.contains("Next").click()

        cy.wait(waitforexecutionstep)
        cy.get('#customInput').type(validpassword)

        cy.wait(2000)
        cy.contains("Next").click()

        cy.wait(1000)

        cy.get('#customInput').type(validotp)

       // cy.contains("Next").click()




    
    
    
    })

    it('TC-19  To check the functionality on to check email address',function(){

        const waitforexecutionstep = 2000;
        const validpassword = "Bilal7500";
        const validemail = "bilalseebiz7500+340@gmail.com"
        const validotp = "1111"
        


        cy.visit("https://www.seebiz.cloud")

        cy.contains("Sign in").click()

      //  cy.wait(waitforexecutionstep)

        cy.get('#email').type(validemail)

        cy.get('#password > input').type("Bilal7500")

        cy.contains("Sign in").click()

        cy.wait(10000)

        cy.get('.sso-user-img > img').click()

        cy.contains('My Account').invoke('removeAttr', 'target').click();
        cy.wait(waitforexecutionstep)

        cy.contains("Privacy & Security").click()

        cy.wait(2000)
        cy.get('#deleteAccountSubMenu > :nth-child(1) > a').click()

        cy.wait(2000)

        cy.contains("Enable Two Way Auth").click()
        cy.wait(2000)
        cy.get(':nth-child(1) > .twoWayAuthData').check()

        cy.contains("Next").click()

        cy.contains(validemail).should('exist')

      




    
    
    
    })
    it('TC-18  To check the functionality password is not enter',function(){

      const waitforexecutionstep = 2000;
      const validpassword = "Bilal7500";
      const validemail = "bilalseebiz7500+340@gmail.com"
      const validotp = "1111"
      


      cy.visit("https://www.seebiz.cloud")

      cy.contains("Sign In").click()

    //  cy.wait(waitforexecutionstep)

      cy.get('#email').type(validemail)

      cy.get('#password > input').type("Bilal7500")

      cy.contains("Sign in").click()

      cy.wait(10000)

      cy.get('.sso-user-img > img').click()

      cy.contains('My Account').invoke('removeAttr', 'target').click();
      cy.wait(waitforexecutionstep)

      cy.contains("Privacy & Security").click()

      cy.wait(2000)
      cy.get('#deleteAccountSubMenu > :nth-child(1) > a').click()

      cy.wait(2000)

      cy.contains("Enable Two Way Auth").click()
      cy.wait(2000)
      cy.get(':nth-child(1) > .twoWayAuthData').check()

      cy.contains("Next").click()

      cy.wait(2000)
      cy.contains("Next").click()

      cy.get(".input-error-text").should('have.text',"Please enter password")
  })

    it('TC-17:Verify by clicking Next button with null password',function(){

        const waitforexecutionstep = 2000;
        const validpassword = "Bilal7500";
        const validemail = "bilalseebiz7500+340@gmail.com"
        const validotp = "1111"
        


        cy.visit("https://www.seebiz.cloud")

        cy.contains("Sign In").click()

      //  cy.wait(waitforexecutionstep)

        cy.get('#email').type(validemail)

        cy.get('#password > input').type("Bilal7500")

        cy.contains("Sign in").click()

        cy.wait(10000)

        cy.get('.sso-user-img > img').click()

        cy.contains('My Account').invoke('removeAttr', 'target').click();
        cy.wait(waitforexecutionstep)

        cy.contains("Privacy & Security").click()

        cy.wait(2000)
        cy.get('#deleteAccountSubMenu > :nth-child(1) > a').click()

        cy.wait(2000)

        cy.contains("Enable Two Way Auth").click()
        cy.wait(2000)
        cy.get(':nth-child(1) > .twoWayAuthData').check()

        cy.contains("Next").click()

        cy.wait(2000)
        cy.contains("Next").click()

        cy.get(".input-error-text").should('have.text',"Please enter password")
    })
    it('TC-16: To check the enabled functionality of "Password visibility icon""',function(){

      const waitforexecutionstep = 2000;
      const validpassword = "Bilal7500";
      const validemail = "bilalseebiz7500+340@gmail.com"
      const validotp = "1111"
      


      cy.visit("https://www.seebiz.cloud")

      cy.contains("Sign In").click()

    //  cy.wait(waitforexecutionstep)

      cy.get('#email').type(validemail)

      cy.get('#password > input').type("Bilal7500")

      cy.contains("Sign in").click()

      cy.wait(10000)

      cy.get('.sso-user-img > img').click()

      cy.contains('My Account').invoke('removeAttr', 'target').click();
      cy.wait(waitforexecutionstep)

      cy.contains("Privacy & Security").click()

      cy.wait(2000)
      cy.get('#deleteAccountSubMenu > :nth-child(1) > a').click()

      cy.wait(2000)

      cy.contains("Enable Two Way Auth").click()
      cy.wait(2000)
      cy.get(':nth-child(1) > .twoWayAuthData').check()

      cy.contains("Next").click()

     cy.get('#customInput').should("be.visible")

     cy.get('.color-2020').should('be.visible')
      // eye icon check
      cy.get('#customInput').type(validpassword)

      cy.get('.color-2020').click()
  })
    
    it('TC-15: To check the availability of "Password visibility icon"',function(){

        const waitforexecutionstep = 2000;
        const validpassword = "Bilal7500";
        const validemail = "bilalseebiz7500+340@gmail.com"
        const validotp = "1111"
        


        cy.visit("https://www.seebiz.cloud")

        cy.contains("Sign In").click()

      //  cy.wait(waitforexecutionstep)

        cy.get('#email').type(validemail)

        cy.get('#password > input').type("Bilal7500")

        cy.contains("Sign in").click()

        cy.wait(10000)

        cy.get('.sso-user-img > img').click()

        cy.contains('My Account').invoke('removeAttr', 'target').click();
        cy.wait(waitforexecutionstep)

        cy.contains("Privacy & Security").click()

        cy.wait(2000)
        cy.get('#deleteAccountSubMenu > :nth-child(1) > a').click()

        cy.wait(2000)

        cy.contains("Enable Two Way Auth").click()
        cy.wait(2000)
        cy.get(':nth-child(1) > .twoWayAuthData').check()

        cy.contains("Next").click()

       cy.get('#customInput').should("be.visible")

       cy.get('.color-2020').should('be.visible')
        // eye icon check
        cy.get('#customInput').type(validpassword)

        cy.get('.color-2020').click()
    })

    it('TC-14 To check the functionality on enter wrong password',function(){

        const waitforexecutionstep = 2000;
        const validpassword = "Bilal7500";
        const validemail = "bilalseebiz7500+340@gmail.com"
        const wrongpassword = "Change123"
        


        cy.visit("https://www.seebiz.cloud")

        cy.contains("Sign In").click()

      //  cy.wait(waitforexecutionstep)

        cy.get('#email').type(validemail)

        cy.get('#password > input').type("Bilal7500")

        cy.contains("Sign in").click()

        cy.wait(10000)

        cy.get('.sso-user-img > img').click()

        cy.contains('My Account').invoke('removeAttr', 'target').click();
        cy.wait(waitforexecutionstep)

        cy.contains("Privacy & Security").click()

        cy.wait(2000)
        cy.get('#deleteAccountSubMenu > :nth-child(1) > a').click()

        cy.wait(2000)

        cy.contains("Enable Two Way Auth").click()
        cy.wait(2000)
        cy.get(':nth-child(1) > .twoWayAuthData').check()

        cy.contains("Next").click()
        // eye icon check
        cy.get('#customInput').type(wrongpassword)

        cy.contains("Next").click()


        

      




    
    
    
    })

    it('TC-13 To check the functionality on enter correct password',function(){

        const waitforexecutionstep = 4000;
        const validpassword = "Bilal7500";
        const validemail = "bilalseebiz7500+340@gmail.com"
        const wrongpassword = "Change123"
        


        cy.visit("https://www.seebiz.cloud")

        cy.contains("Sign In").click()

      //  cy.wait(waitforexecutionstep)

        cy.get('#email').type(validemail)

        cy.get('#password > input').type(validpassword)

        cy.contains("Sign in").click()

        cy.wait(10000)

        cy.get('.sso-user-img > img').click()

        cy.contains('My Account').invoke('removeAttr', 'target').click();
        cy.wait(waitforexecutionstep)

        cy.contains("Privacy & Security").click()

        cy.wait(2000)
        cy.get('#deleteAccountSubMenu > :nth-child(1) > a').click()

        cy.wait(2000)

        cy.contains("Enable Two Way Auth").click()
        cy.wait(2000)
        cy.get(':nth-child(1) > .twoWayAuthData').check()

        cy.contains("Next").click()
        // eye icon check
        cy.get('#customInput').type(validpassword)

        cy.contains("Next").click()



        // cy.get('.search-keywpord').type('ca')
        // cy.wait(2000)
        // cy.get('.product:visible').should('have.length',4)



    })


})