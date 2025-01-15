
/// <reference types="cypress" />

import AccountDeletion from "../../PageObjects/AccountDeletion";

Cypress.Commands.add('getFontOfElement', { prevSubject: 'element' }, ($element) => {
    return Cypress.Promise.resolve(getComputedStyle($element[0]).fontFamily);
  });

Cypress.Commands.add('getFontSizeOfElement', { prevSubject: 'element' }, ($element) => {
    return Cypress.Promise.resolve(parseFloat(getComputedStyle($element[0]).fontSize));
  });


describe('Account Deletion cases SSO (accounts.seebiz)', () => {

    const accounts = new AccountDeletion();

    beforeEach(() => 
    {

        cy.visit("https://accounts.seebiz.cloud/login")
        cy.viewport(1600,900)

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