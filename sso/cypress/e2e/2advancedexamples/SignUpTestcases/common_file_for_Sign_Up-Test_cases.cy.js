/// <reference types="cypress" />

describe("Sign-Up  Test Case", function(){

   beforeEach(() => {
     cy.viewport(1920, 1080)


       cy.visit("https://www.seebiz.cloud")
      
    //  cy.visit("https://dev-accounts.seebiz.cloud/")
     
     })
  const randomemail = "bilalseebiz7500+" + Math.random().toString(36).substring(3,6) + "@gmail.com";
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
  it('Verify the functionality of Verify Email Address button and check the resend code', function () {
   const randomEmails = "bilalseebiz7500+" + Math.random().toString(36).substring(7, 10) + "@gmail.com";
 
   // Create Account
   cy.contains("Create Account").click({ force: true });
   cy.get("input[placeholder='Email']").type(randomEmails);
   cy.get("input[placeholder='Password']").type('Bilal7500');
   cy.get("input[placeholder='Confirm Password']").type('Bilal7500');
   cy.get('input[type="checkbox"]').check();
   cy.contains('Create account').click();
 
   // Wait for the Verify Email Address button
   cy.wait(4000);
   cy.get('#signInBtn').should('have.text', 'Verify Email Address');
 
   // Verify the Email address and check the resend code
   const verifyAndResend = () => {
     cy.contains('Resend code').click();
     cy.wait(2000);
     cy.reload();
   };
 
   // Attempt to verify and resend code three times
   for (let i = 0; i < 3; i++) {
     verifyAndResend();
   }
 });
 

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

   // Verify the functionality that your password has not fill proper validations 

   it('Verify the functionality that your password has not fill proper validations ', function(){

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

   // Verify the functionality of wrong password and confirm password

   it('Verify the functionality of wrong password and confirm password',function(){

     cy.contains("Create Account").click({force:true})

     // This is for Email
        cy.get("input[placeholder='Email']").type(randomemail)

     // This is for Password
     cy.get("input[placeholder='Password']").type('^*&^&&^*&^*&^*')

     // This is for Confirm Password
     cy.get("input[placeholder='Confirm Password']").type('Changeme1@3')

     // Check the checkbox 
     cy.get('input[type="checkbox"]').check()

     // Click on the Create Account button
      cy.contains('Create account').click()
   })


   // Verify the functionality of invalid email when create account

   it('Verify the functionality of invalid email when create account', function(){


     const wrongemail = "bilalseebiz7500+" + Math.random().toString(36).substring(2,4) + "gmail.com";

       cy.visit("https://www.seebiz.cloud")
       cy.contains("Create Account").click({force:true})

       // This is for Email
          cy.get("input[placeholder='Email']").type(wrongemail)

       // This is for Password
       cy.get("input[placeholder='Password']").type('Bilal7500')

       // This is for Confirm Password
       cy.get("input[placeholder='Confirm Password']").type('Bilal7500')

       // Check the checkbox 
       cy.get('input[type="checkbox"]').check()

       // Click on the Create Account button
        cy.contains('Create account').click()
   })

  // Verify the functionality of create account on double click
  it('Verify the functionality of create account on double click', function(){ 


     const randomemailss = "bilalseebiz7500+" + Math.random().toString(36).substring(7,10) + "@gmail.com";

  cy.contains("Create Account").click({force:true})

  // This is for Email
     cy.get("input[placeholder='Email']").type(randomemailss)

  // This is for Password
  cy.get("input[placeholder='Password']").type('Bilal7500')

  // This is for Confirm Password
  cy.get("input[placeholder='Confirm Password']").type('Bilal7500')

  // Check the checkbox 
  cy.get('input[type="checkbox"]').check()

  // Click on the Create Account button
   cy.contains('Create account').dblclick()

   cy.wait(6000)

   cy.get('#number1').type('1')
   cy.get('#number2').type('1')
   cy.get('#number3').type('1')
   cy.get('#number4').type('1')

  })

  // Verify the functionality of entwe invalid OTP

  it('Verify the functionality of enter invalid OTP', function(){

  //   const randomemail = "bilalseebiz7500+" + Math.random().toString(36).substring(3,6) + "@gmail.com;
  const random = "bilalseebiz7500+" + Math.random().toString(36).substring(7,10) + "@gmail.com";
     // This it block is for the Learn More
     cy.visit("https://www.seebiz.cloud")

     cy.contains("Create Account").click({force:true})

     // This is for Email
        cy.get("input[placeholder='Email']").type(random)

     // This is for Password
     cy.get("input[placeholder='Password']").type('Bilal7500')

     // This is for Confirm Password
     cy.get("input[placeholder='Confirm Password']").type('Bilal7500')

     // Check the checkbox 
     cy.get('input[type="checkbox"]').check()

     // Click on the Create Account button
      cy.contains('Create account').click()

      cy.wait(6000)
      cy.get('#number1').type('2')
      cy.get('#number2').type('1')
      cy.get('#number3').type('1')
      cy.get('#number4').type('1')

  })
})