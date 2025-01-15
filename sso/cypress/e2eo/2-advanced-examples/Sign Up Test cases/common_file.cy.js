/// <reference types="cypress" />

describe("Verify the functionality of Create Account button", function(){

    beforeEach(() => {
        cy.visit("https://www.seebiz.cloud")
       
      
      })
   const randomemail = "bilalseebiz7500+" + Math.random().toString(36).substring(2,4) + "@gmail.com";
    // This it block is for the Learn More
    it("Verify the functionality of Learn More"  ,function(){

      
        cy.contains("Learn More").click()

        
    })

    // This it block is for the Sell on Seebiz
    it("Verify the functionality of Sell on Seebiz"  ,function(){

      //  cy.visit("https://www.seebiz.cloud")
        cy.wait(2000)
        cy.contains("Sell on SeeBiz").click()

        
    })

    // This it block is for the create account
    it("Verify the functionality of Create Account button"  ,function(){

       // cy.visit("https://www.seebiz.cloud")
        cy.contains("Create Account").click({force:true})
        
    })


    // This IT block for the Get started link
    it("Verify the functionality of Get Started Link"  ,function(){

        
       // cy.visit("https://seebiz.cloud")
        cy.wait(2000)

        //click on the sign in button

         cy.contains("Sign In").click()
         cy.wait(4000)

        // Click on the Get started link

         cy.contains("Get Started").click({fore:true})

    })

    // This IT block for the Become a seller
   it('Verify the functionality of Become a seller', function(){


 //   cy.visit("https://www.seebiz.cloud")

    cy.wait(2000)

    cy.contains("Sell on SeeBiz").click()

    cy.wait(2000)

   // cy.scrollTo(9000,9000).wait(0)


   cy.scrollTo('0%','80%')


   cy.wait(1000)

   cy.contains('This is for me').click()
   })

   // This it block is for the Validations on create account page
   it('Verify the functionality of Validations on create account page', function(){
   // cy.visit("https://www.seebiz.cloud")
    cy.wait(2000)
    cy.contains('Create Account').click()
    cy.wait(2000)
    cy.contains('Create account').click()



   })

   // Verify the functionality of Verify Email Address button on empty data

   it('Verify the functionality of Verify Email Address button on empty data', function(){
    

   // cy.visit("https://www.seebiz.cloud")
    cy.contains("Create Account").click({force:true})

    // This is for Email
       cy.get("input[placeholder='Email']").type(randomemail)

    // This is for Password
    cy.get("input[placeholder='Password']").type('Bilal7500')

    // This is for Confirm Password
    cy.get("input[placeholder='Confirm Password']").type('Bilal7500')

    // Check the checkbox 
    cy.get('input[type="checkbox"]').check()

    // Click on the Create Account button
     cy.contains('Create account').click()

     cy.wait(3000)

    // Verify the Email address
     cy.contains('Verify Email Address').click()
   })

   //Verify the functionality of Verify Email Address button and check the resend code
   it('Verify the functionality of Verify Email Address button and check the resend code',function(){
    

    cy.contains("Create Account").click({force:true})

    // This is for Email
       cy.get("input[placeholder='Email']").type(randomemail)

    // This is for Password
    cy.get("input[placeholder='Password']").type('Bilal7500')

    // This is for Confirm Password
    cy.get("input[placeholder='Confirm Password']").type('Bilal7500')

    // Check the checkbox 
    cy.get('input[type="checkbox"]').check()

    // Click on the Create Account button
     cy.contains('Create account').click()

     cy.wait(3000)

    // Verify the Email address
     cy.contains('Resend code').click()

     //Refresh the page
     cy.reload()

     cy.wait(2000)
     cy.contains('Resend code').click()
     cy.reload()

     cy.wait(2000)
     cy.contains('Resend code').click()
     cy.reload()




   }) 

   // Without check the terms and conditions box click on the create account button

   it('Without check the terms and conditions box click on the create account button', function(){

   
    const Password = "Bilal7500"
    const ConfirmPassword = "Bilal7500"
    cy.contains("Create Account").click({force:true})

    // This is for Email
       cy.get("input[placeholder='Email']").type(randomemail)

    // This is for Password
    cy.get("input[placeholder='Password']").type(Password)

    // This is for Confirm Password
    cy.get("input[placeholder='Confirm Password']").type(ConfirmPassword)

    // Click on the Create Account button
     cy.contains('Create account').click()

   })

   // Every field is empty while creating account

   it('Verify the functionality when Every field is empty while creating account', function(){

    cy.contains("Create Account").click({force:true})

    cy.wait(2000)
    cy.contains("Create account").click()

   })
    
   // Confirm field is empty while creating Account

   it('Verify the functionality of Confirm field is empty while creating Account', function(){
    
    const Password = "Bilal7500"
    const ConfirmPassword = "Bilal7500"

    
    cy.contains("Create Account").click({force:true})

    // This is for Email
       cy.get("input[placeholder='Email']").type(randomemail)

    // This is for Password
    cy.get("input[placeholder='Password']").type(Password)

    cy.get('#inlineCheckbox1').check()

    // Click on the Create Account button
     cy.contains('Create account').click()

   })

   // Partially empty field while creating Account

   it('Verify the functionality of Partially empty field while creating Account', function(){

   
    const Password = "Bilal7500"
    const ConfirmPassword = "Bilal7500"

    cy.contains("Create Account").click({force:true})


    // This is for Password
    cy.get("input[placeholder='Password']").type(Password)

    cy.get('#inlineCheckbox1').check()

    // Click on the Create Account button
     cy.contains('Create account').click()
   })

    // Verify that your account is already exist
    it('Verify the functionality that your email is already exist', function(){
      const Password = "Bilal7500"
      const ConfirmPassword = "Bilal7500"

      cy.visit("https://www.seebiz.cloud")
      cy.contains("Create Account").click({force:true})

      //Enter registered Email
      cy.get("input[placeholder='Email']").type("bilalseebiz7500+338@gmail.com")

      // This is for Password
      cy.get("input[placeholder='Password']").type(Password)

      // This is for Confirm Password
      cy.get("input[placeholder='Confirm Password']").type(ConfirmPassword)

      cy.get('#inlineCheckbox1').check()

      // Click on the Create Account button
       cy.contains('Create account').click()

    })

    // Verify the functionality that your password has not fill proper validations ///

    it('Verify the functionality that your password has not fill proper validations ', function(){

      cy.visit("https://www.seebiz.cloud")
      cy.contains("Create Account").click({force:true})

      // This is for Email
         cy.get("input[placeholder='Email']").type(randomemail)

      // This is for Password
      cy.get("input[placeholder='Password']").should('exist')
      cy.get("input[placeholder='Password']").type('^*&^&&^*&^*&^*')

      // This is for Confirm Password
      cy.get("input[placeholder='Confirm Password']").type('Bilal7500')

      // Check the checkbox 
      cy.get('input[type="checkbox"]').check()

      // Click on the Create Account button
       cy.contains('Create account').click()
    })





})