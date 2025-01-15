/// <reference types="cypress"/>
describe('Sign-In Tests', () => {

  beforeEach(() => {
      // run these tests as if in a desktop
      // browser with a 720p monitor
      cy.viewport(1920, 1080)
    })
  it('TC-Signin-01: Sign In button functionality', () => {
    // Test steps

    cy.visit('https://www.seebiz.cloud/');
    cy.get('.sso-sign-in').click();
    // Assertions
    cy.get("#loginBtn").should('exist');
  });
//  28 29 30 42 43 45  51 52 53 
  it('TC-Signin-02: Verify Sign In page appearance', () => {
    // Test steps
    cy.visit('https://www.seebiz.cloud/');
    cy.get('.sso-sign-in').click();
    // Assertions
  
     cy.url().should('include', 'https://accounts.seebiz.cloud/login');
     cy.get("#loginBtn").should('exist')
  });


  it('TC-Signin-02.1 : Verify the Font of text on the Sign-In page', () => {
      // Test steps
      cy.visit('https://www.seebiz.cloud/');
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
      cy.visit('https://www.seebiz.cloud/');
      cy.get('.sso-sign-in').click();
    
      // Assertion - Check for mouseover effect on input fields
      cy.get('#email').trigger('mouseover'); 
      cy.get('#email').should('exist'); // Update the expected CSS property value
      cy.get('#password').trigger('mouseover'); 
      cy.get('#password').should('exist');
    
  });




    it('TC-Signin-04:Verifies the "Email" field is available', () => {
      cy.visit('https://www.seebiz.cloud/');
      cy.get('.sso-sign-in').click();
      cy.get("input[placeholder='Email']").should('exist')
    })



    
  
    it('TC-Signin-05 :Verifies the "Email" Placeholder', () => {
      cy.visit('https://www.seebiz.cloud/');
      cy.get('.sso-sign-in').click();
      cy.get("input[placeholder='Email']").should('exist')
    })
  
    it('TC-Signin-06:Verifies the "Email" field is Writeable', () => {
      cy.visit('https://www.seebiz.cloud/');
      cy.get('.sso-sign-in').click();
      const userEmail = 'fazalerabi040@gmail.com'
      cy.get('#login-form > div:nth-child(1) > input').type(userEmail).should('have.value', userEmail)
    })
  
    it('TC-Signin-07:Verifies the "Email Message Icon" is available', () => {
      cy.visit('https://www.seebiz.cloud/');
      cy.get('.sso-sign-in').click();
      cy.get('#login-form > div:nth-child(1) > svg > path')
        .should('exist') // Assertion: Verify the element exists
        .and('be.visible'); // Assertion: Verify the element is visible
    });
    


    it('TC-Signin-08:Verifies the Email Field with valid email', () => {
      cy.visit('https://www.seebiz.cloud/');
      cy.get('.sso-sign-in').click();
      const validEmail = 'fazalerabi00@gmail.com';
      
      // Type the valid email into the Email input field
      cy.get("input[placeholder='Email']").type(validEmail).should('have.value', validEmail);
  });
  

  it('TC-Signin-09:Verifies the "Password" field is available', () => {
      cy.visit('https://www.seebiz.cloud/');
      cy.get('.sso-sign-in').click();
  
      // Assertion - Check if the "Email" input field exists
      cy.get("#password").should('exist');
  });

  it('TC-Signin-10:Verifies the "Password" Placeholder', () => {
      cy.visit('https://www.seebiz.cloud/');
      cy.get('.sso-sign-in').click();
      cy.get("#password").should('exist')
    })
  

       
    it('TC-Signin-11:Verify the "Password" field is Writeable', () => {
      cy.visit('https://www.seebiz.cloud/');
      cy.get('.sso-sign-in').click();
      cy.get('#password')
        .should('exist') // Assertion: Verify the element exists
        .and('be.visible'); // Assertion: Verify the element is visible
    });

    it('TC-Signin-12:Verify the "Hide/Unhide Button " in the " Password" field is available', () => {

      cy.visit('https://www.seebiz.cloud/');
      cy.get('.sso-sign-in').click();
      cy.get("#password > div:nth-child(2) > svg > path")
      .should('exist') // Check if the field exists in the DOM
      .and('be.visible'); // Check if the field is visible on the page
    
    })



    it('TC-Signin-13:Verify the "Hide/Unhide Button " in the " Password" field is ClickAble', () => {

      cy.visit('https://www.seebiz.cloud/');
      cy.get('.sso-sign-in').click();
      cy.get("#password > div:nth-child(2) > svg > path")
      .should('exist') 
      .and('be.visible') 
      .click();
    
    })


    it('TC-Signin-14:Verify the Password field with old password', () => {


      const Emoil= 'fazalerabiseebiz0+po@gmail.com'
      const oldPassword = 'Fazal123'; 
  
      cy.visit('https://www.seebiz.cloud/');
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
      cy.visit('https://www.seebiz.cloud/');
      cy.get('.sso-sign-in').click();
  
      cy.get('#remember-me').check().should('be.checked');
  });
  

  it('TC-Signin-16:To check the functionality of valid email address and valid password', () => {
      const Emoil= 'fazalerabiseebiz0+po@gmail.com'
      const Password = 'Seebiz123'; 
  
      cy.visit('https://www.seebiz.cloud/');
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
  
      cy.visit('https://www.seebiz.cloud/');
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



    cy.visit('https://www.seebiz.cloud/');
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

  cy.visit('https://www.seebiz.cloud/');
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

cy.visit('https://www.seebiz.cloud/');
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
  
      cy.visit('https://www.seebiz.cloud/');
      cy.get('.sso-sign-in').click();

      cy.get('input[placeholder="Password"]').type(password);
  
      // Click the Sign-In button
      cy.get('#loginBtn').click();

      cy.contains('Please enter your email').should('be.visible');
  });
  

  it('TC-Signin-19:To check the functionality by null password field', () => {
      const ML   = 'fazalerabi040@gmail.com'; 
  
      cy.visit('https://www.seebiz.cloud/');
      cy.get('.sso-sign-in').click();

      cy.get('input[placeholder="Email"]').type(ML);
  
      // Click the Sign-In button
      cy.get('#loginBtn').click();
  
      cy.contains('Please enter password').should('be.visible');
  })


  it('TC-Signin-20:Check functionality with all null fields', () => {
      cy.visit('https://www.seebiz.cloud/');
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
  
      cy.visit('https://www.seebiz.cloud/');
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
  
      cy.visit('https://www.seebiz.cloud/');
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
    cy.visit('https://www.seebiz.cloud/');
    cy.get('.sso-sign-in').click();
  

    cy.wait(2000); // Example: Wait for 2 seconds
  
    cy.get(".color-blue.f-14").click();
  
    // Assertion - Check if the user is redirected to the Forgot Password page
    cy.url().should('eq', 'https://accounts.seebiz.cloud/forgotPassword');
  });
  
  


  it('TC-Signin-28:To check the functionality of forgot password with valid email address who exist on see biz', () => {
      cy.visit('https://www.seebiz.cloud/');
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
      cy.visit('https://www.seebiz.cloud/');
      cy.get('.sso-sign-in').click();
      cy.get(".color-blue.f-14").click();
      // Assertion - Check if the user is redirected to the Forgot Password page
      cy.url().should('eq', 'https://accounts.seebiz.cloud/forgotPassword');

      cy.get('#email').type('LeonardoDiCaprio@gmail.com')

      cy.get("#forgotPwd").click();
      cy.contains('We did not find any account associated with this email. Please register yourself first!').should('be.visible');


  });
  

  it('TC-Signin-30:To check the functionality of send verification code button', () => {
      cy.visit('https://www.seebiz.cloud/');
      cy.get('.sso-sign-in').click();
      cy.get(".color-blue.f-14").click();
      // Assertion - Check if the user is redirected to the Forgot Password page
      cy.url().should('eq', 'https://accounts.seebiz.cloud/forgotPassword');
      cy.get("#forgotPwd").click();
      cy.contains('Please enter your email').should('be.visible');


  });



  it('TC-Signin-31:To check the functionality of forgot password to provide invalid email address (only characters)', () => {
      cy.visit('https://www.seebiz.cloud/');
      cy.get('.sso-sign-in').click();
      cy.get(".color-blue.f-14").click();
      // Assertion - Check if the user is redirected to the Forgot Password page
      cy.url().should('eq', 'https://accounts.seebiz.cloud/forgotPassword');

      cy.get('#email').type('LeonardoDiCapriogmail.com')

      cy.get("#forgotPwd").click();
      cy.contains('Please enter valid email address').should('be.visible');


  });
      
  it('TC-Signin-32:Verifies the functionality of "Back to Login" option after clicking "Forgot Password"', () => {
      cy.visit('https://www.seebiz.cloud/');
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
    
      cy.visit('https://www.seebiz.cloud/');
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
  
      cy.visit('https://www.seebiz.cloud/');
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
  
      cy.visit('https://www.seebiz.cloud/');
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
          cy.visit('https://www.seebiz.cloud/');
          cy.get('.sso-sign-in').click();
          cy.wait(2000);
          cy.get('.color-blue.f-14').should('exist').and('be.visible');

        });
    
      it('TC-Signin-41: Verify the "Forgot Password?" link is working correctly', () => {
        cy.visit('https://www.seebiz.cloud/');
        cy.get('.sso-sign-in').click();
        cy.get('.color-blue.f-14').click();
        cy.url().should('include', 'https://accounts.seebiz.cloud/forgotPassword');
      
      });
    
      it(' TC-Signin-42:Verify the "Forgot Password?" Page', () => {
        cy.visit('https://www.seebiz.cloud/');
        cy.get('.sso-sign-in').click();
        cy.get('.color-blue.f-14').click();
        cy.contains('Forgot Password').should('exist');
      });
      it('TC-Signin-42.1: Verify the "Forgot Password?" Page', () => {
        cy.visit('https://www.seebiz.cloud/');
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
          cy.visit('https://www.seebiz.cloud/');
          cy.get('.sso-sign-in').click();
          cy.get('.color-blue.f-14').click();
        
          
          cy.url().should('include', 'https://accounts.seebiz.cloud/forgotPassword');
        });
        
    
        it('TC-Signin-44: Verify the "Email field" is available on Forgot Password page', () => {
          cy.visit('https://www.seebiz.cloud/');
          cy.get('.sso-sign-in').click();
          cy.get('.color-blue.f-14').click();
        
          // Wait for the email input field to be visible or present
          cy.get('#email', { timeout: 10000 }).should('exist').should('be.visible');
        });
        
    
      it('TC-Signin-45: Verify the "Send Verification Code" button is available on Forgot Password page', () => {
          cy.visit('https://www.seebiz.cloud/');
          cy.get('.sso-sign-in').click();
          cy.get('.color-blue.f-14').click();
           cy.get('#forgotPwd').should('exist');
      });
      
      it('TC-Signin-46: Verify the "Back" button on Forgot password page', () => {
          cy.visit('https://www.seebiz.cloud/');
          cy.get('.sso-sign-in').click();
          cy.get('.color-blue.f-14').click();
          cy.get('.color-2020.back').should('exist');
      });
      
      it(' TC-Signin-47:Verify by writing the "valid email" in the email field on the Forgot Password page', () => {
          cy.visit('https://www.seebiz.cloud/');
          cy.get('.sso-sign-in').click();
          cy.get('.color-blue.f-14').click();
          cy.wait(3000);
          cy.get('#email').type('fazalerabiseebiz0+op@gmail.com');
          cy.get('#forgotPwd').click();
          cy.url().should('include', 'https://accounts.seebiz.cloud/verificationCode');
        
      });
    
    
      it('TC-Signin-48: Verify by writing the "invalid email" in the email field on the Forgot Password page ', () => {
          cy.visit('https://www.seebiz.cloud/');
          cy.get('.sso-sign-in').click();
          cy.get('.color-blue.f-14').click();
          cy.wait(2000);
          cy.get('#email').type('fazalerabiseebizgmail.com');
          cy.get('#forgotPwd').click();
          cy.contains('Please enter valid email address').should('exist');
          cy.wait(2000)
        
      });
      

      it('TC-Signin-49: Verify the "Verification code" page ', () => {
          cy.visit('https://www.seebiz.cloud/');
          cy.get('.sso-sign-in').click();
          cy.get('.color-blue.f-14').click();
          cy.wait(2000);
          cy.get('#email').type('fazalerabiseebiz0+op@gmail.com');
          cy.get('#forgotPwd').click();
          cy.url().should('include', 'https://accounts.seebiz.cloud/verificationCode');
        
      });




      
      it(' TC-Signin-51:Verify by entering a "valid OTP" code on the OTP field ', () => {
          cy.visit('https://www.seebiz.cloud/');
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
      cy.visit('https://www.seebiz.cloud/');
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
      cy.visit('https://www.seebiz.cloud/');
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
    cy.visit('https://www.seebiz.cloud/');
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
      cy.visit('https://www.seebiz.cloud/');
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
      cy.visit('https://www.seebiz.cloud/');
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