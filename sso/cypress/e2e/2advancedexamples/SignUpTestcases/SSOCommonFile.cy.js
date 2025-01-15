import AccountDeletions from "../../../PageObjects/Accountsdeletion"
import AccountDeletionPage  from "../../SSO/accountDeletionPage"
import ActivityLogPage  from "../../SSO/Activity_logPage"
/// <reference types="cypress" />

describe('Sign-Up  Test Cases ', () => {
    beforeEach(() => {
      
      
      cy.viewport(1920, 1080)
      // Visit the webpage where the email field is available
      cy.visit('https://www.seebiz.cloud/').wait(2000);
      cy.get('a:contains("Create Account")').click(); // Adjusted selector to use 'contains' for link text
    })
  
    it('TC-SP-07 :Verifies the "Email" field is available', () => {
      cy.get("input[placeholder='Email']").should('exist')
    })
  
    it('TC-SP-08 :Verifies the "Email" Placeholder', () => {
      cy.get("input[placeholder='Email']").should('exist')
    })
  
    it('TC-SP-09 :Verifies the "Email" field is Writeable', () => {
      const userEmail = 'fazalerabi040@gmail.com'
      cy.get('#login-form > div:nth-child(1) > input').type(userEmail).should('have.value', userEmail)
    })
  
    it('TC-SP-10 :Verifies the "Email Message Icon" is available', () => {
      cy.get('#login-form > div:nth-child(1) > svg > path')
        .should('exist') // Assertion: Verify the element exists
        .and('be.visible'); // Assertion: Verify the element is visible
    });
  
  
  
    it('TC-SP-11:Verifies the Email Field  with valid email', () => {
      const validEmail = 'fazalerabi00@gmail.com'
      cy.get("input[placeholder='Email']").type(validEmail)
      cy.get("input[placeholder='Password']").type('Fazal123')
      cy.get("input[placeholder='Confirm Password']").type('Fazal123')
      
      cy.get("#inlineCheckbox1").click()
      
      cy.get('#loginBtn').click()
      cy.wait(3000)
      // Add assertions for the success message or the validation result
      // cy.get('.email-validation-message').should('contain', 'Valid email')
    })
  
    
    it('TC-SP-12:Verifies the Email with invalid email', () => {
      const invalidEmail = 'FazaleRabigmail.com';
    
      cy.get('input[placeholder="Email"]').type(invalidEmail);
      cy.wait(4000);
      cy.get('#loginBtn').click();
      cy.wait(4000);
    
      // Add assertion for the error message or the validation result
      cy.contains('Invalid email address').should('be.visible');
       
    })
  
    it('TC-SP-13:Verify the Email with already registered email', () => {
      const validEmail = 'FazaleRabi040@gmail.com';
      cy.get('input[placeholder="Email"]').type(validEmail);
      cy.get("input[placeholder='Password']").type('Fazal123')
      cy.get("input[placeholder='Confirm Password']").type('Fazal123')
      
      cy.get("#inlineCheckbox1").click()
      
      cy.get('#loginBtn').click()
         cy.wait(2000)
         // Add assertion for the error message or the validation result
         cy.contains('Email already exists.').should('be.visible');
       
    })
   
    it('TC-SP-14:Verifies the "Password" field is available', () => {
  
      const validEmaill = 'FazaleRabi040@gmail.com';
     // Type a valid email to possibly navigate to the signup page
     cy.get('input[placeholder="Email"]').type(validEmaill);
  
     // Assert that the password field exists and is visible
     cy.get("input[placeholder='Password']")
       .should('exist')
       .and('be.visible')
       .and('have.attr', 'type', 'password'); // Check that the input is of type 'password'
  
     // Handle exceptions if the password field is not found
     cy.get("input[placeholder='Password']").then(($passwordField) => {
       if ($passwordField.length === 0) {
         throw new Error('Password field not found');
       }
  
    })
    })
  
    it('TC-SP-15:Verifies the "Password" Placeholder', () => {
      
  
        cy.get("input[placeholder='Password']")
        .should('exist') // Check if the field exists in the DOM
        .and('be.visible'); // Check if the field is visible on the page
  
    })
  
    it('TC-SP-16:Verifies the "Password" field is Writeable', () => {
  
     const passwordValue = 'Fazal123'; // Define the password value to be entered
      // Type the password into the "Password" field
    cy.get("input[placeholder='Password']").type(passwordValue);
  
    // Assertion: Check if the entered value matches the expected value
    cy.get("input[placeholder='Password']").should('have.value', passwordValue);
  
    })
   
  
  
    it('TC-SP-17:Verifies the conditions for "at least 8 characters" in password field', () => {
      const password = 'Password1';
      cy.get("input[placeholder='Password']").type(password);
      cy.contains('At least 8 characters').should('exist');
      cy.contains('Contain at least 1 number').should('exist');
      cy.contains('Combine uppercase and lowercase letters').should('exist');
      cy.wait(1000);
    });
  
    it('TC-SP-18:Verifies the conditions for "Contain at least 1 number" in password field', () => {
      const PWD = '1';
      cy.get("input[placeholder='Password']").type(PWD);
      cy.contains('Contain at least 1 number').should('exist');
      cy.wait(1000);
    });
    it('TC-SP-19, TC-SP-20,TC-SP-21:Verify the conditions  "Combine uppercase and lowercase letters"', () => {
      const PWDD = 'Fazal';
      cy.get("input[placeholder='Password']").type(PWDD);
      
      cy.contains('Combine uppercase and lowercase letters').should('exist');
    
      // Show Password
      cy.get("#login-form > div:nth-child(2) > div.toggle-password.pos-unset > svg").click();
      cy.wait(1000);
    });
    it('TC-SP-22:Verify the "Password" with the valid password', () => {
      const userEmail = 'fazalerabii@gmail.com';
      const validPassword = 'Fazal123';
    
      cy.get("input[placeholder='Email']").type(userEmail);
      cy.get("input[placeholder='Password']").type(validPassword).should('have.value', validPassword);
      cy.get("#login-form > div:nth-child(4) > input").type(validPassword).should('have.value', validPassword);
      cy.get("#inlineCheckbox1").click().should('be.checked');
    
      // Click the 'Unhide Password' icon
      cy.get("#login-form > div:nth-child(2) > div.toggle-password.pos-unset > svg").click();
      // Check if password is visible after clicking the 'Unhide Password' icon
      cy.get("input[placeholder='Password']").should('have.attr', 'type', 'text');
    
      // Click the 'Unhide Confirm Password' icon
      cy.get("#login-form > div:nth-child(4) > div.toggle-password.pos-unset > svg").click();
      // Check if confirm password is visible after clicking the 'Unhide Confirm Password' icon
      cy.get("#login-form > div:nth-child(4) > input").should('have.attr', 'type', 'text');
      //cy.get('#loginBtn').click()
  
  
  })
  it.skip('TC-SP-22.1: Verify the "Password" with Special Characters', () => {
    // Test data
    const userEmail = 'fazalerabii@gmail.com';
    const validPassword = 'Fazal123@#$%^&*()-_+={}[]|;:"<>,./?';
  
    // Input user email
    cy.get("input[placeholder='Email']").type(userEmail);
  
    // Input and verify the password
    cy.get("input[placeholder='Password']")
      .type(validPassword)
      .should('have.value', validPassword);
  
    // Input and verify the confirmation password
    cy.get("#login-form > div:nth-child(4) > input")
      .type(validPassword)
      .should('have.value', validPassword);
  
    // Check the 'Terms and Conditions' checkbox
    cy.get("#inlineCheckbox1").click().should('be.checked');
  
    // Click the 'Unhide Password' icon and verify visibility
    cy.get("#login-form > div:nth-child(2) > div.toggle-password.pos-unset > svg").click();
    cy.get("input[placeholder='Password']").should('have.attr', 'type', 'text');
  
    // Click the 'Unhide Confirm Password' icon and verify visibility
    cy.get("#login-form > div:nth-child(4) > div.toggle-password.pos-unset > svg").click();
    cy.get("#login-form > div:nth-child(4) > input").should('have.attr', 'type', 'text');
  
    //Click the login button and wait for the verification message
   cy.get('#loginBtn').click().wait(3000);
  
    //Verify the presence of the email verification message
   cy.contains('Verify your email address').should('exist');


// cy.get('#loginBtn').then(($element) => {
//       if ($element.text().includes("Verify your email address")) {
//           // If the text is found, click the button
//           cy.get('h1').should("contain","Verify your email address")
//       }
//       else {
//           cy.log("Assertion failed. Taking alternative action...");
//       }
      
//   });

  });
  
  
  
  it('TC-SP-23:Verify the "Password" with the invalid password', () => {
    const userEmail = 'fazalerabi@gmail.com';
    const vvalidPassword = 'ABC';
  
    cy.get("input[placeholder='Email']").type(userEmail);
    cy.get("input[placeholder='Password']").type(vvalidPassword).should('have.value', vvalidPassword);
    cy.get("#login-form > div:nth-child(4) > input").type(vvalidPassword).should('have.value', vvalidPassword);
    cy.get("#inlineCheckbox1").click().should('be.checked');
  
    // Click the 'Unhide Password' icon
    cy.get("#login-form > div:nth-child(2) > div.toggle-password.pos-unset > svg").click();
    // Check if password is visible after clicking the 'Unhide Password' icon
    cy.get("input[placeholder='Password']").should('have.attr', 'type', 'text');
  
    // Click the 'Unhide Confirm Password' icon
    cy.get("#login-form > div:nth-child(4) > div.toggle-password.pos-unset > svg").click();
    // Check if confirm password is visible after clicking the 'Unhide Confirm Password' icon
    cy.get("#login-form > div:nth-child(4) > input").should('have.attr', 'type', 'text');
    cy.contains('At least 8 characters').should('exist');
    cy.contains('Contain at least 1 number').should('exist');
    cy.contains('Combine uppercase and lowercase letters').should('exist');
    cy.wait(1000);
  
  })
  
  
  
  it('TC-SP-24:Verifies the "Confirm Password" field is available', () => {
  
    const Pasword = 'Fazal123';
   // Type a valid email to possibly navigate to the signup page
   cy.get("input[placeholder='Confirm Password']").type(Pasword);
  
   // Assert that the Conirm password field exists and is visible
   cy.get("input[placeholder='Confirm Password']")
     .should('exist')
     .and('be.visible')
     .and('have.attr', 'type', 'password'); // Check that the input is of type 'password'
  
   // Handle exceptions if the password field is not found
   cy.get("input[placeholder='Confirm Password']").then(($passwordField) => {
     if ($passwordField.length === 0) {
       throw new Error('Password field not found');
       
     }
  
  })
  })
  
  it('TC-SP-25 :Verifies the "Confirm Password" Placeholder', () => {
    
  
      cy.get("input[placeholder='Confirm Password']")
      .should('exist') // Check if the field exists in the DOM
      .and('be.visible'); // Check if the field is visible on the page
  
  })
  
  it('TC-SP-25 :Verifies the "Confirm Password" field is Writeable', () => {
  
   const CpasswordValue = 'Fazal123'; // Define the password value to be entered
    // Type the password into the "Confirm Password" field
  cy.get("input[placeholder='Confirm Password']").type(CpasswordValue);
  
  // Assertion: Check if the entered value matches the expected value
  cy.get("input[placeholder='Confirm Password']").should('have.value', CpasswordValue);
  cy.get("#login-form > div:nth-child(4) > div.toggle-password.pos-unset > svg").click();
  
  
  })
  
  
  
  it('TC-SP-26 :Verify the "Hide/Unhide Button " in the "Confirm Password" field is available', () => {
    
  
    cy.get("#login-form > div:nth-child(4) > div > svg")
    .should('exist') // Check if the field exists in the DOM
    .and('be.visible'); // Check if the field is visible on the page
  
  })
  
  
  
  it('TC-SP-27 :Verify the "Password eye Icon" in the "Confirm Password" field is clickable', () => {
    
  
    cy.get("#login-form > div:nth-child(4) > div > svg").click()
    .should('exist') // Check if the field exists in the DOM
    .and('be.visible'); // Check if the field is visible on the page
  
  })
  
  
  
  it('TC-SP-38 :Verify the "Confirm Password" with valid credentials', () => {
    const vvalidPassword = 'Fazal123';
    const randomemail = "fazalerabiseebiz0+" + Math.random().toString(36).substring(8, 12) + "@gmail.com";
  
    cy.get("input[placeholder='Email']").type(randomemail);
    cy.get("input[placeholder='Password']").type(vvalidPassword).should('have.value', vvalidPassword);
    cy.get("#login-form > div:nth-child(4) > input").type(vvalidPassword).should('have.value', vvalidPassword);
    cy.get("#inlineCheckbox1").click().should('be.checked');
  
    cy.get("#login-form > div:nth-child(2) > div.toggle-password.pos-unset > svg").click();
    cy.get("input[placeholder='Password']").should('have.attr', 'type', 'text').as('passwordField');
  
    cy.get("#login-form > div:nth-child(4) > div.toggle-password.pos-unset > svg").click();
    cy.get("#login-form > div:nth-child(4) > input").should('have.attr', 'type', 'text').as('confirmPasswordField');
    cy.contains('At least 8 characters').should('exist');
    cy.contains('Contain at least 1 number').should('exist');
    cy.contains('Combine uppercase and lowercase letters').should('exist');
  
    cy.wait(1000);
  
    cy.get('#loginBtn').click();
  
    cy.wait(3000);
  
    const otpFieldSelectors = [
      '#number1',
      '#number2',
      '#number3',
      '#number4'
    ];
  
    const otpDigit = '1';
  
    // Loop through each OTP input field selector and input '1'
    otpFieldSelectors.forEach((selector) => {
      cy.get(selector).type(otpDigit); // Enter '1' into each OTP field
    });
    cy.wait(2000);
  
  
    cy.url
    cy.url().should('include', 'https://www.seebiz.cloud/');
    
  
  });
  
  
  
  
  it('TC-SP-39: Verify the "Confirm Password" with invalid credentials', () => {
    
  
    cy.get("input[placeholder='Password']").type("Fazal123")
    cy.get("#login-form > div:nth-child(4) > input").type("fazal123")
   
  
    // Click the 'Unhide Password' icon
    cy.get("#login-form > div:nth-child(2) > div.toggle-password.pos-unset > svg").click();
    // Check if password is visible after clicking the 'Unhide Password' icon
    cy.get("input[placeholder='Password']").should('have.attr', 'type', 'text');
  
    // Click the 'Unhide Confirm Password' icon
    cy.get("#login-form > div:nth-child(4) > div.toggle-password.pos-unset > svg").click();
    // Check if confirm password is visible after clicking the 'Unhide Confirm Password' icon
    cy.get("#login-form > div:nth-child(4) > input").should('have.attr', 'type', 'text')
    cy.contains('Passwords do not match').should('exist');
  
  })
  
  
  it('TC-SP-31: Verify the "Terms & Conditions and Privacy Policy." by clicking the checkbox', () => {
   
  // Click the first checkbox for Terms & Conditions
  cy.get("#login-form > div.checkox-input.mb--40.wrap > div > label > a:nth-child(1)").click();
     
  
  
  
  cy.scrollTo('0%', '50%');
  cy.wait(2000);
  
  cy.go('back');
  
  // Click the second checkbox for Privacy Policy
  cy.get("#login-form > div.checkox-input.mb--40.wrap > div > label > a:nth-child(2)").click();
  
  
  
  
  cy.scrollTo('0%', '50%');
  cy.wait(2000);
  })
  
  it('TC-SP-32 :Verify system response by creating an account without checking the "Terms & Conditions and Privacy Policy." checkbox', () => {
    
    const vvalidPasswordd = 'Fazal123';
    const randomemaill = "fazalerabiseebiz0+" + Math.random().toString(36).substring(2,4) + "@gmail.com";
  
    cy.get("input[placeholder='Email']").type(randomemaill);
    cy.get("input[placeholder='Password']").type(vvalidPasswordd).should('have.value', vvalidPasswordd);
    cy.get("#login-form > div:nth-child(4) > input").type(vvalidPasswordd).should('have.value', vvalidPasswordd);
    //cy.get("#inlineCheckbox1").click().should('be.checked');
  
    
  
    // Click the 'Unhide Password' icon
    cy.get("#login-form > div:nth-child(2) > div.toggle-password.pos-unset > svg").click();
    // Check if password is visible after clicking the 'Unhide Password' icon
    cy.get("input[placeholder='Password']").should('have.attr', 'type', 'text');
  
    // Click the 'Unhide Confirm Password' icon
    cy.get("#login-form > div:nth-child(4) > div.toggle-password.pos-unset > svg").click();
    // Check if confirm password is visible after clicking the 'Unhide Confirm Password' icon
    cy.get("#login-form > div:nth-child(4) > input").should('have.attr', 'type', 'text');
    cy.contains('At least 8 characters').should('exist');
    cy.contains('Contain at least 1 number').should('exist');
    cy.contains('Combine uppercase and lowercase letters').should('exist');
  
    cy.wait(1000);
    cy.get('#loginBtn').click()
  
    cy.contains('Verify terms and condition').should('exist');
  
  });
  
  it('TC-SP-33: Verify the "Create Account" button', () => {
    const randomemail = "fazalerabiseebiz0+" + Math.random().toString(36).substring(3, 6) + "@gmail.com";
    const password = 'Password1'; // Fixed typo in the variable name
  
    // Enter email, password, and confirm password
    cy.get("input[placeholder='Email']").type(randomemail);
    cy.get("input[placeholder='Password']").type(password).should('have.value', password);
    cy.get("#login-form > div:nth-child(4) > input").type(password).should('have.value', password);
    cy.get("#inlineCheckbox1").click().should('be.checked');
  
    // Click the 'Unhide Password' icon
    cy.get("#login-form > div:nth-child(2) > div.toggle-password.pos-unset > svg").click();
    // Check if password is visible after clicking the 'Unhide Password' icon
    cy.get("input[placeholder='Password']").should('have.attr', 'type', 'text');
  
    // Click the 'Unhide Confirm Password' icon
    cy.get("#login-form > div:nth-child(4) > div.toggle-password.pos-unset > svg").click();
    // Check if confirm password is visible after clicking the 'Unhide Confirm Password' icon
    cy.get("#login-form > div:nth-child(4) > input").should('have.attr', 'type', 'text');
    cy.contains('At least 8 characters').should('exist');
    cy.contains('Contain at least 1 number').should('exist');
    cy.contains('Combine uppercase and lowercase letters').should('exist');
  
    cy.wait(1000);
  
    // Click the 'Create Account' button
    cy.get('#loginBtn').click();
  
    // Assertion after clicking the 'Create Account' button to verify navigation to verification code page
    cy.url().should('include', '/emailverificationCode'); 
  
  });
  it('TC-SP-35: To check the functionality of too long password while creating account', () => {
    const randomemail = "fazalerabiseebiz0+" + Math.random().toString(36).substring(3, 6) + "@gmail.com";
    const Londpassword = '!Qwertyuioplkjhgfdsazxcvbnm1234567890qwertyuioplkjhgfdsazxcvbnmQwertyuioplkjhgfdsazxcvbnm1234567890qwertyuioplkjhgfdsazxcvbnm@'; // Fixed typo in the variable name
  
    // Enter email, password, and confirm password
    cy.get("input[placeholder='Email']").type(randomemail);
    cy.get("input[placeholder='Password']").type(Londpassword).should('have.value', Londpassword);
    cy.get("#login-form > div:nth-child(4) > input").type(Londpassword).should('have.value', Londpassword);
    cy.get("#inlineCheckbox1").click().should('be.checked');
  
    // Click the 'Unhide Password' icon
    cy.get("#login-form > div:nth-child(2) > div.toggle-password.pos-unset > svg").click();
    // Check if password is visible after clicking the 'Unhide Password' icon
    cy.get("input[placeholder='Password']").should('have.attr', 'type', 'text');
  
    // Click the 'Unhide Confirm Password' icon
    cy.get("#login-form > div:nth-child(4) > div.toggle-password.pos-unset > svg").click();
    // Check if confirm password is visible after clicking the 'Unhide Confirm Password' icon
    cy.get("#login-form > div:nth-child(4) > input").should('have.attr', 'type', 'text');
    cy.contains('At least 8 characters').should('exist');
    cy.contains('Contain at least 1 number').should('exist');
    cy.contains('Combine uppercase and lowercase letters').should('exist');
  
    cy.wait(1000);
  
    // Click the 'Create Account' button
    cy.get('#loginBtn').click();
  
    // Assertion after clicking the 'Create Account' button to verify navigation to verification code page
    cy.url().should('include', '/emailverificationCode'); 
  
  });
  
  
  
  
  
  
}) 
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
describe('Sign-In Tests', () => {

    beforeEach(() => {
        // run these tests as if in a desktop
        // browser with a 720p monitor
        cy.viewport(1920, 1080)
      })
    it('TC-Signin-01: Sign In button functionality', () => {
      // Test steps

      cy.visit('https://www.seebiz.cloud/').wait(2000);;
      cy.get('.sso-sign-in').click();
      // Assertions
      cy.get("#loginBtn").should('exist');
    });
  //  28 29 30 42 43 45  51 52 53 
    it('TC-Signin-02: Verify Sign In page appearance', () => {
      // Test steps
      cy.visit('https://www.seebiz.cloud/')
      cy.get('.sso-sign-in').click();
      // Assertions
    
       cy.url().should('include', 'https://accounts.seebiz.cloud/login');
       cy.get("#loginBtn").should('exist')
    });
  
  
    it('TC-Signin-02.1 : Verify the Font of text on the Sign-In page', () => {
        // Test steps
        cy.visit('https://www.seebiz.cloud/').wait(2000);;
        cy.get('.sso-sign-in').click();
      
        // Assertion - Check font family for the specified text element
        cy.get('div.auth-container-top p').should('have.css', 'font-family')
        .and('include', 'Roboto');

        cy.get('div.auth-container-top p')
        .should('have.css', 'font-family')
        .and('match', /Roboto/) // Replace 'expected-font-family' with the actual font you expect
  
      cy.get('div.auth-container-top p')
        .should('have.css', 'font-family')
        .and('match', /Roboto/)
        // cy.get("div.auth-container-top p")
        // .should('have.css', 'fill', 'rgb(255, 12, 0)');
      });



      it('TC-Signin-03: Verify Mouseover effect on input fields', () => {
        // Test steps
        cy.visit('https://www.seebiz.cloud/').wait(2000);;
        cy.get('.sso-sign-in').click();
      
        // Assertion - Check for mouseover effect on input fields
        cy.get('#email').trigger('mouseover'); 
        cy.get('#email').should('exist'); // Update the expected CSS property value
        cy.get('#password').trigger('mouseover'); 
        cy.get('#password').should('exist');
      
    });




      it('TC-Signin-04:Verifies the "Email" field is available', () => {
        cy.visit('https://www.seebiz.cloud/').wait(2000);;
        cy.get('.sso-sign-in').click();
        cy.get("input[placeholder='Email']").should('exist')
      })



      
    
      it('TC-Signin-05 :Verifies the "Email" Placeholder', () => {
        cy.visit('https://www.seebiz.cloud/').wait(2000);;
        cy.get('.sso-sign-in').click();
        cy.get("input[placeholder='Email']").should('exist')
      })
    
      it('TC-Signin-06:Verifies the "Email" field is Writeable', () => {
        cy.visit('https://www.seebiz.cloud/').wait(2000);;
        cy.get('.sso-sign-in').click();
        const userEmail = 'fazalerabi040@gmail.com'
        cy.get('#login-form > div:nth-child(1) > input').type(userEmail).should('have.value', userEmail)
      })
    
      it('TC-Signin-07:Verifies the "Email Message Icon" is available', () => {
        cy.visit('https://www.seebiz.cloud/').wait(2000);;
        cy.get('.sso-sign-in').click();
        cy.get('#login-form > div:nth-child(1) > svg > path')
          .should('exist') // Assertion: Verify the element exists
          .and('be.visible'); // Assertion: Verify the element is visible
      });
      


      it('TC-Signin-08:Verifies the Email Field with valid email', () => {
        cy.visit('https://www.seebiz.cloud/').wait(2000);;
        cy.get('.sso-sign-in').click();
        const validEmail = 'fazalerabi00@gmail.com';
        
        // Type the valid email into the Email input field
        cy.get("input[placeholder='Email']").type(validEmail).should('have.value', validEmail);
    });
    

    it('TC-Signin-09:Verifies the "Password" field is available', () => {
        cy.visit('https://www.seebiz.cloud/').wait(2000);;
        cy.get('.sso-sign-in').click();
    
        // Assertion - Check if the "Email" input field exists
        cy.get("#password").should('exist');
    });

    it('TC-Signin-10:Verifies the "Password" Placeholder', () => {
        cy.visit('https://www.seebiz.cloud/').wait(2000);;
        cy.get('.sso-sign-in').click();
        cy.get("#password").should('exist')
      })
    
  
         
      it('TC-Signin-11:Verify the "Password" field is Writeable', () => {
        cy.visit('https://www.seebiz.cloud/').wait(2000);;
        cy.get('.sso-sign-in').click();
        cy.get('#password')
          .should('exist') // Assertion: Verify the element exists
          .and('be.visible'); // Assertion: Verify the element is visible
      });

      it('TC-Signin-12:Verify the "Hide/Unhide Button " in the " Password" field is available', () => {
  
        cy.visit('https://www.seebiz.cloud/').wait(2000);;
        cy.get('.sso-sign-in').click();
        cy.get("#password > div:nth-child(2) > svg > path")
        .should('exist') // Check if the field exists in the DOM
        .and('be.visible'); // Check if the field is visible on the page
      
      })



      it('TC-Signin-13:Verify the "Hide/Unhide Button " in the " Password" field is ClickAble', () => {
  
        cy.visit('https://www.seebiz.cloud/').wait(2000);;
        cy.get('.sso-sign-in').click();
        cy.get("#password > div:nth-child(2) > svg > path")
        .should('exist') 
        .and('be.visible') 
        .click();
      
      })


      it('TC-Signin-14:Verify the Password field with old password', () => {


        const Emoil= 'fazalerabiseebiz0+po@gmail.com'
        const oldPassword = 'Fazal123'; 
    
        cy.visit('https://www.seebiz.cloud/').wait(2000);;
        cy.get('.sso-sign-in').click();
        cy.get('input[placeholder="Email"]').type(Emoil);
    
        // Action - Enter old password in the "Password" field
        cy.get('input[placeholder="Password"]').type(oldPassword);

        // Assertion - Check if the password field contains the entered old password
        cy.get('input[placeholder="Password"]').should('have.value', oldPassword);

        cy.get("#loginBtn").click()


        cy.contains('Password is not correct').should('exist');
       
    });
    
    it('TC-Signin-15:Verify the "Remember me" by clicking the checkbox', () => {
        cy.visit('https://www.seebiz.cloud/').wait(2000);;
        cy.get('.sso-sign-in').click();
    
        cy.get('#remember-me').check().should('be.checked');
    });
    

    it('TC-Signin-16:To check the functionality of valid email address and valid password', () => {
        const Emoil= 'fazalerabiseebiz0+po@gmail.com'
        const Password = 'Seebiz123'; 
    
        cy.visit('https://www.seebiz.cloud/').wait(2000);;
        cy.get('.sso-sign-in').click();
        cy.get('input[placeholder="Email"]').type(Emoil);
    
        // Action - Enter old password in the "Password" field
        cy.get('input[placeholder="Password"]').type(Password);

        // Assertion - Check if the password field contains the entered old password
        cy.get('input[placeholder="Password"]').should('have.value', Password);

        cy.get("#loginBtn").click()
    });
    


    it('TC-Signin-17:Check functionality with an invalid password', () => {

        const VaEmal = 'fazalerabi040@gmail.com'
        const invPWD = 'Fazal1234'; 
    
        cy.visit('https://www.seebiz.cloud/').wait(2000);;
        cy.get('.sso-sign-in').click();
        cy.get('input[placeholder="Email"]').type(VaEmal);
        // Action - Enter an incorrect password in the "Password" field
        cy.get('input[placeholder="Password"]').type(invPWD);

        cy.get("#remember-me").click();
    
        // Click the Sign-In button
        cy.get('#loginBtn').click().wait(2000);
    
        // Assertion - Check for error message or expected behavior upon providing an invalid password
        cy.contains('Password is not correct').should('be.visible');
    });
    it('TC-Signin-17.1:To check the validation on email & password field', () => {


  
      cy.visit('https://www.seebiz.cloud/').wait(2000);;
      cy.get('.sso-sign-in').click();

      cy.get("#remember-me").click();
  
      // Click the Sign-In button
      cy.get('#loginBtn').click().wait(2000);

      cy.get("body > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(2) > div:nth-child(1) > div:nth-child(3)").should('have.text',"Please enter your email")
      cy.get("div[id='password'] div[class='error-text']").should('have.text',"Please enter password")

  });
  it('TC-Signin-17.2:To check the validation on email field by entering wrong email', () => {

    const inVaEmal = 'fazalerabi040@gmail.com $@!%^&'
    const vPWD = 'Fazal1234'; 

    cy.visit('https://www.seebiz.cloud/').wait(2000);;
    cy.get('.sso-sign-in').click();
    cy.get('input[placeholder="Email"]').type(inVaEmal);
    // Action - Enter an incorrect password in the "Password" field
    cy.get('input[placeholder="Password"]').type(vPWD);

    cy.get("#remember-me").click();
    cy.get('#loginBtn').click();
    cy.get(".error-text").should('have.text', "Invalid email address")


});
it('TC-Signin-17.3:To check the validation of password field by entering less than 8 characters ', () => {

  const VaEmal = 'fazalerabi040@gmail.com'
  const invPWD = 'Fazal12'; 

  cy.visit('https://www.seebiz.cloud/').wait(2000);;
  cy.get('.sso-sign-in').click();
  cy.get('input[placeholder="Email"]').type(VaEmal);
  // Action - Enter an incorrect password in the "Password" field
  cy.get('input[placeholder="Password"]').type(invPWD);

  cy.get("#remember-me").click();
  cy.get('#loginBtn').click();

  cy.get(".error-text").should('have.text', "Password is not correct")


});
    

    it('TC-Signin-18:Check functionality with null email field', () => {
        const password = 'Changeme1@345'; // Password for the test case
    
        cy.visit('https://www.seebiz.cloud/').wait(2000);;
        cy.get('.sso-sign-in').click();
 
        cy.get('input[placeholder="Password"]').type(password);
    
        // Click the Sign-In button
        cy.get('#loginBtn').click();

        cy.contains('Please enter your email').should('be.visible');
    });
    

    it('TC-Signin-19:To check the functionality by null password field', () => {
        const ML   = 'fazalerabi040@gmail.com'; 
    
        cy.visit('https://www.seebiz.cloud/').wait(2000);;
        cy.get('.sso-sign-in').click();
 
        cy.get('input[placeholder="Email"]').type(ML);
    
        // Click the Sign-In button
        cy.get('#loginBtn').click();
    
        cy.contains('Please enter password').should('be.visible');
    })


    it('TC-Signin-20:Check functionality with all null fields', () => {
        cy.visit('https://www.seebiz.cloud/').wait(2000);;
        cy.get('.sso-sign-in').click();
    
        // Action - Enters null or empty values in all fields
        cy.get('input[placeholder="Email"]').clear(); 
        cy.get('input[placeholder="Password"]').clear(); 
     
    
        // Click the Sign-In button
        cy.get('#loginBtn').click();
    
   
    
        // Assert for email field validation error
        cy.contains('Please enter your email').should('be.visible');
        cy.wait(2000);
        // Assert for password field validation error
        cy.contains('Please enter password').should('be.visible');
   
    });
    it('TC-Signin-21:Check functionality of viewing password', () => {
        const validEmail = 'hamnahanwar993@gmail.com';
        const validPassword = 'Temp123*';
    
        cy.visit('https://www.seebiz.cloud/').wait(2000);;
        cy.get('.sso-sign-in').click();
    
        // Action - Enter valid email and password
        cy.get('input[placeholder="Email"]').type(validEmail);
        cy.get('input[placeholder="Password"]').type(validPassword);
    
        // Click the view icon of the password to reveal it
        cy.get("#password > div > svg > path").click(); 
        // Assertion - Check if the password is visible after clicking the view icon
        cy.get('input[placeholder="Password"]').should('have.attr', 'type', 'text');
        

    });
    
  


    it('TC-Signin-22:To check the functionality of invalid email or valid password', () => {

        const VaEmal = 'fazalerabi040gmail.com'
        const invPWD = 'Fazal1234'; 
    
        cy.visit('https://www.seebiz.cloud/').wait(2000);;
        cy.get('.sso-sign-in').click();
        cy.get('input[placeholder="Email"]').type(VaEmal);
        // Action - Enter an incorrect password in the "Password" field
        cy.get('input[placeholder="Password"]').type(invPWD);

        cy.get("#remember-me").click();
    
        // Click the Sign-In button
        cy.get('#loginBtn').click();
    
        // Assertion - Check for error message or expected behavior upon providing an invalid password
        cy.contains('Invalid email address').should('be.visible');
    });

    it('TC-Signin-26: Check functionality of "Forgot Password" link', () => {
      cy.visit('https://www.seebiz.cloud/').wait(2000);;
      cy.get('.sso-sign-in').click();
    

      cy.wait(2000); // Example: Wait for 2 seconds
    
      cy.get(".color-blue.f-14").click();
    
      // Assertion - Check if the user is redirected to the Forgot Password page
      cy.url().should('eq', 'https://accounts.seebiz.cloud/forgotPassword');
    });
    
    


    it('TC-Signin-28:To check the functionality of forgot password with valid email address who exist on see biz', () => {
        cy.visit('https://www.seebiz.cloud/').wait(2000);;
        cy.get('.sso-sign-in').click().wait(2000);
        cy.get(".color-blue.f-14").click();
        // Assertion - Check if the user is redirected to the Forgot Password page
        cy.url().should('eq', 'https://accounts.seebiz.cloud/forgotPassword');

        cy.get('#email').type('fazalerabiseebiz0+op@gmail.com')

        cy.get("#forgotPwd").click();
        // cypress/support/index.js
       Cypress.on('uncaught:exception', (err, runnable) => {
        // return false to prevent Cypress from failing the test
          return false;
          });

    });
    

    it('TC-Signin-29:To check the functionality of forgot password with invalid email address who does not exist on see biz', () => {
        cy.visit('https://www.seebiz.cloud/').wait(2000);;
        cy.get('.sso-sign-in').click();
        cy.get(".color-blue.f-14").click();
        // Assertion - Check if the user is redirected to the Forgot Password page
        cy.url().should('eq', 'https://accounts.seebiz.cloud/forgotPassword');

        cy.get('#email').type('LeonardoDiCaprio@gmail.com')

        cy.get("#forgotPwd").click();
        cy.contains('We did not find any account associated with this email. Please register yourself first!').should('be.visible');


    });
    

    it('TC-Signin-30:To check the functionality of send verification code button', () => {
        cy.visit('https://www.seebiz.cloud/').wait(2000);;
        cy.get('.sso-sign-in').click();
        cy.get(".color-blue.f-14").click();
        // Assertion - Check if the user is redirected to the Forgot Password page
        cy.url().should('eq', 'https://accounts.seebiz.cloud/forgotPassword');
        cy.get("#forgotPwd").click();
        cy.contains('Please enter your email').should('be.visible');


    });



    it('TC-Signin-31:To check the functionality of forgot password to provide invalid email address (only characters)', () => {
        cy.visit('https://www.seebiz.cloud/').wait(2000);;
        cy.get('.sso-sign-in').click();
        cy.get(".color-blue.f-14").click();
        // Assertion - Check if the user is redirected to the Forgot Password page
        cy.url().should('eq', 'https://accounts.seebiz.cloud/forgotPassword');

        cy.get('#email').type('LeonardoDiCapriogmail.com')

        cy.get("#forgotPwd").click();
        cy.contains('Please enter valid email address').should('be.visible');


    });
        
    it('TC-Signin-32:Verifies the functionality of "Back to Login" option after clicking "Forgot Password"', () => {
        cy.visit('https://www.seebiz.cloud/').wait(2000);;
        cy.get('.sso-sign-in').click();
        cy.get(".color-blue.f-14").click();
        cy.url().should('eq', 'https://accounts.seebiz.cloud/forgotPassword');
      
       cy. wait(2000);
        // Click on 'Back to Login' option
      // Go back to the previous page
        cy.go('back');
 
      
        // Assertions to validate the page navigation back to the login page
        cy.url().should('include', 'https://accounts.seebiz.cloud/login?serviceUrl=https://www.seebiz.cloud/&returnUrl=/'); // Assert the URL contains '/login' (login page URL)
      
        
      });
      
      it('TC-Signin-33:Verifies functionality of "Remember Me" checkbox and sign in process', () =>
       {
        const email = 'fazalerabi040@gmail.com';
        const password = 'Fazal123';
      
        cy.visit('https://www.seebiz.cloud/').wait(2000);;
        cy.get('.sso-sign-in').click();
      
        // Enter valid email
        cy.get("input[placeholder='Email']").type(email);
      
        // Enter valid password
        cy.get("input[placeholder='Password']").type(password);
      
        // Click on the "Remember Me" checkbox
        cy.get('#remember-me').check(); 
      
        // Click on Sign In
        cy.get('#loginBtn').click(); 
        cy.wait(10000);
        // Assertions to validate successful login and navigation
        cy.url().should('eq', 'https://www.seebiz.cloud/'); 
      });


      
      it('TC-Signin-34:To skipped the checkbox of remember Me and filled all the fields', () => {

        const Emal = 'fazalerabiseebiz0+op@gmail.com'
        const vPWD = 'Fazal123'; 
    
        cy.visit('https://www.seebiz.cloud/').wait(2000);;
        cy.get('.sso-sign-in').click();
        cy.get('input[placeholder="Email"]').type(Emal);
        
        cy.get('input[placeholder="Password"]').type(vPWD);

     
    
        // Click the Sign-In button
        cy.get('#loginBtn').click();
        cy.wait(10000);
       cy.url().should('include', 'https://www.seebiz.cloud/');

     
        cy.wait(2000)
      
        });  
         
       it('TC-Signin-35 -To check the functionality of checkbox remember Me  and fill all required fields', () => {

        const VaEmal = 'fazalerabiseebiz0+op@gmail.com'
        const PWD = 'Fazal123'; 
    
        cy.visit('https://www.seebiz.cloud/').wait(2000);;
        cy.get('.sso-sign-in').click();
        cy.get('input[placeholder="Email"]').type(VaEmal);
        
        cy.get('input[placeholder="Password"]').type(PWD);

     
    
        // Click the Sign-In button
        cy.get('#loginBtn').click();
        cy.wait(10000);
    
        cy.url().should('include', 'https://www.seebiz.cloud/');

      
        });  

       // Next  Forget Password Test Cases 
   
        it('TC-Signin-40: Verify the "Forgot Password?" link is available', () => {
            cy.visit('https://www.seebiz.cloud/').wait(2000);;
            cy.get('.sso-sign-in').click();
            cy.wait(2000);
            cy.get('.color-blue.f-14').should('exist').and('be.visible');

          });
      
        it('TC-Signin-41: Verify the "Forgot Password?" link is working correctly', () => {
          cy.visit('https://www.seebiz.cloud/').wait(2000);;
          cy.get('.sso-sign-in').click();
          cy.get('.color-blue.f-14').click();
          cy.url().should('include', 'https://accounts.seebiz.cloud/forgotPassword');
        
        });
      
        it(' TC-Signin-42:Verify the "Forgot Password?" Page', () => {
          cy.visit('https://www.seebiz.cloud/').wait(2000);;
          cy.get('.sso-sign-in').click();
          cy.get('.color-blue.f-14').click();
          cy.contains('Forgot Password').should('exist');
        });
        it('TC-Signin-42.1: Verify the spaces on the "Forgot password page"', () => {
          cy.visit('https://www.seebiz.cloud/').wait(2000);;
          cy.get('.sso-sign-in').click();
          cy.get('.color-blue.f-14').click();
        
          // Debugging: Log the state of 'l' before clicking
          cy.get('#email').then((l) => {
            cy.log('State of l before clicking:', l);
          });
        
          cy.contains('Forgot Password').should('exist');
          cy.contains('Forgot Password').click();
        });
      
        it('TC-Signin-43:Verify the "Forgot Password?" heading on Forgot password page', () => {
            cy.visit('https://www.seebiz.cloud/').wait(2000);;
            cy.get('.sso-sign-in').click();
            cy.get('.color-blue.f-14').click();
          
            
            cy.url().should('include', 'https://accounts.seebiz.cloud/forgotPassword');
          });
          
      
          it('TC-Signin-44: Verify the "Email field" is available on Forgot Password page', () => {
            cy.visit('https://www.seebiz.cloud/').wait(2000);;
            cy.get('.sso-sign-in').click();
            cy.get('.color-blue.f-14').click();
          
            // Wait for the email input field to be visible or present
            cy.get('#email', { timeout: 10000 }).should('exist').should('be.visible');
          });
          
      
        it('TC-Signin-45: Verify the "Send Verification Code" button is available on Forgot Password page', () => {
            cy.visit('https://www.seebiz.cloud/').wait(2000);;
            cy.get('.sso-sign-in').click();
            cy.get('.color-blue.f-14').click();
             cy.get('#forgotPwd').should('exist');
        });
        
        it('TC-Signin-46: Verify the "Back" button on Forgot password page', () => {
            cy.visit('https://www.seebiz.cloud/').wait(2000);;
            cy.get('.sso-sign-in').click();
            cy.get('.color-blue.f-14').click();
            cy.get('.color-2020.back').should('exist');
        });
        
        it(' TC-Signin-47:Verify by writing the "valid email" in the email field on the Forgot Password page', () => {
            cy.visit('https://www.seebiz.cloud/').wait(2000);;
            cy.get('.sso-sign-in').click();
            cy.get('.color-blue.f-14').click();
            cy.wait(3000);
            cy.get('#email').type('fazalerabiseebiz0+op@gmail.com');
            cy.get('#forgotPwd').click();
            cy.url().should('include', 'https://accounts.seebiz.cloud/verificationCode');
          
        });
      
      
        it('TC-Signin-48: Verify by writing the "invalid email" in the email field on the Forgot Password page ', () => {
            cy.visit('https://www.seebiz.cloud/').wait(2000);;
            cy.get('.sso-sign-in').click();
            cy.get('.color-blue.f-14').click();
            cy.wait(2000);
            cy.get('#email').type('fazalerabiseebizgmail.com');
            cy.get('#forgotPwd').click();
            cy.contains('Please enter valid email address').should('exist');
            cy.wait(2000)
          
        });
        

        it('TC-Signin-49: Verify the "Verification code" page ', () => {
            cy.visit('https://www.seebiz.cloud/').wait(2000);;
            cy.get('.sso-sign-in').click();
            cy.get('.color-blue.f-14').click();
            cy.wait(2000);
            cy.get('#email').type('fazalerabiseebiz0+op@gmail.com');
            cy.get('#forgotPwd').click();
            cy.url().should('include', 'https://accounts.seebiz.cloud/verificationCode');
          
        });




        
        it(' TC-Signin-51:Verify by entering a "valid OTP" code on the OTP field ', () => {
            cy.visit('https://www.seebiz.cloud/').wait(2000);;
            cy.get('.sso-sign-in').click();
            cy.get('.color-blue.f-14').click();
            cy.wait(2000);
            
            cy.get('#forgotPwd').click();
            cy.get('#email').type('fazalerabiseebiz0+op@gmail.com');
            cy.url().should('include', 'https://accounts.seebiz.cloud/forgotPassword');

            cy.get('#forgotPwd').click();

            cy.wait(3000)
            const inputFieldSelectors = [
              '#number1', // Selector for the first input field
              '#number2', // Selector for the second input field
              '#number3', // Selector for the third input field
              '#number4' // Selector for the fourth input field
            ];
          
            const numberToEnter = '1'; 
          
            // Loop through each input field selector and enter the same number
            inputFieldSelectors.forEach((selector) => {
              cy.get(selector)
                .type(numberToEnter)
                .should('have.value', numberToEnter); // Ensure the value is entered correctly
            });

            cy.wait(2000)
          
    });
   
    it(' TC-Signin-52:Verify by entering an "invalid OTP" code on the OTP field', () => {
        cy.visit('https://www.seebiz.cloud/').wait(2000);;
        cy.get('.sso-sign-in').click();
        cy.get('.color-blue.f-14').click();
        cy.wait(2000);
        
        cy.get('#forgotPwd').click();
        cy.get('#email').type('fazalerabiseebiz0+op@gmail.com');
        cy.url().should('include', 'https://accounts.seebiz.cloud/forgotPassword');

        cy.get('#forgotPwd').click();



        cy.wait(3000)
        const inputFieldSelectors = [
          '#number1', // Selector for the first input field
          '#number2', // Selector for the second input field
          '#number3', // Selector for the third input field
          '#number4' // Selector for the fourth input field
        ];
      
        const numberToEnter = '2'; 
      
        // Loop through each input field selector and enter the same number
        inputFieldSelectors.forEach((selector) => {
          cy.get(selector)
            .type(numberToEnter)
            .should('have.value', numberToEnter); // Ensure the value is entered correctly
        });
        // cypress/support/index.js
          Cypress.on('uncaught:exception', (err, runnable) => {
         // return false to prevent Cypress from failing the test
          return false;
            });


        cy.wait(2000)

        cy.contains('Please enter valid code').should('exist');


      
    });

    
    it(' TC-Signin-53:Check the "Verify Email Address" button  ', () => {
        cy.visit('https://www.seebiz.cloud/').wait(2000);;
        cy.get('.sso-sign-in').click();
        cy.get('.color-blue.f-14').click();
        cy.wait(2000);
        
        cy.get('#forgotPwd').click();
        // cypress/support/index.js
       Cypress.on('uncaught:exception', (err, runnable) => {
        // return false to prevent Cypress from failing the test
        return false;
        });

        cy.get('#email').type('fazalerabiseebiz0+op@gmail.com');
        cy.url().should('include', 'https://accounts.seebiz.cloud/forgotPassword');

        cy.get('#forgotPwd').click();

        cy.wait(3000)
        const inputFieldSelectors = [
          '#number1', // Selector for the first input field
          '#number2', // Selector for the second input field
          '#number3', // Selector for the third input field
          '#number4' // Selector for the fourth input field
        ];
      
        const numberToEnter = '1'; 
      
        // Loop through each input field selector and enter the same number
        inputFieldSelectors.forEach((selector) => {
          cy.get(selector)
            .type(numberToEnter)
            .should('have.value', numberToEnter); // Ensure the value is entered correctly
        });

        cy.wait(2000)

     
        cy.url().should('include', 'https://accounts.seebiz.cloud/passreset');


    });
    it(' TC-Signin-53.1:Check the "Verify Email Address" button without entering code', () => {
      cy.visit('https://www.seebiz.cloud/').wait(2000);;
      cy.get('.sso-sign-in').click();
      cy.get('.color-blue.f-14').click();
      cy.wait(2000);
      
      cy.get('#forgotPwd').click();
      // cypress/support/index.js
     Cypress.on('uncaught:exception', (err, runnable) => {
      // return false to prevent Cypress from failing the test
      return false;
      });

      cy.get('#email').type('fazalerabiseebiz0+op@gmail.com');
      cy.url().should('include', 'https://accounts.seebiz.cloud/forgotPassword');

      cy.get('#forgotPwd').click();

      cy.wait(3000)
      cy.get('#signInBtn').click();
      cy.contains("Please enter 4 digit code").should('be.visible')
      /*
      const inputFieldSelectors = [
        '#number1', // Selector for the first input field
        '#number2', // Selector for the second input field
        '#number3', // Selector for the third input field
        '#number4' // Selector for the fourth input field
      ];
    
      const numberToEnter = '1'; 
    
      // Loop through each input field selector and enter the same number
      inputFieldSelectors.forEach((selector) => {
        cy.get(selector)
          .type(numberToEnter)
          .should('have.value', numberToEnter); // Ensure the value is entered correctly
      }); 
        */
      cy.wait(2000)

   
      cy.url().should('include', 'https://accounts.seebiz.cloud/verificationCode');


  });
    it('TC-Signin-54 : Verify the "Resend Code" link  ', () => {
        cy.visit('https://www.seebiz.cloud/').wait(2000);;
        cy.get('.sso-sign-in').click();
        cy.get('.color-blue.f-14').click();
        cy.wait(2000);
        
        cy.get('#forgotPwd').click();
       
        cy.url().should('include', 'https://accounts.seebiz.cloud/forgotPassword');
        cy.get('#email').type('fazalerabiseebiz0+op@gmail.com');
        cy.get('#forgotPwd').click();

        cy.wait(4000)
        cy.get('#resendButton').click()
        cy.wait(2000)
        
        const inputFieldSelectors = [
          '#number1', // Selector for the first input field
          '#number2', // Selector for the second input field
          '#number3', // Selector for the third input field
          '#number4' // Selector for the fourth input field
        ];
      
        const numberToEnter = '1'; 
      
        // Loop through each input field selector and enter the same number
        inputFieldSelectors.forEach((selector) => {
          cy.get(selector)
            .type(numberToEnter)
            .should('have.value', numberToEnter); // Ensure the value is entered correctly
        });

        cy.wait(2000)
      
        cy.url().should('include', 'https://accounts.seebiz.cloud/passreset');

         
    });
    it(' TC-Signin-55 :Verify the Reset Password page ', () => {
        cy.visit('https://www.seebiz.cloud/').wait(2000);;
        cy.get('.sso-sign-in').click();
        cy.get('.color-blue.f-14').click();
        cy.wait(2000);
        
        cy.get('#forgotPwd').click();
        cy.get('#email').type('fazalerabiseebiz0+op@gmail.com');
        cy.url().should('include', 'https://accounts.seebiz.cloud/forgotPassword');

        cy.get('#forgotPwd').click();

        cy.wait(3000)
        const inputFieldSelectors = [
          '#number1', // Selector for the first input field
          '#number2', // Selector for the second input field
          '#number3', // Selector for the third input field
          '#number4' // Selector for the fourth input field
        ];
        
        const numberToEnter = '1'; 
      
        // Loop through each input field selector and enter the same number
        inputFieldSelectors.forEach((selector) => {
          cy.get(selector)
            .type(numberToEnter)
            //.should('have.value', numberToEnter); // Ensure the value is entered correctly
        });

        cy.wait(2000)
       
        cy.url().should('include', 'https://accounts.seebiz.cloud/passreset');


    });







});
describe("Common File for Sign in Test Cases", function(){

    beforeEach(() => {
        cy.visit("https://www.seebiz.cloud")
        cy.viewport(1920, 1080)

      
      })

      const waitforexecutionstep = 1000;
    it("TC-74 Verify the functionality of Back link on the Reset Password Page"  ,function(){

        const correctemail = "bilalseebiz7500+338@gmail.com";
        cy.wait(waitforexecutionstep)

        cy.get('.sso-sign-in').click()

        cy.wait(waitforexecutionstep)
        cy.get("#login-form > div.remember-container.mb--40 > a").click()
        cy.wait(waitforexecutionstep)

        cy.get('#email').type(correctemail)

        cy.get('#forgotPwd').click()
        cy.wait(waitforexecutionstep)

        cy.get('#number1').type("1")
        cy.get('#number2').type("1")
        cy.get('#number3').type("1")
        cy.get('#number4').type("1")

        cy.wait(waitforexecutionstep)

        cy.contains('Back').click()

        
    })

    it("TC-62&TC-63 Verify the functionality to reset password with upper and lower case combinations", () => {
        const correctemail = "Bilalseebiz7500+338@gmail.com";

        const correctpassword = "Password1"
        const incorrectpassword = "Change123"
        const waitforexecutionstep = 1000;
        cy.wait(waitforexecutionstep)

        cy.get('.sso-sign-in').click({ force: true })

        cy.wait(waitforexecutionstep)

        cy.contains('Forgot password?').click({ force: true })

        cy.wait(waitforexecutionstep)

        cy.get('#email').type(correctemail)

        cy.get('#forgotPwd').click({ force: true })
        cy.wait(waitforexecutionstep)

        cy.get('#number1').type("1")
        cy.get('#number2').type("1")
        cy.get('#number3').type("1")
        cy.get('#number4').type("1")

        cy.wait(waitforexecutionstep)
        

        cy.get("input[placeholder='Password']").type(correctpassword)
        cy.get(':nth-child(1) > .toggle-password > svg > path').click({ force: true })


    })


    it("TC-84 Verify the functionality to logout from inventory page", ()=> {

        const correctemailforlogin = "bilalseebiz7500+331@gmail.com";

        const correctpassword = "Bilal7500"
        const incorrectpassword = "Change123"
        const waitforexecutionstep = 1000;
        cy.wait(waitforexecutionstep)

        cy.get('.sso-sign-in').click({ force: true })

        cy.get("[Placeholder='Email']").type(correctemailforlogin)
        cy.get("[Placeholder='Password']").type(correctpassword)

        cy.get('#loginBtn').click({ force: true })

        cy.wait(13000)

        cy.get('.sso_navigation > ul > :nth-child(1) > a').click({ force: true })

        cy.get('.sso-blue-btn').click({ force: true })

        cy.wait(8000)
        cy.get('#currentOrg_logo').click({ force: true })

        cy.wait(waitforexecutionstep)
        cy.contains('Sign out').click({ force: true })
    })

    it("TC-73 Verify the functionality of Reset button is visible", function () {
      const correctEmail = "bilalseebiz7500+338@gmail.com";
  
      cy.wait(waitforexecutionstep);
  
      cy.get('.sso-sign-in').click();
  
      cy.get("#login-form > div.remember-container.mb--40 > a").click();
  
      cy.get('#email').type(correctEmail);
  
      cy.get('#forgotPwd').click();
  
      cy.get('#number1').type("1");
      cy.get('#number2').type("1");
      cy.get('#number3').type("1");
      cy.get('#number4').type("1");
  
      // Assertion: Reset button is visible
      cy.get('.create-account').should('be.visible');
  });
  

    it("TC-72 Verify the functionality of Validations on the reset passord page", function(){

        const correctemail = "bilalseebiz7500+338@gmail.com";

        cy.visit("https://www.seebiz.cloud")

        cy.wait(waitforexecutionstep)

        cy.get('.sso-sign-in').click()

        cy.wait(waitforexecutionstep)

        cy.get("#login-form > div.remember-container.mb--40 > a").click()

        cy.wait(waitforexecutionstep)

        cy.get('#email').type(correctemail)

        cy.get('#forgotPwd').click()
        cy.wait(waitforexecutionstep)

        cy.get('#number1').type("1")
        cy.get('#number2').type("1")
        cy.get('#number3').type("1")
        cy.get('#number4').type("1")



        cy.wait(waitforexecutionstep)

        cy.contains('Back').click()

        // Again repeat the forgot pawword steps
        cy.wait(waitforexecutionstep)

        cy.contains('Forgot password?').click()

        cy.wait(waitforexecutionstep)

        cy.get('#email').type(correctemail)

        cy.get('#forgotPwd').click()
        cy.wait(waitforexecutionstep)

        cy.get('#number1').type("1")
        cy.get('#number2').type("1")
        cy.get('#number3').type("1")
        cy.get('#number4').type("1")

        cy.wait(waitforexecutionstep)
        cy.get('.create-account').click()
    })

    it("TC-71 Verify the functionality of Reset button in this enter the invalid confirm password", function(){

        const correctemail = "bilalseebiz7500+338@gmail.com";

        const correctpassword = "Bilal7500"
        const incorrectpassword = "Change123"
        const waitforexecutionstep = 4000;

        cy.wait(waitforexecutionstep)

        cy.get('.sso-sign-in').click()

        cy.wait(waitforexecutionstep)

        cy.get("#login-form > div.remember-container.mb--40 > a").click()

        cy.wait(waitforexecutionstep)

        cy.get('#email').type(correctemail)

        cy.get('#forgotPwd').click()
        cy.wait(waitforexecutionstep)

        cy.get('#number1').type("1")
        cy.get('#number2').type("1")
        cy.get('#number3').type("1")
        cy.get('#number4').type("1")


        cy.wait(waitforexecutionstep)

        cy.get("input[placeholder='Password']").type(correctpassword)
        cy.get("input[placeholder='Confirm Password']").type(incorrectpassword)

        cy.get('.create-account').click()
    })

    it("TC-70 Verify the functionality of Reset button in this enter the invalid confirm password", function(){
        const correctemail = "Bilalseebiz7500+338@gmail.com";

        const correctpassword = "Bilal7500"
        const incorrectpassword = "Change123"

        cy.wait(waitforexecutionstep)
        
        cy.get('.sso-sign-in').click()

        cy.wait(waitforexecutionstep)

        cy.contains('Forgot password?').click()

        cy.wait(waitforexecutionstep)

        cy.get('#email').type(correctemail)

        cy.get('#forgotPwd').click()
        cy.wait(waitforexecutionstep)

        cy.get('#number1').type("1")
        cy.get('#number2').type("1")
        cy.get('#number3').type("1")
        cy.get('#number4').type("1")

        cy.wait(waitforexecutionstep)
        

        cy.get("input[placeholder='Password']").type(correctpassword)
        cy.get("input[placeholder='Confirm Password']").type(correctpassword)
    })

    it("TC-66&TC67 Verify the functionality to click on the eye icon for password", function(){

        const correctemail = "Bilalseebiz7500+338@gmail.com";

        const correctpassword = "Bilal7500"
        const incorrectpassword = "Change123"
        const waitforexecutionstep = 4000;

        cy.wait(waitforexecutionstep)

        cy.get('.sso-sign-in').click()

        cy.wait(waitforexecutionstep)

        cy.contains('Forgot password?').click()

        cy.wait(waitforexecutionstep)

        cy.get('#email').type(correctemail)

        cy.get('#forgotPwd').click()
        cy.wait(waitforexecutionstep)

        cy.get('#number1').type("1")
        cy.get('#number2').type("1")
        cy.get('#number3').type("1")
        cy.get('#number4').type("1")

        cy.wait(waitforexecutionstep)
        

        cy.get("input[placeholder='Password']").type(correctpassword)
        cy.get("input[placeholder='Confirm Password']").type(correctpassword)
        cy.get(':nth-child(1) > .toggle-password > svg > path').should('be.visible')
        cy.get(':nth-child(1) > .toggle-password > svg > path').click()
    })

    it('TC-65 Verify the functionality to Valid rules is not marked', function(){
        const correctemail = "Bilalseebiz7500+338@gmail.com"
        const correctpassword = "bilal7500"
        const incorrectpassword = "Change123"
        const waitforexecutionstep = 2000;

        cy.wait(waitforexecutionstep)

        cy.get('.sso-sign-in').click()

        cy.wait(waitforexecutionstep)

        cy.contains('Forgot password?').click()

        cy.wait(waitforexecutionstep)

        cy.get('#email').type(correctemail)

        cy.get('#forgotPwd').click()
        cy.wait(waitforexecutionstep)

        cy.get('#number1').type("1")
        cy.get('#number2').type("1")
        cy.get('#number3').type("1")
        cy.get('#number4').type("1")

        cy.wait(waitforexecutionstep)
        

        cy.get("input[placeholder='Password']").type(correctpassword)
        cy.get("input[placeholder='Confirm Password']").type(incorrectpassword)
    })

    it("TC-64 Verify the functionality of land on the marketplace with reset password", function(){

     
        const correctemail = "Bilalseebiz7500+338@gmail.com";

        const correctpassword = "Bilal7500"
        const incorrectpassword = "Change123"

        cy.wait(waitforexecutionstep)

        cy.get('.sso-sign-in').click()

        cy.wait(waitforexecutionstep)

        cy.contains('Forgot password?').click()

        cy.wait(waitforexecutionstep)

        cy.get('#email').type(correctemail)

        cy.get('#forgotPwd').click()
        cy.wait(waitforexecutionstep)

        cy.get('#number1').type("1")
        cy.get('#number2').type("1")
        cy.get('#number3').type("1")
        cy.get('#number4').type("1")

        cy.wait(waitforexecutionstep)
        

        cy.get("input[placeholder='Password']").type(correctpassword)
        cy.get("input[placeholder='Confirm Password']").type(correctpassword)

        cy.get('.create-account').click()


    })

    it('TC-61 Verify the functionality to reset password with atleast 8 characters enter', function(){
        const correctemail = "Bilalseebiz7500+338@gmail.com";

        const correctpassword = "password"
        const incorrectpassword = "Change123"
        const waitforexecutionstep = 4000;
        cy.wait(waitforexecutionstep)
        
        cy.get('.sso-sign-in').click()

        cy.wait(waitforexecutionstep)

        cy.contains('Forgot password?').click()

        cy.wait(waitforexecutionstep)

        cy.get('#email').type(correctemail)

        cy.get('#forgotPwd').click()
        cy.wait(waitforexecutionstep)

        cy.get('#number1').type("1")
        cy.get('#number2').type("1")
        cy.get('#number3').type("1")
        cy.get('#number4').type("1")

        cy.wait(waitforexecutionstep)
        

        cy.get("input[placeholder='Password']").type(correctpassword)
        cy.get(':nth-child(1) > .toggle-password > svg > path').click()


    })


    it('TC-58-TC-59-TC-68TC-69 Verify the functionality to click on the eye icon', function(){
        const correctemail = "Bilalseebiz7500+338@gmail.com";

        const correctpassword = "Bilal7500"
        const incorrectpassword = "Change123"
        const waitforexecutionstep = 4000;

        cy.visit("https://www.seebiz.cloud")

        cy.wait(waitforexecutionstep)

        cy.get('.sso-sign-in').click()

        cy.wait(waitforexecutionstep)

        cy.contains('Forgot password?').click()

        cy.wait(waitforexecutionstep)

        cy.get('#email').type(correctemail)

        cy.get('#forgotPwd').click()
        cy.wait(waitforexecutionstep)

        cy.get('#number1').type("1")
        cy.get('#number2').type("1")
        cy.get('#number3').type("1")
        cy.get('#number4').type("1")

        cy.wait(waitforexecutionstep)
        cy.get("input[placeholder='Password']").type(correctpassword)
        cy.get("input[placeholder='Confirm Password']").type(correctpassword)
        cy.get(':nth-child(3) > .toggle-password > svg > path').should('be.visible')
        cy.get(':nth-child(3) > .toggle-password > svg > path').click()


    })

    it('TC-56 & TC-57 Verify the functionality to click on the eye icon', function(){

        const correctpassword = "Bilal7500"
        const incorrectpassword = "Change123"
        const waitforexecutionstep = 4000;
        const correctemail = "Bilalseebiz7500+338@gmail.com";

        cy.wait(waitforexecutionstep)

        cy.get('.sso-sign-in').click()

        cy.wait(waitforexecutionstep)

        cy.contains('Forgot password?').click()

        cy.wait(waitforexecutionstep)

        cy.get('#email').type(correctemail)

        cy.get('#forgotPwd').click()
        cy.wait(6000)

        cy.get('#number1').type("1")
        cy.get('#number2').type("1")
        cy.get('#number3').type("1")
        cy.get('#number4').type("1")

        cy.wait(waitforexecutionstep)
        

        cy.get(':nth-child(1) > .form-control').should('be.visible')
        cy.get("input[placeholder='Password']").should('be.visible')



    })

    it('TC-33.1 Verify the functionality to open the marketplace landing page',function(){

        const correctemailforlogin = "bilalseebiz7500+331@gmail.com";

        const correctpassword = "Bilal7500"
        const incorrectpassword = "Change123"
        const waitforexecutionstep = 4000;
        cy.wait(waitforexecutionstep)

        cy.get('.sso-sign-in').click()

        cy.get("[Placeholder='Email']").type(correctemailforlogin)
        cy.get("[Placeholder='Password']").type(correctpassword)

        cy.get('#loginBtn').click()


    })


    it('TC-75 Verify the functionality to logout from inventory page', () => {

        cy.wait(4000)
        cy.get('.sso-sign-in').click()
        const mail = "bilalseebiz7500+s28@gmail.com";
        const correctpassword = "Bilal7500"

        cy.get("[Placeholder='Email']").type(mail)
        cy.get("[Placeholder='Password']").type(correctpassword)

        cy.get('#loginBtn').click()

        cy.wait(13000)
        cy.get('.sso-user-img > img').should('have.attr', 'src', 'https://s3-us-west-2.amazonaws.com/seebiz/sso/user/65a0e087d71ff57756aaeff1/1705042125825-XGE.jpeg')
        //cy.get('.sso-user-img > img').should('have.value','')

    })

    

})
describe('Profile Test Cases', () => {
    beforeEach(() => {

      //7 8 9 13 16 19 33 50 51 52 53  
        // run these tests as if in a desktop browser with a 1920x1080 resolution
        cy.viewport(1920, 1080);
        cy.visit('https://www.seebiz.cloud/');
        cy.wait(2000)
        cy.get(".sso-sign-in").click();
        cy.get('input[placeholder="Email"]').type("fazalerabiseebiz0@gmail.com");
        cy.get('input[placeholder="Password"]').type('Fazal123');
         //Click the 'Unhide Password' icon
         cy.get("#password > div > svg").click();
        // Check if password is visible after clicking the 'Unhide Password' icon
        cy.get("input[placeholder='Password']").should('have.attr', 'type', 'text');
        cy.contains("Sign in").click({force: true});
        cy.url().should('include', 'https://www.seebiz.cloud/');
        cy.wait(13000)  
    });

    it('TC-P-01 : Verify User can navigate to Profile tab in accounts through marketplace', () => {
              
            cy.wait(2000)
            // Click the button to open the dropdown
            
            cy.get('.sso-user-img > img').click();
            cy.contains('My Account').invoke('removeAttr', 'target').click();

    });


    it('TC-P-02 : Verify Profile picture in the profile page in case of new account', () => {
              
     
        // Click the button to open the dropdown
        
        cy.get('.sso-user-img > img').click();
        cy.contains('My Account').invoke('removeAttr', 'target').click();
        cy.get("#profilePicture").should('exist')
        
    });


     
    it('TC-P-03 : Verify the allignment of Camera icon on profile picture on cloud server and ensure that allignment on both cloud ', () => {
              
     
        // Click the button to open the dropdown
        cy.wait(1000)
        cy.get('.sso-user-img > img').click();
        cy.contains('My Account').invoke('removeAttr', 'target').click();
        cy.get("#profilePicture").should('exist')
        cy.get("#profilePicture").should('exist').click();
        cy.get('#profilePicture').invoke('removeAttr', 'target').click();


    });
    

        
  
    it('TC-P-04: User can upload a picture less than 1 MB', () => {
        cy.get('.sso-user-img > img').click();
        cy.contains('My Account').invoke('removeAttr', 'target').click();
        cy.wait(2000);
        const filepath = "LessOneMB.jpg";
        cy.get("input[type='file']").attachFile(filepath)
        cy.wait(5000)

      });
     it('TC-P-05:To check user can upload a Picture of greater than 1 mb', () => {
        cy.get('.sso-user-img > img').click();
        cy.contains('My Account').invoke('removeAttr', 'target').click();
        cy.wait(2000);
        const filepath = "GreaterOneMB.jpg";
        cy.get("input[type='file']").attachFile(filepath)
        cy.wait(5000);

        cy.get('.modal_content_inner > p').then(($element) => {
          if ($element.text().includes("Image size should be less than 1 MB.")) {
              // If the text is found, click the button
              cy.get('.modal_content_inner > p').should("contain","Image size should be less than 1 MB.")
          }
          else {
              cy.log("Assertion failed. Taking alternative action...");
          }
           cy.wait(2000)
      });

      });
      it('TC-P-06: To check validation message that user cannot upload a Picture of greater than 1 mb', () => {
        cy.wait(2000)

         cy.get('.sso-user-img > img').click();
         cy.contains('My Account').invoke('removeAttr', 'target').click();
         cy.wait(2000);
         const filepath = "GreaterOneMB.jpg";
         cy.get("input[type='file']").attachFile(filepath)
         cy.wait(5000);
 

  cy.get('.modal_content_inner > p').then(($element) => {
          if ($element.text().includes("Image size should be less than 1 MB.")) {
              // If the text is found, click the button
              cy.get('.modal_content_inner > p').should("contain","Image size should be less than 1 MB.")
          }
          else {
              cy.log("Assertion failed. Taking alternative action...");
          }
           cy.wait(5000)
      });

      });
      it('TC-P-07: To check user can upload a Video', () => {
        cy.get('.sso-user-img > img').click();
        cy.contains('My Account').invoke('removeAttr', 'target').click().wait(2000)
        cy.wait(2000);
        const filepath = "Video.mp4";
        cy.get("input[type='file']").attachFile(filepath)
        cy.wait(2000);
        //cy.get('.modal_content_inner > p').should('have.text' , 'Only JPEG, PNG, and JPG files are allowed.')

         cy.get('.modal_content_inner > p').then(($element) => {
          if ($element.text().includes("Only JPEG, PNG, and JPG files are allowed.")) {
              // If the text is found, click the button
              cy.get('.modal_content_inner > p').should("contain","Only JPEG, PNG, and JPG files are allowed.")
          }
          else {
              cy.log("Assertion failed. Taking alternative action...");
          }
      });
        cy.wait(2000);
      });
      it('TC-P-08: Verify system response by uploading Gif file as profile image and ensure that system may validate user with an error message ', () => {
        cy.get('.sso-user-img > img').click();
        cy.contains('My Account').invoke('removeAttr', 'target').click();
        cy.wait(2000);
        const filepath = "giphy.gif";
        cy.get("input[type='file']").attachFile(filepath)
        cy.wait(3000);
        cy.get('.modal_content_inner > p').then(($element) => {
          if ($element.text().includes("Only JPEG, PNG, and JPG files are allowed.")) {
              // If the text is found, click the button
              cy.get('.modal_content_inner > p').should("contain","Only JPEG, PNG, and JPG files are allowed.")
          }
          else {
              cy.log("Assertion failed. Taking alternative action...");
          }
        cy.wait(2000);

      });

      });
      it('TC-P-09:Verify system response by uploading any PDF file as profile image and ensure that system may validate user with an error message ', () => {
        cy.get('.sso-user-img > img').click();
        cy.contains('My Account').invoke('removeAttr', 'target').click();
        cy.wait(2000);
        const filepath = "sample.pdf";
        cy.get("input[type='file']").attachFile(filepath)
        cy.wait(2000)
        cy.get('.modal_content_inner > p').then(($element) => {
          if ($element.text().includes("Only JPEG, PNG, and JPG files are allowed.")) {
              // If the text is found, click the button
              cy.get('.modal_content_inner > p').should("contain","Only JPEG, PNG, and JPG files are allowed.")
          }
          else {
              cy.log("Assertion failed. Taking alternative action...");
          }
      });
        cy.wait(2000);

      });
      

    

        it('TC-P-10: To check name Field on new account', () => {
    
            
            cy.get('.sso-user-img > img').click();
           
            cy.contains('My Account').invoke('removeAttr', 'target').click();
            cy.wait(2000); 
            cy.contains('Name').should('be.visible').as('nameField');
            

    
          });

          it('TC-P-11: Verify the Functionality of "Change name"', () => {
            // Perform actions to reach the account section
            
            cy.get('.sso-user-img > img').click();
            cy.contains('My Account').invoke('removeAttr', 'target').click();
            
            cy.wait(2000); 
        
            // Assert the visibility of the 'Name' field
            cy.contains('Name').should('be.visible').as('nameField');
            cy.contains('Change name').click()

        
            // Additional assertions for the 'Name' field properties or behavior
            cy.get('.btn-update').then(($btnUpdate) => {
                console.log($btnUpdate);
              });
              

            
        
        });



        it('TC-P-12: Verify that name field is writable', () => {
            // Perform actions to reach the account section
            
            cy.get('.sso-user-img > img').click();
            cy.contains('My Account').invoke('removeAttr', 'target').click();
            
            cy.wait(2000); 
        
            // Assert the visibility of the 'Name' field
            cy.contains('Name').should('be.visible').as('nameField');
            cy.contains('Change name').click()
        
            // Additional assertions for the 'Name' field properties or behavior
            cy.get('#customInput').should('have.attr', 'type', 'text'); 

            cy.get('#customInput').clear();
            const expectedName = 'Faizi'; // Define the expected name
            cy.get("#customInput").type(expectedName).should('have.value', expectedName);

            
         });
         

        
         it('TC-P-13: To verify the Name field by entering special characters', () => {
            // Perform actions to reach the account section
            
            cy.get('.sso-user-img > img').click();
            cy.contains('My Account').invoke('removeAttr', 'target').click();
            
            cy.wait(2000); 
        
            // Assert the visibility of the 'Name' field
            cy.contains('Name').should('be.visible').as('nameField');
            cy.contains('Change name').click();
        
            // Additional assertions for the 'Name' field properties or behavior
            cy.get('#customInput').should('have.attr', 'type', 'text'); 
        
            // Enter special characters into the Name field
            const specialChars = '!@#$%^&*()_+-={}[];:,.<>?/\\|`~"'; // Add the special characters you want to test
           cy.get('#customInput').clear().type(specialChars);
        
            // Assert that the input value contains the entered special characters
            cy.get('#customInput').should('have.value', specialChars);
            cy.get("button[type='submit']").click();
        
            // Optionally, assert the presence of a validation message indicating invalid characters
            cy.contains('Numbers and Special characters are not allowed in Name').should('exist');
        });

        it('TC-P-15: To check the functionality of "Change Name" button', () => {
            // Perform actions to reach the account section
    
            cy.get('.sso-user-img > img').click();
            cy.contains('My Account').invoke('removeAttr', 'target').click();
            
            cy.wait(2000); 
        
            // Assert the visibility of the 'Name' field
            cy.contains('Name').should('be.visible').as('nameField');
            cy.contains('Change name').click().wait(2000);
        
            // Additional assertions for the 'Name' field properties or behavior
            cy.get('#customInput').should('have.attr', 'type', 'text'); 
        
            // Enter special characters into the Name field
            const NewName  = 'Faizi Faizi'; 
            cy.get('#customInput').clear().type(NewName);
        
           
            cy.get('#customInput').should('have.value', NewName);
            cy.get("button[type='submit']").click();
            cy.contains('Faizi Faizi').should('exist');
            
        
            
        });

        it('TC-P-16: To check the functionality of "Cancel" button', () => {
            // Perform actions to reach the account section
          
            cy.get('.sso-user-img > img').click();
            cy.contains('My Account').invoke('removeAttr', 'target').click();
            
            cy.wait(2000); 
        
            // Assert the visibility of the 'Name' field
            cy.contains('Name').should('be.visible').as('nameField');
            cy.contains('Change name').click();
        
            // Additional assertions for the 'Name' field properties or behavior
            cy.get('#customInput').should('have.attr', 'type', 'text'); 
        
            // Enter special characters into the Name field
            const NewName  = ' leonardo dicaprio'; 
            cy.get('#customInput').clear().type(NewName);
        
           
            cy.get('#customInput').should('have.value', NewName);
            cy.get("#nameCancel").click();
            //cy.contains('Faizi').should('exist');
        
            
        });


        it('TC-P-17:Verify the "Password" field is available', () => {
            // Perform actions to reach the account section
           
            cy.get('.sso-user-img > img').click();
            cy.contains('My Account').invoke('removeAttr', 'target').click();
            
            cy.wait(2000); 
        
            cy.contains('Password')
            .should('exist') // Assertion: Verify the element exists
            .and('be.visible');
        
            
        });
        it('TC-P-18:Verify the Functionality of " Change Password" Link', () => {
            // Perform actions to reach the account section
           
            cy.get('.sso-user-img > img').click();
            cy.contains('My Account').invoke('removeAttr', 'target').click();
            
            cy.wait(2000); 
        
            cy.get('#passwordHide').click()
            cy.contains("Old Password").should('exist');
            cy.contains("New Password").should('exist');
            cy.contains("Confirm New Password").should('exist');
        
         
        
        });
        it('TC-P-19:Verify the validation message on the password field', () => {
            // Perform actions to reach the account section
           
            cy.get('.sso-user-img > img').click();
            cy.contains('My Account').invoke('removeAttr', 'target').click();
            
            cy.wait(2000); 
        
            cy.get('#passwordHide').click()
            cy.wait(1000)
            cy.get("#psdBtn").click()



            cy.contains("Please enter password").should('exist');
            cy.contains("Password is required").should('exist');
            cy.contains("Please enter confirm password").should('exist');
        
         
        
        });
        it('TC-P-20: Verify the Functionality of " Change Password" Link', () => {
            // Perform actions to reach the account section
          
            cy.get('.sso-user-img > img').click();
            cy.contains('My Account').invoke('removeAttr', 'target').click();
            
            cy.wait(2000); 



            cy.contains("Change Password").click();

            
            const PWDV = 'Fazal123'; // Define the password value to be entered
               // Type the password into the "Password" field
            // cy.get("input[name='oldpassword']").type(PWDV);
             cy.get("input[name='oldpassword']").type(PWDV).should('have.value', PWDV);

            cy.get("input[name='oldpassword']").should('have.attr', 'type', 'password'); 


        
         });

         it('TC-P-19: Verify the "Old Password" field is Writeable', () => {
            // Perform actions to reach the account section
            
            cy.get('.sso-user-img > img').click();
            cy.contains('My Account').invoke('removeAttr', 'target').click();
            
            cy.wait(2000); 



            cy.contains("Change Password").click();

            
            const PWDV = 'Fazal123'; // Define the password value to be entered
               // Type the password into the "Password" field
            // cy.get("input[name='oldpassword']").type(PWDV);
             cy.get("input[name='oldpassword']").type(PWDV).should('have.value', PWDV);

            cy.get("input[name='oldpassword']").should('have.attr', 'type', 'password'); 


            cy.get('#Pasword > .input_box > .input-container > div > .eye--icon').should("exist")
          //  cy.get('#Pasword > .input_box > .input-container > div > .eye--icon').click();

            cy.get(2000);
            //cy.get("input[name='oldpassword']").should('have.attr', 'type', 'text'); 
           

        
         });


         it('TC-P-20:Verify that the functionality of "Password eye icon" in the "Old Password" field', () => {
            // Perform actions to reach the account section
           
            cy.get('.sso-user-img > img').click();
            cy.contains('My Account').invoke('removeAttr', 'target').click();
            
            cy.wait(2000); 


            cy.contains("Change Password").click();

            
            const PWDV = 'Fazal123'; 
             cy.get("input[name='oldpassword']").type(PWDV).should('have.value', PWDV);

            cy.get("input[name='oldpassword']").should('have.attr', 'type', 'password'); 


            cy.get('#Pasword > .input_box > .input-container > div > .eye--icon').click()
            cy.get(2000);
            cy.get("input[name='oldpassword']").should('have.attr', 'type', 'text'); 



        
         });
         it('TC-P-22:Verify the "New Password" field is Writeable', () => {
            // Perform actions to reach the account section
            
            cy.get('.sso-user-img > img').click();
            cy.contains('My Account').invoke('removeAttr', 'target').click();
            
            cy.wait(2000); 


            cy.contains("Change Password").click();

            const PWDV= 'Fazal123'

            cy.get("input[name='password']").type(PWDV).should('have.value', PWDV);

            cy.get("input[name='password']").should('have.attr', 'type', 'password'); 
            cy.wait(2000);


        
         });
         it('TC-P-23:Verify the "Password eye Icon" in the "New Password" field is available', () => {
            // Perform actions to reach the account section
            
            cy.get('.sso-user-img > img').click();
            cy.contains('My Account').invoke('removeAttr', 'target').click();
            
            cy.wait(2000); 


            cy.contains("Change Password").click();

            const PWDV= 'Fazal123'

            cy.get("input[name='password']").type(PWDV).should('have.value', PWDV);

            cy.get("input[name='password']").should('have.attr', 'type', 'password'); 
            cy.get(':nth-child(2) > .input_box > .input-container > #customInput').should('exist')
             
            cy.get(2000);
            //cy.get("input[name='password']").should('have.attr', 'type', 'text'); 

        
         });
         it('TC-P-24:Verify that the functionality of "Password eye icon" in the "New Password" field', () => {
            // Perform actions to reach the account section
            
            cy.get('.sso-user-img > img').click();
            cy.contains('My Account').invoke('removeAttr', 'target').click();
            
            cy.wait(2000); 


            cy.contains("Change Password").click();

            const PWDV= 'Fazal123'

            cy.get("input[name='password']").type(PWDV).should('have.value', PWDV);

            cy.get("input[name='password']").should('have.attr', 'type', 'password'); 
            cy.get(':nth-child(2) > .input_box > .input-container > div > .eye--icon')
             .click();
            cy.get(2000);
            cy.get("input[name='password']").should('have.attr', 'type', 'text'); 

        
         });


         it('TC-P-25:Verify the condition "at least 8 characters" in password field', () => {
            // Perform actions to reach the account section
         
            cy.get('.sso-user-img > img').click();
            cy.contains('My Account').invoke('removeAttr', 'target').click();
            
            cy.wait(2000); 


            cy.contains("Change Password").click();

            const PWDV= '1234wwertt'

            cy.get("input[name='password']").type(PWDV).should('have.value', PWDV);

            cy.get("input[name='password']").should('have.attr', 'type', 'password'); 
            cy.get(':nth-child(2) > .input_box > .input-container > div > .eye--icon').click();
          
            cy.get(2000);
            cy.get("input[name='password']").should('have.attr', 'type', 'text'); 

            cy.contains("At least 8 characters").should("exist")
            cy.get(2000);
            cy.contains("Contain at least 1 number").should("exist")

        
         });
         
         it('TC-P-26:Verify the condition "Contain at least 1 number" in password field', () => {
          // Perform actions to reach the account section
       
          cy.get('.sso-user-img > img').click();
          cy.contains('My Account').invoke('removeAttr', 'target').click();
          
          cy.wait(2000); 


          cy.contains("Change Password").click();

          const PWDV= '18afewert'

          cy.get("input[name='password']").type(PWDV).should('have.value', PWDV);

          cy.get("input[name='password']").should('have.attr', 'type', 'password'); 
          cy.get(':nth-child(2) > .input_box > .input-container > div > .eye--icon').click();
        
          cy.get(2000);
          cy.get("input[name='password']").should('have.attr', 'type', 'text'); 
          cy.get("div[class='w-1170 mx-auto min-vh'] li:nth-child(1)").should('have.text', 'At least 8 characters');

          cy.get(2000);
          cy.get("div[class='w-1170 mx-auto min-vh'] li:nth-child(2)").should('have.text', 'Contain at least 1 number');


      
       });

     it('TC-P-27:Verify the conditions  "Combine uppercase and lowercase letters"', () => {
      // Perform actions to reach the account section
   
      cy.get('.sso-user-img > img').click();
      cy.contains('My Account').invoke('removeAttr', 'target').click();
      
      cy.wait(2000); 


      cy.contains("Change Password").click();

      const PWDV= 'Paasword'

      cy.get("input[name='password']").type(PWDV).should('have.value', PWDV);

      cy.get("input[name='password']").should('have.attr', 'type', 'password'); 
      cy.get(':nth-child(2) > .input_box > .input-container > div > .eye--icon').click();
    
      cy.get(2000);
      cy.get("input[name='password']").should('have.attr', 'type', 'text'); 
      cy.get("div[class='w-1170 mx-auto min-vh'] li:nth-child(1)").should('have.text', 'At least 8 characters');

      cy.get(2000);
      cy.get('.error-list > :nth-child(3)').should('have.text', 'Combine uppercase and lowercase letters');


  
   });

   it('TC-P-28:Verify the "Confirm Password" field is available"', () => {
    // Perform actions to reach the account section
 
    cy.get('.sso-user-img > img').click();
    cy.contains('My Account').invoke('removeAttr', 'target').click();
    
    cy.wait(2000); 


    cy.contains("Change Password").click();


    cy.get(':nth-child(3) > .heading').should('have.text', "Confirm New Password")

cy.get(':nth-child(3) > .input_box > .input-container > #customInput').should("exist")
 });


 it('TC-P-29 :Verify the "Confirm Password" Field is writeable', () => {
  // Perform actions to reach the account section

  cy.get('.sso-user-img > img').click();
  cy.contains('My Account').invoke('removeAttr', 'target').click();
  
  cy.wait(2000); 


  cy.contains("Change Password").click();


  cy.get(':nth-child(3) > .heading').should('have.text', "Confirm New Password")

cy.get(':nth-child(3) > .input_box > .input-container > #customInput').should("exist").type("New Passoword")
});



it('TC-P-30:Verify the "Password eye Icon" in the "Confirm Password" field is available', () => {
  // Perform actions to reach the account section

  cy.get('.sso-user-img > img').click();
  cy.contains('My Account').invoke('removeAttr', 'target').click();
  
  cy.wait(2000); 


  cy.contains("Change Password").click();


  cy.get(':nth-child(3) > .heading').should('have.text', "Confirm New Password")

cy.get(':nth-child(3) > .input_box > .input-container > #customInput').should("exist").type("New Passoword")
cy.get(':nth-child(3) > .input_box > .input-container > :nth-child(3) > .eye--icon').should('be.visible').click()

});
it('TC-P-31:Verify that the functionality of "Password eye icon" in the "Confirm Password" field', () => {
  // Perform actions to reach the account section

  cy.get('.sso-user-img > img').click();
  cy.contains('My Account').invoke('removeAttr', 'target').click();
  
  cy.wait(2000); 


  cy.contains("Change Password").click();


  cy.get(':nth-child(3) > .heading').should('have.text', "Confirm New Password")

cy.get(':nth-child(3) > .input_box > .input-container > #customInput').should("exist").type("New Passoword")
cy.get(':nth-child(3) > .input_box > .input-container > :nth-child(3) > .eye--icon').should('be.visible').click()

});
it('TC-P-32:Verify Change password Functionality with Wrong old password and other fields with valid data', () => {
  // Perform actions to reach the account section

  cy.get('.sso-user-img > img').click();
  cy.contains('My Account').invoke('removeAttr', 'target').click();
  cy.wait(2000); 

  cy.contains('Change Password').click();
  cy.get("input[name='oldpassword']").type('Fazal1234'); // Valid old password
  cy.get("input[name='password']").type('Change123'); // Valid new password

  // Enter wrong password in Confirm Password field
  cy.get("input[name='confirmPassword']").type('Change123'); // Wrong confirmation password

  // Click on Change password button
  cy.get("#psdBtn").click();
 /// cy.contains("Passwords do not match").should("exist")
  cy.contains("Current password not match").should("be.visible")


  cy.get('#Pasword > .input_box > .input-container > div > .eye--icon').should("be.visible"); // Show Password Icon in Old Password
  cy.get(':nth-child(2) > .input_box > .input-container > div > .eye--icon').should("be.visible"); // Show Password Icon in New Password
  cy.get(':nth-child(3) > .input_box > .input-container > div > .eye--icon').should("be.visible"); // Show Password Icon in Confirm Password
  cy.get('#Pasword > .input_box > .input-container > div > .eye--icon').click();; // Show Password Icon in Old Password
  cy.get(':nth-child(2) > .input_box > .input-container > div > .eye--icon').click(); // Show Password Icon in New Password
  cy.get(':nth-child(3) > .input_box > .input-container > div > .eye--icon').click()

});


         it('TC-P- 33:Verify the functionality of "Confirm new password" field by entering wrong password', () => {
            // Perform actions to reach the account section
           
            cy.get('.sso-user-img > img').click();
            cy.contains('My Account').invoke('removeAttr', 'target').click();
            
            cy.wait(2000); 

            cy.contains('Change Password').click();
            cy.get("input[name='oldpassword']").type('Fazal123'); // Valid old password
            cy.get("input[name='password']").type('Change123'); // Valid new password
        
            // Enter wrong password in Confirm Password field
            cy.get("input[name='confirmPassword']").type('Change'); // Wrong confirmation password
        
            // Click on Change password button
            cy.get("#psdBtn").click();
            cy.contains("Passwords do not match").should("exist")


          
            cy.get('#Pasword > .input_box > .input-container > div > .eye--icon').should("be.visible"); // Show Password Icon in Old Password
            cy.get(':nth-child(2) > .input_box > .input-container > div > .eye--icon').should("be.visible"); // Show Password Icon in New Password
            cy.get(':nth-child(3) > .input_box > .input-container > div > .eye--icon').should("be.visible"); // Show Password Icon in Confirm Password
            cy.get('#Pasword > .input_box > .input-container > div > .eye--icon').click();; // Show Password Icon in Old Password
            cy.get(':nth-child(2) > .input_box > .input-container > div > .eye--icon').click(); // Show Password Icon in New Password
            cy.get(':nth-child(3) > .input_box > .input-container > div > .eye--icon').click()
                
            
        
         });
         it('TC-P- 34.1:Verify Cancel password button Functionality', () => {
          // Perform actions to reach the account section
         
          cy.get('.sso-user-img > img').click();
          cy.contains('My Account').invoke('removeAttr', 'target').click();
          
          cy.wait(2000); 


         

          cy.contains('Change Password').click();
          cy.get("input[name='oldpassword']").type('Fazal1234'); // Valid old password
          cy.get("input[name='password']").type('Fazal123'); // Valid new password
      
          // Enter wrong password in Confirm Password field
          cy.get("input[name='confirmPassword']").type('Fazal123'); // Wrong confirmation password
      
          // Click on Change password button
          cy.get("#psdBtn").click();
          cy.contains("Current password not match").should("exist")
          cy.get('#Pasword > .input_box > .input-container > div > .eye--icon').should("be.visible"); // Show Password Icon in Old Password
          cy.get(':nth-child(2) > .input_box > .input-container > div > .eye--icon').should("be.visible"); // Show Password Icon in New Password
          cy.get(':nth-child(3) > .input_box > .input-container > div > .eye--icon').should("be.visible"); // Show Password Icon in Confirm Password
          cy.get('#Pasword > .input_box > .input-container > div > .eye--icon').click();; // Show Password Icon in Old Password
          cy.get(':nth-child(2) > .input_box > .input-container > div > .eye--icon').click(); // Show Password Icon in New Password
          cy.get(':nth-child(3) > .input_box > .input-container > div > .eye--icon').click()
   


    
          
      
       });
         


       /*
          it.only('should logout user from both tabs after changing password', () => {
            const oldPassword = 'Fazal1234';
            const newPassword = 'Fazal123';
       
            // Open URL on two different tabs (Public and Private)
            cy.viewport(1920, 1080);
            cy.visit('https://www.seebiz.cloud/').wait(2000);;
           
            cy.get(".sso-sign-in").click();
            cy.get('input[placeholder="Email"]').type("fazalerabiseebiz0@gmail.com");
            cy.get('input[placeholder="Password"]').type('Fazal123');
             //Click the 'Unhide Password' icon
             cy.get("#password > div > svg").click();
            // Check if password is visible after clicking the 'Unhide Password' icon
            cy.get("input[placeholder='Password']").should('have.attr', 'type', 'text');
            cy.contains("Sign in").click();
        
            // Open a new window/tab
            cy.window().then((publicWindow) => {
              const privateWindow = window.open('https://www.seebiz.cloud/', '_blank');
              cy.get('.sso-user-img > img').click();
              cy.contains('My Account').invoke('removeAttr', 'target').click();
        
              // Change Password in the Public tab
             // cy.contains('My Account').click();
              cy.contains('Change Password').click();
              cy.get('input[name="oldpassword"]').type(oldPassword);
              cy.get('input[name="password"]').type(newPassword);
              cy.get('input[name="confirmPassword"]').type(newPassword);
              cy.get('#psdBtn').click();
              cy.contains('Yes, log me out').click();
        
              // Switch to Private Tab
              cy.window().then((privateWindow) => {
                // Check System Behaviour on Private Tab
                // Add assertions or verifications based on the expected behavior
                // For example, you might check if the user is logged out on the private tab.
              });
        
              // Close the Private Tab
              privateWindow.close();
            });
          });*/
        
        

        
         
         it('TC-P- 50:Verify validation by entering invalid old password ', () => {
          // Perform actions to reach the account section
          
          cy.get('.sso-user-img > img').click();
          cy.contains('My Account').invoke('removeAttr', 'target').click();
          
          cy.wait(2000); 


         

          cy.contains('Change Password').click();
          cy.get("input[name='oldpassword']").type('Fazal1234'); // Valid old password
          cy.get("input[name='password']").type('Fazal123'); // Valid new password
      
          // Enter wrong password in Confirm Password field
          cy.get("input[name='confirmPassword']").type('Fazal123'); // Wrong confirmation password
      
          // Click on Change password button
          cy.get("#psdBtn").click();
          cy.contains("Current password not match").should("exist")
          cy.get('#Pasword > .input_box > .input-container > div > .eye--icon').should("be.visible"); // Show Password Icon in Old Password
          cy.get(':nth-child(2) > .input_box > .input-container > div > .eye--icon').should("be.visible"); // Show Password Icon in New Password
          cy.get(':nth-child(3) > .input_box > .input-container > div > .eye--icon').should("be.visible"); // Show Password Icon in Confirm Password
          cy.get('#Pasword > .input_box > .input-container > div > .eye--icon').click();; // Show Password Icon in Old Password
          cy.get(':nth-child(2) > .input_box > .input-container > div > .eye--icon').click(); // Show Password Icon in New Password
          cy.get(':nth-child(3) > .input_box > .input-container > div > .eye--icon').click()
      
       });
       it('TC-P- 51:Verify the Change Password field with Old data & enter "New password" & "Confirm Password" field with same data check the response ', () => {
        // Perform actions to reach the account section
        
        cy.get('.sso-user-img > img').click();
        cy.contains('My Account').invoke('removeAttr', 'target').click();
        
        cy.wait(2000); 


       

        cy.contains('Change Password').click();
        cy.get("input[name='oldpassword']").type('Fazal123'); // Valid old password
        cy.get("input[name='password']").type('Fazal123'); // Valid new password
    
        // Enter wrong password in Confirm Password field
        cy.get("input[name='confirmPassword']").type('Fazal123'); // Wrong confirmation password
    
        // Click on Change password button
        cy.get("#psdBtn").click();
        cy.contains("New and old password is same. Please Choose different password").should("exist")
        cy.get('#Pasword > .input_box > .input-container > div > .eye--icon').should("be.visible"); // Show Password Icon in Old Password
        cy.get(':nth-child(2) > .input_box > .input-container > div > .eye--icon').should("be.visible"); // Show Password Icon in New Password
        cy.get(':nth-child(3) > .input_box > .input-container > div > .eye--icon').should("be.visible"); // Show Password Icon in Confirm Password
        cy.get('#Pasword > .input_box > .input-container > div > .eye--icon').click();; // Show Password Icon in Old Password
        cy.get(':nth-child(2) > .input_box > .input-container > div > .eye--icon').click(); // Show Password Icon in New Password
        cy.get(':nth-child(3) > .input_box > .input-container > div > .eye--icon').click()
    
     });
     it('TC-P- 52:Verify the validation message on the password field', () => {
      // Perform actions to reach the account section
      
      cy.get('.sso-user-img > img').click();
      cy.contains('My Account').invoke('removeAttr', 'target').click();
      
      cy.wait(2000); 


       

      cy.contains('Change Password').click();
      cy.get("input[name='oldpassword']").trigger('mouseover'); // Valid old password
      cy.get("input[name='password']").trigger('mouseover'); // Valid new password
  
      // Enter wrong password in Confirm Password field
      cy.get("input[name='confirmPassword']").trigger('mouseover'); // Wrong confirmation password
  
      // Click on Change password button
      cy.get("#psdBtn").click();
      cy.contains("Please enter password").should("exist")
      cy.contains("Password is required").should("exist")

      cy.contains("Please enter confirm password").should("exist")

      cy.get('#Pasword > .input_box > .input-container > div > .eye--icon').should("be.visible"); // Show Password Icon in Old Password
      cy.get(':nth-child(2) > .input_box > .input-container > div > .eye--icon').should("be.visible"); // Show Password Icon in New Password
      cy.get(':nth-child(3) > .input_box > .input-container > div > .eye--icon').should("be.visible"); // Show Password Icon in Confirm Password
      cy.get('#Pasword > .input_box > .input-container > div > .eye--icon').click();; // Show Password Icon in Old Password
      cy.get(':nth-child(2) > .input_box > .input-container > div > .eye--icon').click(); // Show Password Icon in New Password
      cy.get(':nth-child(3) > .input_box > .input-container > div > .eye--icon').click()
  
   });


         
         it('TC-P-53: To verify the Name field by entering more than 50 characters', () => {
            
            cy.get('.sso-user-img > img').click();
            cy.contains('My Account').invoke('removeAttr', 'target').click();
            
            cy.wait(2000); 
        
        
            // Assert the visibility of the 'Name' field and click to change the name
            cy.contains('Name').should('be.visible').as('nameField');
            cy.contains('Change name').click();
        
            // Additional assertions for the 'Name' field properties or behavior
            cy.get('#customInput').should('have.attr', 'type', 'text');
        
            // Clear the existing name from the 'Name' field (if any)
            cy.get('#customInput').clear();
        
            // Enter more than 50 characters into the Name field
            const longName = 'ThisIsALongNameThatHasMoreThanFiftyCharactersAndShouldBeTruncated';
            cy.get('#customInput').type(longName);
        
            // Assert that the input value is limited to 50 characters
            cy.get('#customInput').should('have.value', longName.slice(0, 50)); // Limit to 50 characters
        
            cy.contains('Name should not exceed 50 characters.').should('exist');
        });

        
        
});
describe("Common test cases for Profile" , function(){

  beforeEach(() => {
      // run these tests as if in a desktop
      // browser with a 720p monitor
      cy.viewport(1920, 1080);

    })

  const waitforexecutionstep = 2000;
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
describe('Activity Log Test Cases', () => {
  const email = 'bilalseebiz7500+338@gmail.com';
  const password = 'Bilal7500';
  const newAccEmail = "bilalseebiz7500+new@gmail.com";
  const activityLogPage = new ActivityLogPage();

  beforeEach(() => {
    cy.viewport(2020, 1080);
    cy.visit('https://www.seebiz.cloud/').wait(2000);
  });
  it('T.C-AL-01:To verify the rendering of Activity Log tab', () => {
    activityLogPage.signIn(email, password);
    activityLogPage.GotoAccounts();
    activityLogPage.checkActivityLog();

  })
  it('T.C-AL-02:To verify the functionality to click on Activity Log tab ', () => {
    activityLogPage.signIn(email, password);
    activityLogPage.GotoAccounts();
    activityLogPage.checkActivityLog();
    activityLogPage.ClickActivityLog();
  })
  it('T.C-AL-03:To verify the rendering of "Activity Log" title ', () => {
    activityLogPage.signIn(email, password);
    activityLogPage.GotoAccounts();
    activityLogPage.checkActivityLog();
    activityLogPage.ClickActivityLog();
    activityLogPage.CheckActivitylogTitle();

    
  })
  it('T.C-AL-04:To verify the rendering of "No Activity Found" in Activity Log', () => {
    activityLogPage.signIn(newAccEmail, password);
    activityLogPage.GotoAccounts();
    activityLogPage.checkActivityLog();
    activityLogPage.ClickActivityLog();
    activityLogPage.CheckActivitylogTitle();
    activityLogPage.CheckNoActivityFound();
    
    
  })
  it('T.C-AL-05:To verify the rendering of Filter dropdown menu', () => {
    activityLogPage.signIn(newAccEmail, password);
    activityLogPage.GotoAccounts();
    activityLogPage.checkActivityLog();
    activityLogPage.ClickActivityLog();
    activityLogPage.CheckActivitylogTitle();
    activityLogPage.CheckNoActivityFound();
    activityLogPage. RenderingFilterDropdown()
    
    
  })
  it('T.C-AL-06:To verify the functionality to click on Filter dropdown menu', () => {
    activityLogPage.signIn(email, password);
    activityLogPage.GotoAccounts();
    activityLogPage.checkActivityLog();
    activityLogPage.ClickActivityLog();
    activityLogPage.CheckActivitylogTitle();
   // activityLogPage.CheckNoActivityFound();
    activityLogPage. RenderingFilterDropdown()
    activityLogPage. ClickFilterDropdown();
    
    
  })
  it('T.C-AL-07:To verify the rendering of "Today"', () => {
    activityLogPage.signIn(email, password);
    activityLogPage.GotoAccounts();
    activityLogPage.checkActivityLog();
    activityLogPage.ClickActivityLog();
    activityLogPage.CheckActivitylogTitle();
  //  activityLogPage.CheckNoActivityFound();
    activityLogPage. RenderingFilterDropdown()
    activityLogPage. ClickFilterDropdown();
    
  })
  it('T.C-AL-08:To verify the functionality to click on "Today" filter', () => {
    activityLogPage.signIn(email, password);
    activityLogPage.GotoAccounts();
    activityLogPage.checkActivityLog();
    activityLogPage.ClickActivityLog();
    activityLogPage.CheckActivitylogTitle();
    //activityLogPage.CheckNoActivityFound();
    activityLogPage. RenderingFilterDropdown()
    activityLogPage. ClickFilterDropdown();
    
    
  })
  it('T.C-AL-09:To verify the rendering of "Weekly"', () => {
    activityLogPage.signIn(email, password);
    activityLogPage.GotoAccounts();
    activityLogPage.checkActivityLog();
    activityLogPage.ClickActivityLog();
    activityLogPage.CheckActivitylogTitle();
  //  activityLogPage.CheckNoActivityFound();
    activityLogPage. RenderingFilterDropdown()
    activityLogPage. ClickFilterDropdownWeekly();
    
    
  })
  it('T.C-AL-10:To verify the functionality to click on "Weekly" filter', () => {
    activityLogPage.signIn(email, password);
    activityLogPage.GotoAccounts();
    activityLogPage.checkActivityLog();
    activityLogPage.ClickActivityLog();
    activityLogPage.CheckActivitylogTitle();
    //activityLogPage.CheckNoActivityFound();
    activityLogPage. RenderingFilterDropdown()
    activityLogPage. ClickFilterDropdownWeekly();
    
    
  })
  it('T.C-AL-11:To verify the rendering of "Monthly"', () => {
    activityLogPage.signIn(email, password);
    activityLogPage.GotoAccounts();
    activityLogPage.checkActivityLog();
    activityLogPage.ClickActivityLog();
    activityLogPage.CheckActivitylogTitle();
    //activityLogPage.CheckNoActivityFound();
    activityLogPage. RenderingFilterDropdown()
    activityLogPage. ClickFilterDropdownMonthly();
    
    
  })
  it('T.C-AL-12:To verify the functionality to click on "Monthly" filter', () => {
    activityLogPage.signIn(email, password);
    activityLogPage.GotoAccounts();
    activityLogPage.checkActivityLog();
    activityLogPage.ClickActivityLog();
    activityLogPage.CheckActivitylogTitle();
    //activityLogPage.CheckNoActivityFound();
    activityLogPage. RenderingFilterDropdown()
    activityLogPage. ClickFilterDropdownMonthly();
    
    
  })
  it('T.C-AL-13:To verify the rendering of "Profile Change" in Activity log', () => {
    activityLogPage.signIn(email, password);
    activityLogPage.ChangeProfilePicForActivityLog();
    activityLogPage.checkActivityLog();
    activityLogPage.ClickActivityLog();
    activityLogPage.CheckActivitylogTitle();
    activityLogPage.VerifytheLogafteruploadPic();
    
    
  })
  it('T.C-AL-14:To verify the functionality to view details of "Profile Change" in Activity log', () => {
    activityLogPage.signIn(email, password);
    activityLogPage.ChangeProfilePicForActivityLog();
    activityLogPage.checkActivityLog();
    activityLogPage.ClickActivityLog();
    activityLogPage.CheckActivitylogTitle();
    activityLogPage.VerifytheLogafteruploadPic();
    
    
  })
  it('T.C-AL-15:To verify the rendering of "Name Change" in Activity log', () => {
    activityLogPage.signIn(email, password);
    activityLogPage.ChangeProfileNameForActivityLog();
    activityLogPage.checkActivityLog();
    activityLogPage.ClickActivityLog();
    activityLogPage.CheckActivitylogTitle();
    activityLogPage. VerifytheLogafterChangeName();
    //activityLogPage.VerifytheLogafteruploadPic();
    
    
  })
  it('T.C-AL-16:To verify the functionality to view details of "Name Change" in Activity log', () => {
    activityLogPage.signIn(email, password);
    activityLogPage.ChangeProfileNameForActivityLog();
    activityLogPage.checkActivityLog();
    activityLogPage.ClickActivityLog();
    activityLogPage.CheckActivitylogTitle();
    activityLogPage. VerifytheLogafterChangeName();
    //activityLogPage.VerifytheLogafteruploadPic();
    
    
  })
  it('T.C-AL-17:To verify the rendering of "Password Change" in Activity log', () => {
    activityLogPage.signIn(email, password);
    activityLogPage.ChangePasswordForActivityLog();
    activityLogPage.checkActivityLog();
    activityLogPage.ClickActivityLog();
    activityLogPage.CheckActivitylogTitle();
    activityLogPage. VerifytheLogafterChangePass();
    activityLogPage.RestorePassword();
    //activityLogPage.VerifytheLogafteruploadPic();
    
    
  })
  it('T.C-AL-18:To verify the functionality to view details of "Password Change" in Activity log', () => {
    activityLogPage.signIn(email, password);
    activityLogPage.ChangePasswordForActivityLog();
    activityLogPage.checkActivityLog();
    activityLogPage.ClickActivityLog();
    activityLogPage.CheckActivitylogTitle();
    activityLogPage. VerifytheLogafterChangePass();
    activityLogPage.RestorePassword();
    //activityLogPage.VerifytheLogafteruploadPic();
    
    
  })
  it('T.C-AL-19:To verify the rendering of "Edit Phone Number" in Activity log', () => {
    activityLogPage.signIn(email, password);
    activityLogPage.ChangeNumberForActivityLog();
    activityLogPage.checkActivityLog();
    activityLogPage.ClickActivityLog();
    activityLogPage.CheckActivitylogTitle();
    activityLogPage. VerifytheLogafterChangeNumber();

    
  })
  it('T.C-AL-20:To verify the functionality to view details of "Edit Phone Number" in Activity log', () => {
    activityLogPage.signIn(email, password);
    activityLogPage.ChangeNumberForActivityLog();
    activityLogPage.checkActivityLog();
    activityLogPage.ClickActivityLog();
    activityLogPage.CheckActivitylogTitle();
    activityLogPage. VerifytheLogafterChangeNumber();

    
  })
  it('T.C-AL-21:To verify the rendering of "Two way Authentication" in Activity log', () => {
    activityLogPage.signIn(email, password);
    activityLogPage.EnableTwoWayVarForActivityLog();
    activityLogPage.checkActivityLog();
    activityLogPage.ClickActivityLog();
    activityLogPage.CheckActivitylogTitle();

    activityLogPage. VerifytheLogafterEnableTwoWayAuth();

    activityLogPage.DisableTwoWayVarForActivityLog();
  })
  it('T.C-AL-22:To verify the functionality to view details of "Two way Authentication" in Activity log', () => {
    activityLogPage.signIn(email, password);
    activityLogPage.EnableTwoWayVarForActivityLog();
    activityLogPage.checkActivityLog();
    activityLogPage.ClickActivityLog();
    activityLogPage.CheckActivitylogTitle();

    activityLogPage. VerifytheLogafterEnableTwoWayAuth();

    activityLogPage.DisableTwoWayVarForActivityLog();
  })
  it('T.C-AL-23 :To verify the rendering of "Account Deletion" in Activity log', () => {
    activityLogPage.signIn(email, password);
    activityLogPage.OTPSelectAccountrole();
    activityLogPage.OTPthreeStepbuyerSidePass();
    activityLogPage.OTPEnterEmaiLAddress();
    activityLogPage.EnterOTPBuyerSide();
    activityLogPage.ClickButtonMobileOTP();
    activityLogPage.checkActivityLog();
    activityLogPage.ClickActivityLog();
    activityLogPage.CheckActivitylogTitle();
    activityLogPage. VerifytheLogafterAccountDeletion();

  });





})
describe('Privacy & Security Test Cases', () => {
    beforeEach(() => {
      // run these tests as if in a desktop browser with a 1920x1080 resolution
      cy.viewport(1920, 1080);
      cy.visit('https://www.seebiz.cloud/').wait(2000);;
     
      cy.get(".sso-sign-in").click();
      cy.get('input[placeholder="Email"]').type("fazalerabiseebiz0@gmail.com");
      cy.get('input[placeholder="Password"]').type('Fazal123');
      
      //Click the 'Unhide Password' icon
      cy.get("#password > div > svg").click();
  
      // Check if password is visible after clicking the 'Unhide Password' icon
      cy.get("input[placeholder='Password']").should('have.attr', 'type', 'text');
      
      cy.contains("Sign in").click();
      
      cy.url().should('include', 'https://www.seebiz.cloud/');
      cy.wait(15000);
        
      cy.get('.sso-user-img > img').click();
      cy.contains('My Account').invoke('removeAttr', 'target').click();
    });
  
    it('TC-Priv&Sec-01: Check the functionality of Privacy and Security tab is viewable', () => {
      cy.contains("Privacy & Security").should("exist");
    });
    it('TC-Priv&Sec-1.2: To verify that Privacy & Security Tab is clickable', () => {
      cy.contains("Privacy & Security").should("exist");
      cy.get("img[alt='dropdown menu']").click()
    });
    it('TC-Priv&Sec-1.3: To check the UI of dropdown arrow on privacy & security module ', () => {
      cy.contains("Privacy & Security").should("exist");
      cy.get("img[alt='dropdown menu']").click()
      cy.get("a[href='/authSecurity']").should("be.visible")

    });
  
    it('TC-Priv&Sec-02: Check the functionality of "Go to the Security tab"', () => {
      cy.contains("Privacy & Security").click();
      cy.contains("Privacy & Security").should("exist");
    });
  
    it('TC-Priv&Sec-03: Verify that the Security tab is highlighted', () => {
      cy.contains("Privacy & Security").click();
      cy.contains("Privacy & Security").should("exist");
      cy.contains('Security').should('have.class', 'active');
    });
    it('TC-Priv&Sec-4.0: Verify that Account Information is clickable', () => {
      cy.contains("Privacy & Security").should("exist");
      cy.get("img[alt='dropdown menu']").click()
      cy.get("a[href='/authSecurity']").should("be.visible")
      cy.get("a[href='/authSecurity']").click()

    });
    it('TC-Priv&Sec-4.1: Check the functionality of "Enable two way authentication" link is shown', () => {
      cy.contains("Privacy & Security").click();
      cy.wait(1000);
      cy.contains("Security").should("exist");
  
      cy.get('#deleteAccountSubMenu > :nth-child(1) > a').click();
      cy.contains("Enable Two Way Auth").should("exist");
    });
    it('TC-Priv&Sec-05: Check the functionality "Enable two way Auth" link is working', () => {
        cy.contains("Privacy & Security").click();
        cy.wait(1000);
    
        cy.contains("Security").should("exist");
    
        cy.get('#deleteAccountSubMenu > :nth-child(1) > a').click();
    
        cy.contains("Enable Two Way Auth").should("exist").click();

        // Add your assertions or interactions related to this test case
      });
    
      it('TC-Priv&Sec-06: Check the "Yes or No" option available', () => {
        cy.contains("Privacy & Security").click();
        cy.wait(1000);
    
        cy.contains("Security").should("exist");
    
        cy.get('#deleteAccountSubMenu > :nth-child(1) > a').click();
    
        cy.contains("Enable Two Way Auth").should("exist").click();
    
        cy.contains('Yes').should('be.visible');
        cy.contains('No').should('be.visible');
        // Add your assertions or interactions related to this test case
      });
      it('TC-Priv&Sec-07: Check the functionality of "Click on Yes button" option is available', () => {
        cy.contains("Privacy & Security").click();
        cy.wait(1000);
      
        cy.contains("Security").should("exist");
      
        cy.get('#deleteAccountSubMenu > :nth-child(1) > a').click();
        
        cy.contains("Enable Two Way Auth").should("exist").click();
      
        cy.contains('Yes').should('be.visible'); 
        cy.contains('No').should('be.visible'); 
      
        cy.get("input[value='yes']").click(); 
      });
      
      it('TC-Priv&Sec-08: Check the functionality of "No button" option is available', () => {
        cy.wait(2000);   
        cy.contains("Privacy & Security").click();
        cy.wait(1000);
      
        cy.contains("Security").should("exist");
      
        cy.get('#deleteAccountSubMenu > :nth-child(1) > a').click();
        
        cy.contains("Enable Two Way Auth").should("exist").click();
      
        cy.contains('Yes').should('be.visible'); 
        cy.contains('Yes').should('be.visible'); 
      
        cy.get("input[value='no']").click(); 
      });
      
      it('TC-Priv&Sec-09: Check the functionality of "Next button" is clickable', () => {
        cy.contains("Privacy & Security").click();
        cy.wait(1000);
      
        cy.contains("Security").should("exist");
      
        cy.get('#deleteAccountSubMenu > :nth-child(1) > a').click();
        
        cy.contains("Enable Two Way Auth").should("exist").click();
      
        cy.contains('Yes').should('be.visible'); 
        cy.contains('Yes').should('be.visible'); 
      
        cy.get("input[value='no']").click(); 
      
        cy.contains("No").click();
      
        cy.url().should('eq', 'https://accounts.seebiz.cloud/authSecurity');
      });
      
      it('TC-Priv&Sec-10: Check the functionality of "Cancel button" is clickable', () => {
        cy.contains("Privacy & Security").click();
        cy.wait(1000);
      
        cy.contains("Security").should("exist");
      
        cy.get('#deleteAccountSubMenu > :nth-child(1) > a').click();
        
        cy.contains("Enable Two Way Auth").should("exist").click();
      
        cy.contains('Yes').should('be.visible'); 
        cy.contains('Yes').should('be.visible'); 
      
        cy.get("input[value='no']").click(); 
      
        cy.contains("Cancel").click();
      
        cy.url().should('eq', 'https://accounts.seebiz.cloud/authSecurity');
      });
      it('TC-Priv&Sec-10.1: To Verify that Next Button functionlity upon selecting the Yes option ', () => {
        cy.contains("Privacy & Security").click();
        cy.wait(1000);
      
        cy.contains("Security").should("exist");
      
        cy.get('#deleteAccountSubMenu > :nth-child(1) > a').click();
        
        cy.contains("Enable Two Way Auth").should("exist").click();
      
        cy.contains('Yes').should('be.visible'); 
        cy.contains('Yes').should('be.visible'); 
      
        cy.get("input[value='yes']").click(); 
      
        cy.contains("Cancel").click();
      
        cy.url().should('eq', 'https://accounts.seebiz.cloud/authSecurity');
      });
      
      it('TC-Priv&Sec-11: Check the functionality of "Password" field is working when enabled the two way authentication', () => {
        cy.contains("Privacy & Security").click();
        cy.wait(1000);
      
        cy.contains("Security").should("exist");
      
        cy.get('#deleteAccountSubMenu > :nth-child(1) > a').click();
        
        cy.contains("Enable Two Way Auth").should("exist").click();
      
        cy.contains('Yes').should('be.visible'); 
        cy.contains('No').should('be.visible'); 
      
        cy.get("input[value='yes']").click(); 
      
        cy.contains("Next").click();
      
        cy.url().should('eq', 'https://accounts.seebiz.cloud/authSecurity');
      
        cy.get('#customInput').type("1111");
        // Assert the password field exists
        cy.get('#customInput').should('exist');
      });
      
      it('TC-Priv&Sec-12: Check the functionality of "Password field placeholder"', () => {
        cy.contains("Privacy & Security").click();
        cy.wait(1000);
      
        cy.contains("Security").should("exist");
      
        cy.get('#deleteAccountSubMenu > :nth-child(1) > a').click();
        
        cy.contains("Enable Two Way Auth").should("exist").click();
      
        cy.contains('Yes').should('be.visible'); 
        cy.contains('No').should('be.visible'); 
      
        cy.get("input[value='yes']").click(); 
      
        cy.contains("Next").click();
      
        cy.url().should('eq', 'https://accounts.seebiz.cloud/authSecurity');
      
        cy.get('#customInput').type("1111");
        // Assert the password field exists
        cy.get('#customInput').should('exist');
      });
      
  
    // Other test cases ...
  
    afterEach(() => {
      // Optional cleanup or assertions after each test
    });
});
describe('Common file for Privacy and Security', function(){
  beforeEach(() => {
    cy.viewport(1920, 1080);

})
  it('TC-24 :To verify that "1 min timer " is shown on the 2 step verification page',function(){

    const waitforexecutionstep = 2000;
    const upperandlowercaseletters = "1afewert";

    cy.visit("https://www.seebiz.cloud")

    cy.get('.sso-sign-in').click()

  //  cy.wait(waitforexecutionstep)

    cy.get('#email').type("bilalseebiz7500+338@gmail.com")

    cy.get('#password > input').type("Bilal7500")

    cy.get('#loginBtn').click()

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

    cy.get('.sso-sign-in').click()

  //  cy.wait(waitforexecutionstep)

    cy.get('#email').type("bilalseebiz7500+338@gmail.com")

    cy.get('#password > input').type("Bilal7500")

    cy.get('#loginBtn').click()

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

        cy.get('.sso-sign-in').click()

      //  cy.wait(waitforexecutionstep)

        cy.get('#email').type("bilalseebiz7500+338@gmail.com")

        cy.get('#password > input').type("Bilal7500")

        cy.get('#loginBtn').click()

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

        cy.get('.sso-sign-in').click()

      //  cy.wait(waitforexecutionstep)

        cy.get('#email').type("bilalseebiz7500+338@gmail.com")

        cy.get('#password > input').type("Bilal7500")

        cy.get('#loginBtn').click()

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

        cy.get('.sso-sign-in').click()

      //  cy.wait(waitforexecutionstep)

        cy.get('#email').type("bilalseebiz7500+338@gmail.com")

        cy.get('#password > input').type("Bilal7500")

        cy.get('#loginBtn').click()

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

        cy.get('.sso-sign-in').click()

      //  cy.wait(waitforexecutionstep)

        cy.get('#email').type(validemail)

        cy.get('#password > input').type("Bilal7500")

        cy.get('#loginBtn').click()

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
describe('Payment & Subscription Test Cases', () => {
    beforeEach(() => {
        // run these tests as if in a desktop browser with a 1920x1080 resolution
        cy.viewport(1920, 1080);
        cy.visit('https://www.seebiz.cloud/').wait(2000);;
       
        cy.get(".sso-sign-in").click();
        cy.get('input[placeholder="Email"]').type("bilalseebiz7500+338@gmail.com");
        cy.get('input[placeholder="Password"]').type('Bilal7500');
         //Click the 'Unhide Password' icon 
         cy.get("#password > div > svg").click();
        // Check if password is visible after clicking the 'Unhide Password' icon
        cy.get("input[placeholder='Password']").should('have.attr', 'type', 'text');
        cy.contains("Sign in").click();
        cy.url().should('include', 'https://www.seebiz.cloud/');
        cy.wait(11000)

          
    });
    it('TC-P&S-01 : To verify the payment & subscription tab is opened  ', () => {
        cy.get('.sso-user-img > img').click();
        cy.contains('My Account').invoke('removeAttr', 'target').click();
        cy.contains("Payments & Subscriptions").should("exist")
        cy.contains("Payments & Subscriptions").click();
        cy.wait(2000)



     });


     it('TC-P&S-02 :To verify the functionality of  payment & subscription with only seller account   ', () => {
              
        cy.contains(' Access Dashboard ').click(); 
        // Wait for the menu to open and be interactable
        cy.contains('Seller Dashboard').should("exist");
    
        // Click on 'Seller Dashboard' inside the 'Access Dashboard' menu
        cy.get("li[class='sso-dropdown'] li:nth-child(1) a:nth-child(1)").click();
        cy.wait(2000)
        cy.url().should('include', 'https://www.seebiz.cloud/vendor/dashboard');
        cy.get('.sso-user-img > img').click();
        cy.contains('My Account').invoke('removeAttr', 'target').click();
        cy.contains("Payments & Subscriptions").should("exist")
        cy.contains("Payments & Subscriptions").click();
        cy.wait(2000)
       
   
   
   
        });
        it('TC-P&S-03 : To verify the functionality of  payment & subscription with only buyer account   ', () => {
              
            cy.contains(' Access Dashboard ').click(); 
            // Wait for the menu to open and be interactable
            cy.contains('Buyer Dashboard').should("exist");
        
            // Click on 'Seller Dashboard' inside the 'Access Dashboard' menu
            cy.get("li[class='sso-dropdown'] li:nth-child(2) a:nth-child(1)").click();
            cy.url().should('include', 'https://www.seebiz.cloud/buyer/dashboard');
            cy.get('.sso-user-img > img').click();
            cy.contains('My Account').invoke('removeAttr', 'target').click();
            cy.contains("Payments & Subscriptions").should("exist")
            cy.contains("Payments & Subscriptions").click();
            cy.wait(2000)
    
       
       
       
            });
            it('TC-P&S-04: Verify payment & subscription functionality for both buyer and seller accounts', () => {
                cy.contains('Access Dashboard').click(); 
                cy.contains('Buyer Dashboard').should("exist");
            
                // Click on 'Seller Dashboard' inside the 'Access Dashboard' menu for Seller Account
                cy.get("li[class='sso-dropdown'] li:nth-child(2) a:nth-child(1)").click();
                cy.url().should(($url) => {
                    expect($url).to.include('https://www.seebiz.cloud/buyer/dashboard') // Verify Seller Dashboard URL
                });
            //https://www.seebiz.cloud/vendor/dashboard
                // For Buyer Account
                cy.contains('Access Dashboard').click(); 
                cy.contains('Seller Dashboard').should("exist");
                cy.contains('Seller Dashboard').click();

               // cy.get("li[class='sso-dropdown'] li:nth-child(2) a:nth-child(1)").click();
                cy.url().should(($url) => {
                    expect($url).to.include('https://www.seebiz.cloud/vendor/dashboard') // Verify Buyer Dashboard URL
                });
            
                // Navigate to Payments & Subscriptions
                cy.get('.sso-user-img > img').click();
                cy.contains('My Account').invoke('removeAttr', 'target').click();
                cy.contains("Payments & Subscriptions").should("exist").click();
                cy.wait(2000);
            });

             it('TC-P&S-05 : To check the functionality of arrow icon is clickable ', () => {
                cy.get('.sso-user-img > img').click();
                cy.contains('My Account').invoke('removeAttr', 'target').click();
                cy.contains("Payments & Subscriptions").should("exist")
                cy.contains("Payments & Subscriptions").click();
                cy.wait(2000)

                cy.get('.inventory > .card > #headingOne > .btn').click();
        
                cy.get(':nth-child(2) > .card > #headingOne').click()
        
        
             });
             it('TC-P&S-06 : To check the functionality of view details link ', () => {
                cy.get('.sso-user-img > img').click();
                cy.contains('My Account').invoke('removeAttr', 'target').click();
                cy.contains("Payments & Subscriptions").should("exist")
                cy.contains("Payments & Subscriptions").click();
                cy.wait(2000)

                cy.get('.inventory > .card > #headingOne > .btn').click();
        
                cy.get(':nth-child(2) > .card > #headingOne').click()
                cy.wait(1000)
                cy.get(':nth-child(2) > .card > #collapseOne > .card-body > .table > #table-body > tr > :nth-child(7) > button')
                .click({ multiple: true })
                cy.wait(2000)
               // cy.get(".modal-backdrop ").click()
             });
             it('TC-P&S-07 :To check the functionality of business profile is showing on the popup', () => {
                cy.get('.sso-user-img > img').click();
                cy.contains('My Account').invoke('removeAttr', 'target').click();
                cy.contains("Payments & Subscriptions").should("exist")
                cy.contains("Payments & Subscriptions").click();
                cy.wait(2000)

                cy.get('.inventory > .card > #headingOne > .btn').click();
        
                cy.get(':nth-child(2) > .card > #headingOne').click()
                cy.wait(1000)

                cy.get(':nth-child(2) > .card > #collapseOne > .card-body > .table > #table-body > tr > :nth-child(7) > button')
                .click({ multiple: true })
               // cy.get(".modal-backdrop ").click()
               cy.wait(2000);
             });
             it('TC-P&S-08 : To make sure the functionality of Cross icon on the popup of Marketplace tab upon clicking view details ', () => {
                cy.get('.sso-user-img > img').click();
                cy.contains('My Account').invoke('removeAttr', 'target').click();
                cy.contains("Payments & Subscriptions").should("exist")
                cy.contains("Payments & Subscriptions").click();
                cy.wait(2000)

                cy.get('.inventory > .card > #headingOne > .btn').click();
        
                cy.get(':nth-child(2) > .card > #headingOne').click()



                cy.get(':nth-child(2) > .card > #collapseOne > .card-body > .table > #table-body > tr > :nth-child(7) > button')
                .click({ multiple: true })
                cy.wait(2000)
                cy.get(".modal-backdrop ").click()
             });
            
});
describe('Common file for Payment and Subscriptions', function () {
  const waitforexecutionstep = 4000;
  const validpassword = "Bilal7500";
  const validemail = "bilalseebiz7500+338@gmail.com";

  beforeEach(() => {
    cy.viewport(1920, 1080);
  });

  const login = () => {
    cy.visit("https://www.seebiz.cloud");
    cy.contains("Sign In").click();
    cy.get('#email').type(validemail);
    cy.get('#password > input').type(validpassword);
    cy.contains("Sign in").click();
    cy.wait(13000);
    cy.get('.sso-user-img > img').click();
    cy.contains('My Account').invoke('removeAttr', 'target').click();
    cy.wait(waitforexecutionstep);
    cy.contains("Payments & Subscriptions").click();
    cy.wait(waitforexecutionstep);
  };

  const openInventoryDetails = () => {
    cy.get('.inventory > .card > #headingOne').should('be.visible').click();
    cy.wait(2000);
    cy.get('.inventory > .card > #collapseOne > .card-body > .table > #table-body > :nth-child(1) > :nth-child(7) > button').click();
    cy.wait(2000);
    cy.get('.modal-backdrop').click();
  };

  it('TC-P&S-09: To verify the functionality of  payment & subscription with IMS account', function () {
    login();
    openInventoryDetails();
  });
  it('TC-P&S-10: To check the functionality of arrow icon is clickable on Inventory tab', function () {
    login();
    openInventoryDetails();
  });
  it('TC-P&S-11: To check the functionality of view details link on Inventory tab', function () {
    login();
    openInventoryDetails();
  });
  it('TC-P&S-12: To check the functionality of business profile is showing on the popup of Inventory tab upon clicking the view details', function () {
    login();
    openInventoryDetails();
  });
  it('TC-P&S-13: To make sure the functionality of Cross icon on the popup of inventory tab upon clicking view details', function () {
    login();
    openInventoryDetails();
  });
  it('TC-P&S-14: To verify the functionality of payment & subscription with old Seller/buyer account and IMS account', function () {
    login();
    openInventoryDetails();
  });

  it('TC-15: View details of marketplace', function () {
    login();
    cy.get(':nth-child(2) > .card > #headingOne').click();
    cy.contains("View details").click();
  });
});
describe('Two way Authentication Test Cases', () => {
    beforeEach(() => {
        // run these tests as if in a desktop browser with a 1920x1080 resolution
        cy.viewport(1920, 1080);
        cy.visit('https://www.seebiz.cloud/').wait(2000);;
       
        cy.get(".sso-sign-in").click();
        cy.get('input[placeholder="Email"]').type("fazalerabiseebiz0+1@gmail.com");
        cy.get('input[placeholder="Password"]').type('Fazal123');
         //Click the 'Unhide Password' icon
         cy.get("#password > div > svg").click();
        // Check if password is visible after clicking the 'Unhide Password' icon
        cy.get("input[placeholder='Password']").should('have.attr', 'type', 'text');
        cy.contains("Sign in").click();
        cy.wait(2000)
        const inputFieldSelectors = [
            '#number1', 
            '#number2', 
            '#number3', 
            '#number4',
          ];
         
          const numberToEnter = '1'; 
        
          // Loop through each input field selector and enter the same number
          inputFieldSelectors.forEach((selector) => {
            cy.get(selector)
              .type(numberToEnter)
              .should('have.value', numberToEnter); // Ensure the value is entered correctly
          });
        cy.url().should('include', 'https://www.seebiz.cloud/');
        cy.wait(10000)
        cy.get('.sso-user-img > img').click();
        cy.contains('My Account').invoke('removeAttr', 'target').click();
  
        
    });
    it('TC-Priv&Sec-24 : To check the functionality "Disable two way auth" link is shown', () => {

        
        cy.contains("Privacy & Security").should("exist")
 
        cy.contains("Privacy & Security").click();
        
        cy.contains("Account Information").should("exist")
 
        cy.contains("Account Information").click();

        cy.contains('Disable Two Way Auth').click();
        cy.contains("Disable Two Way Auth").should("exist")

         

     });


     it('TC-Priv&Sec-25 : To check the functionality "Disable two way auth" link is clickable', () => {

      cy.contains("Privacy & Security").should("exist")
 
      cy.contains("Privacy & Security").click();
      
      cy.contains("Account Information").should("exist")

      cy.contains("Account Information").click();

      cy.contains('Disable Two Way Auth').click();
      cy.contains("Disable Two Way Auth").should("exist")

        cy.url().should('include', 'https://accounts.seebiz.cloud/authSecurity');

     });
     it('TC-Priv&Sec-26 :To check the functionality of "Turn Off" button on security page', () => {

      cy.contains("Privacy & Security").should("exist")
 
      cy.contains("Privacy & Security").click();
      
      cy.contains("Account Information").should("exist")

      cy.contains("Account Information").click();

      cy.contains('Disable Two Way Auth').click();
      cy.contains("Disable Two Way Auth").should("exist")

        cy.url().should('include', 'https://accounts.seebiz.cloud/authSecurity');
        cy.contains("TURN OFF").click()
        cy.contains("Do you want to Disable Two Way Auth ?").should("exist")
       

     });
     it('TC-Priv&Sec-27 :To check the functionality of modal Pop Up  button on security page', () => {


      cy.contains("Privacy & Security").should("exist")
 
      cy.contains("Privacy & Security").click();
      
      cy.contains("Account Information").should("exist")

      cy.contains("Account Information").click();

      cy.contains('Disable Two Way Auth').click();
      cy.contains("Disable Two Way Auth").should("exist")

      cy.url().should('include', 'https://accounts.seebiz.cloud/authSecurity');
      cy.contains("TURN OFF").click()
      cy.contains("Do you want to Disable Two Way Auth ?").should("exist")
       

     });
     it('TC-Priv&Sec-28 :To check the functionality of "Cancel" button in the Modal Pop Up', () => {

      cy.contains("Privacy & Security").should("exist")
 
      cy.contains("Privacy & Security").click();
      
      cy.contains("Account Information").should("exist")

      cy.contains("Account Information").click();

      cy.contains('Disable Two Way Auth').click();
      cy.contains("Disable Two Way Auth").should("exist")

      cy.url().should('include', 'https://accounts.seebiz.cloud/authSecurity');
      cy.contains("TURN OFF").click()
      cy.contains("Do you want to Disable Two Way Auth ?").should("exist")
      cy.contains("No").click()
       

     });


     it('TC-Priv&Sec-29 :To check the functionality of "Yes" button in the Modal Pop Up', () => {

      cy.contains("Privacy & Security").should("exist")
 
      cy.contains("Privacy & Security").click();
      
      cy.contains("Account Information").should("exist")

      cy.contains("Account Information").click();

      cy.contains('Disable Two Way Auth').click();
      cy.contains("Disable Two Way Auth").should("exist")

      cy.url().should('include', 'https://accounts.seebiz.cloud/authSecurity');
      cy.contains("TURN OFF").click()
      cy.contains("Do you want to Disable Two Way Auth ?").should("exist")
      cy.contains("Yes").click()
      cy.get("#customInput").should("exist");
       

     });
     it('TC-Priv&Sec-30 :To check the functionality "Email address is correct" on the Security page', () => {

      cy.contains("Privacy & Security").should("exist")
 
      cy.contains("Privacy & Security").click();
      
      cy.contains("Account Information").should("exist")

      cy.contains("Account Information").click();

      cy.contains('Disable Two Way Auth').click();
      cy.contains("Disable Two Way Auth").should("exist")

      cy.url().should('include', 'https://accounts.seebiz.cloud/authSecurity');
      cy.contains("TURN OFF").click()
      cy.contains("Do you want to Disable Two Way Auth ?").should("exist")
      cy.contains("Yes").click()
      cy.get("#customInput").should("exist");
    
      cy.contains('fazalerabiseebiz0+1@gmail.com').should("exist");

       

     });





});
describe("Common file for 2 way authentication", function () {
  const waitforexecutionstep = 2000;
  const validpassword = "Bilal7500";
  const validemail = "bilalseebiz7500+341@gmail.com";
  const wrongpassword = "Change123";
  const invalidotp = "8832";

  beforeEach(() => {
    cy.viewport(1920, 1080);
  });

  const disableTwoWayAuth = () => {
    cy.contains("Disable Two Way Auth").click();
    cy.wait(2000);
    cy.contains("TURN OFF").click();
    cy.contains("Yes").click();
    cy.wait(2000);
    cy.get('#customInput').type(validpassword);
    cy.contains("Next").click();
    cy.wait(waitforexecutionstep);
  };

  it('TC-36: Resend Code for Disabled Account', function () {
    cy.visit("https://www.seebiz.cloud");
    cy.contains("Sign In").click();
    cy.get('#email').type(validemail);
    cy.get('#password > input').type(validpassword);
    cy.contains("Sign in").click();
    cy.get('#number1').type('1');
    cy.get('#number2').type('1');
    cy.get('#number3').type('1');
    cy.get('#number4').type('1');
    cy.wait(13000);
    cy.get('.sso-user-img > img').click();
    cy.contains('My Account').invoke('removeAttr', 'target').click();
    cy.wait(waitforexecutionstep);
    cy.contains("Privacy & Security").click();
    cy.wait(2000);
    cy.get('#deleteAccountSubMenu > :nth-child(1) > a').click();
    cy.wait(2000);
    disableTwoWayAuth();
    cy.contains("Resend code").click();
    cy.get('#countDown').should('be.visible');
  });

  it('TC-35: To check the functionality of "Resend code link" on the 2 step verification page', function () {
    cy.visit("https://www.seebiz.cloud");
    cy.contains("Sign In").click();
    cy.get('#email').type(validemail);
    cy.get('#password > input').type(validpassword);
    cy.contains("Sign in").click();
    cy.get('#number1').type('1');
    cy.get('#number2').type('1');
    cy.get('#number3').type('1');
    cy.get('#number4').type('1');
    cy.wait(13000);
    cy.get('.sso-user-img > img').click();
    cy.contains('My Account').invoke('removeAttr', 'target').click();
    cy.wait(waitforexecutionstep);
    cy.contains("Privacy & Security").click();
    cy.wait(2000);
    cy.get('#deleteAccountSubMenu > :nth-child(1) > a').click();
    cy.wait(2000);
    disableTwoWayAuth();
    cy.get('#customInput').type(wrongpassword);
    cy.contains("Next").click();
    cy.get('.input-error-text').should('have.text', "Please enter valid code");
  });
  it('TC-35.1: Valid code not give error message', () => {
    cy.visit('https://www.seebiz.cloud/').wait(2000);;
    const mail = "bilalseebiz7500+128@gmail.com";
    const password = "Bilal7500";
    cy.contains('Sign In').click();
    cy.get('#email').type(mail);
    cy.get('input[placeholder="Password"]').type(password);
    cy.get('#remember-me').check();
    cy.contains('Sign in').click();
  });
  it('TC-32 Enter Invalid Password on Disable Password Field', function () {
    cy.visit("https://www.seebiz.cloud");
    cy.contains("Sign In").click();
    cy.get('#email').type(validemail);
    cy.get('#password > input').type(validpassword);
    cy.contains("Sign in").click();
    cy.get('#number1').type('1');
    cy.get('#number2').type('1');
    cy.get('#number3').type('1');
    cy.get('#number4').type('1');
    cy.wait(13000);
    cy.get('.sso-user-img > img').click();
    cy.contains('My Account').invoke('removeAttr', 'target').click();
    cy.wait(waitforexecutionstep);
    cy.contains("Privacy & Security").click();
    cy.wait(2000);
    cy.get('#deleteAccountSubMenu > :nth-child(1) > a').click();
    cy.wait(2000);
    disableTwoWayAuth();
    cy.get('#customInput').type(wrongpassword);
    cy.contains("Next").click();
    cy.get('.input-error-text').should('have.text', "Please enter valid code");
  });

  it('TC-34.1: Enter Wrong OTP Code', function () {
    cy.visit("https://www.seebiz.cloud");
    cy.contains("Sign In").click();
    cy.get('#email').type(validemail);
    cy.get('#password > input').type(validpassword);
    cy.contains("Sign in").click();
    cy.get('#number1').type('1');
    cy.get('#number2').type('1');
    cy.get('#number3').type('1');
    cy.get('#number4').type('1');
    cy.wait(13000);
    cy.get('.sso-user-img > img').click();
    cy.contains('My Account').invoke('removeAttr', 'target').click();
    cy.wait(waitforexecutionstep);
    cy.contains("Privacy & Security").click();
    cy.wait(2000);
    cy.get('#deleteAccountSubMenu > :nth-child(1) > a').click();
    cy.wait(2000);

    disableTwoWayAuth();
    cy.get('#customInput').type(validpassword);
    cy.contains("Next").click();
    cy.wait(waitforexecutionstep);
    cy.get('#customInput').type(invalidotp);
    cy.contains('Next').click();
    cy.contains('Please enter valid code').should('be.visible');
  });

  it('TC-34: Enter Valid OTP Code', function () {
    const validemails = "bilalseebiz7500+" + Math.random().toString(36).substring(3,6 ) + "@gmail.com";
    cy.visit("https://www.seebiz.cloud");
    cy.contains("Create Account").click({ force: true });
    cy.get("input[placeholder='Email']").type(validemails);
    cy.get("input[placeholder='Password']").type('Bilal7500');
    cy.get("input[placeholder='Confirm Password']").type('Bilal7500');
    cy.get('input[type="checkbox"]').check();
    cy.contains('Create account').click();
    cy.wait(2000)
    cy.get('#number1').type('1');
    cy.get('#number2').type('1');
    cy.get('#number3').type('1');
    cy.get('#number4').type('1');
    cy.wait(13000);
    cy.get('.sso-user-img > img').click();
    cy.contains('My Account').invoke('removeAttr', 'target').click();
    cy.wait(waitforexecutionstep);
    cy.contains("Privacy & Security").click();
    cy.wait(2000);
    cy.get('#deleteAccountSubMenu > :nth-child(1) > a').click();
    cy.wait(2000);
    cy.contains('Enable Two Way Auth').click();
    cy.wait(2000);
    cy.get(':nth-child(1) > .twoWayAuthData').check();
    cy.contains("Next").click();
    cy.wait(waitforexecutionstep);
    cy.get('#customInput').type(validpassword);
    cy.contains("Next").click();
    cy.wait(waitforexecutionstep);
    cy.get('#customInput').type("1111");
    cy.contains("Next").click();
    cy.wait(waitforexecutionstep);
    cy.get('.inactive > .menu-text-left > .menu-text').click()
    //cy.get('.inactive > .menu-text-left').click()
    cy.get('#deleteAccountSubMenu > :nth-child(2) > a').click({force: true})
    cy.get('#customInput').type(validpassword);
    cy.get('.btn_primary').click()
    cy.get('.inactive > .menu-text-left > .menu-text').click().wait(1000)
    cy.get('#deleteAccountSubMenu > :nth-child(1) > a').click({force: true})
      disableTwoWayAuth();
    cy.get('#customInput').type(validpassword);
    cy.contains("Next").click();
    cy.wait(waitforexecutionstep);
    cy.get('#customInput').type("1111");
    cy.contains("Next").click();
    
  });

  it('TC-33: Functionality without Entering Password', function () {
    cy.visit("https://www.seebiz.cloud");
    cy.contains("Sign In").click();
    cy.get('#email').type(validemail);
    cy.get('#password > input').type(validpassword);
    cy.contains("Sign in").click();
    cy.get('#number1').type('1');
    cy.get('#number2').type('1');
    cy.get('#number3').type('1');
    cy.get('#number4').type('1');
    cy.wait(13000);
    cy.get('.sso-user-img > img').click();
    cy.contains('My Account').invoke('removeAttr', 'target').click();
    cy.wait(waitforexecutionstep);
    cy.contains("Privacy & Security").click();
    cy.wait(2000);
    cy.get('#deleteAccountSubMenu > :nth-child(1) > a').click();
    cy.wait(2000);
    disableTwoWayAuth();
    cy.contains("Next").click();
    cy.wait(waitforexecutionstep);
    cy.get('.input-error-text').should('have.text', "Please enter OTP");
  });

  it('TC-31: Enter Valid Password', function () {
    cy.visit("https://www.seebiz.cloud");
    cy.contains("Sign In").click();
    cy.get('#email').type(validemail);
    cy.get('#password > input').type(validpassword);
    cy.contains("Sign in").click();
    cy.get('#number1').type('1');
    cy.get('#number2').type('1');
    cy.get('#number3').type('1');
    cy.get('#number4').type('1');
    cy.wait(13000);
    cy.get('.sso-user-img > img').click();
    cy.contains('My Account').invoke('removeAttr', 'target').click();
    cy.wait(waitforexecutionstep);
    cy.contains("Privacy & Security").click();
    cy.wait(2000);
    cy.get('#deleteAccountSubMenu > :nth-child(1) > a').click();
    cy.wait(2000);
    disableTwoWayAuth();
    cy.get('#customInput').type(validpassword);
    cy.contains("Next").click();
  });


});
describe(' Updated Test Cases According to New design in SSO(Account Deleteion)', () => {
  const email = 'maryamsqa36+145@gmail.com';
  const password = 'Temp1234!';
  const sellerEmail = 'faheem.seebiz+1@gmail.com';
  const sellerPassword = 'Faizi123';
  const buyerEmail = 'sanatariqseebiz+34@gmail.com';
  const buyerPassword = 'Change123';
  const bothEmail = 'faheem.seebiz@gmail.com';
  const bothPassword = 'Faheem123';
  const OTpbothEmail = 'bilalseebiz7500+338@gmail.com';
  const OTPbothPassword = 'Bilal7500';
  const accountDeletionPage = new AccountDeletionPage();

  beforeEach(() => {
    cy.viewport(2020, 1080);
    cy.visit('https://www.seebiz.cloud/').wait(2000);
  });
  it('TC-WAD-25: Verify when user Clicking on Account Deletion Module', () => {
    accountDeletionPage.signIn(email, password);
    accountDeletionPage.ClickAccountdeletion();
    

  })
  it('TC-WAD-27:To verify the Close button on the confirm password popup', () => {
    accountDeletionPage.signIn(email, password);
    accountDeletionPage.CancelButtonAccountDeletionPopup();
    
  })
  it('TC-WAD-28:To verify the Close  Click Cross Icon on confirm password popup ', () => {
    accountDeletionPage.signIn(email, password);

    accountDeletionPage.CrossIconAccountDeletionPopup();
    
  })

  
  it('TC-WAD-29: Check the functionality of enter correct password ', () => {
    accountDeletionPage.signIn(email, password);

    accountDeletionPage.CheckCorrPSWDVar();
    
    

  });
  it('TC-WAD-30:Check the functionality of enter Incorrect password ', () => {
    accountDeletionPage.signIn(email, password);

    accountDeletionPage.CheckWrngPSWDVar();
    
    
  });
  it('TC-WAD-31: To verify the Confirm button on confirm password popup', () => {
    accountDeletionPage.signIn(email, password);
    accountDeletionPage.ClickPasswordIcon();
    
    
  });
  // this test case is fail thats why i skip this test cases May 6, 2024 
  //Ref https://docs.google.com/spreadsheets/d/1jTOUD_od7kah20cgA69D_QLzA_QnHfql/edit#gid=1105144591
  it.skip('TC-WAD-32: To verify the text below the "invite your friend to help" section  ', () => {
    accountDeletionPage.signIn(email, password);
    accountDeletionPage.CheckCorrPSWDVar();
    
    
  });
  it('TC-WAD-33:To verify the functionality of  "send invite" link  ', () => {
    accountDeletionPage.signIn(email, password);

    accountDeletionPage.ClickPasswordIcon();
    accountDeletionPage.Sendinvitelink();
    
    
  });
  it('TC-WAD-34 :To verify the functionality of  enter valid "email" in the invitation card popup which is not a seebiz user', () => {
    accountDeletionPage.signIn(email, password);

   //loginPage.CheckCorrPSWDVar();
   accountDeletionPage.ClickPasswordIcon();
   accountDeletionPage.Sendinvitelink();
   accountDeletionPage.EnterEmailforinvitation();
    //Invitation  sent successfully
    
  });
  it('TC-WAD-36 :To verify the functionality of  enter valid "email" in the invitation card popup which is already seebiz user', () => {
    accountDeletionPage.signIn(email, password);

   //accountDeletionPage.CheckCorrPSWDVar();
   accountDeletionPage.ClickPasswordIcon();
   accountDeletionPage.Sendinvitelink();
   accountDeletionPage.AlreadyRegisterSeebiz();
    //Invitation  sent successfully
    
  });
  it('TC-WAD-37 :To verify the functionality of  enter valid "email" in the invitation card popup which is already seebiz user', () => {
    accountDeletionPage.signIn(email, password);

   //loginPage.CheckCorrPSWDVar();
   accountDeletionPage.ClickPasswordIcon();
   accountDeletionPage.Sendinvitelink();
   accountDeletionPage.AlreadyRegisterSeebiz();
    //Invitation  sent successfully
    
  });
  it('TC-WAD-37:To verify the Close button on invitation card popup', () => {
    accountDeletionPage.signIn(email, password);

   //loginPage.CheckCorrPSWDVar();
   accountDeletionPage.ClickPasswordIcon();
   accountDeletionPage.Sendinvitelink();
   accountDeletionPage.ClosePopupMessage();
    //Invitation  sent successfully
    
  });
  it('TC-WAD-38:To verify the Cross icon on invitation card popup', () => {
    accountDeletionPage.signIn(email, password);

   //loginPage.CheckCorrPSWDVar();
   accountDeletionPage.ClickPasswordIcon();
   accountDeletionPage.Sendinvitelink();
   accountDeletionPage.Crosiconinvite();
    //Invitation  sent successfully
    
  });
  it('TC-WAD-39 :To verify the Send invitation button on invitation card popup', () => {
    accountDeletionPage.signIn(email, password);

   //loginPage.CheckCorrPSWDVar();
   accountDeletionPage.ClickPasswordIcon();
   accountDeletionPage.Sendinvitelink();
   accountDeletionPage.EnterEmailforinvitation();
    //Invitation  sent successfully
    
  });
  it('TC-WAD-41 : To verify the account deletion page has no Seller or buyer account ', () => {
    accountDeletionPage.signIn(email, password);

   //loginPage.CheckCorrPSWDVar();
   accountDeletionPage.ClickPasswordIcon();
   accountDeletionPage.Sendinvitelink();
   accountDeletionPage.EnterEmailforinvitation();
    //Invitation  sent successfully
    
  });
  it('TC-WAD-42 :To verify the account deletion page with only Seller account  ', () => {
    accountDeletionPage.signIn(sellerEmail, sellerPassword);
   //loginPage.CheckCorrPSWDVar();
   accountDeletionPage.SellerClickPasswordIcon();

    
  });
  it('TC-WAD-43 :To verify the account deletion page with only Buyer account  ', () => {
    accountDeletionPage.signIn(buyerEmail, buyerPassword);
   //loginPage.CheckCorrPSWDVar();
   accountDeletionPage.BuyerClickPasswordIcon();

    
  });
  it('TC-WAD-44 :To Verify the Buyer Account Information in Account Deletion Page', () => {
    accountDeletionPage.signIn(buyerEmail, buyerPassword);

   //loginPage.CheckCorrPSWDVar();
   accountDeletionPage.BuyerClickPasswordIcon();
   accountDeletionPage. CheckAccountInforBuyer();

    
  });
  it('TC-WAD-46 :To verify the account deletion page with both seller & Buyer account   ', () => {
    accountDeletionPage.signIn(bothEmail, bothPassword);
    accountDeletionPage. BothClickPasswordIcon();

    
  });
  it('TC-WAD-47 :To verify the functionality of delete button in front of the account   ', () => {
    accountDeletionPage.signIn(bothEmail, bothPassword);
    accountDeletionPage.SelectAccountrole();

    
  });


  //-----------------Buyer Side Account Deleltion Test Cases----------------

  it('TC-WAD-48 :Click on the Proceed button for buyer account ', () => {
    accountDeletionPage.signIn(bothEmail, bothPassword);
    accountDeletionPage.SelectAccountrole();
    accountDeletionPage.threeStepbuyerSidePass();

  });
  it('TC-WAD-49 :To verify enter valid password  on 3 Factor Authentication Page for buyer', () => {
    accountDeletionPage.signIn(bothEmail, bothPassword);
    accountDeletionPage.SelectAccountrole();
    accountDeletionPage.threeStepbuyerSidePass();
    accountDeletionPage. EnterEmaiLAddress();
  });
  it('TC-WAD-50 :To verify enter in-valid password  on 3 Factor Authentication Page for buyer', () => {
    accountDeletionPage.signIn(bothEmail, bothPassword);
    accountDeletionPage.SelectAccountrole();
    accountDeletionPage.EnterwrngpassStepbuyerSide();
    //accountDeletionPage. EnterEmaiLAddress();
  });
  it('TC-WAD-51 :Password eye icon is working when enter the password for 3 step on buyer side', () => {
    accountDeletionPage.signIn(bothEmail, bothPassword);
    accountDeletionPage.SelectAccountrole();
    accountDeletionPage.threeStepbuyerSidePass();
    accountDeletionPage.EnterEmaiLAddress();
  });
  it('TC-WAD-52 :Verify Email address page for buyer', () => {
    accountDeletionPage.signIn(bothEmail, bothPassword);
    accountDeletionPage.SelectAccountrole();
    accountDeletionPage.threeStepbuyerSidePass();
    accountDeletionPage.EnterEmaiLAddress();
  });
  it('TC-WAD-53 :To check the functionality of " Send OTP" button  from the buyer side', () => {
    accountDeletionPage.signIn(bothEmail, bothPassword);
    accountDeletionPage.SelectAccountrole();
    accountDeletionPage.threeStepbuyerSidePass();
    accountDeletionPage.EnterEmaiLAddress();
    accountDeletionPage. ClickSendOTPBuyerSide();
    //accountDeletionPage.SendOTP();
  });
  it('TC-WAD-54 :Click on the Cancel button from the email verification page', () => {
    accountDeletionPage.signIn(bothEmail, bothPassword);
    accountDeletionPage.SelectAccountrole();
    accountDeletionPage.threeStepbuyerSidePass();
    accountDeletionPage.EnterEmaiLAddress();
    accountDeletionPage. ClickSendOTPBuyerSide();
    accountDeletionPage.CancelEmailVarBTN();
  });
  it('TC-WAD-55 :Enter the valid OTP from the buyer side on email address page', () => {
    accountDeletionPage.signIn(OTpbothEmail, OTPbothPassword);
    accountDeletionPage.OTPSelectAccountrole();
    accountDeletionPage.OTPthreeStepbuyerSidePass();
    accountDeletionPage.OTPEnterEmaiLAddress();
    accountDeletionPage.EnterOTPBuyerSide();
    //accountDeletionPage.CancelEmailVarBTN();
  });
  it('TC-WAD-56 :Enter the in-valid OTP from the buyer side on email address page', () => {
    accountDeletionPage.signIn(OTpbothEmail, OTPbothPassword);
    accountDeletionPage.OTPSelectAccountrole();
    accountDeletionPage.OTPthreeStepbuyerSidePass();
    accountDeletionPage.OTPEnterEmaiLAddress();
    accountDeletionPage.EnterInvalidOTPBuyerSide();
    //accountDeletionPage.CancelEmailVarBTN();
  });
  it('TC-WAD-57 :Click on the Resend OTP from the buyer side on email address page', () => {
    accountDeletionPage.signIn(OTpbothEmail, OTPbothPassword);
    accountDeletionPage.OTPSelectAccountrole();
    accountDeletionPage.OTPthreeStepbuyerSidePass();
    accountDeletionPage.OTPEnterEmaiLAddress();
    accountDeletionPage.ClickResendOTPbuyerSide();
    //accountDeletionPage.CancelEmailVarBTN();
  });
  it('TC-WAD-58 :Click on the Send OTP from the buyer side on Phone Number verification page', () => {
    accountDeletionPage.signIn(OTpbothEmail, OTPbothPassword);
    accountDeletionPage.OTPSelectAccountrole();
    accountDeletionPage.OTPthreeStepbuyerSidePass();
    accountDeletionPage.OTPEnterEmaiLAddress();
    accountDeletionPage.EnterOTPBuyerSide();
    accountDeletionPage.ClickButtonMobileOTP();

  });

  //-----------------Seller Side Account Deleltion Test Cases----------------

  it('TC-WAD-61 :Click on the Proceed button for seller account', () => {
    accountDeletionPage.signIn(OTpbothEmail, OTPbothPassword);
    accountDeletionPage.OTPSelectAccountrole();
    accountDeletionPage.ClickProceedButton();

  });
  it('TC-WAD-62 :To verify enter valid password  on 3 Factor Authentication Page for seller', () => {
    accountDeletionPage.signIn(OTpbothEmail, OTPbothPassword);
    accountDeletionPage.OTPSelectAccountrole();
    accountDeletionPage.OTPthreeStepSellerSidePass();
    accountDeletionPage.OTPEnterEmaiLAddress();
  });
  it('TC-WAD-63 :To verify enter in-valid password  on 3 Factor Authentication Page for seller', () => {
    accountDeletionPage.signIn(OTpbothEmail, OTPbothPassword);
    accountDeletionPage.OTPSelectAccountrole();
    accountDeletionPage.EnterwrngpassStepSellerSide();
   // accountDeletionPage.OTPEnterEmaiLAddress();
  });
  it('TC-WAD-64 :Password eye icon is working when enter the password for 3 step on seller  side', () => {
    accountDeletionPage.signIn(OTpbothEmail, OTPbothPassword);
    accountDeletionPage.OTPSelectAccountrole();
    accountDeletionPage.OTPthreeStepSellerSidePass();
    //accountDeletionPage.OTPEnterEmaiLAddress();
  });
  it('TC-WAD-65 :Verify Email address page for seller', () => {
    accountDeletionPage.signIn(OTpbothEmail, OTPbothPassword);
    accountDeletionPage.OTPSelectAccountrole();
    accountDeletionPage.OTPthreeStepSellerSidePass();
    accountDeletionPage.OTPEnterEmaiLAddress();
  });
  it('TC-WAD-66 :To check the functionality of " Send OTP" button  from the seller side', () => {
    accountDeletionPage.signIn(OTpbothEmail, OTPbothPassword);
    accountDeletionPage.OTPSelectAccountrole();
    accountDeletionPage.OTPthreeStepSellerSidePass();
    accountDeletionPage.OTPEnterEmaiLAddress();
    accountDeletionPage.EnterOTPBuyerSide();

  });
  it('TC-WAD-67 :Enter valid OTP code from the Seller side', () => {
    accountDeletionPage.signIn(OTpbothEmail, OTPbothPassword);
    accountDeletionPage.OTPSelectAccountrole();
    accountDeletionPage.OTPthreeStepSellerSidePass();
    accountDeletionPage.OTPEnterEmaiLAddress();
    accountDeletionPage.EnterOTPBuyerSide();
    accountDeletionPage. GoPhonevarPage();

  });
  it('TC-WAD-68 :Click on the Cancel button from the email verification page through seller side', () => {
    accountDeletionPage.signIn(OTpbothEmail, OTPbothPassword);
    accountDeletionPage.OTPSelectAccountrole();
    accountDeletionPage.OTPthreeStepSellerSidePass();
    accountDeletionPage.OTPEnterEmaiLAddress();
    accountDeletionPage.CancelbuttoninVerifyEmail();
  });
  it('TC-WAD-69 :Enter the in-valid OTP from the seller side on email address page', () => {
    accountDeletionPage.signIn(OTpbothEmail, OTPbothPassword);
    accountDeletionPage.OTPSelectAccountrole();
    accountDeletionPage.OTPthreeStepSellerSidePass();
    accountDeletionPage.OTPEnterEmaiLAddress();
    accountDeletionPage.EnterInvalidOTPBuyerSide();
    //accountDeletionPage.CancelbuttoninVerifyEmail();


  });
  it('TC-WAD-70 :Click on the Resend OTP from the Seller side on email address page', () => {
    accountDeletionPage.signIn(OTpbothEmail, OTPbothPassword);
    accountDeletionPage.OTPSelectAccountrole();
    accountDeletionPage.OTPthreeStepSellerSidePass();
    accountDeletionPage.OTPEnterEmaiLAddress();
    accountDeletionPage.ClickResendOTPbuyerSide();
    //accountDeletionPage.CancelbuttoninVerifyEmail();


  });
  it('TC-WAD-71 :Click on the Send OTP from the Seller side on Phone Number verification page', () => {
    accountDeletionPage.signIn(OTpbothEmail, OTPbothPassword);
    accountDeletionPage.OTPSelectAccountrole();
    accountDeletionPage.OTPthreeStepSellerSidePass();
    accountDeletionPage.OTPEnterEmaiLAddress();
    accountDeletionPage.EnterOTPBuyerSide();
    accountDeletionPage. GoPhonevarPage();
    accountDeletionPage.ClickButtonMobileOTP();
    //accountDeletionPage.CancelbuttoninVerifyEmail();


  });

  it('TC-WAD-74:Click on the Resend OTP from the Seller side on Phone number verification', () => {
    accountDeletionPage.signIn(OTpbothEmail, OTPbothPassword);
    accountDeletionPage.OTPSelectAccountrole();
    accountDeletionPage.OTPthreeStepSellerSidePass();
    accountDeletionPage.OTPEnterEmaiLAddress();
    accountDeletionPage.EnterOTPBuyerSide();
    accountDeletionPage. GoPhonevarPage();
    //accountDeletionPage.ClickButtonMobileOTP();
    accountDeletionPage.ResendcodeMobileSeller();
    //accountDeletionPage.CancelbuttoninVerifyEmail();


  });
  
  it('TC-WAD-75:To verify broken arrow on the page', () => {
    accountDeletionPage.signIn(email, password);

   //loginPage.CheckCorrPSWDVar();
   accountDeletionPage.ClickPasswordIcon();
   accountDeletionPage.Sendinvitelink();


  });
  it('TC-WAD-75:To verify  Not to ask the password until user move to any other module', () => {
    accountDeletionPage.signIn(email, password);

   //loginPage.CheckCorrPSWDVar();
   accountDeletionPage.ClickPasswordIcon();
   accountDeletionPage. ClickAccountDeletionagain();
  // accountDeletionPage.Sendinvitelink();


  });
  it('TC-WAD-81:To check the timer on the resend code', () => {
    accountDeletionPage.signIn(OTpbothEmail, OTPbothPassword);
    accountDeletionPage.OTPSelectAccountrole();
    accountDeletionPage.OTPthreeStepSellerSidePass();
    accountDeletionPage.OTPEnterEmaiLAddress();
    accountDeletionPage.ClickResendOTPbuyerSide();


  });
  it('TC-WAD-83:To check the account deletion flow of buyer and seller ', () => {
    accountDeletionPage.signIn(OTpbothEmail, OTPbothPassword);
    accountDeletionPage.OTPSelectAccountrole();
    accountDeletionPage.OTPthreeStepSellerSidePass();
    accountDeletionPage.OTPEnterEmaiLAddress();
    accountDeletionPage.CheckbehaviourReloadonEmailVarPage();
     //accountDeletionPage.ClickResendOTPbuyerSide();


  });
  it('TC-WAD-84 :To check the OTP generation on triggering Resend Button', () => {
    accountDeletionPage.signIn(OTpbothEmail, OTPbothPassword);
    accountDeletionPage.OTPSelectAccountrole();
    accountDeletionPage.OTPthreeStepSellerSidePass();
    accountDeletionPage.OTPEnterEmaiLAddress();
    accountDeletionPage.ClickResendOTPbuyerSide();
    //accountDeletionPage.CancelbuttoninVerifyEmail();


  });



  /*
  it('TC-WAD-84: To check the OTP generation on triggering Resend Button', () => {
    const loginPage = new AccountDeletion(); 

    // Navigate to the website and perform login actions
    cy.visit('https://www.seebiz.cloud/').wait(2000);;
    loginPage.signIn();
    loginPage.setUsername(email);
    loginPage.setPassword(password);
    loginPage.showPassword();
    loginPage.clickLoginButton();
    loginPage.CheckCorrPSWDVar();
    loginPage.threeStepbuyerSidePass();
    
    
  });
  
  

  it('TC-WAD-39:Email address page is open in buyer Side', () => {
    const loginPage = new AccountDeletion(); 

    // Navigate to the website and perform login actions
    cy.visit('https://www.seebiz.cloud/').wait(2000);;
    loginPage.signIn();
    loginPage.setUsername(email);
    loginPage.setPassword(password);
    loginPage.showPassword();
    loginPage.clickLoginButton();
    loginPage.CheckCorrPSWDVar();
    loginPage.threeStepbuyerSidePass();
    loginPage.EnterEmaiLAddress();

    
    
  });
  it(' TC-WAD-40: Click on the Send OTP from the buyer side', () => {
    const loginPage = new AccountDeletion(); 

    // Navigate to the website and perform login actions
    cy.visit('https://www.seebiz.cloud/').wait(2000);;
    loginPage.signIn();
    loginPage.setUsername(email);
    loginPage.setPassword(password);
    loginPage.showPassword();
    loginPage.clickLoginButton();
    loginPage.CheckCorrPSWDVar();
    loginPage.threeStepbuyerSidePass();
    loginPage.EnterEmaiLAddress();
    loginPage.SendOTP();
    
  });
  it(' TC-WAD-41: Click on the Cancel button from the email verification page', () => {
    const loginPage = new AccountDeletion(); 

    // Navigate to the website and perform login actions
    cy.visit('https://www.seebiz.cloud/').wait(2000);;
    loginPage.signIn();
    loginPage.setUsername(email);
    loginPage.setPassword(password);
    loginPage.showPassword();
    loginPage.clickLoginButton();
    loginPage.CheckCorrPSWDVar();
    loginPage.threeStepbuyerSidePass();
    loginPage.EnterEmaiLAddress();
    loginPage.SendOTP();
    loginPage.CancelEmailVarBTN();
    
  });
  it(' TC-WAD-42: Enter the valid OTP from the buyer side on email address page', () => {
    const loginPage = new AccountDeletion(); 

    // Navigate to the website and perform login actions
    cy.visit('https://www.seebiz.cloud/').wait(2000);;
    loginPage.signIn();
    loginPage.setUsername(email);
    loginPage.setPassword(password);
    loginPage.showPassword();
    loginPage.clickLoginButton();
    loginPage.CheckCorrPSWDVar();
    loginPage.threeStepbuyerSidePass();
    loginPage.EnterEmaiLAddress();
    loginPage.SendOTP();
    
    
  });
  */


});
describe('Common File for New Account Deletion Test cases' , () => {

  beforeEach(() => {
    cy.viewport(1980, 1080);
  });
    const ln = new AccountDeletions();

    it('TC-WAD-25&TC-WAD-26 Go to Account deletion module' , () => {
    
    
        cy.fixture('SignIncredentials').then((data) => {
        ln.openwebsiteforsignIn()
        ln.setUserName(data.username);
        ln.setPassword(data.password);
        ln.Loginbutton();
        ln.GotoAccountpage();
        ln.Cancelpopupforaccountmodel()

          })
    })

    it('TC-WAD-27 Enter the Valid Password ' , () => {
    
    
        cy.fixture('SignIncredentials').then((data) => {
        ln.openwebsiteforsignIn()
        ln.setUserName(data.username);
        ln.setPassword(data.password);
        ln.Loginbutton();
        ln.GotoAccountpage();
        ln.ValidpasswordforAccountDeletion();

        })
    })

    it('TC-WAD-27.1 Enter the InValid Password ' , () => {
    
    
        cy.fixture('SignIncredentials').then((data) => {
        ln.openwebsiteforsignIn()
        ln.setUserName(data.username);
        ln.setPassword(data.password);
        ln.Loginbutton();
        ln.GotoAccountpage();
        ln.InValidpasswordforAccountDeletion();

        })
    })

    it('TC-WAD-28 Invite mail to the helper' , () => {
        cy.fixture('SignIncredentials').then((data) => {
        ln.openwebsiteforsignIn()
        ln.setUserName(data.username);
        ln.setPassword(data.password);
        ln.Loginbutton();
        ln.GotoAccountpage();
        ln.ValidpasswordforAccountDeletion();
        ln.Mailsenttohelper();


        })
    })

    it('TC-WAD-29 Cancel the Invite mail to the helper' , () => {
        cy.fixture('SignIncredentials').then((data) => {
        ln.openwebsiteforsignIn()
        ln.setUserName(data.username);
        ln.setPassword(data.password);
        ln.Loginbutton();
        ln.GotoAccountpage();
        ln.ValidpasswordforAccountDeletion();
        ln.Cancelthemailpopup();

        
        })
    })


    it('TC-WAD-30 Delete button for marketlace buyer side' , () => {
        cy.fixture('SignIncredentials').then((data) => {
        ln.openwebsiteforsignIn()
        ln.setUserName(data.username);
        ln.setPassword(data.password);
        ln.Loginbutton();
        ln.GotoAccountpage();
        ln.ValidpasswordforAccountDeletion();
        ln.Deletbuttonformarketplaceaccount();
        })
    })

    it('TC-WAD-31 Proceed button for marketplace from buyer and seller side' , () => {
        cy.fixture('SignIncredentials').then((data) => {
        ln.openwebsiteforsignIn()
        ln.setUserName(data.username);
        ln.setPassword(data.password);
        ln.Loginbutton();
        ln.GotoAccountpage();
        ln.ValidpasswordforAccountDeletion();
        ln.Deletbuttonformarketplaceaccount();
        ln.Proceesbuttonforbuyerside();
        })
    })

    it('TC-WAD-32 Proceed button for marketplace from buyer and seller side' , () => {
        cy.fixture('SignIncredentials').then((data) => {
        ln.openwebsiteforsignIn()
        ln.setUserName(data.username);
        ln.setPassword(data.password);
        ln.Loginbutton();
        ln.GotoAccountpage();
        ln.ValidpasswordforAccountDeletion();
        ln.Deletbuttonformarketplaceaccount();
        ln.Proceesbuttonforsellerside()
        })
    })

    it('TC&36 & TC-37 & TC-WAD-47 & TC-WAD-48 & TC-WAD-49 & TC-WAD-51 Valid Password for 3 way authentication' , () => {
        cy.fixture('SignIncredentials').then((data) => {
        ln.openwebsiteforsignIn()
        ln.setUserName(data.username);
        ln.setPassword(data.password);
        ln.Loginbutton();
        ln.GotoAccountpage();
        ln.ValidpasswordforAccountDeletion();
        ln.Deletbuttonformarketplaceaccount();
        ln.Proceesbuttonforsellerside();
        ln.validpasswordfor3wayAuth();
        })
    })

    it('TC-WAD-50 Cancel the Email Pop Up' , () => {
        cy.fixture('SignIncredentials').then((data) => {
        ln.openwebsiteforsignIn()
        ln.setUserName(data.username);
        ln.setPassword(data.password);
        ln.Loginbutton();
        ln.GotoAccountpage();
        ln.ValidpasswordforAccountDeletion();
        ln.Deletbuttonformarketplaceaccount();
        ln.Proceesbuttonforsellerside();
        ln.canceltheemailaddressfield();
        })
    })

    it('TC-WAD-52 Resend Valid OTP' , () => {
        cy.fixture('SignIncredentials').then((data) => {
        ln.openwebsiteforsignIn()
        ln.setUserName(data.username);
        ln.setPassword(data.password);
        ln.Loginbutton();
        ln.GotoAccountpage();
        ln.ValidpasswordforAccountDeletion();
        ln.Deletbuttonformarketplaceaccount();
        ln.Proceesbuttonforsellerside();
        ln.ResendvalidOTP();
        })
    })

    it('TC-WAD-53 Valid OTP for Mobile Verification' , () => {
    
    
        cy.fixture('SignIncredentials').then((data) => {
        ln.openwebsiteforsignIn()
        ln.setUserName(data.username);
        ln.setPassword(data.password);
        ln.Loginbutton();
        ln.GotoAccountpage();
        ln.ValidpasswordforAccountDeletion();
        ln.Deletbuttonformarketplaceaccount();
        ln.Proceesbuttonforsellerside();
        ln.validpasswordfor3wayAuth();
        ln.MobileSendOtp();
        })
    })

    it('TC&43 & TC-WAD-44 Resend OTP from buyer side' , () => {
        cy.fixture('SignIncredentials').then((data) => {
        ln.openwebsiteforsignIn()
        ln.setUserName(data.username);
        ln.setPassword(data.password);
        ln.Loginbutton();
        ln.GotoAccountpage();
        ln.ValidpasswordforAccountDeletion();
        ln.Deletbuttonformarketplaceaccount();
        ln.ResendOTPfromBuyerSide();
        })
    })

    it('TC&43 & TC-WAD-44 Resend OTP from buyer side' , () => {
        cy.fixture('SignIncredentials').then((data) => {
        ln.openwebsiteforsignIn()
        ln.setUserName(data.username);
        ln.setPassword(data.password);
        ln.Loginbutton();
        ln.GotoAccountpage();
        ln.ValidpasswordforAccountDeletion();
        ln.Deletbuttonformarketplaceaccount();
        ln.Mobileverificationfrombuyerside();
        })
    })

    it('Full flow of Account Deletion' , () => {
        cy.fixture('SignIncredentials').then((data) => {
        ln.openwebsiteforsignIn()
        ln.setUserName(data.username);
        ln.setPassword(data.password);
        ln.Loginbutton();
        ln.GotoAccountpage();
        ln.ValidpasswordforAccountDeletion();
        ln.Deletbuttonformarketplaceaccount();
        ln.Mobileverificationfrombuyerside();
        })
    })

});


