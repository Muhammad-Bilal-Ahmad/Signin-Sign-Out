

/// <reference types = "cypress" />


describe('TC-38 Chnage password when keep me logged out', function(){

   
    it('TC-38 Chnage password when keep me logged out',function(){


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

         cy.get('#Pasword > .input_box > .form-control').type(Password)


         cy.get(':nth-child(2) > .input_box > input').type(newpassword)

         cy.get(':nth-child(3) > .input_box > .form-control').type(newpassword)

         cy.contains('Change Password').click()

         cy.contains('Yes, log me out').click()
    })
})