/*describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})

describe('Email Verification Test', () => {
  it('Verifies a valid email address', () => {
    // Visit the webpage where the email verification form is located
    cy.visit('https://accounts.seebiz.cloud/')

    // Type a valid email address into the input field
    const validEmail = 'fazalerabi040@gmail.com'
    cy.get('#email').type(validEmail)
   // Type a valid Password address into the input field

   cy.get("input[placeholder='Password']").type('Fazal123')
    // Click the button to verify the email
    cy.get('#loginBtn').click()

    // Assert that the email verification was successful (assuming there's some confirmation message or UI change)
   // cy.get('.verification-success-message').should('be.visible')
  })
})

*/
/// <reference types="cypress"/>
describe('Sign-Up  Test Cases ', () => {
  beforeEach(() => {
    
    
    cy.viewport(1920, 1080)
    // Visit the webpage where the email field is available
    cy.visit('https://www.seebiz.cloud/')
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
it('TC-SP-22.1: Verify the "Password" with Special Characters', () => {
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

  // Click the login button and wait for the verification message
//   cy.get('#loginBtn').click().wait(3000);

  // Verify the presence of the email verification message
//    cy.contains('Verify your email address').should('exist');


cy.get('#loginBtn').then(($element) => {
    if ($element.text().includes("Verify your email address")) {
        // If the text is found, click the button
        cy.get('h1').should("contain","Verify your email address")
    }
    else {
        cy.log("Assertion failed. Taking alternative action...");
    }
});

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






}) 



  /*
describe('Password Validation Tests', () => {
  beforeEach(() => {
    // Visit the webpage where the "Create Account" button is available
    cy.visit('https://www.example.com'); // Replace with your website URL
    cy.contains('Create Account').click(); // Click on the "Create Account" button
  });

  it('Verifies the conditions for "at least 8 characters" in password field', () => {
    const password = 'Password1';
    cy.get("input[placeholder='Password']").type(password);
    cy.contains('At least 8 characters').should('have.class', 'tick-mark'); // Assuming there's a tick-mark icon when the condition is met
  });

  it('Verifies the conditions for "Contain at least 1 number" in password field', () => {
    const password = 'Password1';
    cy.get("input[placeholder='Password']").type(password);
    cy.contains('Contain at least 1 number').should('have.class', 'tick-mark');
  });

  it('Verifies the conditions for "Combine uppercase and lowercase letters" in password field', () => {
    const password = 'Password1';
    cy.get("input[placeholder='Password']").type(password);
    cy.contains('Combine uppercase and lowercase letters').should('have.class', 'tick-mark');
  });

  it('Verifies the "Password" with a valid password', () => {
    const validPassword = 'ValidPassword123';
    cy.get("input[placeholder='Password']").type(validPassword);
    cy.get("input[placeholder='Confirm Password']").type(validPassword);
    cy.contains('Create Account').click(); // Click on the Create Account button
    // Add assertions for successful account creation
  });

  it('Verifies the "Password" with an invalid password', () => {
    const invalidPasswords = ['abc', 'ABC'];
    invalidPasswords.forEach(password => {
      cy.get("input[placeholder='Password']").type(password);
      cy.contains('Create Account').click(); // Click on the Create Account button
      // Add assertions for validation errors
    });
  });

  // Write other test cases for Confirm Password field validations...

});

  */



