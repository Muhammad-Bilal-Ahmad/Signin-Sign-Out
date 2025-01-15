
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

        cy.get('.inactive > .menu-text-left > .jsx-d1e1fef72bd82c0e').click();
        cy.contains("Privacy & Security").should("exist")
 
        
        cy.contains("Security").should("exist")

        cy.get('#deleteAccountSubMenu > :nth-child(1) > a').click();
        cy.contains("Disable Two Way Auth").should("exist")

         

     });


     it('TC-Priv&Sec-25 : To check the functionality "Disable two way auth" link is clickable', () => {

        cy.get('.inactive > .menu-text-left > .jsx-d1e1fef72bd82c0e').click();
        cy.contains("Privacy & Security").should("exist")
 
        
        cy.contains("Security").should("exist")

        cy.get('#deleteAccountSubMenu > :nth-child(1) > a').click();
        cy.contains("Disable Two Way Auth").should("exist")
        cy.contains("Disable Two Way Auth").click();

        cy.url().should('include', 'https://accounts.seebiz.cloud/authSecurity');

     });
     it('TC-Priv&Sec-26 :To check the functionality of "Turn Off" button on security page', () => {

        cy.get('.inactive > .menu-text-left > .jsx-d1e1fef72bd82c0e').click();
        cy.contains("Privacy & Security").should("exist")
 
        
        cy.contains("Security").should("exist")

        cy.get('#deleteAccountSubMenu > :nth-child(1) > a').click();
        cy.contains("Disable Two Way Auth").should("exist")
        cy.contains("Disable Two Way Auth").click();
        cy.url().should('include', 'https://accounts.seebiz.cloud/authSecurity');
        cy.contains("TURN OFF").click()
        cy.contains("Do you want to turn off ?").should("exist")
       

     });
     it('TC-Priv&Sec-27 :To check the functionality of modal Pop Up  button on security page', () => {

        cy.get('.inactive > .menu-text-left > .jsx-d1e1fef72bd82c0e').click();
        cy.contains("Privacy & Security").should("exist")
 
        
        cy.contains("Security").should("exist")

        cy.get('#deleteAccountSubMenu > :nth-child(1) > a').click();
        cy.contains("Disable Two Way Auth").should("exist")
        cy.contains("Disable Two Way Auth").click();
        cy.url().should('include', 'https://accounts.seebiz.cloud/authSecurity');
        cy.contains("TURN OFF").click()
        cy.contains("Do you want to turn off ?").should("exist")
       

     });
     it('TC-Priv&Sec-28 :To check the functionality of "Cancel" button in the Modal Pop Up', () => {

        cy.get('.inactive > .menu-text-left > .jsx-d1e1fef72bd82c0e').click();
        cy.contains("Privacy & Security").should("exist")
 
        
        cy.contains("Security").should("exist")

        cy.get('#deleteAccountSubMenu > :nth-child(1) > a').click();
        cy.contains("Disable Two Way Auth").should("exist")
        cy.contains("Disable Two Way Auth").click();
        cy.url().should('include', 'https://accounts.seebiz.cloud/authSecurity');
        cy.contains("TURN OFF").click()
        cy.contains("Do you want to turn off ?").should("exist")
        cy.wait(2000);
        cy.contains("Cancel").click()
       

     });


     it('TC-Priv&Sec-29 :To check the functionality of "Yes" button in the Modal Pop Up', () => {

        cy.get('.inactive > .menu-text-left > .jsx-d1e1fef72bd82c0e').click();
        cy.contains("Privacy & Security").should("exist")
 
        
        cy.contains("Security").should("exist")

        cy.get('#deleteAccountSubMenu > :nth-child(1) > a').click();
        cy.contains("Disable Two Way Auth").should("exist")
        cy.contains("Disable Two Way Auth").click();
        cy.url().should('include', 'https://accounts.seebiz.cloud/authSecurity');
        cy.contains("TURN OFF").click()
        cy.contains("Do you want to turn off ?").should("exist")
        cy.wait(2000);
        cy.contains("Yes").click()
        cy.get('#password').should("exist");
       

     });
     it('TC-Priv&Sec-30 :To check the functionality "Email address is correct" on the Security page', () => {

        cy.get('.inactive > .menu-text-left > .jsx-d1e1fef72bd82c0e').click();
        cy.contains("Privacy & Security").should("exist")
 
        
        cy.contains("Security").should("exist")

        cy.get('#deleteAccountSubMenu > :nth-child(1) > a').click();
        cy.contains("Disable Two Way Auth").should("exist")
        cy.contains("Disable Two Way Auth").click();
        cy.url().should('include', 'https://accounts.seebiz.cloud/authSecurity');
        cy.contains("TURN OFF").click()
        cy.contains("Do you want to turn off ?").should("exist")
        cy.wait(2000);
        cy.contains("Yes").click()
        cy.get('#password').should("exist");
    
        cy.contains('fazalerabiseebiz0+1@gmail.com').should("exist");

       

     });





    });