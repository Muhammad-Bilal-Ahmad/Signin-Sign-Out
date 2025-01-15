/// <reference types="cypress" />

import SignUp from "../../PageObjects/SignUp";
import SignIn from "../../PageObjects/SignIn";
import Profile from "../../PageObjects/profile";
import PrivacyandSecurity from "../../PageObjects/Privacy&Security";
import PaymentandSubscriptions from "../../PageObjects/Payment&Subscriptions";
import AccountDeletion from "../../PageObjects/AccountDeletion";


Cypress.Commands.add('getFontOfElement', { prevSubject: 'element' }, ($element) => {
    return Cypress.Promise.resolve(getComputedStyle($element[0]).fontFamily);
  });

Cypress.Commands.add('getFontSizeOfElement', { prevSubject: 'element' }, ($element) => {
    return Cypress.Promise.resolve(parseFloat(getComputedStyle($element[0]).fontSize));
  });

  describe('SignUp Test cases SSO (accounts.seebiz)', () => {
    const SignUpPage = new SignUp();
    let randomemail;

    beforeEach(() => {

        cy.visit("https://accounts.seebiz.cloud/signup")
        cy.viewport(1920,1080)
        randomemail = "Fazalerabiseebiz0+" + Math.random().toString(36).substring(3,8) + "@gmail.com";
        cy.getCookies().then(cookies => {
            cookies.forEach(cookie => {
              cy.clearCookie(cookie.name);
            });
          });
        cy.clearLocalStorage();
      })


    it('TC-SP-01', () => {

    
        SignUpPage.CheckURL();

    })

    it('TC-SP-02', () => {

        SignUpPage.GotoSignin();
        SignUpPage.ClickonGetstart();
        SignUpPage.CheckURL();

    })
    it('TC-SP-03', () => {

    
        SignUpPage.CheckEmailField();

    })
    it('TC-SP-04', () => {

        SignUpPage.CheckEplaceholder();

    })
    it('TC-SP-05', () => {

        SignUpPage.WriteinEmail("danishsqa0+999@gmail.com");

    })
    it('TC-SP-06', () => {

        SignUpPage.Checkmsgicon();

    })
    it('TC-SP-07', () => {

        SignUpPage.WriteinEmail(randomemail)
        SignUpPage.SetPass()
        SignUpPage.SetConfirmPass()
        SignUpPage.SelectCheckbx()
        SignUpPage.ClickLoginbtn()
        cy.wait(3000)
        SignUpPage.EmailVerifyPage()

    })
    it('TC-SP-08', () => {

        SignUpPage.WriteinEmail("invalidemail.com")
        SignUpPage.SetPass()
        SignUpPage.SetConfirmPass()
        SignUpPage.SelectCheckbx()
        SignUpPage.ClickLoginbtn()
        cy.wait(2000)
        SignUpPage.Invalidemailcheck();

    })
    it('TC-SP-09', () => {

        SignUpPage.WriteinEmail("danishsqa0+1115@gmail.com")
        SignUpPage.SetPass()
        SignUpPage.SetConfirmPass()
        SignUpPage.SelectCheckbx()
        SignUpPage.ClickLoginbtn()
        cy.wait(2000)
        SignUpPage.ExistingAccCheck()

    })

    it('TC-SP-10', () => {

        SignUpPage.CheckPassfield()

    })
    it('TC-SP-11', () => {

        SignUpPage.CheckPassPlaceholder()

    })
    it('TC-SP-12', () => {

        SignUpPage.CheckEyeIconPass();
      
    })

    it('TC-SP-13', () => {

        SignUpPage.SetPass()
        SignUpPage.ClickEyeiconPass()
        SignUpPage.CheckifPassVisible()
      
    })
    it('TC-SP-14', () => {

        SignUpPage.SetPass()
      
    })
    it('TC-SP-15', () => {

        SignUpPage.verifyPasshas8ch()
      
    })
    it('TC-SP-16', () => {

        SignUpPage.verifyPasshas1num()
      
    })

    it('TC-SP-17', () => {

        SignUpPage.verifyPasshasUpnLow()
      
    })
    it('TC-SP-18', () => {

        SignUpPage.WriteinEmail(randomemail)
        SignUpPage.SetPass()
        SignUpPage.SetConfirmPass()
        SignUpPage.SelectCheckbx()
        SignUpPage.ClickLoginbtn()
        cy.wait(3000)
        SignUpPage.EmailVerifyPage()
    })
    it('TC-SP-19', () => {

        SignUpPage.WriteinEmail(randomemail)
        SignUpPage.SetInvalidPass()
        SignUpPage.SelectCheckbx()
        SignUpPage.ClickLoginbtn()
        cy.wait(2000)
        SignUpPage.checkforinvalidpass()
    })
    it('TC-SP-20', () => {
        SignUpPage.CheckCnfrmPassfield()
    })
    it('TC-SP-21', () => {
        SignUpPage.CheckCnfrmPassPlaceholder()
    })
    it('TC-SP-22', () => {

        SignUpPage.ConfirmEyeicon()

    })
    it('TC-SP-23', () => {

        SignUpPage.SetConfirmPass()
        SignUpPage.ClickEyeiconcnfrmPass()
        SignUpPage.CheckifcnfrmPassVisible()
      
    })
    it('TC-SP-24', () => {
      
        SignUpPage.WriteinEmail(randomemail)
        SignUpPage.SetPass()
        SignUpPage.SetConfirmPass()
        SignUpPage.SelectCheckbx()
        SignUpPage.ClickLoginbtn()
        cy.wait(3000)
        SignUpPage.EmailVerifyPage()

    })
    it('TC-SP-25', () => {
      
        SignUpPage.WriteinEmail(randomemail)
        SignUpPage.SetPass()
        SignUpPage.SetInvalidConfirmPass()
        SignUpPage.SelectCheckbx()
        SignUpPage.ClickLoginbtn()

        SignUpPage.CheckErrorinvalidCnfrmPass()
       

    })
    it('TC-SP-26', () => {
      
        SignUpPage.SelectCheckbx()
        SignUpPage.ClickLoginbtn()
        SignUpPage.TnCnoErrorcheck()
       
    })
    it('TC-SP-27', () => {
      
        
        SignUpPage.WriteinEmail(randomemail)
        SignUpPage.SetPass()
        SignUpPage.SetConfirmPass()
        SignUpPage.ClickLoginbtn()
        SignUpPage.TnCErrorcheck()
    })
    it('TC-SP-28', () => {
          
        SignUpPage.WriteinEmail(randomemail)
        SignUpPage.SetPass()
        SignUpPage.SetConfirmPass()
        SignUpPage.ClickOnTnC()
    })
    it('TC-SP-29', () => {
          
        SignUpPage.WriteinEmail(randomemail)
        SignUpPage.SetPass()
        SignUpPage.SetConfirmPass()
        SignUpPage.ClickOnPrivacy()
    })
    it('TC-SP-30', () => {
          
        SignUpPage.WriteinEmail(randomemail)
        SignUpPage.ClickLoginbtn()
        SignUpPage.CheckErrorjustemail()

    })
    it('TC-SP-31', () => {
          
        SignUpPage.WriteinEmail(randomemail)
        SignUpPage.SetPass()
        SignUpPage.ClickLoginbtn()
        SignUpPage.CheckErrorskipcnfrmPass()

    })
    it('TC-SP-32', () => {
          
        SignUpPage.SetPass()
        SignUpPage.SetConfirmPass()
        SignUpPage.ClickLoginbtn()
        SignUpPage.CheckErrorskipEmail()
    })
    it('TC-SP-33', () => {
        SignUpPage.WriteinEmail('faheem_gmail.com')
        SignUpPage.SetPass()
        SignUpPage.SetConfirmPass()
        SignUpPage.ClickLoginbtn()
        SignUpPage.Invalidemailcheck()
    })
    it('TC-SP-34', () => {

        SignUpPage.WriteinEmail(randomemail)
        SignUpPage.SetInvalidPass()
        SignUpPage.SetConfirmPass()
        SignUpPage.SelectCheckbx()
        SignUpPage.ClickLoginbtn()
        SignUpPage.CheckErrorinvalidCnfrmPass()
        
    })

    it('TC-SP-35', () => {

        SignUpPage.WriteinEmail('invalid_email.com')
        SignUpPage.SetPass()
        SignUpPage.SetInvalidConfirmPass()
        SignUpPage.SelectCheckbx()
        SignUpPage.ClickLoginbtn()
        SignUpPage.CheckErrorinvalidCnfrmPass()
        
    })
    it('TC-SP-36', () => {

        SignUpPage.ClickLoginbtn()
        SignUpPage.CheckErrorskipEmail()
        SignUpPage.CheckErrorjustemail()
    })
    it('TC-SP-37', () => {
        
        SignUpPage.WriteinEmail("bilalseebiz7500+hc6@gmail.com")
        SignUpPage.SetPass()
        SignUpPage.SetConfirmPass()
        SignUpPage.SelectCheckbx()
        SignUpPage.ClickLoginbtn()
        SignUpPage.ClickEmailverifyLink()
        cy.wait(3000)
        SignUpPage.GotoPreviousPage()
        SignUpPage.AllPswdvalidationcross()

    })
    it('TC-SP-38', () => {

        SignUpPage.WriteinEmail(randomemail)
        SignUpPage.SetPass()
        SignUpPage.SetConfirmPass()
        SignUpPage.SelectCheckbx()
        SignUpPage.ClickLoginbtn()
        cy.wait(3000)
        SignUpPage.EmailVerifyPage()
    })
    it('TC-SP-39', () => {

        SignUpPage.WriteinEmail(randomemail)
        SignUpPage.SetPass()
        SignUpPage.SetConfirmPass()
        SignUpPage.SelectCheckbx()
        SignUpPage.DoubleClicklgnbtn()
        cy.wait(3000)
        SignUpPage.EmailVerifyPage()
    })
    it('TC-SP-40', () => {

        SignUpPage.WriteinEmail(randomemail)
        SignUpPage.SetPass()
        SignUpPage.SetConfirmPass()
        SignUpPage.SelectCheckbx()
        SignUpPage.ClickLoginbtn()
        cy.wait(3000)
        SignUpPage.EmailVerifyPage()
        SignUpPage.InvalidOTP('9')
        SignUpPage.InvalidOTPError()
    })
    it('TC-SP-41', () => {

        SignUpPage.WriteinEmail(randomemail)
        SignUpPage.SetPass()
        SignUpPage.SetConfirmPass()
        SignUpPage.SelectCheckbx()
        SignUpPage.ClickLoginbtn()
        cy.wait(3000)
        SignUpPage.EmailVerifyPage()
        SignUpPage.InvalidOTP('8')
        SignUpPage.ClickverifyEmailbtn()
        SignUpPage.InvalidOTPError()
    })
    it('TC-SP-42', () => {

        SignUpPage.WriteinEmail(randomemail)
        SignUpPage.SetPass()
        SignUpPage.SetConfirmPass()
        SignUpPage.SelectCheckbx()
        SignUpPage.ClickLoginbtn()
        cy.wait(3000)
        SignUpPage.EmailVerifyPage()
        SignUpPage.InvalidOTP('8')
        SignUpPage.ClickverifyEmailbtn()
        SignUpPage.ClickResendbtn()
        SignUpPage.Resendtimercheck()
        SignUpPage.CheckemailsentText()

    })
    it('TC-SP-43', () => {

        SignUpPage.WriteinEmail(randomemail)
        SignUpPage.SetPass()
        SignUpPage.SetConfirmPass()
        SignUpPage.SelectCheckbx()
        SignUpPage.ClickLoginbtn()
        cy.wait(3000)
        SignUpPage.EmailVerifyPage()
        SignUpPage.MultiClickResendbtn()
        SignUpPage.CheckemailsentText()

    })
    it('TC-SP-44', () => {

        SignUpPage.WriteinEmail(randomemail)
        SignUpPage.SetPass()
        SignUpPage.SetConfirmPass()
        SignUpPage.SelectCheckbx()
        SignUpPage.ClickLoginbtn()
        cy.wait(3000)
        SignUpPage.EmailVerifyPage()
        SignUpPage.ClickResendbtn()
        SignUpPage.CheckemailsentText()
        cy.wait(61000)
        SignUpPage.CheckResendbtn()

    })
    it('TC-SP-45', () => {

        SignUpPage.WriteinEmail(randomemail)
        SignUpPage.SetPass()
        SignUpPage.SetConfirmPass()
        SignUpPage.SelectCheckbx()
        SignUpPage.ClickLoginbtn()
        cy.wait(3000)
        SignUpPage.EmailVerifyPage()
        SignUpPage.ClickverifyEmailbtn()
        SignUpPage.NoOTPerror()

    })
    



  });

  describe('SignIn Test cases SSO (accounts.seebiz)', () => {
    const SignInPage = new SignIn();
    

    beforeEach(() => 
    {

        cy.visit("https://accounts.seebiz.cloud/login")
        cy.viewport(1600,900)
        cy.getCookies().then(cookies => {
            cookies.forEach(cookie => {
              cy.clearCookie(cookie.name);
            });
          });
        cy.clearLocalStorage();

    })

    it("TC-Signin-01", () => {

        SignInPage.CheckURL();


     })

    it("TC-Signin-02", () => { 
        SignInPage.FontSizes()
    
    })

    it("TC-Signin-03", () => { 
        SignInPage.Mouseover()
    
    })

    it("TC-Signin-04 TO TC-Signin-07", () => { 
        SignInPage.EmailField()
    
    })

    it("TC-Signin-08", () => { 
        SignInPage.InvalidEmail()
    
    })

    it("TC-Signin-09 TO TC-Signin-13", () => { 
        SignInPage.PasswordField()
    
    })

    it("TC-Signin-14", () => { 
        SignInPage.OldPassword()
    
    })

    it("TC-Signin-15", () => { 
        SignInPage.RememberMe()
    
    })

    it("TC-Signin-16", () => { 
        SignInPage.ValidCredentials()
    
    })

    it("TC-Signin-17", () => { 
        SignInPage.InvalidCredentials()
    
    })

    it("TC-Signin-17.1 TO TC-Signin-20", () => { 
        SignInPage.ValidationsCheck()
    
    })

    it("TC-Signin-21", () => { 
        SignInPage.PasswordField()
    
    })

    it("TC-Signin-22", () => { 
        SignInPage.OldPassword()
    
    })

    it("TC-Signin-23", () => { 
        SignInPage.InvalidEmail()
    
    })

    it("TC-Signin-24", () => { 
        SignInPage.ValidEmailnotvalidPassword()
    
    })

    it("TC-Signin-25", () => { 
        SignInPage.InValidEmailnotPassword()
    
    })

    it("TC-Signin-26", () => { 
        SignInPage.ForgotPassword()
    
    })

    it("TC-Signin-27 to TC-Signin-30", () => { 
        SignInPage.ForgotPasswordScenerios()
    
    })

    it("TC-Signin-31 to TC-Signin-33", () => { 
        SignInPage.ValidCredentials()
    
    })

    it("TC-Signin-34", () => { 
        SignInPage.InvalidEmail()
    
    })

    it("TC-Signin-37 to TC-Signin-47", () => { 
        SignInPage.Forgotlink()
    
    })

    it("TC-Signin-48 TO TC-Signin-58, TC-65 to TC-69", () => { 
        SignInPage.ResetPage()
    
    })

    it("TC-Signin-59 to TC-Signin-61, TC-Signin-63, TC-Signin-64", () => { 
        SignInPage.ValidationsonResetPage()
    
    })

    it("TC-Signin-62", () => { 
        SignInPage.landonSeebizPage()
    
    })

    it("TC-Signin-70 to TC-Signin-73", () => { 
        SignInPage.FlowSignIn()
    
    })

    it("TC-Signin-74 to TC-Signin-76", () => { 
        SignInPage.twostepauth()
    
    })




  });

  describe('Profile Test cases SSO (accounts.seebiz)', () => {

    const profile = new Profile();
    let randomemailfornewaccount;

    beforeEach(() => 
    {

        cy.visit("https://accounts.seebiz.cloud/login")
        cy.viewport(1600,900)
        randomemailfornewaccount = "bilalseebiz7500+" + Math.random().toString(36).substring(3,8) + "@gmail.com";
        cy.getCookies().then(cookies => {
            cookies.forEach(cookie => {
              cy.clearCookie(cookie.name);
            });
          });
        cy.clearLocalStorage();
    })

    it("TC-TC-P-01", () => {

        profile.Credentials();
        profile.ClickProfile()
 
    })

    it("TC-P-02 to TC-P-10", () => {

      profile.NewAccount(randomemailfornewaccount);
      profile.NewAccounttoUploadImage();

    })

    it("TC-P-11 to TC-P-16", () => {
      profile.Credentials();
      profile.ClickProfile()
      profile.ToChangeName();

    })

    it("TC-P-17 to TC-P-21, TC-P-24, TC-P-26 to TC-P-37", () => {
      profile.Credentials();
      profile.ClickProfile()
      profile.ToChangePassword()
      profile.PasswordValidations()

    })

    it("TC-P-38, TC-P-39", () => {
      profile.NewAccount(randomemailfornewaccount)
      profile.ClickProfile()
      profile.ChangePassword()
    
    })

    it("TC-P-41", () => {
      profile.NewAccount(randomemailfornewaccount)
      profile.ClickProfile()
      profile.ChangePassword()
      profile.keepMeLoggedIn()
    
    })


    it("TC-P-42, TC-P-43", () => {
      profile.Credentials();
      profile.ClickProfile()
      profile.EmailFunctionality()
    })

    it("TC-P-44 to TC-P-51", () => {
      profile.Credentials();
      profile.ClickProfile()
      profile.PhoneNumber()
    })
    it("TC-P-52, TC-P-54", () => {
      profile.Credentials();
      profile.ClickProfile()
      profile.TwoWayAuthentication();
    })

    it("TC-P-53", () => {
      profile.StatusEnabled();
      
    })

    it("TC-P-57", () => {
      profile.Credentials()
      profile.ClickProfile()
      profile.EmptyfieldPhoneNumber()
    
    })

    it("TC-P-58", () => {
      profile.Credentials()
      profile.ClickProfile()
      profile.Namecharacter()
    
    })

    // It should run on the last
    // it("TC-P-40", () => {
    //   profile.NewaccountforKeepmeloggedout()
    //   profile.ClickProfile()
    //   profile.ChangePassword()
    //   profile.logmeoutfunctionality()
    // })

    

  });

  describe('Privacy&Security Test cases SSO (accounts.seebiz)', () => {

    const priv = new PrivacyandSecurity();
    let randomemailforprivacy;

    beforeEach(() => 
    {

        cy.visit("https://accounts.seebiz.cloud/login")
        cy.viewport(1600,900)
        randomemailforprivacy = "bilalseebiz7500+" + Math.random().toString(36).substring(3,8) + "@gmail.com";
        cy.getCookies().then(cookies => {
            cookies.forEach(cookie => {
              cy.clearCookie(cookie.name);
            });
          });
        cy.clearLocalStorage();
    })

    it("TC-Priv&Sec-01 to TC-Priv&Sec-05", () => {

        priv.Credentials();
        priv.ClickPrivacyandSubscription();
 
    })

    it("TC-Priv&Sec-06 to TC-Priv&Sec-22", () => {
        priv.Credentials();
        priv.AccountInformation()

    })

    it("TC-Priv&Sec-23", () => {
        priv.Credentials();
        priv.EmailAddress()
    })

    it("TC-Priv&Sec-24 to TC-Priv&Sec-28", () => {
        priv.NewAccount(randomemailforprivacy)
        priv.TWowayAuthenticationEnabled()

    })

    // Two way Authentications

    it("TC-Priv&Sec-29 to TC-Priv&Sec-37, TC-Priv&Sec-39 to TC-Priv&Sec-42", () => {
        priv.disableCredentials();
        priv.Disabletwowayauth()
    })

    it("TC-Priv&Sec-38", () => {
        priv.NewAccount(randomemailforprivacy)
        priv.DisableAccountFullScenerio();
    })

    

  });

  describe('Payment and Subscriptions cases SSO (accounts.seebiz)', () => {

    const Payment = new PaymentandSubscriptions();

    beforeEach(() => 
    {

        cy.visit("https://accounts.seebiz.cloud/login")
        cy.viewport(1600,900)
        cy.getCookies().then(cookies => {
            cookies.forEach(cookie => {
              cy.clearCookie(cookie.name);
            });
          });
        cy.clearLocalStorage();

    })

    it("TC-P&S-01 to TC-P&S-05", () => {

        Payment.Credentials();
        Payment.ClickonPaymentSubscriptions()
 
    })

    it("TC-P&S-06 to TC-P&S-09", () => {

        Payment.Credentials();
        Payment.ClickonPaymentSubscriptions()
        Payment.MarketplaceTab()
 
    })

    it("TC-P&S-10 to TC-P&S-14", () => {

        Payment.Credentials();
        Payment.ClickonPaymentSubscriptions()
        Payment.IMSTab()
 
    })

 
  });

  describe('Account Deletion cases SSO (accounts.seebiz)', () => {

    const accounts = new AccountDeletion();

    beforeEach(() => 
    {

        cy.visit("https://accounts.seebiz.cloud/login")
        cy.viewport(1600,900)
        cy.getCookies().then(cookies => {
            cookies.forEach(cookie => {
              cy.clearCookie(cookie.name);
            });
          });
        cy.clearLocalStorage();

    })

    it("TC-WAD-01 to TC-WAD-10", () => {

        accounts.Credentials();
        accounts.ClickonAccountDeletion()
        accounts.AccountDeletionScenerio();
    })

    it("TC-WAD-11 to TC-WAD-18 ", () => {

        accounts.Credentials();
        accounts.ClickonAccountDeletion()
        accounts.InviteFriend();
    })

    it("TC-WAD-19", () => {
        
        accounts.OnlySSOAccount();
        
    })

    it("TC-WAD-20", () => {
        accounts.Onlyselleraccount();
        accounts.ClickonAccountDeletion();
        accounts.selleraccountshow();

    })

    it("TC-WAD-21", () => {
        accounts.OnlyBuyerAccount();
        accounts.ClickonAccountDeletion();
        accounts.Buyeraccountshow();

    })

    it("TC-WAD-22 and TC-WAD-23", () => {
        accounts.BothSellerandBuyerAccount();
        accounts.ClickonAccountDeletion();
        accounts.BuyerandSelleraccountshow()
        
    })

    // Account deletion regression from Buyer side

    it("TC-WAD-24 to TC-WAD-30", () => {
        accounts.OnlyBuyerAccount();
        accounts.ClickonAccountDeletion();
        accounts.BuyerDeleteScenerio()
        
    })

    it("TC-WAD-31 to TC-WAD-33", () => {
        accounts.Credentials();
        accounts.ClickonAccountDeletion();
        accounts.EnterValidOTP();
    })

    it("TC-WAD-34, TC-WAD-35", () => {
        accounts.Credentials();
        accounts.ClickonAccountDeletion();
        accounts.MobileVerificationforBuyer()
    })

 
    // Account deletion regression from Seller side

    it("TC-WAD-39 to TC-WAD-54", () => {
        accounts.Credentials();
        accounts.ClickonAccountDeletion();
        accounts.SellerDeleteScenerio()
    })

    it("TC-WAD-59", () => {
        accounts.Credentials();
        accounts.ClickonAccountDeletion();
        accounts.ClickonAccountDeletionAgain()
    })

  });