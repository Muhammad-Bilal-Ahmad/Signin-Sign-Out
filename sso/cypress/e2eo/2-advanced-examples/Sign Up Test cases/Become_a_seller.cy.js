/// <reference types="cypress" />

describe("Verify the functionality of Become a Seller", function(){


    it("Verify the functionality of  Become a Seller"  ,function(){

        cy.visit("https://www.seebiz.cloud")

        cy.wait(2000)

        cy.contains("Sell on SeeBiz").click()

        cy.wait(2000)

       // cy.scrollTo(9000,9000).wait(0)


       cy.scrollTo('0%','80%')


       cy.wait(1000)

       cy.contains('This is for me').click()

        
    })
})