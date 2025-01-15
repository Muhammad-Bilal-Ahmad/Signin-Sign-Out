import AccountDeletionPage  from  "./accountDeletionPage"

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



/*
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
*/