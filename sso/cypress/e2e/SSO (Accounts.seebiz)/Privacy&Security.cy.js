/// <reference types="cypress" />

import PrivacyandSecurity from "../../PageObjects/Privacy&Security";

Cypress.Commands.add('getFontOfElement', { prevSubject: 'element' }, ($element) => {
    return Cypress.Promise.resolve(getComputedStyle($element[0]).fontFamily);
  });

Cypress.Commands.add('getFontSizeOfElement', { prevSubject: 'element' }, ($element) => {
    return Cypress.Promise.resolve(parseFloat(getComputedStyle($element[0]).fontSize));
  });


describe('SignIn Test cases SSO (accounts.seebiz)', () => {

    const priv = new PrivacyandSecurity();

    beforeEach(() => 
    {

        cy.visit("https://accounts.seebiz.cloud/login")
        cy.viewport(1600,900)

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
        priv.NewAccount()
        priv.TWowayAuthenticationEnabled()

    })

    // Two way Authentications

    it("TC-Priv&Sec-29 to TC-Priv&Sec-37, TC-Priv&Sec-39 to TC-Priv&Sec-42", () => {
        priv.disableCredentials();
        priv.Disabletwowayauth()
    })

    it("TC-Priv&Sec-38", () => {
        priv.NewAccount()
        priv.DisableAccountFullScenerio();
    })

    

  });