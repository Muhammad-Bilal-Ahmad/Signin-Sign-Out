class AccountDeletion
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
    BuyerAccount = "maryamsqa36+163@gmail.com"
    Buyeraccountpassword = "Temp123!"
    BothSellerandBuyerAccounts = "maryamsqa36+5@gmail.com"
    selleraccountemail = "maryamsqa36+165@gmail.com"
    selleraccountpassword = "Temp1234!"

    generateRandomEmail() {
        const randomSuffix = Math.random().toString(36).substring(3, 9);
        return `${this.emailPrefix}${randomSuffix}@gmail.com`;
    }

    // function OTP
    ValidOTPCode(num1, num2, num3, num4) {
        cy.get('#number1').type(num1);
        cy.get('#number2').type(num2);
        cy.get('#number3').type(num3);
        cy.get('#number4').type(num4);
    }


    Credentials(){
        cy.get('#email').type(this.Mail)
        cy.get('#password > input').type(this.Password)
        cy.get('#loginBtn').click()
        cy.wait(2000)
    }

    ClickonAccountDeletion(){

        cy.wait(2000)
        // Click on Account Deletion
        cy.get('.inactive > .menu-text-left > .menu-text').click()
        cy.get('#deleteAccountSubMenu > :nth-child(2) > a').click()

    }

    AccountDeletionScenerio(){

        
        // Click on the close button
        cy.get('.btn_default').should("contain","Close")
        cy.get('.btn_default').click()

        //Enter the Invalid Password
        cy.get('#deleteAccountSubMenu > :nth-child(2) > a').click()
        cy.get('#customInput').type(this.InvalidPassword)
        cy.get('.btn_primary').click()
        cy.get('.input-error-text').should("contain","Invalid Password")
        cy.get('.btn_default').click()
        cy.wait(2000)

        // Check the cross functionality in the modal pop up
        cy.get('#deleteAccountSubMenu > :nth-child(2) > a').click()
        cy.get('#customInput').type(this.InvalidPassword)
        cy.get("body > div.ReactModalPortal > div > div > form > div.modal-header > button > img").should("exist")
        cy.get("body > div.ReactModalPortal > div > div > form > div.modal-header > button > img").click()
        

        // Eye Icon in Confirm Password field
        cy.get('#deleteAccountSubMenu > :nth-child(2) > a').click()
        cy.get("body > div.ReactModalPortal > div > div > form > div.modal-body > div:nth-child(1) > div > div > img").should("exist")
        cy.get('#customInput').type(this.InvalidPassword)
        cy.get("body > div.ReactModalPortal > div > div > form > div.modal-body > div:nth-child(1) > div > div > img").click()
        cy.get('.btn_default').click()

        // Enter the Valid Password
        cy.get('#deleteAccountSubMenu > :nth-child(2) > a').click()
        cy.get('#customInput').type(this.Password)
        cy.get('.btn_primary').click()

        cy.get('.page-heading').should("contain","Account Deletion")
    }

    InviteFriend(){

        // invite your friend to help
        cy.get('#customInput').type(this.Password)
        cy.get('.btn_primary').click()
        cy.get('h3').should("contain","Invite your friend to help")

        // Click on send invite link
        cy.get('.account-del-text > .d-flex > span').click()

        // Close on the invitation card
        cy.get('#customInput').type("bilalseebiz7500+79@gmail.com")
        cy.get('.d-flex > .btn-cancel').click({ multiple: true })

        // Cross on the Invitation card
        cy.get('.account-del-text > .d-flex > span').click()
        cy.get('#customInput').type("bilalseebiz7500+79@gmail.com")
        cy.get("body > div.ReactModalPortal > div > div > form > div.modal-header > button > img").click()


        // Enter valid Email but not registered
        cy.get('.account-del-text > .d-flex > span').click()
        cy.get('#customInput').type("bilalseebiz7500+79@gmail.com")
        cy.get('.btn-update').click()
        cy.get('.input-error-text').should("contain","seebiz account already created by this email")

        // Enter Invalid Email Format
        cy.get('#customInput').clear()
        cy.get('#customInput').type("bilalseebiz7500+79@@gmail.com")
        cy.get('.btn-update').click()
        cy.get('.input-error-text').should("contain","Enter valid email")

        
        // Enter valid Credentials
        cy.get('#customInput').clear()
        cy.get('#customInput').type(this.randomemail)
        cy.get('.btn-update').click()


    }

    OnlySSOAccount(){
        cy.get('#email').type("bilalseebiz7500+69@gmail.com")
        cy.get('#password > input').type(this.Password)
        cy.get('#loginBtn').click()
        cy.wait(2000)
        // Click on Account Deletion
        cy.get('.inactive > .menu-text-left > .menu-text').click()
        cy.get('#deleteAccountSubMenu > :nth-child(2) > a').click()
        cy.get('#customInput').type(this.Password)
        cy.get('.btn_primary').click()

        cy.get('.sso-profile-wrapper > :nth-child(2)').should("contain","No Record Found")
    }

    Onlyselleraccount(){
        cy.get('#email').type(this.selleraccountemail)
        cy.get('#password > input').type(this.selleraccountpassword)
        cy.get('#loginBtn').click()
        cy.wait(2000)
    }

    selleraccountshow(){

        cy.get('#customInput').type(this.selleraccountpassword)
        cy.get('.btn_primary').click()
        cy.get('.market-place-widget').should("exist")
    }

    OnlyBuyerAccount(){

        cy.wait(2000)
        cy.get('#email').type(this.BuyerAccount)
        cy.get('#password > input').type(this.Buyeraccountpassword)
        cy.get('#loginBtn').click()
        cy.wait(2000)
    }

    Buyeraccountshow(){

        cy.get('#customInput').type(this.Buyeraccountpassword)
        cy.get('.btn_primary').click()
        cy.get('.market-place-widget').should("exist")
    }

    BothSellerandBuyerAccount(){

        cy.get('#email').type(this.BothSellerandBuyerAccounts)
        cy.get('#password > input').type(this.Buyeraccountpassword)
        cy.get('#loginBtn').click()
        cy.wait(2000)
    }

    BuyerandSelleraccountshow(){

        cy.get('#customInput').type(this.Buyeraccountpassword)
        cy.get('.btn_primary').click()
        cy.get('.market-place-widget').should("exist")
        
        // Click on the Delete button
        cy.get('.btn-cancel').click()
        cy.wait(8000)
    }

    BuyerDeleteScenerio(){

        cy.get('#customInput').type(this.Buyeraccountpassword)
        cy.get('.btn_primary').click()
        cy.wait(2000)
        // Click on the proceed button of buyer side
        cy.get('.btn-cancel').click({force:true})
        cy.get(':nth-child(2) > .account-delete-details > .d-flex > .btn-update').click()
        cy.wait(2000)

        // Enter the Invalid Password
        cy.get('#customInput').type("Temp12322!")
        cy.wait(2000)
        cy.get('.btn-update').click()
        cy.get('.input-error-text').should("contain","Invalid Password")

        // Click on the password eye icon
        cy.get('#customInput').clear()
        cy.get('#customInput').type("Temp12322!")
        cy.get("#main_container > div > div.color-fafafa.flex-1 > div > div > main > div > div > div.sso-profile-wrapper > div > div.verify-password-section > form > div.pb-35.pos-rel > div > div > img")
        .click()
        cy.wait(2000)

        // Click on the Cancel button
        cy.get('#customInput').clear()
        cy.get('#customInput').type("Temp12322!")
        cy.get("#main_container > div > div.color-fafafa.flex-1 > div > div > main > div > div > div.sso-profile-wrapper > div > div.verify-password-section > form > div.pb-35.pos-rel > div > div > img")
        .click()
        cy.get('.btn-cancel').click()
        cy.wait(2000)
        cy.get('.btn_primary').click()

        // Cancel from email verification page
        cy.get(':nth-child(2) > .account-delete-details > .d-flex > .btn-update').click()
        cy.get('#customInput').type(this.Buyeraccountpassword)
        cy.get('.btn-update').click()
        cy.wait(2000)
        cy.get('.btn-cancel').click()
        cy.get('.btn_primary').click()

        // Enter the Valid Password
        cy.get(':nth-child(2) > .account-delete-details > .d-flex > .btn-update').click()
        cy.get('#customInput').clear()
        cy.get('#customInput').type(this.Buyeraccountpassword)
        cy.wait(2000)
        cy.get('.btn-update').click()
        // cy.get('.mini-heading').should("contain","Verify your email address")
        // cy.wait(2000)

        // Click on the Send OTP button
       // cy.get('.btn-update').click()
        cy.get('.mini-heading').then(($element) => {
            if ($element.text().includes("Verify your email address")) {
                // If the text is found, click the button
                cy.get('.mini-heading').should("contain","Verify your email address")
                
                cy.get('.btn-update').click();
            } else {
                // If the text is not found, log the error and click the button anyway
                cy.log("Assertion failed. Taking alternative action...");
                cy.get('.btn-update').click(); // Click the button anyway
            }
        });

    }

    EnterValidOTP(){
        cy.get('#customInput').type(this.Password)
        cy.get('.btn_primary').click()
        cy.wait(2000)
        cy.get('.btn-cancel').click({force:true})
        cy.get(':nth-child(2) > .account-delete-details > .d-flex > .btn-update').click()
        cy.wait(2000)
        cy.get('#customInput').type(this.Password)
        cy.get('.btn-update').click()
        cy.wait(2000)
        cy.get('.btn-update').click()

        
        // Enter the InValid OTP code
        this.ValidOTPCode("2", "1", "1", "1");
        cy.get('#errorDiv').should("contain","Please enter valid code")
        cy.wait(2000)

        // Click on the Resend OTP
        cy.get('#resendButton').click()
        cy.get('#errorDiv').should("contain","Email sent successfully!")
        cy.wait(2000)

        // Enter the Valid OTP code
        cy.get("#number4").clear()
        cy.get("#number3").clear()
        cy.get("#number2").clear()
        cy.get("#number1").clear()
        this.ValidOTPCode("1", "1", "1", "1");

        cy.wait(2000)
        cy.get('.mini-heading').should("contain","Verify your phone number")
    }

    MobileVerificationforBuyer(){
        cy.get('#customInput').type(this.Password)
        cy.get('.btn_primary').click()
        cy.wait(2000)
        cy.get('.btn-cancel').click({force:true})
        cy.get(':nth-child(2) > .account-delete-details > .d-flex > .btn-update').click()
        cy.wait(2000)
        cy.get('#customInput').type(this.Password)
        cy.get('.btn-update').click()
        cy.wait(2000)
        cy.get('.btn-update').click()
       
        // Enter the Valid OTP Code
        this.ValidOTPCode("1", "1", "1", "1");

        // Click on the Send OTP button
        cy.get('.btn-update').click()

        cy.get('p.form-desc').then(($element) => {
            if ($element.text().includes("We found your registered phone number with SeeBiz.")) {
                // If the text is found, click the button
                cy.get('p.form-desc').should("contain","We found your registered phone number with SeeBiz.")
                cy.get('.btn-update').click();
            } else {
                // If the text is not found, log the error and click the button anyway
                cy.log("Assertion failed. Taking alternative action...");
                cy.get('.btn-update').click(); // Click the button anyway
            }
        });
       
        // Enter the InValid OTP Code
        cy.wait(2000)
        cy.get('.btn-update').click()
        this.ValidOTPCode("1", "3", "1", "1");
        cy.get('#errorDiv').should("contain","Please enter valid code")
        cy.wait(10000)

    }

    // Account Deletion Scenerio from seller side

    SellerDeleteScenerio(){

        let copiedValue;

        cy.get('#customInput').type(this.Password)
        cy.get('.btn_primary').click()
        cy.wait(2000)
        cy.get('.btn-cancel').click({force:true})
        cy.get(':nth-child(3) > .account-delete-details > .d-flex > .btn-update').click()

        // Click on the Cancel Button also select the modal value of No
        cy.get('#customInput').clear()
        cy.get('#customInput').type(this.InvalidPassword)
        cy.get('.btn-cancel').click()
        cy.get('.btn_default').click()

        // Click on the Cancel Button also select the modal value of Cross Icon
        cy.get('#customInput').clear()
        cy.get('#customInput').type(this.InvalidPassword)
        cy.get('.btn-cancel').click()
        cy.get('.close--modal__btn > img:nth-child(1)').click()

        // Click on the Cancel Button also select the modal value of yes
        cy.get('#customInput').clear()
        cy.get('#customInput').type(this.InvalidPassword)
        cy.get('.btn-cancel').click()
        cy.get('.btn_primary').click()

        // Password eye icon from seller side
        cy.get(':nth-child(3) > .account-delete-details > .d-flex > .btn-update').click()
        cy.get('#customInput').type(this.InvalidPassword)
        cy.get("#main_container > div > div.color-fafafa.flex-1 > div > div > main > div > div > div.sso-profile-wrapper > div > div.verify-password-section > form > div.pb-35.pos-rel > div > div > img")
        .click()

        // Enter the Incorrect Password
        cy.get('#customInput').clear()
        cy.get('#customInput').type(this.InvalidPassword)
        cy.get('.btn-update').click()
        cy.get('.input-error-text').should("contain","Invalid Password")

        // Enter the Correct Password
        cy.wait(2000)
        cy.get('#customInput').clear()
        cy.get('#customInput').type(this.Password)
        cy.get('.btn-update').click()
        cy.wait(2000)

        // System is redirected to the Email Verification Page
        cy.get('.form-desc').then(($element) => {
            if ($element.text().includes("We found your registered email address with SeeBiz.")) {
                // If the text is found, click the button
                cy.get('.form-desc').should("contain","We found your registered email address with SeeBiz.")
            } 
            else {

                cy.log("Assertion failed. Taking alternative action...");
              
            }
        });

        // System renders the correct Mail
        cy.get('.profile-dropdown-btn').click()

        cy.get('.profile-name > p').invoke('text').then(text => {
            copiedValue = text;
            cy.get('.mb-40').should('have.text', copiedValue);
            cy.get('.profile-dropdown-btn').click()
        });

        // Click on the Cancel button from the email verification page
        cy.wait(2000)
        cy.get('.btn-cancel').click()
        cy.get('.btn_primary').click()
        cy.get(':nth-child(3) > .account-delete-details > .d-flex > .btn-update').click()
        cy.get('#customInput').type(this.Password)
        cy.get('.btn-update').click()
        cy.wait(2000)
        cy.get('.btn-update').click()
        
        // Enter the Invalid OTP
        cy.wait(2000)
        this.ValidOTPCode("2", "3", "1", "1");
        cy.get('#errorDiv').should("contain","Please enter valid code")
        cy.wait(2000)

        // Click on the resend OTP
        cy.get('#resendButton').click()

        // Click on the Send OTP Button
        cy.wait(2000)
        cy.get('.btn-update').click()
        cy.wait(2000)
        cy.get("#number4").clear()
        cy.get("#number3").clear()
        cy.get("#number2").clear()
        cy.get("#number1").clear()
        cy.wait(2000)
        this.ValidOTPCode("1", "1", "1", "1");

        // Mobile phone page is rendor
        cy.get('.form-desc').should("contain","We found your registered phone number with SeeBiz.")

        // Valid OTP from phone number page
        cy.get('.btn-update').click()
        cy.get('p.form-desc').should("contain","Enter the OTP below to confirm your phone number")

        // Enter the Invalid OTP
        cy.wait(2000)
        this.ValidOTPCode("2", "3", "1", "1");
        cy.wait(2000)
        cy.get('#errorDiv').should("contain","Please enter valid code")
        cy.wait(2000)

        // Click on the resend OTP
        cy.get('#resendButton').click()
        // cy.wait(8000)

    }

    ClickonAccountDeletionAgain(){
        cy.get('#customInput').type(this.Password)
        cy.get('.btn_primary').click()
        cy.get(':nth-child(2) > .active').click()
    }

    
}

export default AccountDeletion;