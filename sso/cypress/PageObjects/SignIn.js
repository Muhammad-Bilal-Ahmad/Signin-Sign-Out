class SignIn
{

    waitforexecutionstep = 4000;
    randomemail = "bilalseebiz7500+" + Math.random().toString(36).substring(3,6) + "@gmail.com";


    CheckURL(){
        cy.url().should("eq", "https://accounts.seebiz.cloud/login")
    
    };

    FontSizes()
    {
        cy.get('.auth-logo > img').then($element => { 

            // Get the font of the element
            return cy.wrap($element).getFontOfElement().then(font => {
            // Assert against the font
             expect(font).to.equal('Roboto, sans-serif');
            })
        })
        cy.get('.auth-logo > img').then($element => {
            // Get the font size of the element using getComputedStyle directly
            const fontSize = parseFloat(window.getComputedStyle($element[0]).fontSize);
      
            // Assert against the font size, replace 24 with your expected font size
            expect(fontSize).to.equal(14); // Adjust the expected font size as needed
          });

        cy.get('h1.login-greetings').then($element => { 

            // Get the font of the element
            return cy.wrap($element).getFontOfElement().then(font => {
            // Assert against the font
             expect(font).to.equal('Roboto, sans-serif');
            })
        })
        cy.get('h1.login-greetings').then($element => {
            // Get the font size of the element using getComputedStyle directly
            const fontSize = parseFloat(window.getComputedStyle($element[0]).fontSize);
      
            // Assert against the font size, replace 24 with your expected font size
            expect(fontSize).to.equal(36); // Adjust the expected font size as needed
          });
        
        

        cy.get('.auth-container-top > p').then($element => { 

            // Get the font of the element
            return cy.wrap($element).getFontOfElement().then(font => {
            // Assert against the font
             expect(font).to.equal('Roboto, sans-serif');
            })
        })
        cy.get('.auth-container-top > p').then($element => {
            // Get the font size of the element using getComputedStyle directly
            const fontSize = parseFloat(window.getComputedStyle($element[0]).fontSize);
      
            // Assert against the font size, replace 24 with your expected font size
            expect(fontSize).to.equal(14); // Adjust the expected font size as needed
          });

        cy.get('.checkox-input > .cursor').then($element => { 

            // Get the font of the element
            return cy.wrap($element).getFontOfElement().then(font => {
            // Assert against the font
             expect(font).to.equal('Roboto, sans-serif');
            })
        })
        cy.get('.checkox-input > .cursor').then($element => {
            // Get the font size of the element using getComputedStyle directly
            const fontSize = parseFloat(window.getComputedStyle($element[0]).fontSize);
      
            // Assert against the font size, replace 24 with your expected font size
            expect(fontSize).to.equal(14); // Adjust the expected font size as needed
          });

        cy.get('.color-blue').then($element => { 

            // Get the font of the element
            return cy.wrap($element).getFontOfElement().then(font => {
            // Assert against the font
             expect(font).to.equal('Roboto, sans-serif');
            })
        })
        cy.get('.color-blue').then($element => {
            // Get the font size of the element using getComputedStyle directly
            const fontSize = parseFloat(window.getComputedStyle($element[0]).fontSize);
      
            // Assert against the font size, replace 24 with your expected font size
            expect(fontSize).to.equal(14); // Adjust the expected font size as needed
          });


        cy.get('#loginBtn').then($element => { 

            // Get the font of the element
            return cy.wrap($element).getFontOfElement().then(font => {
            // Assert against the font
             expect(font).to.equal('Roboto, sans-serif');
            })
        })
        cy.get('#loginBtn').then($element => {
            // Get the font size of the element using getComputedStyle directly
            const fontSize = parseFloat(window.getComputedStyle($element[0]).fontSize);
      
            // Assert against the font size, replace 24 with your expected font size
            expect(fontSize).to.equal(16); // Adjust the expected font size as needed
          });

        cy.get('.login-info').then($element => { 

            // Get the font of the element
            return cy.wrap($element).getFontOfElement().then(font => {
            // Assert against the font
             expect(font).to.equal('Roboto, sans-serif');
            })
        })
        cy.get('.login-info').then($element => {
            // Get the font size of the element using getComputedStyle directly
            const fontSize = parseFloat(window.getComputedStyle($element[0]).fontSize);
      
            // Assert against the font size, replace 24 with your expected font size
            expect(fontSize).to.equal(20); // Adjust the expected font size as needed
          });

        cy.get('.color-gray').then($element => { 

            // Get the font of the element
            return cy.wrap($element).getFontOfElement().then(font => {
            // Assert against the font
             expect(font).to.equal('Roboto, sans-serif');
            })
        })
        cy.get('.color-gray').then($element => {
            // Get the font size of the element using getComputedStyle directly
            const fontSize = parseFloat(window.getComputedStyle($element[0]).fontSize);
      
            // Assert against the font size, replace 24 with your expected font size
            expect(fontSize).to.equal(14); // Adjust the expected font size as needed
          });



    }

    Mouseover(){
        cy.get('#email').trigger('mouseover')
        cy.get('#password > input').trigger('mouseover')
    }

    EmailField(){
        cy.get('#email').should('be.visible')
        cy.get("input[placeholder='Email']").should('have.attr', 'placeholder', 'Email');
        cy.get('#email').type(this.randomemail)
        cy.get('#login-form > div:nth-child(1) > svg > path')
        .should('exist') // Assertion: Verify the element exists
        .and('be.visible'); 
    }

    InvalidEmail(){
        cy.wait(3000)
        cy.get('#email').type("abneijf@@gmail")
        cy.get('#loginBtn').click()
        cy.get(':nth-child(1) > .error-text').should("contain","Invalid email address");

    }

    PasswordField(){
        cy.get('#password > input').should('be.visible')
        cy.get("input[placeholder='Password']").should('have.attr', 'placeholder', 'Password');
        cy.get('#password > input').type("Bilal7500")
        cy.get("#password > div:nth-child(2) > svg > path").click()
        cy.get("#password > div:nth-child(2) > svg > path")
        .should('exist') // Assertion: Verify the element exists
        .and('be.visible'); 
    }

    OldPassword(){
        const Email= 'Bilalseebiz7500+338@gmail.com';
        const oldPassword = 'Bilal750000';
    
        cy.get('input[placeholder="Email"]').type(Email);
    
        // Action - Enter old password in the "Password" field
        cy.get('input[placeholder="Password"]').type(oldPassword);

        // Assertion - Check if the password field contains the entered old password
        cy.get('input[placeholder="Password"]').should('have.value', oldPassword);

        cy.get("#loginBtn").click()


        cy.contains('Password is not correct').should("contain",'Password is not correct');
    }

    RememberMe(){
        cy.get('#remember-me').check().should('be.checked');
    }

    ValidCredentials(){
        const Emoil= 'bilalseebiz7500+338@gmail.com'
        const Password = 'Bilal7500' 

        cy.get('input[placeholder="Email"]').type(Emoil);
    
        // Action - Enter old password in the "Password" field
        cy.get('input[placeholder="Password"]').type(Password);

        // Assertion - Check if the password field contains the entered old password
        cy.get('input[placeholder="Password"]').should('have.value', Password);

        cy.get("#loginBtn").click()

        cy.wait(this.waitforexecutionstep)
        cy.get('.page-heading').should("exist")
        cy.wait(this.waitforexecutionstep)
    }
    
    InvalidCredentials(){

        const VaEmal = 'Bilalseebiz7500+338@gmail.com'
        const invPWD = 'Bilal75000'
        cy.wait(this.waitforexecutionstep)
        cy.get('input[placeholder="Email"]').type(VaEmal);
        // Action - Enter an incorrect password in the "Password" field
        cy.get('input[placeholder="Password"]').type(invPWD);

        cy.get("#remember-me");
    
        // Click the Sign-In button
        cy.get('#loginBtn').click().wait(2000);
    
        // Assertion - Check for error message or expected behavior upon providing an invalid password
        cy.contains('Password is not correct').should('exist');
    }

    ValidationsCheck(){
        const invPWD = 'Bilal75000'
        cy.get('#remember-me').check().should('be.checked');
        cy.get('#loginBtn').click()
        cy.get(':nth-child(1) > .error-text').should('contain','Please enter your email')
        cy.get('#password > .error-text').should('contain','Please enter password')

        cy.wait(this.waitforexecutionstep)



        cy.get('input[placeholder="Email"]').type("bilalseebiz+5@gmail.com..$@!%^&");
        cy.get('input[placeholder="Password"]').type(invPWD);
        cy.get('#loginBtn').click()
        cy.get(':nth-child(1) > .error-text').should('contain','Invalid email address')

        cy.wait(this.waitforexecutionstep)

        cy.get('input[placeholder="Email"]').clear()
        cy.get('input[placeholder="Password"]').clear()
        cy.get('input[placeholder="Email"]').type("bilalseebiz+338@gmail.com");
        cy.get('input[placeholder="Password"]').type("Tem");
        cy.get('#loginBtn').click()
        cy.get('#password > .error-text').should('contain','Password must be at least 8 characters')


        cy.wait(this.waitforexecutionstep)

        cy.get('input[placeholder="Email"]').clear()
        cy.get('input[placeholder="Password"]').clear()
        cy.get('input[placeholder="Password"]').type("Temp1234!");
        cy.get('#loginBtn').click()
        cy.get('.error-text').should('contain','Please enter your email')

        cy.wait(this.waitforexecutionstep)

        cy.get('input[placeholder="Email"]').clear()
        cy.get('input[placeholder="Password"]').clear()
        cy.get('input[placeholder="Email"]').type("bilalseebiz+338@gmail.com");
        cy.get('#loginBtn').click()
        cy.get('.error-text').should('contain','Please enter password')

        cy.wait(this.waitforexecutionstep)

        cy.get('input[placeholder="Email"]').clear()
        cy.get('input[placeholder="Password"]').clear()
        cy.get('#loginBtn').click()
        cy.get('.error-text').should('contain','Please enter your email')
        cy.get('.error-text').should('contain','Please enter password')



    }

    InvalidEmail()
    {
        const Email= 'Bilalseebiz750330+338@gmail.com';
        const oldPassword = 'Bilal7500';

        cy.get('input[placeholder="Email"]').type(Email);
        cy.get('input[placeholder="Password"]').type(oldPassword)
        cy.get("#loginBtn").click()


        cy.get('.error-text').should("contain",'Invalid email and password');
    }

    ValidEmailnotvalidPassword(){

        const Email= 'Bilalseebiz7500+338@gmail.com';
        const oldPassword = 'Bilal7500sss';

        cy.get('input[placeholder="Email"]').type(Email);
        cy.get('input[placeholder="Password"]').type(oldPassword)
        cy.get("#loginBtn").click()
        cy.get('.error-text').should("contain",'Password is not correct');
    }

    InValidEmailnotPassword(){

        const Email= 'Bilalseebiz750023+338@gmail.com';
        const oldPassword = 'Bilal7500';

        cy.get('input[placeholder="Email"]').type(Email);
        cy.get('input[placeholder="Password"]').type(oldPassword)
        cy.get("#loginBtn").click()
        cy.get('.error-text').should("contain",'Invalid email and password');
    }

    ForgotPassword() {

        const Email= 'Bilalseebiz7500+338@gmail.com';
        const oldPassword = 'Bilal750220';

        cy.get('input[placeholder="Email"]').type(Email);
        cy.get('input[placeholder="Password"]').type(oldPassword)
        cy.get('.color-blue').click()
        cy.get('.login-greetings').should("contain",'Forgot Password?');
        cy.wait(this.waitforexecutionstep)
    }

    ForgotPasswordScenerios(){

        const Emails = 'Bilalseebiz7500+339@gmail.com';
        cy.wait(this.waitforexecutionstep)
        cy.contains("Forgot password?").click()
        cy.get('#email').type(Emails)
        cy.contains("Send verification code").click()
        cy.wait(this.waitforexecutionstep)
        cy.contains("Verify Email Address").click()
        cy.get('#errorDiv').should("contain",'Please enter 4 digit code');
        cy.go("back")
        cy.go("back")

        cy.wait(this.waitforexecutionstep)
        
        cy.contains("Forgot password?").click()
        cy.get('#email').type("bilalseebiz5682+0987@gmail.com")
        cy.contains("Send verification code").click()
        cy.get('#errorDiv').should("contain",'We did not find any account associated with this email. Please register yourself first!');

        cy.wait(this.waitforexecutionstep)
        cy.go("back")
        cy.contains("Forgot password?").click()
        cy.contains("Send verification code").click()
        cy.get('#errorDiv').should("contain",'Please enter your email');

    }

    Forgotlink(){

        cy.contains("Forgot password?").should("contain",'Forgot password?');
        cy.wait(2000)
        cy.contains("Forgot password?").click()
        cy.get('.login-greetings').should("contain",'Forgot Password?');
        cy.get('#email').should('be.visible')
        cy.get('#forgotPwd').should('be.visible')
        cy.wait(2000)
        cy.go("back")
        cy.wait(2000)
        cy.contains("Forgot password?").click()
        cy.get('#email').type("bilalseebiz7500+xd5@gmail.com")
        cy.get('#forgotPwd').click()
        cy.get('.login-greetings').should("contain",'Verify Password Code');
        cy.go("back")
        cy.get('#email').type("umer@gmail")
        cy.get('#forgotPwd').click()
        cy.get('#errorDiv').should("contain",'Please enter valid email address');
        cy.wait(2000)
        cy.get('#email').clear()
        cy.get('#email').type("bilalseebiz7500+xd5@gmail.com")
        cy.get('#forgotPwd').click()
        cy.get('.login-greetings').should("contain",'Verify Password Code');

    }

    ResetPage(){
        cy.contains("Forgot password?").click()
        cy.wait(2000)
        function ValidOTPCode(email, num1, num2, num3, num4) {
            cy.get('#email').type(email);
            cy.get('#forgotPwd').click()
            cy.get('#number1').type(num1);
            cy.get('#number2').type(num2);
            cy.get('#number3').type(num3);
            cy.get('#number4').type(num4);
        }
        ValidOTPCode("bilalseebiz7500+qpp@gmail.com", "1", "1", "1", "1");

        cy.get('.login-greetings').should("contain",'Reset Password');

        cy.get(':nth-child(1) > .form-control').should('be.visible')
        cy.get("input[placeholder='Password']").should('have.attr', 'placeholder', 'Password');
        cy.get("input[placeholder='Password']").type("Bilal7500")
        cy.get("div.pos-rel:nth-child(1) > div:nth-child(2) > svg").click()

        cy.get(':nth-child(3) > .form-control').should('be.visible')
        cy.get("input[placeholder='Confirm Password']").should('have.attr', 'placeholder', 'Confirm Password');
        cy.get("input[placeholder='Confirm Password']").type("Bilal7500")
        cy.get("body > div > div > div.auth-container-right > div > form > div:nth-child(3) > div.toggle-password.pos-unset > svg > path").click()

        cy.wait(this.waitforexecutionstep)

        cy.get(':nth-child(1) > .form-control').clear()
        cy.get("input[placeholder='Password']").type("Bilal7500")
        cy.get(':nth-child(3) > .form-control').clear()
        cy.get("input[placeholder='Confirm Password']").type("Bilal7500")


        cy.wait(this.waitforexecutionstep)
        
        cy.go("back")
        cy.go("back")

        cy.wait(2000)
        function ValidOTPCode(email, num1, num2, num3, num4) {
            cy.get('#email').type(email);
            cy.get('#forgotPwd').click()
            cy.get('#number1').type(num1);
            cy.get('#number2').type(num2);
            cy.get('#number3').type(num3);
            cy.get('#number4').type(num4);
        }
        ValidOTPCode("bilalseebiz7500+kf5@gmail.com", "1", "3", "1", "1");
        cy.get('#errorDiv').should("contain",'Please enter valid code');

        cy.wait(2000)
        cy.go("back")

        cy.get('#email').type("bilalseebiz7500+9yt@gmail.com")
        cy.get('#forgotPwd').click()
        cy.get('[style="display: block; font-size: 12px;"] > .error-text').should("contain",'Email is not confirmed.');

        cy.wait(2000)
        cy.get('#email').clear()
        cy.get('#email').type("bilalseebiz7500+339@gmail.com")
        cy.get('#forgotPwd').click()
        cy.get('#signInBtn').click()
        cy.get('#errorDiv').should("contain",'Please enter 4 digit code');


        cy.wait(2000)
        cy.get('#resendButton').click()
        cy.get('#errorDiv').should("contain",'Email sent successfully!');

    }

    ValidationsonResetPage(){

        cy.contains("Forgot password?").click()
        cy.wait(2000)
        function ValidOTPCode(email, num1, num2, num3, num4) {
            cy.get('#email').type(email);
            cy.get('#forgotPwd').click()
            cy.get('#number1').type(num1);
            cy.get('#number2').type(num2);
            cy.get('#number3').type(num3);
            cy.get('#number4').type(num4);
        }
        ValidOTPCode("bilalseebiz7500+338@gmail.com", "1", "1", "1", "1");

        cy.wait(2000)
        cy.get(':nth-child(1) > .form-control').type("password")
        //cy.get("body > div > div > div.auth-container-right > div > form > ul > li:nth-child(1) > svg").should('have.verified')
        cy.get("body > div > div > div.auth-container-right > div > form > ul > li:nth-child(1) > svg > path")
        .should('have.css', 'fill', 'rgb(51, 163, 72)');

        cy.get(':nth-child(1) > .form-control').clear()
        cy.get(':nth-child(1) > .form-control').type("1")
        cy.get("body > div > div > div.auth-container-right > div > form > ul > li:nth-child(2) > svg")
        .should('have.css', 'fill', 'rgb(51, 163, 72)');

        cy.get(':nth-child(1) > .form-control').clear()
        cy.get(':nth-child(1) > .form-control').type("Bilal7500")
        cy.get("body > div > div > div.auth-container-right > div > form > ul > li:nth-child(3) > svg")
        .should('have.css', 'fill', 'rgb(51, 163, 72)');

        cy.wait(2000)
        cy.get(':nth-child(1) > .form-control').clear()
        cy.get(':nth-child(1) > .form-control').type("abcABC")
        cy.get(':nth-child(3) > .form-control').type("abcABC")
        cy.get("body > div > div > div.auth-container-right > div > form > ul > li:nth-child(1) > svg")
        .should('have.css', 'fill', 'rgb(255, 12, 0)');
        cy.get("body > div > div > div.auth-container-right > div > form > ul > li:nth-child(2) > svg")
        .should('have.css', 'fill', 'rgb(255, 12, 0)');

        cy.wait(2000)
        cy.get(':nth-child(1) > .form-control').clear()
        cy.get(':nth-child(3) > .form-control').clear()
        cy.get(':nth-child(1) > .form-control').type("Bilal7500")
        cy.get('.create-account').click()
        cy.get('.error-text').should("contain",'Please enter confirm password');
        cy.wait(this.waitforexecutionstep)
    }

    FlowSignIn(){
        cy.wait(this.waitforexecutionstep)
        cy.contains("Forgot password?").click() 

        function ValidOTPCode(email, num1, num2, num3, num4) {
            
            cy.get('#email').type(email);
            cy.get('#forgotPwd').click()
            cy.get('#number1').type(num1);
            cy.get('#number2').type(num2);
            cy.get('#number3').type(num3);
            cy.get('#number4').type(num4);
        }
        ValidOTPCode("bilalseebiz7500+338@gmail.com", "1", "1", "1", "1");

        cy.wait(2000)
        cy.get(':nth-child(1) > .form-control').type("Bilal7500")
        cy.get(':nth-child(3) > .form-control').type("Bilal7500")
        cy.get('.create-account').should('be.visible')
        cy.wait(1000)
        cy.get('.color-black').click()
        cy.get('.login-greetings').should("contain",'Welcome Back!');

        cy.wait(2000)
        cy.contains("Forgot password?").click() 

        function ValidOTPCode(email, num1, num2, num3, num4) {
            
            cy.get('#email').type(email);
            cy.get('#forgotPwd').click()
            cy.get('#number1').type(num1);
            cy.get('#number2').type(num2);
            cy.get('#number3').type(num3);
            cy.get('#number4').type(num4);
        }
        ValidOTPCode("bilalseebiz7500+338@gmail.com", "1", "1", "1", "1");

        cy.wait(2000)
        cy.get(':nth-child(1) > .form-control').type("Bilal7500")
        cy.get(':nth-child(3) > .form-control').type("Bilal7500")

        cy.get("body > div > div > div.auth-container-right > div > form > ul > li:nth-child(1) > svg > path")
        .should('have.css', 'fill', 'rgb(51, 163, 72)');
        cy.get("body > div > div > div.auth-container-right > div > form > ul > li:nth-child(2) > svg > path")
        .should('have.css', 'fill', 'rgb(51, 163, 72)');
        cy.get("body > div > div > div.auth-container-right > div > form > ul > li:nth-child(3) > svg > path")
        .should('have.css', 'fill', 'rgb(51, 163, 72)');

        cy.wait(2000)
        cy.get('.color-black').click()
        cy.contains("Forgot password?").click() 

        function ValidOTPCode(email, num1, num2, num3, num4) {
            
            cy.get('#email').type(email);
            cy.get('#forgotPwd').click()
            cy.get('#number1').type(num1);
            cy.get('#number2').type(num2);
            cy.get('#number3').type(num3);
            cy.get('#number4').type(num4);
        }
        ValidOTPCode("bilalseebiz7500+338@gmail.com", "1", "1", "1", "1");

        cy.wait(2000)
        cy.get(':nth-child(1) > .form-control').type("Bilal7500")
        cy.get(':nth-child(3) > .form-control').type("Bilal75006789")
        cy.wait(2000)
        cy.get('.color-black').click()

        
    }

    twostepauth(){

        cy.get('#email').type("bilalseebiz7500+5b0@gmail.com")
        cy.get('#password > input').type("Change123")
        cy.get('#loginBtn').click()
        cy.get('.auth-logo > img').should("be.visible")
        cy.get('h1').should("contain",'2-Step Verification');
        function ValidOTPCode(num1, num2, num3, num4) {
            cy.get('#number1').type(num1);
            cy.get('#number2').type(num2);
            cy.get('#number3').type(num3);
            cy.get('#number4').type(num4);
        }
        ValidOTPCode("1", "1", "1", "1");

        cy.wait(2000)
        cy.get('.page-heading').should("contain",'Home');

    }

    landonSeebizPage(){
        cy.wait(this.waitforexecutionstep)
        cy.contains("Forgot password?").click()
        cy.get('#email').type("bilalseebiz7500+338@gmail.com")
        cy.get('#forgotPwd').click()
        function ValidOTPCode(num1, num2, num3, num4) {
            cy.get('#number1').type(num1);
            cy.get('#number2').type(num2);
            cy.get('#number3').type(num3);
            cy.get('#number4').type(num4);
        }
        ValidOTPCode("1", "1", "1", "1");
        cy.wait(2000)

        cy.get(':nth-child(1) > .form-control').type("Bilal7500")
        cy.get(':nth-child(3) > .form-control').type("Bilal7500")
        cy.get('.create-account').click()
        cy.wait(2000)
        cy.get('.page-heading').should("contain",'Home');
        cy.wait(this.waitforexecutionstep)
    }

   
}
    
export default SignIn;