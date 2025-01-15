

class AccountDeletions {


    textemail = "input[placeholder='Email']";
    textpassword = "input[placeholder='Password']";

    openwebsiteforsignIn(){

        cy.visit("https://www.seebiz.cloud/")
        cy.contains("Sign In").click()

    }

    setUserName(username)
    {
        cy.get(this.textemail).type(username);
    }

    setPassword (password)
    {
        cy.get(this.textpassword).type(password);
    }

    Loginbutton()
    
    {
        cy.contains('Sign in').click();
        cy.wait(15000)
    }

    GotoAccountpage(){

        cy.get('.sso-user-img > img').click()
        cy.contains('My Account').invoke('removeAttr', 'target').click();
        cy.wait(4000)
        cy.get('.inactive').click()
        cy.get('#deleteAccountSubMenu > :nth-child(2) > a').click()
    }
 
    Cancelpopupforaccountmodel()
    {
        cy.get('.close--modal__btn > img').click()
    }


    ValidpasswordforAccountDeletion(){

        cy.get('#customInput').type('Bilal7500')
        cy.wait(2000)
        cy.get('.btn_primary').click({force:true})
    }

    InValidpasswordforAccountDeletion(){

        cy.get('#customInput').type('Bilal750ee20')
        cy.wait(2000)
        cy.get('.btn_primary').click({force:true})
        cy.contains('Invalid Password').should('be.visible')
    }

    Mailsenttohelper(){


        const randomemail = "bilalseebiz7500+" + Math.random().toString(36).substring(2,4) + "@gmail.com";
        cy.get('.account-del-text > a').click()
        cy.get('#customInput').type(randomemail)
        cy.wait(2000)
        cy.contains('Send Invitation').click()


    }

    Cancelthemailpopup()
    {
        cy.get('.account-del-text > a').click()
        cy.get('.d-flex > .btn-cancel').click()
    }

    Deletbuttonformarketplaceaccount()
    {
        cy.get('.button-area').click();
    }

    Proceesbuttonforbuyerside()
    {
        cy.get(':nth-child(2) > .account-delete-details > .d-flex > .btn-update').click()
    }

    Proceesbuttonforsellerside()
    {
        cy.get(':nth-child(3) > .account-delete-details > .d-flex > .btn-update').click()
    }

    validpasswordfor3wayAuth(){

        cy.get('#customInput').type("Bilal7500")
        cy.get('.btn-update').click()
        cy.contains('Send OTP').should('be.visible')
        cy.contains('Send OTP').click()   

        cy.get('#number1').type('1')
        cy.get('#number2').type('1')
        cy.get('#number3').type('1')
        cy.get('#number4').type('1')

    }

    canceltheemailaddressfield()
    {
        cy.get('#customInput').type("Bilal7500")
        cy.get('.btn-update').click()
        cy.wait(2000)
        cy.get('.btn-cancel').click({force:true})
        cy.get('.btn_primary').click({force:true})
    }

    ResendvalidOTP()
    {
        cy.get('#customInput').type("Bilal7500")
        cy.get('.btn-update').click()
        cy.contains('Send OTP').should('be.visible')
        cy.contains('Send OTP').click()  
        cy.get('#resendButton').click()
    }

    MobileSendOtp(){

        cy.get('.btn-update').click()
        cy.get('#number1').type('1')
        cy.get('#number2').type('1')
        cy.get('#number3').type('1')
        cy.get('#number4').type('1')

    }

    ResendOTPfromBuyerSide()
    {
        cy.get(':nth-child(2) > .account-delete-details > .d-flex > .btn-update').click()
        cy.get('#customInput').type('Bilal7500')
        cy.get('.btn-update').click()
        cy.contains('Send OTP').click()
        cy.wait(2000)
        cy.get('#resendButton').click()
        cy.get('#number1').type('1')
        cy.get('#number2').type('1')
        cy.get('#number3').type('1')
        cy.get('#number4').type('1')

        cy.wait(2000)
        cy.get('.btn-update').click()
        
        
    }


    Mobileverificationfrombuyerside(){
        cy.get(':nth-child(2) > .account-delete-details > .d-flex > .btn-update').click()
        cy.get('#customInput').type('Bilal7500')
        cy.get('.btn-update').click()
        cy.contains('Send OTP').click()
        cy.wait(2000)
        cy.get('#number1').type('1')
        cy.get('#number2').type('1')
        cy.get('#number3').type('1')
        cy.get('#number4').type('1')

        cy.wait(2000)
        cy.get('.btn-update').click()

        cy.wait(2000)
        cy.get('#resendButton').click()

        cy.wait(2000)
        cy.get('#number1').type('1')
        cy.get('#number2').type('1')
        cy.get('#number3').type('1')
        cy.get('#number4').type('1')
    }

    Completeflow()
    {
        cy.get('.btn-update').click()
        
    }
}


export default AccountDeletions;
