 <reference types="cypress" />

describe('Common file for Payment and Subscriptions', function () {
  const waitforexecutionstep = 4000;
  const validpassword = "Bilal7500";
  const validemail = "bilalseebiz7500+338@gmail.com";

  beforeEach(() => {
    cy.viewport(1920, 1080);
  });

  const login = () => {
    cy.visit("https://www.seebiz.cloud");
    cy.contains("Sign In").click();
    cy.get('#email').type(validemail);
    cy.get('#password > input').type(validpassword);
    cy.contains("Sign in").click();
    cy.wait(13000);
    cy.get('.sso-user-img > img').click();
    cy.contains('My Account').invoke('removeAttr', 'target').click();
    cy.wait(waitforexecutionstep);
    cy.contains("Payments & Subscriptions").click();
    cy.wait(waitforexecutionstep);
  };

  const openInventoryDetails = () => {
    cy.get('.inventory > .card > #headingOne').should('be.visible').click();
    cy.wait(2000);
    cy.get('.inventory > .card > #collapseOne > .card-body > .table > #table-body > :nth-child(1) > :nth-child(7) > button').click();
    cy.wait(2000);
    cy.get('.modal-backdrop').click();
  };

  it('TC-P&S-09: To verify the functionality of  payment & subscription with IMS account', function () {
    login();
    openInventoryDetails();
  });
  it('TC-P&S-10: To check the functionality of arrow icon is clickable on Inventory tab', function () {
    login();
    openInventoryDetails();
  });
  it('TC-P&S-11: To check the functionality of view details link on Inventory tab', function () {
    login();
    openInventoryDetails();
  });
  it('TC-P&S-12: To check the functionality of business profile is showing on the popup of Inventory tab upon clicking the view details', function () {
    login();
    openInventoryDetails();
  });
  it('TC-P&S-13: To make sure the functionality of Cross icon on the popup of inventory tab upon clicking view details', function () {
    login();
    openInventoryDetails();
  });
  it('TC-P&S-14: To verify the functionality of payment & subscription with old Seller/buyer account and IMS account', function () {
    login();
    openInventoryDetails();
  });

  it('TC-15: View details of marketplace', function () {
    login();
    cy.get(':nth-child(2) > .card > #headingOne').click();
    cy.contains("View details").click();
  });
});