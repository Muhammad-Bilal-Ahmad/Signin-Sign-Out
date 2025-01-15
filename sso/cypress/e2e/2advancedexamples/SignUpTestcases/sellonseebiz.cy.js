/// <reference types="cypress" />

describe("Verify the functionality of Sell on Seebiz", function(){


    it("Verify the functionality of Sell on Seebiz"  ,function(){

        cy.visit("https://www.seebiz.cloud")
        cy.wait(2000)
        cy.contains("Sell on SeeBiz").click()

        
    })
})