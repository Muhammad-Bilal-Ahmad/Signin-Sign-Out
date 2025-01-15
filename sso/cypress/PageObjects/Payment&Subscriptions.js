class PaymentandSubscriptions
{
    waitforexecutionstep = 4000;
    randomAlphabets = Math.random().toString(36).substring(2); // Generate random string excluding the first character which is a dot
    alphabetsOnly =  this.randomAlphabets.replace(/[^a-z]/gi, ''); // Remove non-alphabetic characters
    randomName = "malik" + this.alphabetsOnly;
    randomemail = "bilalseebiz7500+" + this.randomName + Math.random().toString(36).substring(3,9) + "@gmail.com";

    randomNumberString = Math.random().toString().substring(2, 5); // Generate a random string of numbers

    //Credentials
    Mail = "bilalseebiz7500+338@gmail.com"
    Password = "Bilal7500"
    InvalidPassword = "Change123"


    Credentials(){
        cy.get('#email').type(this.Mail)
        cy.get('#password > input').type(this.Password)
        cy.get('#loginBtn').click()
        cy.wait(2000)
    }

    ClickonPaymentSubscriptions(){

        // Click on Payment and Subscriptions
        cy.get(':nth-child(4) > a > .menu-text-left > .menu-text').click()
        cy.wait(2000)
    }

    MarketplaceTab(){

        // Heading of Marketplace
        cy.get(':nth-child(2) > .card > #headingOne').click()

        // View Details of marketplace
        cy.get(':nth-child(2) > .card > #collapseOne > .card-body > .table > #table-body > tr > :nth-child(7) > button').click()

        // Close the modal pop up
        cy.get("body > div.fade.modal-backdrop.show").click()
    }

    IMSTab()
    {

        // Heading of IMS
        cy.get('.inventory > .card > #headingOne').click()

        // Click on the inventory details
        cy.get('.inventory > .card > #collapseOne > .card-body > .table > #table-body > :nth-child(1) > :nth-child(7) > button').click()

        // Close the modal pop up
        cy.get("body > div.fade.modal-backdrop.show").click()


    }


}


export default PaymentandSubscriptions;