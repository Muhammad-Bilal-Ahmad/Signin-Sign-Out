/// <reference types="cypress"/>
describe('Two way Authentication Test Cases', () => {
    beforeEach(() => {
        // run these tests as if in a desktop browser with a 1920x1080 resolution
        cy.viewport(1920, 1080);
        cy.visit('https://www.seebiz.cloud/');
       
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