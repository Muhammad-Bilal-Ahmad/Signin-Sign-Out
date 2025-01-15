class Profile
{
    waitforexecutionstep = 4000;
    randomAlphabets = Math.random().toString(36).substring(2); // Generate random string excluding the first character which is a dot
    alphabetsOnly = this.randomAlphabets.replace(/[^a-z]/gi, ''); // Remove non-alphabetic characters
    randomName = "Ahmad" + this.alphabetsOnly;
    randomemail = "bilalseebiz7500+" + this.randomName + Math.random().toString(36).substring(7,12) + "@gmail.com";
    randomemails = "bilalseebiz7500+" + Math.random().toString(36).substring(7,12) + "@gmail.com";
    randomNumberString = Math.random().toString().substring(2, 5); // Generate a random string of numbers

    //Credentials
    Mail = "bilalseebiz7500+338@gmail.com"
    Password = "Bilal7500"


    Credentials(){
        cy.wait(this.waitforexecutionstep)
        cy.get('#email').type(this.Mail)
        cy.get('#password > input').type(this.Password)
        cy.get('#loginBtn').click()
    }

    ClickProfile(){
        cy.wait(this.waitforexecutionstep)
        cy.get('.left-top-navigation > .dashboard-left-nav > :nth-child(2) > a').click()

        // To check the Page heading
        cy.get('.page-heading').should("contain",'Profile');
        cy.wait(this.waitforexecutionstep)
    }

    NewaccountforKeepmeloggedout(){
        cy.wait(this.waitforexecutionstep)
        cy.contains("Get Started").click()
        cy.get(':nth-child(1) > .form-control').type(this.randomemails)
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

    NewAccount(randomemailfornewaccount){
        cy.wait(this.waitforexecutionstep)
        cy.contains("Get Started").click()
        cy.get(':nth-child(1) > .form-control').type(randomemailfornewaccount)
        cy.get(':nth-child(2) > .form-control').type(this.Password)
        cy.get(':nth-child(4) > .form-control').type(this.Password)
        cy.get('#inlineCheckbox1').check()
        cy.get('#loginBtn').click()
        cy.wait(this.waitforexecutionstep) 
        function ValidOTPCode(num1, num2, num3, num4) {
            cy.get('#number1').type(num1);
            cy.get('#number2').type(num2);
            cy.get('#number3').type(num3);
            cy.get('#number4').type(num4);
        }
        ValidOTPCode("1", "1", "1", "1");
        cy.wait(this.waitforexecutionstep)
    }

    NewAccounttoUploadImage()
    {    
        //To check the default Image
        cy.get('.left-top-navigation > .dashboard-left-nav > :nth-child(2) > a').click()

        // To check the Page heading
        cy.get('.page-heading').should("contain",'Profile');

        cy.get("#profilePicture").should("have.attr", "src", "https://s3-us-west-2.amazonaws.com/seebiz-images/img/avatar_default2.png");

        // To Upload Greater than 1 MB image
        cy.wait(this.waitforexecutionstep);
        const filepaths = "GreaterOneMB.jpg";
        cy.get("input[type='file']").attachFile(filepaths)
        cy.get('.modal_content_inner > p').should("contain",'Image size should be less than 1 MB.');
        cy.wait(2000)
        cy.get('.btn_primary').click()

        // To Upload Video
        cy.wait(this.waitforexecutionstep);
        const videopath = "Video.mp4";
        cy.get("input[type='file']").attachFile(videopath)
        cy.wait(2000);
        cy.get('.modal_content_inner > p').should("contain",'Only JPEG, PNG, and JPG files are allowed.');
        cy.get('.btn_primary').click()

        // To Upload gipy
        cy.wait(2000);
        const giphy = "giphy.gif";
        cy.get("input[type='file']").attachFile(giphy)
        cy.wait(2000);
        cy.get('.modal_content_inner > p').should("contain",'Only JPEG, PNG, and JPG files are allowed.');
        cy.get('.btn_primary').click()

        // To Upload PDF
        cy.wait(2000);
        const samplePDF = "sample.pdf";
        cy.get("input[type='file']").attachFile(samplePDF)
        cy.wait(2000);
        cy.get('.modal_content_inner > p').should("contain",'Only JPEG, PNG, and JPG files are allowed.');
        cy.get('.btn_primary').click()

        // To Upload Less Than 1MB image
        cy.wait(this.waitforexecutionstep)
        const filepath = "LessOneMB.jpg";
        cy.get("input[type='file']").attachFile(filepath)
        cy.wait(this.waitforexecutionstep)
        cy.get('.page-heading').should("contain",'Home');
    }

    ToChangeName(){
        cy.get('#hideName').click()

        // To check the Cancel button functionality
        cy.get('#nameCancel').click()        
        cy.wait(2000)

        // Enter no character in Name Field
        cy.get('#hideName').click()
        cy.get('#customInput').clear()
        cy.get('.btn-update').click()
        cy.get(':nth-child(4) > .d-flex > .input-error-text').should("contain","Please enter Name")

        // To enter Special Character
        cy.get('#customInput').clear()
        cy.get('#customInput').type("!#$%@%$^%*&^%*")
        cy.get('.btn-update').click()
        cy.get('.input-error-text').should("exist");


        // To change the Name
        cy.get('#customInput')
        .click()
        .clear()
        .type(this.randomName);
        cy.get('.btn-update').click()
        cy.get('.Toastify__toast-body').should("contain","Name update successfully")

      
    }

    ToChangePassword(){

        // To check Password field is available
        cy.get(':nth-child(3) > .profile-header > .info > .heading').should("contain","Password")

        // Click on Change password
        cy.get('#passwordHide').click()

        // Click on the old password
        cy.get('#Pasword > .input_box > .input-container > #customInput').clear()
        cy.get('#Pasword > .input_box > .input-container > #customInput').type("Bilal7500")
        cy.wait(2000)
        cy.get("#Pasword > div > div > div > img").click()

        // Click on the New Password field
        cy.get(':nth-child(2) > .input_box > .input-container > #customInput').click()
        cy.get(':nth-child(2) > .input_box > .input-container > #customInput').clear()
        cy.get(':nth-child(2) > .input_box > .input-container > #customInput').type("Change123")

        cy.get("#main_container > div > div.color-fafafa.flex-1 > div > main > div > div > div.sso-profile-wrapper > div > div:nth-child(3) > form > div:nth-child(2) > div > div > div > img").click()



    }

    PasswordValidations(){

        // Contains 8 Characters
        cy.get(':nth-child(2) > .input_box > .input-container > #customInput').clear()
        cy.get(':nth-child(2) > .input_box > .input-container > #customInput').type("1234ewertt")

        cy.get("#main_container > div > div.color-fafafa.flex-1 > div > main > div > div > div.sso-profile-wrapper > div > div:nth-child(3) > form > div:nth-child(2) > div > ul > li:nth-child(1) > svg")
        .should('have.css', 'fill', 'rgb(51, 163, 72)');

        // Contains atleast 1 number
        cy.get(':nth-child(2) > .input_box > .input-container > #customInput').clear()
        cy.get(':nth-child(2) > .input_box > .input-container > #customInput').type("1afewert")

        cy.get("#main_container > div > div.color-fafafa.flex-1 > div > main > div > div > div.sso-profile-wrapper > div > div:nth-child(3) > form > div:nth-child(2) > div > ul > li:nth-child(2) > svg")
        .should('have.css', 'fill', 'rgb(51, 163, 72)');

        // Contains upper and lower case
        cy.get(':nth-child(2) > .input_box > .input-container > #customInput').clear()
        cy.get(':nth-child(2) > .input_box > .input-container > #customInput').type("Paasword3")

        cy.get("#main_container > div > div.color-fafafa.flex-1 > div > main > div > div > div.sso-profile-wrapper > div > div:nth-child(3) > form > div:nth-child(2) > div > ul > li:nth-child(3) > svg > path")
        .should('have.css', 'fill', 'rgb(51, 163, 72)');

        // Confirm Field available 
        cy.get(':nth-child(3) > .input_box > .input-container > #customInput').should('exist')

        // Enter a Confirm Password
        cy.get(':nth-child(3) > .input_box > .input-container > #customInput').type("1234ewertt")

        // Click on Confirm password eye icon
        cy.get("#main_container > div > div.color-fafafa.flex-1 > div > main > div > div > div.sso-profile-wrapper > div > div:nth-child(3) > form > div:nth-child(3) > div > div.input-container.extra-icon > div > img").should("exist")

        cy.get("#main_container > div > div.color-fafafa.flex-1 > div > main > div > div > div.sso-profile-wrapper > div > div:nth-child(3) > form > div:nth-child(3) > div > div.input-container.extra-icon > div > img").click()

        // Show Current Password is not matched

        cy.get('#Pasword > .input_box > .input-container > #customInput').clear()
        cy.get('#Pasword > .input_box > .input-container > #customInput').type("Change123")

        cy.get(':nth-child(2) > .input_box > .input-container > #customInput').clear()
        cy.get(':nth-child(2) > .input_box > .input-container > #customInput').type("Bilal7500")

        cy.get(':nth-child(3) > .input_box > .input-container > #customInput').clear()
        cy.get(':nth-child(3) > .input_box > .input-container > #customInput').type("Bilal7500")

        cy.get('#psdBtn').click()

        cy.get('.input-error-text').should("contain","Current password not match")

        // "Confirm new password" field by entering wrong password

        cy.get('#Pasword > .input_box > .input-container > #customInput').clear()
        cy.get('#Pasword > .input_box > .input-container > #customInput').type("Bilal7500")

        cy.get(':nth-child(2) > .input_box > .input-container > #customInput').clear()
        cy.get(':nth-child(2) > .input_box > .input-container > #customInput').type("Change123")

        cy.get(':nth-child(3) > .input_box > .input-container > #customInput').clear()
        cy.get(':nth-child(3) > .input_box > .input-container > #customInput').type("Change1234")

        cy.get('.input-error-text').should("contain","Passwords do not match")
        cy.wait(2000)


        // "Confirm new password" field by entering similar to Old passowrd
        cy.get('#Pasword > .input_box > .input-container > #customInput').clear()
        cy.get('#Pasword > .input_box > .input-container > #customInput').type("Bilal7500")

        cy.get(':nth-child(2) > .input_box > .input-container > #customInput').clear()
        cy.get(':nth-child(2) > .input_box > .input-container > #customInput').type("Bilal7500")

        cy.get(':nth-child(3) > .input_box > .input-container > #customInput').clear()
        cy.get(':nth-child(3) > .input_box > .input-container > #customInput').type("Bilal7500")
        cy.get('#psdBtn').click()
        cy.wait(2000)

        cy.get('.input-error-text').should("contain","New and old password is same. Please Choose different password")
    }

    ChangePassword()
    {
        // Cancel functionality on the change password
        cy.get('#passwordHide').click()
        cy.get('#Pasword > .input_box > .input-container > #customInput').type("Bilal7500")
        cy.get(':nth-child(2) > .input_box > .input-container > #customInput').type("Change123")
        cy.get(':nth-child(3) > .input_box > .input-container > #customInput').type("Change123")
        cy.get('#passwordCancel').click()


        // To Change password
        cy.wait(2000)
        cy.get('#passwordHide').click()
        cy.wait(2000)
        cy.get('#Pasword > .input_box > .input-container > #customInput').type("Bilal7500")
        cy.get(':nth-child(2) > .input_box > .input-container > #customInput').type("Change123")
        cy.get(':nth-child(3) > .input_box > .input-container > #customInput').type("Change123")
        cy.wait(2000)
        cy.get('#psdBtn').click()
        cy.get('.btn_primary').should("contain","Yes, log me out")
    }

    logmeoutfunctionality(){
        cy.get('.btn_primary').click()
        cy.wait(this.waitforexecutionstep)
    }
   
    keepMeLoggedIn(){
        cy.get('.btn_default').click()
    }

    EmailFunctionality(){
        
        cy.get(':nth-child(4) > .profile-header > .info > .heading').should('contain','Email')
        cy.get(':nth-child(4) > .profile-header > .info > .color-2020').should('contain','bilalseebiz7500+338@gmail.com')

    }

    PhoneNumber(){
        
        cy.get(':nth-child(5) > .edit_box > .profile-header > .info > .heading').should('contain','Phone Number')
        cy.wait(2000)
        cy.contains("Edit Phone Number").click()
        cy.wait(2000)

        // Empty field in Phone number
        cy.get('#customInput').clear()
        cy.get('.btn-update').click()
        cy.get(':nth-child(4) > .d-flex > .input-error-text').should('contain','Please enter Phone Number')

        // Cancel functionality on cancel button
        cy.get('#customInput').clear()
        cy.get('#customInput').type(this.randomNumberString)
        cy.get('#phoneCancel').click()

        // // Number save less than 10 digits
        cy.contains("Edit Phone Number").click()
        cy.get('#customInput').clear()
        cy.get('#customInput').type(this.randomNumberString)
        cy.get('.btn-update').click()
        cy.get('.Toastify__toast-body').should('contain','Number update successfully')

    }

    TwoWayAuthentication(){

        cy.get(':nth-child(6) > .profile-header > .info > .heading').should('contain','Two Way Authentication')

        cy.get('.color-DE4841').should('contain','Not Activated')
    }

    StatusEnabled()
    {
        cy.get('#email').type("bilalseebiz7500+98ss765@gmail.com")
        cy.get('#password > input').type(this.Password)
        cy.get('#loginBtn').click()

        function ValidOTPCode(num1, num2, num3, num4) {
            cy.get('#number1').type(num1);
            cy.get('#number2').type(num2);
            cy.get('#number3').type(num3);
            cy.get('#number4').type(num4);
        }
        ValidOTPCode("1", "1", "1", "1");
        cy.wait(this.waitforexecutionstep)
        cy.get('.left-top-navigation > .dashboard-left-nav > :nth-child(2) > a').click()

        cy.get('.color-37B34A').should('contain','Activated')

    }

    EmptyfieldPhoneNumber(){

        cy.get('#passwordHide').click()
        cy.get('#psdBtn').click()
        cy.get(':nth-child(2) > .input_box > .input-container > .error-msg > .d-flex > .input-error-text').should('contain','Password is required')

    }

    Namecharacter(){
        cy.get('#hideName').click()
        cy.get('#customInput').clear()
        cy.get('#customInput').type("qwertyuiopasdfghjklzxcvbnmqwertyuiopasdfghjklzxcvbnmqwertyuio")
        cy.get('.input-error-text').should('contain','Name should not exceed 50 characters.')
    }


}
    
export default Profile;