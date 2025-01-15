describe('Account Deletion Test Cases', () => {
    beforeEach(() => {
        // run these tests as if in a desktop browser with a 1920x1080 resolution
        cy.viewport(1920, 1080);
        cy.visit('https://www.seebiz.cloud/');
       
        cy.get(".sso-sign-in").click();
    

        
    });
    it('TC-Priv&Sec-37  : To check the functionality of Account Deletion tab is viewable ', () => {
        cy.get('input[placeholder="Email"]').type("fazalerabi040@gmail.com");
        cy.get('input[placeholder="Password"]').type('Fazal123');
         //Click the 'Unhide Password' icon
         cy.get("#password > div > svg").click();
        // Check if password is visible after clicking the 'Unhide Password' icon
        cy.get("input[placeholder='Password']").should('have.attr', 'type', 'text');
        cy.contains("Sign in").click();
        cy.url().should('include', 'https://www.seebiz.cloud/');
        cy.wait(11000)
        cy.get('.sso-user-img > img').click();
        cy.contains('My Account').invoke('removeAttr', 'target').click();
        cy.contains("Privacy & Security").should("exist")
        cy.contains("Privacy & Security").click();

        cy.contains("Account Deletion").should("exist");
        cy.wait(2000)



     });

     it('TC-Priv&Sec-38: Check "Go to the Account Deletion tab" functionality', () => {
        cy.get('input[placeholder="Email"]').type("fazalerabi040@gmail.com");
        cy.get('input[placeholder="Password"]').type('Fazal123');
         //Click the 'Unhide Password' icon
         cy.get("#password > div > svg").click();
        // Check if password is visible after clicking the 'Unhide Password' icon
        cy.get("input[placeholder='Password']").should('have.attr', 'type', 'text');
        cy.contains("Sign in").click();
        cy.url().should('include', 'https://www.seebiz.cloud/');
        cy.wait(11000)
        cy.get('.sso-user-img > img').click();
        cy.contains('My Account').invoke('removeAttr', 'target').click();;
        cy.contains("Privacy & Security").click();
        cy.contains("Account Deletion").should('exist').click();
    
       // cy.contains("No data found").should('exist');
    
        cy.url().should('include', 'https://accounts.seebiz.cloud/deleteAccount'); 

    
        cy.wait(2000);
    });
    
    it('TC-Priv&Sec-39: Verify that the Security tab is highlighted', () => {
        cy.get('input[placeholder="Email"]').type("fazalerabi040@gmail.com");
        cy.get('input[placeholder="Password"]').type('Fazal123');
         //Click the 'Unhide Password' icon
         cy.get("#password > div > svg").click();
        // Check if password is visible after clicking the 'Unhide Password' icon
        cy.get("input[placeholder='Password']").should('have.attr', 'type', 'text');
        cy.contains("Sign in").click();
        cy.url().should('include', 'https://www.seebiz.cloud/');
        cy.wait(11000)
        cy.get('.sso-user-img > img').click();
        cy.contains('My Account').invoke('removeAttr', 'target').click();;
        cy.contains("Privacy & Security").click();
        cy.contains("Account Deletion").should('exist').click();
        
       // cy.contains("No data found").should('exist');
    
        cy.url().should('include', 'https://accounts.seebiz.cloud/deleteAccount'); 
        
    
        cy.wait(2000);
    });
    it('TC-Priv&Sec 40 -: To check the functionality of "seller or buyer account is not attached "', () => {
        cy.get('input[placeholder="Email"]').type("fazalerabi040@gmail.com");
        cy.get('input[placeholder="Password"]').type('Fazal123');
         //Click the 'Unhide Password' icon
         cy.get("#password > div > svg").click();
        // Check if password is visible after clicking the 'Unhide Password' icon
        cy.get("input[placeholder='Password']").should('have.attr', 'type', 'text');
        cy.contains("Sign in").click();
        cy.url().should('include', 'https://www.seebiz.cloud/');
        cy.wait(11000)
        cy.get('.sso-user-img > img').click();
        cy.contains('My Account').invoke('removeAttr', 'target').click();;
        cy.contains("Privacy & Security").click();
        cy.contains("Account Deletion").should('exist').click();
        
        cy.contains("No data found").should('exist');
    
        cy.url().should('include', 'https://accounts.seebiz.cloud/deleteAccount'); 
        
    
        cy.wait(2000);
    });
    it('TC-Priv&Sec 41 -: To check the functionality of "seller or buyer account is attached "', () => {
        cy.get('input[placeholder="Email"]').type("Bilalseebiz7500+338@gmail.com");
        cy.get('input[placeholder="Password"]').type('Bilal7500');
         //Click the 'Unhide Password' icon
         cy.get("#password > div > svg").click();
        // Check if password is visible after clicking the 'Unhide Password' icon
        cy.get("input[placeholder='Password']").should('have.attr', 'type', 'text');
        cy.contains("Sign in").click();
        cy.url().should('include', 'https://www.seebiz.cloud/');
        cy.wait(11000)
        cy.get('.sso-user-img > img').click();
        cy.contains('My Account').invoke('removeAttr', 'target').click();;
        cy.contains("Privacy & Security").click();
        cy.contains("Account Deletion").should('exist').click();
        
        cy.contains("No data found").should('exist');
    
        cy.url().should('include', 'https://accounts.seebiz.cloud/deleteAccount'); 
        cy.contains("Marketplace").should('exist')
        
        //cy.contains("Marketplace").click();
        cy.wait(2000);
    });
    it('TC-Priv&Sec 42 -: To check the functionality of "Request to delete"', () => {
        cy.get('input[placeholder="Email"]').type("Bilalseebiz7500+338@gmail.com");
        cy.get('input[placeholder="Password"]').type('Bilal7500');
         //Click the 'Unhide Password' icon
         cy.get("#password > div > svg").click();
        // Check if password is visible after clicking the 'Unhide Password' icon
        cy.get("input[placeholder='Password']").should('have.attr', 'type', 'text');
        cy.contains("Sign in").click();
        cy.url().should('include', 'https://www.seebiz.cloud/');
        cy.wait(11000)
        cy.get('.sso-user-img > img').click();
        cy.contains('My Account').invoke('removeAttr', 'target').click();;
        cy.contains("Privacy & Security").click();
        cy.contains("Account Deletion").should('exist').click();
        
        cy.contains("No data found").should('exist');
    
        cy.url().should('include', 'https://accounts.seebiz.cloud/deleteAccount'); 
        cy.contains("Marketplace").should('exist')
        cy.contains("Marketplace").click()
        cy.get('.swal2-confirm').should("exist")

    
        cy.wait(2000);
    });
    it('TC-Priv&Sec 43 -: To check the functionality of "Request to delete"', () => {
        
        cy.get('input[placeholder="Email"]').type("Bilalseebiz7500+338@gmail.com");
        cy.get('input[placeholder="Password"]').type('Bilal7500');
         //Click the 'Unhide Password' icon
         cy.get("#password > div > svg").click();
        // Check if password is visible after clicking the 'Unhide Password' icon
        cy.get("input[placeholder='Password']").should('have.attr', 'type', 'text');
        cy.contains("Sign in").click();
        cy.url().should('include', 'https://www.seebiz.cloud/');
        cy.wait(11000)
        cy.get('.sso-user-img > img').click();
        cy.contains('My Account').invoke('removeAttr', 'target').click();;
        cy.contains("Privacy & Security").click();
        cy.contains("Account Deletion").should('exist').click();
        
        cy.contains("No data found").should('exist');
    
        cy.url().should('include', 'https://accounts.seebiz.cloud/deleteAccount'); 
        cy.contains("Marketplace").should('exist')
        cy.contains("Marketplace").click()
        cy.contains("Continue deleting your account request").should("exist")
        cy.contains("Continue deleting your account request").click();
        cy.url().should('include', 'https://accounts.seebiz.cloud/accountDeletion?origin=seebiz'); 

    
        cy.wait(2000);
    });

    
    it('TC-Priv&Sec 43.1 -: TTo check the functionality of  Click " Terms of deletion"', () => {
        
        cy.get('input[placeholder="Email"]').type("Bilalseebiz7500+338@gmail.com");
        cy.get('input[placeholder="Password"]').type('Bilal7500');
         //Click the 'Unhide Password' icon
         cy.get("#password > div > svg").click();
        // Check if password is visible after clicking the 'Unhide Password' icon
        cy.get("input[placeholder='Password']").should('have.attr', 'type', 'text');
        cy.contains("Sign in").click();
        cy.url().should('include', 'https://www.seebiz.cloud/');
        cy.wait(11000)
        cy.get('.sso-user-img > img').click();
        cy.contains('My Account').invoke('removeAttr', 'target').click();;
        cy.contains("Privacy & Security").click();
        cy.contains("Account Deletion").should('exist').click();
        
        cy.contains("No data found").should('exist');
    
        cy.url().should('include', 'https://accounts.seebiz.cloud/deleteAccount'); 
        cy.contains("Marketplace").should('exist')
        cy.contains("Marketplace").click()
        cy.contains("Continue deleting your account request").should("exist")
        cy.contains("Continue deleting your account request").click();
        cy.url().should('include', 'https://accounts.seebiz.cloud/accountDeletion?origin=seebiz'); 
        cy.contains("Terms of deletion").invoke('removeAttr', 'target').click();;
        cy.wait(2000);
        cy.contains("Updates on Privacy Policy").scrollIntoView();
        cy.url().should('include', 'https://accounts.seebiz.cloud/accountDeletionProcess'); 


        cy.wait(2000);
    });
    it('TC-Priv&Sec 44 -: To check the functionality of "Verify the checkbox"', () => {
        
        cy.get('input[placeholder="Email"]').type("Bilalseebiz7500+338@gmail.com");
        cy.get('input[placeholder="Password"]').type('Bilal7500');
         //Click the 'Unhide Password' icon
         cy.get("#password > div > svg").click();
        // Check if password is visible after clicking the 'Unhide Password' icon
        cy.get("input[placeholder='Password']").should('have.attr', 'type', 'text');
        cy.contains("Sign in").click();
        cy.url().should('include', 'https://www.seebiz.cloud/');
        cy.wait(11000)
        cy.get('.sso-user-img > img').click();
        cy.contains('My Account').invoke('removeAttr', 'target').click();;
        cy.contains("Privacy & Security").click();
        cy.contains("Account Deletion").should('exist').click();
        
        cy.contains("No data found").should('exist');
    
        cy.url().should('include', 'https://accounts.seebiz.cloud/deleteAccount'); 
        cy.contains("Marketplace").should('exist')
        cy.contains("Marketplace").click()
        cy.contains("Continue deleting your account request").should("exist")
        cy.contains("Continue deleting your account request").click();
        cy.url().should('include', 'https://accounts.seebiz.cloud/accountDeletion?origin=seebiz');
    // cy.contains("Terms of deletion").invoke('removeAttr', 'target').click();;
       // cy.wait(2000);
       // cy.contains("Updates on Privacy Policy").scrollIntoView();
       // cy.url().should('include', 'https://accounts.seebiz.cloud/accountDeletionProcess');
       // cy.go('back'); 
        cy.get("#inlineCheckbox1").click();
    });


    it('TC-Priv&Sec 44.1 : Verify validation error message when Confirm Delete is clicked without entering a password  and Click CheckBox ', () => {
        
        cy.get('input[placeholder="Email"]').type("Bilalseebiz7500+338@gmail.com");
        cy.get('input[placeholder="Password"]').type('Bilal7500');
         //Click the 'Unhide Password' icon
         cy.get("#password > div > svg").click();
        // Check if password is visible after clicking the 'Unhide Password' icon
        cy.get("input[placeholder='Password']").should('have.attr', 'type', 'text');
        cy.contains("Sign in").click();
        cy.url().should('include', 'https://www.seebiz.cloud/');
        cy.wait(11000)
        cy.get('.sso-user-img > img').click();
        cy.contains('My Account').invoke('removeAttr', 'target').click();;
        cy.contains("Privacy & Security").click();
        cy.contains("Account Deletion").should('exist').click();
        
        cy.contains("No data found").should('exist');
    
        cy.url().should('include', 'https://accounts.seebiz.cloud/deleteAccount'); 
        cy.contains("Marketplace").should('exist')
        cy.contains("Marketplace").click()
        cy.contains("Continue deleting your account request").should("exist")
        cy.contains("Continue deleting your account request").click();
        cy.url().should('include', 'https://accounts.seebiz.cloud/accountDeletion?origin=seebiz');
        cy.get("#inlineCheckbox1").click();
        cy.get('.delete-btn').click();
        cy.wait(2000)
        cy.contains('Confirm your account deletion request').click();
        cy.contains('Please enter password').should('be.visible')



    });
    it(' TC-Priv&Sec 44.2 : Verify validation error message on checkbox & Password Field when Click Delete is clicked without entering a password  and without Click Checkbox  ', () => {
        
        cy.get('input[placeholder="Email"]').type("Bilalseebiz7500+338@gmail.com");
        cy.get('input[placeholder="Password"]').type('Bilal7500');
         //Click the 'Unhide Password' icon
         cy.get("#password > div > svg").click();
        // Check if password is visible after clicking the 'Unhide Password' icon
        cy.get("input[placeholder='Password']").should('have.attr', 'type', 'text');
        cy.contains("Sign in").click();
        cy.url().should('include', 'https://www.seebiz.cloud/');
        cy.wait(11000)
        cy.get('.sso-user-img > img').click();
        cy.contains('My Account').invoke('removeAttr', 'target').click();;
        cy.contains("Privacy & Security").click();
        cy.contains("Account Deletion").should('exist').click();
        
        cy.contains("No data found").should('exist');
    
        cy.url().should('include', 'https://accounts.seebiz.cloud/deleteAccount'); 
        cy.contains("Marketplace").should('exist')
        cy.contains("Marketplace").click()
        cy.contains("Continue deleting your account request").should("exist")
        cy.contains("Continue deleting your account request").click();
        cy.url().should('include', 'https://accounts.seebiz.cloud/accountDeletion?origin=seebiz');
        //cy.get("#inlineCheckbox1").click();
        cy.get('.delete-btn').click();
        cy.wait(2000)
     // Validate error messages for missing agreement and password
     cy.contains('Please agree with terms of deletion').should('be.visible');
     cy.contains('Confirm your account deletion request').should('be.visible');
        

    });

    it(' TC-Priv&Sec 45 : To check the functionality of "Enter incorrect password" ', () => {
        
        cy.get('input[placeholder="Email"]').type("Bilalseebiz7500+338@gmail.com");
        cy.get('input[placeholder="Password"]').type('Bilal7500');
         //Click the 'Unhide Password' icon
         cy.get("#password > div > svg").click();
        // Check if password is visible after clicking the 'Unhide Password' icon
        cy.get("input[placeholder='Password']").should('have.attr', 'type', 'text');
        cy.contains("Sign in").click();
        cy.url().should('include', 'https://www.seebiz.cloud/');
        cy.wait(11000)
        cy.get('.sso-user-img > img').click();
        cy.contains('My Account').invoke('removeAttr', 'target').click();;
        cy.contains("Privacy & Security").click();
        cy.contains("Account Deletion").should('exist').click();
        
        cy.contains("No data found").should('exist');
    
        cy.url().should('include', 'https://accounts.seebiz.cloud/deleteAccount'); 
        cy.contains("Marketplace").should('exist')
        cy.contains("Marketplace").click()
        cy.contains("Continue deleting your account request").should("exist")
        cy.contains("Continue deleting your account request").click();
        cy.url().should('include', 'https://accounts.seebiz.cloud/accountDeletion?origin=seebiz');
        cy.get("#inlineCheckbox1").click();

        cy.get('#password').type("Fazal123")
        cy.get('.delete-btn').click();
        cy.wait(2000)
     
     cy.contains('Incorrect password').should('be.visible');
   
        

    });

});