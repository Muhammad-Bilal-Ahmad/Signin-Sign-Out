class AccountDeletionPage  {


  constructor() {
    // Define page elements
    this.emailInput = "#email";
    this.passwordInput = "input[placeholder='Password']";
    this.signInButton = ".sso-sign-in";
    this.loginInButton = "#loginBtn";
    this.deleteAccountButton = ".btn-cancel";
    this.confirmPasswordInput = "#customInput";
    this.showPasswordIcon = "#password > div:nth-child(2) > svg > path";
    this.sendInviteButton = ".account-del-text > .d-flex > span";
    this.invitationCard = ".modal-header";
    // Add more elements as needed
  }
    visit(url) {
      cy.visit(url);
    }
  
    signIn(email, password) {
      // Sign in action
      cy.get(this.signInButton).click();
      cy.get(this.emailInput).type(email);
      cy.get(this.passwordInput).type(password);
      cy.get(this.showPasswordIcon).click();
      cy.get(this.loginInButton).click({force:true});
      
      cy.wait(13000)
    }
    clickDeleteAccount() {
      cy.get(this.deleteAccountButton).click();
    }
  
    enterConfirmPassword(password) {
      cy.get(this.confirmPasswordInput).type(password);
    }
  
    showPassword() {
      cy.get(this.showPasswordIcon).click();
    }
  
    clickSendInvite() {
      cy.get(this.sendInviteButton).click();
    }
  /*
    setUsername(userName) {
      cy.get("#email").type(userName);0
    }
  
    setPassword(password) {
      cy.get("input[placeholder='Password']").type(password);
    }
    setUsername(SellerEmail) {
      cy.get("#email").type(SellerEmail);0
    }
  
    setPassword(SellerPassword) {
      cy.get("input[placeholder='Password']").type(SellerPassword);
    }
    setUsername(BuyerEmail) {
      cy.get("#email").type(BuyerEmail);0
    }
  
    setPassword(BuyerPassword) {
      cy.get("input[placeholder='Password']").type(BuyerPassword);
    }
    setUsername(BothEmail) {
      cy.get("#email").type(BothEmail);0
    }
  
    setPassword(BothPassword) {
      cy.get("input[placeholder='Password']").type(BothPassword);
    }
*/

    
    /*
    setSellerUsername(selleremail) {
      cy.get("#email").type(selleremail);0
    }
  
    setSellerPassword(sellerpassword) {
      cy.get("input[placeholder='Password']").type(sellerpassword);
    }*/
  
    showPassword() {
      cy.get("#password > div:nth-child(2) > svg > path").click();
      cy.get('input[placeholder="Password"]').should('have.attr', 'type', 'text');
    }
  
    clickLoginButton() {
      cy.get("#loginBtn").click();
      cy.wait(10000);
      cy.url().should('include', 'https://www.seebiz.cloud/');
    }
  
    selectBuyerDashboard() {
      cy.contains('Access Dashboard').click();
      cy.contains('Buyer Dashboard').should("exist").click().wait(2000);
      cy.url().should('include', 'https://www.seebiz.cloud/buyer/dashboard');
    }
    CheckCorrPSWDVar(){
    
        cy.get('.sso-user-img > img').click();
        cy.contains('My Account').invoke('removeAttr', 'target').click();
        cy.contains("Privacy & Security").should("exist")
        cy.contains("Privacy & Security").click();
        cy.contains("Account Deletion").should("exist").click();
        cy.get("div[class='d-flex confirm_password_heading'] h3").should('have.text', 'Confirm Password')
        cy.get('#customInput').should("exist")
        cy.get('#customInput').type("Temp1234!")
        cy.get('.btn_primary').click();
        cy.url().should('include', 'https://accounts.seebiz.cloud/deleteAccount');
        cy.get('.page-heading').should('have.text', 'Account Deletion')

        cy.get('.user-name-store').should('exist');

        cy.get(".welcom-back").should('have.text', 'Welcome back !')


      
     }
     Sendinvitelink(){
      cy.get("img[alt='arrow icon']").should("exist")
      cy.get('.account-del-text > .d-flex > span').should('have.text',"Send Invite").click()
      

      cy.get('.modal-header').should('have.text',"Invitation Card")
     }
     EnterEmailforinvitation(){
      const randomemail = "bilalseebiz7500+" + Math.random().toString(36).substring(3,6) + "@gmail.com";
      cy.get('#customInput').should("exist").type(randomemail)
      cy.get("button[type='submit']").should('have.text', "Send Invitation").click();
      cy.get('.Toastify__toast-body > :nth-child(2)').should('have.text', "Invitation  sent successfully")
     }
     ClickAccountDeletionagain(){
      cy.get(':nth-child(2) > .active').should('have.text', 'Account Deletion').click()
      cy.url().should('include', 'https://accounts.seebiz.cloud/deleteAccount');
      cy.get('.page-heading').should('have.text', 'Account Deletion')

      cy.get('.user-name-store').should('exist');

      cy.get(".welcom-back").should('have.text', 'Welcome back !')

     }

     

     AlreadyRegisterSeebiz(){
      cy.get('#customInput').should("exist").type("fazalerabi040@gmail.com")
      cy.get("button[type='submit']").should('have.text', "Send Invitation").click();
      cy.get('.input-error-text').should('have.text', "seebiz account already created by this email")
     }
     ClosePopupMessage(){
      cy.get(".btn-cancel").should('have.text', "Close").click();

     }
     Crosiconinvite(){
      cy.get("img[alt='cross icon']").should("exist").click()

     }

     ClickAccountdeletion(){
      cy.get('.sso-user-img > img').click();
      cy.contains('My Account').invoke('removeAttr', 'target').click();
      cy.contains("Privacy & Security").should("exist")
      cy.contains("Privacy & Security").click();
      cy.contains("Account Deletion").should("exist").click();
      cy.get("div[class='d-flex confirm_password_heading'] h3").should('have.text', 'Confirm Password')
      cy.get('#customInput').should("exist")


     }
     CrossIconAccountDeletionPopup(){
      cy.get('.sso-user-img > img').click();
      cy.contains('My Account').invoke('removeAttr', 'target').click();
      cy.contains("Privacy & Security").should("exist")
      cy.contains("Privacy & Security").click();
      cy.contains("Account Deletion").should("exist").click();
      cy.get("div[class='d-flex confirm_password_heading'] h3").should('have.text', 'Confirm Password')
      cy.get('#customInput').should("exist")
      cy.get('.close--modal__btn > img')
      .should('exist').click()
      cy.get('.logo').should('exist')
     }
     CancelButtonAccountDeletionPopup(){
      cy.get('.sso-user-img > img').click();
      cy.contains('My Account').invoke('removeAttr', 'target').click();
      cy.contains("Privacy & Security").should("exist")
      cy.contains("Privacy & Security").click();
      cy.contains("Account Deletion").should("exist").click();
      cy.get("div[class='d-flex confirm_password_heading'] h3").should('have.text', 'Confirm Password')
      cy.get('#customInput').should("exist")
      // Assuming you have already visited a page where this element is present
      cy.get('div.d-flex.form-btn.popup-btns').should('exist');

       // Assertion for the "Close" button
       cy.get('.btn_default').should('exist').click()
       cy.get('.logo').should('exist')


     }
     CheckWrngPSWDVar(){
    
      cy.get('.sso-user-img > img').click();
      cy.contains('My Account').invoke('removeAttr', 'target').click();
      cy.contains("Privacy & Security").should("exist")
      cy.contains("Privacy & Security").click();
      cy.contains("Account Deletion").should("exist").click();
      cy.get('#customInput').type("Temp12345!");
      cy.get("img[alt='hide password']").should("exist").click();
      cy.get('.btn_primary').should("exist").click();
       // Verify "Invalid Password" message is visible
       cy.get('.input-error-text').should('have.text','Invalid Password')
     // cy.url().should('include', 'https://accounts.seebiz.cloud/deleteAccount');

     
   }
  
   ClickPasswordIcon()
   {
    
    cy.get('.sso-user-img > img').click();
    cy.contains('My Account').invoke('removeAttr', 'target').click();
    cy.contains("Privacy & Security").should("exist")
    cy.contains("Privacy & Security").click();
    cy.contains("Account Deletion").should("exist").click();
    cy.get('#customInput').type("Temp1234!")
    cy.get(':nth-child(1) > .input-container > div > .eye--icon').click().wait(2000)
    // Confirm Password
    cy.get('.btn_primary').click();
  
   }
   SellerClickPasswordIcon()
   {
    
    cy.get('.sso-user-img > img').click();
    cy.contains('My Account').invoke('removeAttr', 'target').click();
    cy.contains("Privacy & Security").should("exist")
    cy.contains("Privacy & Security").click();
    cy.contains("Account Deletion").should("exist").click();
    cy.get('#customInput').type("Faizi123")
    cy.get(':nth-child(1) > .input-container > div > .eye--icon').click().wait(2000)
    // Confirm Password
    cy.get('.btn_primary').click();
    cy.get('h6').should('have.text', 'Marketplace')
    cy.get('.organizations-count').should('have.text', '1 Organizations')
  
   }
   BuyerClickPasswordIcon()
   {
    
    cy.get('.sso-user-img > img').click();
    cy.contains('My Account').invoke('removeAttr', 'target').click();
    cy.contains("Privacy & Security").should("exist")
    cy.contains("Privacy & Security").click();
    cy.contains("Account Deletion").should("exist").click();
    cy.get('#customInput').type("Change123")
    cy.get(':nth-child(1) > .input-container > div > .eye--icon').click().wait(2000)
    // Confirm Password
    cy.get('.btn_primary').click();
    cy.get('h6').should('have.text', 'Marketplace')
    cy.get('.organizations-count').should('have.text', '1 Organizations')
  
   }
   BothClickPasswordIcon()
   {
    
    cy.get('.sso-user-img > img').click();
    cy.contains('My Account').invoke('removeAttr', 'target').click();
    cy.contains("Privacy & Security").should("exist")
    cy.contains("Privacy & Security").click();
    cy.contains("Account Deletion").should("exist").click();
    cy.get('#customInput').type("Faheem123")
    cy.get(':nth-child(1) > .input-container > div > .eye--icon').click().wait(2000)
    // Confirm Password
    cy.get('.btn_primary').click();
    cy.get('h6').should('have.text', 'Marketplace')
    cy.get('.organizations-count').should('have.text', '2 Organizations')
    cy.get('.btn-cancel').should('have.text', 'Delete').click()
    cy.get(':nth-child(2) > .account-delete-profile > .account-del-left > .account-delete-info').should("exist")
    cy.get(':nth-child(3) > .account-delete-profile > .account-del-left > .account-delete-info').should("exist")
    


  
   }
   SelectAccountrole()
   {
    
    cy.get('.sso-user-img > img').click();
    cy.contains('My Account').invoke('removeAttr', 'target').click();
    cy.contains("Privacy & Security").should("exist")
    cy.contains("Privacy & Security").click();
    cy.contains("Account Deletion").should("exist").click();
    cy.get('#customInput').type("Faheem123")
    cy.get(':nth-child(1) > .input-container > div > .eye--icon').click().wait(2000)
    // Confirm Password
    cy.get('.btn_primary').click();
    cy.get('h6').should('have.text', 'Marketplace')
    cy.get('.organizations-count').should('have.text', '2 Organizations')
    cy.get('.btn-cancel').should('have.text', 'Delete').click()
    cy.get('h3').should('have.text', 'Select Account Role To Delete')
  
   }
   OTPSelectAccountrole()
   {
    
    cy.get('.sso-user-img > img').click();
    cy.contains('My Account').invoke('removeAttr', 'target').click();
    cy.contains("Privacy & Security").should("exist")
    cy.contains("Privacy & Security").click();
    cy.contains("Account Deletion").should("exist").click();
    cy.get('#customInput').type("Bilal7500")
    cy.get(':nth-child(1) > .input-container > div > .eye--icon').click().wait(2000)
    // Confirm Password
    cy.get('.btn_primary').click();
    cy.get('h6').should('have.text', 'Marketplace')
    cy.get('.organizations-count').should('have.text', '2 Organizations')
    cy.get('.btn-cancel').should('have.text', 'Delete').click()
    cy.get('h3').should('have.text', 'Select Account Role To Delete')
  
   }
   CheckAccountInforBuyer(){
    cy.get('.btn-cancel').should('have.text', 'Delete').click()
    //cy.get("body > div:nth-child(9) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > main:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > p:nth-child(1)").
    cy.get('h3').should('have.text', 'Select Account Role To Delete')
   // cy.get("body > div:nth-child(9) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > main:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(3)").
   //cy.get('.account-delete-wrapper').should('have.text', '2139156465')
    //cy.get("body > div:nth-child(9) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > main:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(4) > div:nth-child(3)").
    //cy.get('.account-delete-wrapper'). should('have.text', 'Massachusetts')
   }
   threeStepbuyerSidePass()
   {
    cy.url().should('include', 'https://accounts.seebiz.cloud/accountDeletion').wait(1000);
    // Proceed Buyer only 
    cy.get(':nth-child(2) > .account-delete-details > .d-flex > .btn-update').should('have.text', "Proceed").click()
     //Click Delete Button 

     
     cy.url().should('include', 'https://accounts.seebiz.cloud/authProcess');
      // Click and write Pass.
      cy.get('h2').should('have.text', '3-Factor Authentication Process');


      cy.get('#customInput').click().type("Faheem123")
      //Show Pass.
      cy.get('.eye--icon').should("exist").click();     
   }
   OTPthreeStepbuyerSidePass()
   {
    cy.url().should('include', 'https://accounts.seebiz.cloud/accountDeletion').wait(1000);
    // Proceed Buyer only 
    cy.get(':nth-child(2) > .account-delete-details > .d-flex > .btn-update').should('have.text', "Proceed").click()
     //Click Delete Button 

     
     cy.url().should('include', 'https://accounts.seebiz.cloud/authProcess');
      // Click and write Pass.
      cy.get('h2').should('have.text', '3-Factor Authentication Process');


      cy.get('#customInput').click().type("Bilal7500")
      //Show Pass.
      cy.get('.eye--icon').should("exist").click();     
   }
   OTPthreeStepSellerSidePass()
   {
    cy.url().should('include', 'https://accounts.seebiz.cloud/accountDeletion').wait(1000);
    // Proceed Buyer only 
    cy.get(':nth-child(3) > .account-delete-details > .d-flex > .btn-update').should('have.text', "Proceed").click()
     //Click Delete Button 

     
     cy.url().should('include', 'https://accounts.seebiz.cloud/authProcess');
      // Click and write Pass.
      cy.get('h2').should('have.text', '3-Factor Authentication Process');


      cy.get('#customInput').click().type("Bilal7500")
      //Show Pass.
      cy.get('.eye--icon').should("exist").click();     
   }
   ClickProceedButton(){
    cy.url().should('include', 'https://accounts.seebiz.cloud/accountDeletion').wait(1000);
    // Proceed Buyer only 
    cy.get(':nth-child(3) > .account-delete-details > .d-flex > .btn-update').should('have.text', "Proceed").click()
     //Click Delete Button 

     
     cy.url().should('include', 'https://accounts.seebiz.cloud/authProcess');
      // Click and write Pass.
      cy.get('h2').should('have.text', '3-Factor Authentication Process');
   }
   EnterwrngpassStepbuyerSide()
   {
    
    cy.url().should('include', 'https://accounts.seebiz.cloud/accountDeletion').wait(1000);
    // Proceed Buyer only 
    cy.get(':nth-child(2) > .account-delete-details > .d-flex > .btn-update').should('have.text', "Proceed").click()
     //Click Delete Button 

     
     cy.url().should('include', 'https://accounts.seebiz.cloud/authProcess');
      // Click and write Pass.
      cy.get('h2').should('have.text', '3-Factor Authentication Process');


      cy.get('#customInput').click().type("Faheemsds123")
      //Show Pass.
      cy.get('.eye--icon').click() 
      cy.get('.btn-update') .should('have.text', 'Next').click()
      cy.get('.input-error-text').should('have.text', 'Invalid Password') 
   }
   EnterwrngpassStepSellerSide()
   {
    
    cy.url().should('include', 'https://accounts.seebiz.cloud/accountDeletion').wait(1000);
    // Proceed Seller only 
    cy.get(':nth-child(2) > .account-delete-details > .d-flex > .btn-update').should('have.text', "Proceed").click()
     //Click Delete Button 

     
      cy.url().should('include', 'https://accounts.seebiz.cloud/authProcess');
      // Click and write Pass.
      cy.get('h2').should('have.text', '3-Factor Authentication Process');


      cy.get('#customInput').click().type("Bilal75005")
      //Show Pass.
      cy.get('.eye--icon').click() 
      cy.get('.btn-update') .should('have.text', 'Next').click()
      cy.get('.input-error-text').should('have.text', 'Invalid Password') 
   }
   EnterEmaiLAddress(){
     cy.get('.btn-update').click()
     cy.url().should('include', 'https://accounts.seebiz.cloud/authProcess').wait(1000);
     cy.get('.mini-heading').should('have.text', "Verify your email address").click()
     cy.get('.mb-40').should('have.text', "faheem.seebiz@gmail.com")

     //h3[normalize-space()='Verify your email address']
   }
   ClickSendOTPBuyerSide(){
    cy.get('.btn-update').should('have.text', 'Send OTP').click()
    cy.url().should('include', 'https://accounts.seebiz.cloud/authProcess').wait(1000);
    cy.get('.mini-heading').should('have.text', "Verify your email address").click()


   }


   CancelbuttoninVerifyEmail(){
    cy.get('.btn-cancel').should('have.text', 'Cancel').click()
    
    cy.get('.modal-header > h3').should('have.text', "Are you sure?")
    cy.get('.modal_content_inner > p').should('have.text', "This cannot be undone.")
    
    cy.get('.btn_primary').should('have.text', 'Yes').click()
    cy.url().should('include', 'https://accounts.seebiz.cloud/accountDeletion').wait(1000);

    cy.get('h3').should('have.text', 'Select Account Role To Delete')



   }

   OTPEnterEmaiLAddress(){
    cy.get('.btn-update').click()
    cy.url().should('include', 'https://accounts.seebiz.cloud/authProcess').wait(1000);
    cy.get('.mini-heading').should('have.text', "Verify your email address");
    cy.get('.mb-40').should('have.text', "bilalseebiz7500+338@gmail.com");

    //h3[normalize-space()='Verify your email address']
  }
  ClickButtonMobileOTP(){
    cy.get('.btn-update').should('have.text', "Send OTP").click({force:true});
    cy.get('.mini-heading').should('have.text', "Verify your phone number");
    cy.url().should('include', 'https://accounts.seebiz.cloud/authProcess').wait(1000);



  }
  ResendcodeMobileSeller(){
    cy.get('.btn-update').should('have.text', "Send OTP").click({force:true});
    cy.get('.mini-heading').should('have.text', "Verify your phone number");
    cy.url().should('include', 'https://accounts.seebiz.cloud/authProcess').wait(1000);
    cy.get('#resendButton').should('have.text', "Resend code").click()
    //cy.get('#errorDiv').should('have.text', "code send to phone number!")
  }
  GoPhonevarPage(){
    
    cy.get('.mini-heading').should('have.text', "Verify your phone number");
    cy.url().should('include', 'https://accounts.seebiz.cloud/authProcess').wait(1000);

  }
  
  


  EnterOTPBuyerSide(){
     cy.get('.btn-update').should('have.text', "Send OTP").click()
     cy.url().should('include', 'https://accounts.seebiz.cloud/authProcess').wait(1000);
    /* cy.get('#number1').click().type("1")
     cy.get('#number2').click().type("1")
     cy.get('#number3').click().type("1")
     cy.get('#number4').click().type("1")*/
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
        .type(numberToEnter);
        //.should('have.value', numberToEnter); // Ensure the value is entered correctly
    });


   }
   EnterInvalidOTPBuyerSide(){
    cy.get('.btn-update').should('have.text', "Send OTP").click()
    cy.url().should('include', 'https://accounts.seebiz.cloud/authProcess').wait(1000);
   /* cy.get('#number1').click().type("1")
    cy.get('#number2').click().type("1")
    cy.get('#number3').click().type("1")
    cy.get('#number4').click().type("1")*/


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
       .type(numberToEnter);
       //.should('have.value', numberToEnter); // Ensure the value is entered correctly
   });

   cy.get('#errorDiv').should('have.text', 'Please enter valid code')
      
  }

  CheckbehaviourReloadonEmailVarPage(){
    cy.get('.btn-update').should('have.text','Send OTP').click()
    cy.url().should('include', 'https://accounts.seebiz.cloud/authProcess').wait(1000);
    cy.get('.mini-heading').should('have.text', "Verify your email address");
    //cy.get('.mb-40').should('have.text', "bilalseebiz7500+338@gmail.com");
    cy.reload()
    cy.get('h2').should('have.text', '3-Factor Authentication Process');
    cy.get('.mini-heading').should('have.text', 'Verify Your Password');




  }
  ClickResendOTPbuyerSide(){
    cy.get('.btn-update').should('have.text', "Send OTP").click()
    cy.url().should('include', 'https://accounts.seebiz.cloud/authProcess').wait(1000);
    cy.get('#resendButton').should('have.text', "Resend code").click()
    cy.get('#errorDiv').should('have.text', "Email sent successfully!")
    cy.get('#countDown').should("exist")
  }
   CancelEmailVarBTN()
   {
     // Cancel Button
     cy.get('.btn-cancel').click()

     cy.get('.modal-header > h3').should('have.text', "Are you sure?")
     cy.get('.modal_content_inner > p').should('have.text', "This cannot be undone.")
 
     //cy.get('.btn_primary').click()
    
   }



}

export default AccountDeletionPage ;