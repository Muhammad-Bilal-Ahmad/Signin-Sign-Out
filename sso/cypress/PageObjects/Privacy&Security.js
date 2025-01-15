class PrivacyandSecurity
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

    NewAccount(randomemailforprivacy){
        cy.wait(this.waitforexecutionstep)
        cy.contains("Get Started").click()
        cy.get(':nth-child(1) > .form-control').type(randomemailforprivacy)
        cy.get(':nth-child(2) > .form-control').type(this.Password)
        cy.get(':nth-child(4) > .form-control').type(this.Password)
        cy.get('#inlineCheckbox1').check()
        cy.get('#loginBtn').click()
        cy.wait(2000) 
        function ValidOTPCode(num1, num2, num3, num4) {
            cy.get('#number1').type(num1);
            cy.get('#number2').type(num2);
            cy.get('#number3').type(num3);
            cy.get('#number4').type(num4);
        }
        ValidOTPCode("1", "1", "1", "1");
        cy.wait(this.waitforexecutionstep)
    }

    disableCredentials(){
        cy.get('#email').type("bilalseebiz7500+79@gmail.com")
        cy.get('#password > input').type(this.Password)
        cy.get('#loginBtn').click()
        cy.wait(2000)
        cy.wait(2000) 
        function ValidOTPCode(num1, num2, num3, num4) {
            cy.get('#number1').type(num1);
            cy.get('#number2').type(num2);
            cy.get('#number3').type(num3);
            cy.get('#number4').type(num4);
        }
        ValidOTPCode("1", "1", "1", "1");
        cy.wait(this.waitforexecutionstep)

    }

    Credentials(){
        cy.get('#email').type(this.Mail)
        cy.get('#password > input').type(this.Password)
        cy.get('#loginBtn').click()
        cy.wait(2000)
    }

    ClickPrivacyandSubscription(){

        // Privacy & Security Tab is clickable
        cy.get('.inactive > .menu-text-left > .menu-text').should("contain","Privacy & Security")
        cy.get('.inactive > .menu-text-left > .menu-text').click()

        //  Privacy & Security dropdown options are visible
        cy.get('#deleteAccountSubMenu > :nth-child(1) > a').should("contain","Account Information")
        cy.get('#deleteAccountSubMenu > :nth-child(2) > a').should("contain","Account Deletion")
        
        // Privacy & Security tab is highlighted
        cy.get("#main_container > div > div.left-navigation > div.left-top-navigation > ul > li:nth-child(3) > a").should("exist")
    }

    AccountInformation(){

        // Account Information is clickable
        cy.get('.inactive > .menu-text-left > .menu-text').click()
        cy.get('#deleteAccountSubMenu > :nth-child(1) > a').click()

        // Enable two way authentication" link is shown
        cy.get('#enable_two_way_auth').should("contain","Enable Two Way Auth")

        // Enable two way Auth link is working
        cy.get('#enable_two_way_auth').click()

        //  "Yes or No" option available
        cy.get('.partion > :nth-child(1) > label').should("contain","Yes")
        cy.get(':nth-child(2) > label').should("contain","No")

        // To check the No functionality
        cy.go("back")
        cy.wait(2000)
        cy.get('#deleteAccountSubMenu > :nth-child(1) > a').click()
        cy.get('#enable_two_way_auth').click()
        cy.get('[value="no"]').click();
        cy.get('.btn-update').click()
        cy.wait(2000)
        cy.get('.enable-two-way-oath').should("contain","Protect your account with 2-Step Verification.")

        // "Next  button" is clickable
        cy.wait(2000)
        cy.get('#enable_two_way_auth').click()
        cy.get('.btn-update').click()

        // "Cancel  button" is clickable
        cy.wait(2000)
        cy.get('#enable_two_way_auth').click()
        cy.get('#disable_two_way_auth').click()

        // To check the Yes functionality
        cy.get('#enable_two_way_auth').click()
        cy.get('[value="yes"]').click();
        cy.get('.btn-update').click()
        cy.get('#customInput').should("be.visible")


        // Placeholder of Enter Password is shown 
        cy.get("#main_container > div > div.color-fafafa.flex-1 > div > div > main > div > div > div.sso-profile-wrapper > div > div.edit_box > form > div.pos-rel.auth-custom-input.auth-required > div > label")
        .should("contain","Enter password")
       
        // Enter the wrong password
        cy.get('#customInput').type("Bilal750dsd0")

        // Password visiility icon

        cy.get("#main_container > div > div.color-fafafa.flex-1 > div > div > main > div > div > div.sso-profile-wrapper > div > div.edit_box > form > div.pos-rel.auth-custom-input.auth-required > div > div > img")
        .should("be.visible")

        cy.get("#main_container > div > div.color-fafafa.flex-1 > div > div > main > div > div > div.sso-profile-wrapper > div > div.edit_box > form > div.pos-rel.auth-custom-input.auth-required > div > div > img")
        .click()

        //  Next button with null password
        cy.get('#customInput').clear()
        cy.get('.input-error-text').should("contain","Please enter password")

        // Enter the Correct Password
        cy.get('#customInput').clear()
        cy.get('#customInput').type("Bilal7500")

        // Send OTP
        cy.get('.btn-update').click()
        cy.get('.auth-container-top > .mb-10').should("contain","SeeBiz just sent a otp")

        
    }

    EmailAddress(){

        let copiedValue;

        cy.get('.inactive > .menu-text-left > .menu-text').click()
        cy.get('#deleteAccountSubMenu > :nth-child(1) > a').click()
        cy.get('#enable_two_way_auth').click()
        cy.get('[value="yes"]').click();
        cy.get('.btn-update').click()
        cy.get('.profile-dropdown-btn').click()

        cy.get('.profile-name > p').invoke('text').then(text => {
            copiedValue = text;
            cy.get('.color-2020').should('have.text', copiedValue);
        });

        cy.wait(2000)
        cy.get('.profile-dropdown-btn').click()
    }

    TWowayAuthenticationEnabled(){
        cy.get('.inactive > .menu-text-left > .menu-text').click()
        cy.get('#deleteAccountSubMenu > :nth-child(1) > a').click()
        cy.get('#enable_two_way_auth').click()
        cy.get('[value="yes"]').click();
        cy.get('.btn-update').click()
        cy.get('#customInput').type(this.Password)
        cy.get('.btn-update').click()
        cy.get('.auth-container-top > .mb-10').should("contain","SeeBiz just sent a otp")
        cy.wait(2000)

        //Enter the Invalid OTP
        cy.get('#customInput').type("2321")
        cy.get('.btn-update').click()
        cy.get('.input-error-text').should("contain","Please enter valid code")

        // Resend button is seen
        cy.get('#resendButton').should("contain","Resend code")

        // Resend code button is clickable
        cy.get('#resendButton').click()

        // Timer is shown
        cy.get('#countDown').should("exist")

        // Enter the valid OTP code
        cy.wait(2000)
        cy.get('#customInput').clear()
        cy.get('#customInput').type("1111")
        cy.get('.btn-update').click()

    }

    Disabletwowayauth(){
        let copiedValue;
        cy.get('.inactive > .menu-text-left > .menu-text').click()
        cy.get('#deleteAccountSubMenu > :nth-child(1) > a').click()

        // "Disable two way auth" link is shown
        cy.get('#enable_two_way_auth').should("contain","Disable Two Way Auth")

        // "Disable two way auth" link is clickable
        cy.get('#enable_two_way_auth').click()

        // "Turn Off" button pop up appears upon clicking the "Disable two way auth" link
        cy.get('.btn-update').click()

        // modal Pop Up  button on security page
        cy.get('.modal_content_inner > span').should("contain","Do you want to Disable Two Way Auth ?")

        //  "No" button in the Modal Pop Up
        cy.get('.btn_default').click()

        // "Yes" button in the Modal Pop Up
        cy.wait(2000)
        cy.get('.btn-update').click()
        cy.get('.btn_primary').click()

        // Email address check
        cy.get('.profile-dropdown-btn').click()

        cy.get('.profile-name > p').invoke('text').then(text => {
            copiedValue = text;
            cy.get('.color-2020').should('have.text', copiedValue);
        });

        cy.wait(2000)
        cy.get('.profile-dropdown-btn').click()

        // Enter the wrong Password
        cy.get('#customInput').type("sjjsasd123")
        cy.get('.btn-update').click()
        cy.get('.input-error-text').should("contain","Credentials are incorrect!")

        // "Enter correct Password" page
        cy.get('#customInput').clear()
        cy.get('#customInput').type(this.Password)
        cy.get('.btn-update').click()

        // Enter Invalid OTP
        cy.wait(2000)
        cy.get('#customInput').type("3243")
        cy.get('.btn-update').click()

        // Resend code
        cy.get('#resendButton').should("contain","Resend code")
        cy.get('#resendButton').click()

        // CounDown Timer
        cy.get('#countDown').should("exist")

    }

    DisableAccountFullScenerio(){

        // Enable two way factor
        cy.get('.inactive > .menu-text-left > .menu-text').click()
        cy.get('#deleteAccountSubMenu > :nth-child(1) > a').click()
        cy.get('#enable_two_way_auth').click()
        cy.get('[value="yes"]').click();
        cy.get('.btn-update').click()
        cy.get('#customInput').clear()
        cy.get('#customInput').type("Bilal7500")
        cy.get('.btn-update').click()
        cy.wait(2000)
        cy.get('#customInput').type("1111")
        cy.get('.btn-update').click()

        // Disable two way factor
        cy.wait(3000)
        cy.get('.inactive > .menu-text-left > .menu-text').click()
        cy.get('#deleteAccountSubMenu > :nth-child(1) > a').click()
        cy.get('#enable_two_way_auth').click()
        cy.get('.btn-update').click()
        cy.wait(2000)
        cy.get('.btn_primary').click()
        cy.get('#customInput').clear()
        cy.get('#customInput').type(this.Password)
        cy.get('.btn-update').click()
        cy.wait(2000)
        cy.get('#customInput').type("1111")
        cy.get('.btn-update').click()
        cy.wait(2000)

    }

}
    
export default PrivacyandSecurity;