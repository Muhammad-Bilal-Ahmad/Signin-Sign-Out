/// <reference types="cypress" />

import PaymentandSubscriptions from "../../PageObjects/Payment&Subscriptions";

Cypress.Commands.add('getFontOfElement', { prevSubject: 'element' }, ($element) => {
    return Cypress.Promise.resolve(getComputedStyle($element[0]).fontFamily);
  });

Cypress.Commands.add('getFontSizeOfElement', { prevSubject: 'element' }, ($element) => {
    return Cypress.Promise.resolve(parseFloat(getComputedStyle($element[0]).fontSize));
  });


describe('Payment and Subscriptions cases SSO (accounts.seebiz)', () => {

    const Payment = new PaymentandSubscriptions();

    beforeEach(() => 
    {

        cy.visit("https://accounts.seebiz.cloud/login")
        cy.viewport(1600,900)

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