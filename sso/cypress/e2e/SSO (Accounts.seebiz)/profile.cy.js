/// <reference types="cypress" />

import Profile from "../../PageObjects/profile";

Cypress.Commands.add('getFontOfElement', { prevSubject: 'element' }, ($element) => {
    return Cypress.Promise.resolve(getComputedStyle($element[0]).fontFamily);
  });

Cypress.Commands.add('getFontSizeOfElement', { prevSubject: 'element' }, ($element) => {
    return Cypress.Promise.resolve(parseFloat(getComputedStyle($element[0]).fontSize));
  });


describe('Profile Test cases SSO (accounts.seebiz)', () => {

    const profile = new Profile();
    let randomemailfornewaccount;

    beforeEach(() => 
    {

        cy.visit("https://accounts.seebiz.cloud/login")
        cy.viewport(1600,900)
        randomemailfornewaccount = "bilalseebiz7500+" + Math.random().toString(36).substring(3,8) + "@gmail.com";
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
    it("TC-P-40", () => {
      profile.NewaccountforKeepmeloggedout()
      profile.ClickProfile()
      profile.ChangePassword()
      profile.logmeoutfunctionality()
    })

    

  });