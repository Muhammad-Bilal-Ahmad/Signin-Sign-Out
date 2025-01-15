/// <reference types="cypress" />

import SignUp from '../../../cypress/PageObjects/SignUp'

describe('SignUp Test cases SSO (accounts.seebiz)', () => {
    const SignUpPage = new SignUp();
    let randomemail;

    beforeEach(() => {

        cy.visit("https://accounts.seebiz.cloud/signup")
        cy.viewport(1920,1080)
        randomemail = "bilalseebiz7500+n" + Math.random().toString(36).substring(3,6) + "@gmail.com";

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
        cy.wait(6000)
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