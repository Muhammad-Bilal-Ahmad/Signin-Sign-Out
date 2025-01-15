/// <reference types="cypress"/>
describe('Payment & Subscription Test Cases', () => {
    beforeEach(() => {
        // run these tests as if in a desktop browser with a 1920x1080 resolution
        cy.viewport(1920, 1080);
        cy.visit('https://www.seebiz.cloud/');
       
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
                .click()
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
                .click()
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
                .click()
                cy.wait(2000)
                cy.get(".modal-backdrop ").click()
             });
            
    });