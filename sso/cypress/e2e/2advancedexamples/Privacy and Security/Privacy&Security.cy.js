/// <reference types = "cypress" />

describe('Privacy & Security Test Cases', () => {
    beforeEach(() => {
      // run these tests as if in a desktop browser with a 1920x1080 resolution
      cy.viewport(1920, 1080);
      cy.visit('https://www.seebiz.cloud/');
     
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
  
    it('TC-Priv&Sec-02: Check the functionality of "Go to the Security tab"', () => {
      cy.contains("Privacy & Security").click();
      cy.contains("Privacy & Security").should("exist");
    });
  
    it('TC-Priv&Sec-03: Verify that the Security tab is highlighted', () => {
      cy.contains("Privacy & Security").click();
      cy.contains("Privacy & Security").should("exist");
      cy.contains('Security').should('have.class', 'active');
    });
  
    it('TC-Priv&Sec-04: Check the functionality of "Enable two way authentication" link is shown', () => {
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