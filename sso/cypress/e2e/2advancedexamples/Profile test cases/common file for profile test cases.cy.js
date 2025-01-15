


/// <reference types = "cypress" />

describe("Common test cases for Profile" , function(){

    beforeEach(() => {
        // run these tests as if in a desktop
        // browser with a 720p monitor
        cy.viewport(1280, 720)
      })

    const waitforexecutionstep = 4000;
    const sihninpageloadtime = 13000;
    const upperandlowercaseletters = "Bilal7500"

    it("TC-50-two way authentication disabled", function(){


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

      //  cy.get(':nth-child(6) > .profile-header > .info > .color-2020').should('equal','Not Activated')
      cy.contains('Not Activated').should('be.visible')



    })

    it('TC-49-TC-48 Verify the functionality that 2 step authentication status is enabled in profile',function(){

        

        cy.visit("https://www.seebiz.cloud")

        cy.contains("Sign In").click()

        cy.wait(2000)

        cy.get('#email').type("bilalseebiz7500+339@gmail.com")  

        cy.get('#password > input').type("Bilal7500")

        cy.contains("Sign in").click()

        cy.wait(waitforexecutionstep)

        cy.get('#number1').type('1')
        cy.get('#number2').type('1')
        cy.get('#number3').type('1')
        cy.get('#number4').type('1')

        cy.wait(sihninpageloadtime)

        cy.get('.sso-user-img > img').click()

        cy.contains('My Account').invoke('removeAttr', 'target').click();

        cy.wait(waitforexecutionstep)

      //  cy.get(':nth-child(6) > .profile-header > .info > .color-2020').should('equal','Not Activated')

        cy.contains('Two Way Authentication').should('be.visible')
        cy.contains('Activated').should('be.visible')

         

    })

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

        cy.get('#customInput').type('12423324234')

        cy.contains('Cancel').click()
    })

    it('TC-44 & TC-45 & TC-46 Click on the change number button',function(){

     

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

        cy.get('#customInput').type('12423324234')

        cy.contains('Change Number').click()




    })

    it('TC-43 and TC-42 Phone number link is working',function(){

     

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

        cy.contains("Edit Phone Number").should("be.visible")
        cy.contains("Edit Phone Number").click()




    })

    it('TC-40 & TC-41 To check the functionality of email rendering',function(){

     

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

      
        cy.contains('Email').should('be.visible')
        cy.get(':nth-child(4) > .profile-header > .info > .color-2020').should("be.visible")
        




    })

    it('TC-39 Chnage password when keep me logged in',function(){


        cy.visit("https://www.seebiz.cloud")

        const randomemail = "bilalseebiz7500+" + Math.random().toString(36).substring(2,4) + "@gmail.com";
        const Password =  "Bilal7516"
        const newpassword = "Bilal7500"
 
        cy.contains("Create Account").click({force:true})

        // This is for Email
           cy.get("input[placeholder='Email']").type(randomemail)

        // This is for Password
        cy.get("input[placeholder='Password']").type(Password)
        cy.get(':nth-child(4) > .form-control').type(Password)

        cy.get('#inlineCheckbox1').check()

        // Click on the Create Account button
         cy.contains('Create account').click()

         cy.get('#number1').type('1')
         cy.get('#number2').type('1')
         cy.get('#number3').type('1')
         cy.get('#number4').type('1')


         cy.wait(12000)

         cy.get('.sso-user-img > img').click()

         cy.contains('My Account').invoke('removeAttr', 'target').click();
 
         cy.wait(4000)

         cy.contains('Change Password').click()

         cy.get('#Pasword > .input_box > .input-container > #customInput').type(Password)


         cy.get(':nth-child(2) > .input_box > .input-container > #customInput').type(newpassword)

         cy.get(':nth-child(3) > .input_box > .input-container > #customInput').type(newpassword)

         cy.contains('Change Password').click()

         cy.contains('Keep me logged in').click()
    })

    it('TC-38 Chnage password when keep me logged out',function(){


        cy.visit("https://www.seebiz.cloud")

        const randomemail = "bilalseebiz7500+" + Math.random().toString(36).substring(4,8) + "@gmail.com";
        const Password =  "Bilal7516"
        const newpassword = "Bilal7500"
 
        cy.contains("Create Account").click({force:true})

        // This is for Email
           cy.get("input[placeholder='Email']").type(randomemail)

        // This is for Password
        cy.get("input[placeholder='Password']").type(Password)
        cy.get(':nth-child(4) > .form-control').type(Password)

        cy.get('#inlineCheckbox1').check()

        // Click on the Create Account button
         cy.contains('Create account').click()

         cy.get('#number1').type('1')
         cy.get('#number2').type('1')
         cy.get('#number3').type('1')
         cy.get('#number4').type('1')


         cy.wait(12000)

         cy.get('.sso-user-img > img').click()

         cy.contains('My Account').invoke('removeAttr', 'target').click();
 
         cy.wait(4000)

         cy.contains('Change Password').click()

         cy.get('#Pasword > .input_box > .input-container > #customInput').type(Password)


         cy.get(':nth-child(2) > .input_box > .input-container > #customInput').type(newpassword)

         cy.get(':nth-child(3) > .input_box > .input-container > #customInput').type(newpassword)

         cy.contains('Change Password').click()

         cy.contains('Yes, log me out').click()
    })

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

      
       cy.get('#Pasword > .input_box > .input-container > #customInput').type(oldpassword).should('have.value',oldpassword)

       cy.get(':nth-child(2) > .input_box > .input-container > #customInput').type(newpassword).should('have.value',newpassword)


       cy.get(':nth-child(3) > .input_box > .input-container > #customInput').type(confirmnewpassword).should('have.value',confirmnewpassword)




    })

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
       cy.get(':nth-child(3) > .input_box > .input-container > div > .eye--icon').should('be.visible')

       cy.get(':nth-child(3) > .input_box > .input-container > #customInput').type(confirmpasswordforprofile)
       cy.get(':nth-child(3) > .input_box > .input-container > div > .eye--icon').click()




        




    })

    it('TC-29 To check the functionality on Password field',function(){

     

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

      

       cy.get(':nth-child(2) > .input_box > .input-container > #customInput').type(upperandlowercaseletters)
    })

    it('TC-28 To check the functionality on Password field',function(){

        const waitforexecutionstep = 4000;
        const upperandlowercaseletters = "1afewert";

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

      

       cy.get(':nth-child(2) > .input_box > .input-container > #customInput').type(upperandlowercaseletters)

      // cy.get(':nth-child(2) > .input_box > input').should('have.length', 8)

      cy.get(':nth-child(2) > .input_box > .input-container > #customInput').should('have.length', 1);
    })

})