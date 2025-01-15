/// <reference types="cypress" />

import SignIn from "../../PageObjects/SignIn";
Cypress.Commands.add('getFontOfElement', { prevSubject: 'element' }, ($element) => {
    return Cypress.Promise.resolve(getComputedStyle($element[0]).fontFamily);
  });

Cypress.Commands.add('getFontSizeOfElement', { prevSubject: 'element' }, ($element) => {
    return Cypress.Promise.resolve(parseFloat(getComputedStyle($element[0]).fontSize));
  });


describe('SignIn Test cases SSO (accounts.seebiz)', () => {
    const SignInPage = new SignIn();
    const randomemail = "bilalseebiz7500+" + Math.random().toString(36).substring(3,6) + "@gmail.com";

    beforeEach(() => 
    {

        cy.visit("https://accounts.seebiz.cloud/login")
        cy.viewport(1600,900)

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