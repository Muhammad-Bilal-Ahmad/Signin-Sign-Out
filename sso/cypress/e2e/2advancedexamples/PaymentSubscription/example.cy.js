


/// <reference types="cypress" />

import 'cypress-iframe'
import "cypress-real-events/support"

describe('example' , function(){


it("lasdjojas", () => {

  cy.visit("https://dev-accounts.seebiz.cloud/")

  cy.get('#email').type('bilalseebiz7500+sa28@gmail.com')
  cy.get('#password > input').type("Bilal7500")

  cy.get('#loginBtn').click()

  cy.get('#headerLogo').click()

  cy.get('.profile-menu-list > :nth-child(2)').click()


//   cy.contains("Profile").click()
// cy.wait(2000)
//   cy.contains("Privacy & Security").click()

//   cy.contains("Activity Log").click()
  // cy.get('#deleteAccountSubMenu > :nth-child(1) > a').click()

  // cy.get('#deleteAccountSubMenu > :nth-child(2) > a').click()
})


//   it('example', () => {

//     cy.visit("https://www.seebiz.cloud/categories/art/animation-and-characters/betty-boop")
//     cy.get('.topbar-center > :nth-child(1)').realHover('mouse')
//    // cy.contains('Electronics').click({force: true})

// //    cy.get('a')
// //    .invoke('attr', 'href', '/categories/health-care')
// //    .then(() => {
// //      cy.get('a').click();
// //   })
//  })


  //   it('Handle the alerts' , function(){

  //       cy.visit('https://rahulshettyacademy.com/AutomationPractice/')


  //       // Code for alerts


  //       cy.get('#alertbtn').click()

  //       cy.get('[value="Confirm"]').click()

  //       cy.on('window:alert', (str) => {

  //           expect(str).to.equal('Hello , share this practice page and share your knowledge')
  //       })

  //       cy.on('window:confirm', (str)=> {

  //           expect(str).to.equal('Hello , Are you sure you want to confirm?')
  //       })
    

  //       // Check the URl

  //     //  cy.url().should('include', 'Desired value')
  //   })

  //     //  npm install -D cypress-iframe 
  //   it('Handling the iframes', function(){


  //       cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

  //       cy.frameLoaded('#courses-iframe')


  //       cy.iframe().find("a[href*='mentorship']").eq(0).click()

  //       cy.wait(2000)
  //       cy.iframe().find("h1[class*='pricing-title']").should('have.length',2)


  //   })

  //  /// <reference types='cypress' />

  //   it.only('example for cypress commands', function(){
  //       cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
  //       cy.get('.search-keyword').type('ca')
  //        cy.get('.products').find('.product').each((ele, index, List)=> {
  //          const vegetables = ele.find('h4.product-name').text()
  //          if(vegetables.includes('Cashews'))
  //         {
  //           cy.wrap(ele).find('button').click()
  //         }
  //       })
  //       cy.get('.cart-icon > img').click()
  //       cy.contains('PROCEED TO CHECKOUT').should('be.visible')
  //       cy.contains('PROCEED TO CHECKOUT').click()
  //       cy.contains('Place Order').should('be.visible')
  //       cy.contains('Place Order').click()
  //       cy.get('select').select('Angola').should('have.value','Angola')
  //       // cy.get('.chkAgree').check()
  //       // cy.contains('Proceed').click()
  //       // promises are of different types
  //       // resolved
  //       // rejection
  //       // pending
  //       // cy.get('.brand').then(function(logoelement){
  //       //     cy.log(logoelement.text())
  //       // })
  //   })
  //   it('dropdowns', function(){
  //       cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
  //       cy.get('select').select('option3').should('have.value','option3')
  //       cy.get('#autocomplete').type("Ger")
  //       cy.get('.ui-menu-item').each((ele, index, List) => {
  //           if(ele.text()==="Germany")
  //           {
  //               cy.wrap(ele).click()
  //           }
  //       })
  //       cy.get('#autocomplete').should('have.value','Germany')
  //    })




})