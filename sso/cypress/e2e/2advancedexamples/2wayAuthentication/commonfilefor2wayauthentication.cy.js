

/// <reference types="cypress" />


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
    cy.visit('https://www.seebiz.cloud/');
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
    cy.get('#deleteAccountSubMenu > :nth-child(1) > a').click()
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
