
/// <reference types = "cypress" />

describe("Common File for Sign in Test Cases", function(){

    beforeEach(() => {
        cy.visit("https://www.seebiz.cloud")
        cy.viewport(1920, 1080)

      
      })

      const waitforexecutionstep = 1000;
    it("TC-74 Verify the functionality of Back link on the Reset Password Page"  ,function(){

        const correctemail = "bilalseebiz7500+338@gmail.com";
        cy.wait(waitforexecutionstep)

        cy.contains("Sign In").click()

        cy.wait(waitforexecutionstep)
        cy.get("#login-form > div.remember-container.mb--40 > a").click()
        cy.wait(waitforexecutionstep)

        cy.get('#email').type(correctemail)

        cy.get('#forgotPwd').click()
        cy.wait(waitforexecutionstep)

        cy.get('#number1').type("1")
        cy.get('#number2').type("1")
        cy.get('#number3').type("1")
        cy.get('#number4').type("1")

        cy.wait(waitforexecutionstep)

        cy.contains('Back').click()

        
    })

    it("TC-62&TC-63 Verify the functionality to reset password with upper and lower case combinations", () => {
        const correctemail = "Bilalseebiz7500+338@gmail.com";

        const correctpassword = "Password1"
        const incorrectpassword = "Change123"
        const waitforexecutionstep = 4000;
        cy.wait(waitforexecutionstep)

        cy.contains("Sign In").click({ force: true })

        cy.wait(waitforexecutionstep)

        cy.contains('Forgot password?').click({ force: true })

        cy.wait(waitforexecutionstep)

        cy.get('#email').type(correctemail)

        cy.get('#forgotPwd').click({ force: true })
        cy.wait(waitforexecutionstep)

        cy.get('#number1').type("1")
        cy.get('#number2').type("1")
        cy.get('#number3').type("1")
        cy.get('#number4').type("1")

        cy.wait(waitforexecutionstep)
        

        cy.get("input[placeholder='Password']").type(correctpassword)
        cy.get(':nth-child(1) > .toggle-password > svg > path').click({ force: true })


    })


    it("TC-84 Verify the functionality to logout from inventory page", ()=> {

        const correctemailforlogin = "bilalseebiz7500+331@gmail.com";

        const correctpassword = "Bilal7500"
        const incorrectpassword = "Change123"
        const waitforexecutionstep = 4000;
        cy.wait(waitforexecutionstep)

        cy.contains("Sign In").click({ force: true })

        cy.get("[Placeholder='Email']").type(correctemailforlogin)
        cy.get("[Placeholder='Password']").type(correctpassword)

        cy.get('#loginBtn').click({ force: true })

        cy.wait(13000)

        cy.get('.sso_navigation > ul > :nth-child(1) > a').click({ force: true })

        cy.get('.sso-blue-btn').click({ force: true })

        cy.wait(8000)
        cy.get('#currentOrg_logo').click({ force: true })

        cy.wait(waitforexecutionstep)
        cy.contains('Sign out').click({ force: true })
    })

    it("TC-73 Verify the functionality of Reset button is visible", function () {
      const correctEmail = "bilalseebiz7500+338@gmail.com";
  
      cy.wait(waitforexecutionstep);
  
      cy.get('.sso-sign-in').click();
  
      cy.get("#login-form > div.remember-container.mb--40 > a").click();
  
      cy.get('#email').type(correctEmail);
  
      cy.get('#forgotPwd').click();
  
      cy.get('#number1').type("1");
      cy.get('#number2').type("1");
      cy.get('#number3').type("1");
      cy.get('#number4').type("1");
  
      // Assertion: Reset button is visible
      cy.get('.create-account').should('be.visible');
  });
  

    it("TC-72 Verify the functionality of Validations on the reset passord page", function(){

        const correctemail = "bilalseebiz7500+338@gmail.com";

        cy.visit("https://www.seebiz.cloud")

        cy.wait(waitforexecutionstep)

        cy.contains("Sign In").click()

        cy.wait(waitforexecutionstep)

        cy.get("#login-form > div.remember-container.mb--40 > a").click()

        cy.wait(waitforexecutionstep)

        cy.get('#email').type(correctemail)

        cy.get('#forgotPwd').click()
        cy.wait(waitforexecutionstep)

        cy.get('#number1').type("1")
        cy.get('#number2').type("1")
        cy.get('#number3').type("1")
        cy.get('#number4').type("1")



        cy.wait(waitforexecutionstep)

        cy.contains('Back').click()

        // Again repeat the forgot pawword steps
        cy.wait(waitforexecutionstep)

        cy.contains('Forgot password?').click()

        cy.wait(waitforexecutionstep)

        cy.get('#email').type(correctemail)

        cy.get('#forgotPwd').click()
        cy.wait(waitforexecutionstep)

        cy.get('#number1').type("1")
        cy.get('#number2').type("1")
        cy.get('#number3').type("1")
        cy.get('#number4').type("1")

        cy.wait(waitforexecutionstep)
        cy.get('.create-account').click()
    })

    it("TC-71 Verify the functionality of Reset button in this enter the invalid confirm password", function(){

        const correctemail = "bilalseebiz7500+338@gmail.com";

        const correctpassword = "Bilal7500"
        const incorrectpassword = "Change123"
        const waitforexecutionstep = 4000;

        cy.wait(waitforexecutionstep)

        cy.contains("Sign In").click()

        cy.wait(waitforexecutionstep)

        cy.get("#login-form > div.remember-container.mb--40 > a").click()

        cy.wait(waitforexecutionstep)

        cy.get('#email').type(correctemail)

        cy.get('#forgotPwd').click()
        cy.wait(waitforexecutionstep)

        cy.get('#number1').type("1")
        cy.get('#number2').type("1")
        cy.get('#number3').type("1")
        cy.get('#number4').type("1")


        cy.wait(waitforexecutionstep)

        cy.get("input[placeholder='Password']").type(correctpassword)
        cy.get("input[placeholder='Confirm Password']").type(incorrectpassword)

        cy.get('.create-account').click()
    })

    it("TC-70 Verify the functionality of Reset button in this enter the invalid confirm password", function(){
        const correctemail = "Bilalseebiz7500+338@gmail.com";

        const correctpassword = "Bilal7500"
        const incorrectpassword = "Change123"

        cy.wait(waitforexecutionstep)

        cy.contains("Sign In").click()

        cy.wait(waitforexecutionstep)

        cy.contains('Forgot password?').click()

        cy.wait(waitforexecutionstep)

        cy.get('#email').type(correctemail)

        cy.get('#forgotPwd').click()
        cy.wait(waitforexecutionstep)

        cy.get('#number1').type("1")
        cy.get('#number2').type("1")
        cy.get('#number3').type("1")
        cy.get('#number4').type("1")

        cy.wait(waitforexecutionstep)
        

        cy.get("input[placeholder='Password']").type(correctpassword)
        cy.get("input[placeholder='Confirm Password']").type(correctpassword)
    })

    it("TC-66&TC67 Verify the functionality to click on the eye icon for password", function(){

        const correctemail = "Bilalseebiz7500+338@gmail.com";

        const correctpassword = "Bilal7500"
        const incorrectpassword = "Change123"
        const waitforexecutionstep = 4000;

        cy.wait(waitforexecutionstep)

        cy.contains("Sign In").click()

        cy.wait(waitforexecutionstep)

        cy.contains('Forgot password?').click()

        cy.wait(waitforexecutionstep)

        cy.get('#email').type(correctemail)

        cy.get('#forgotPwd').click()
        cy.wait(waitforexecutionstep)

        cy.get('#number1').type("1")
        cy.get('#number2').type("1")
        cy.get('#number3').type("1")
        cy.get('#number4').type("1")

        cy.wait(waitforexecutionstep)
        

        cy.get("input[placeholder='Password']").type(correctpassword)
        cy.get("input[placeholder='Confirm Password']").type(correctpassword)
        cy.get(':nth-child(1) > .toggle-password > svg > path').should('be.visible')
        cy.get(':nth-child(1) > .toggle-password > svg > path').click()
    })

    it('TC-65 Verify the functionality to Valid rules is not marked', function(){
        const correctemail = "Bilalseebiz7500+338@gmail.com"
        const correctpassword = "bilal7500"
        const incorrectpassword = "Change123"
        const waitforexecutionstep = 4000;

        cy.wait(waitforexecutionstep)

        cy.contains("Sign In").click()

        cy.wait(waitforexecutionstep)

        cy.contains('Forgot password?').click()

        cy.wait(waitforexecutionstep)

        cy.get('#email').type(correctemail)

        cy.get('#forgotPwd').click()
        cy.wait(waitforexecutionstep)

        cy.get('#number1').type("1")
        cy.get('#number2').type("1")
        cy.get('#number3').type("1")
        cy.get('#number4').type("1")

        cy.wait(waitforexecutionstep)
        

        cy.get("input[placeholder='Password']").type(correctpassword)
        cy.get("input[placeholder='Confirm Password']").type(incorrectpassword)
    })

    it("TC-64 Verify the functionality of land on the marketplace with reset password", function(){

     
        const correctemail = "Bilalseebiz7500+338@gmail.com";

        const correctpassword = "Bilal7500"
        const incorrectpassword = "Change123"

        cy.wait(waitforexecutionstep)

        cy.contains("Sign In").click()

        cy.wait(waitforexecutionstep)

        cy.contains('Forgot password?').click()

        cy.wait(waitforexecutionstep)

        cy.get('#email').type(correctemail)

        cy.get('#forgotPwd').click()
        cy.wait(waitforexecutionstep)

        cy.get('#number1').type("1")
        cy.get('#number2').type("1")
        cy.get('#number3').type("1")
        cy.get('#number4').type("1")

        cy.wait(waitforexecutionstep)
        

        cy.get("input[placeholder='Password']").type(correctpassword)
        cy.get("input[placeholder='Confirm Password']").type(correctpassword)

        cy.get('.create-account').click()


    })

    it('TC-61 Verify the functionality to reset password with atleast 8 characters enter', function(){
        const correctemail = "Bilalseebiz7500+338@gmail.com";

        const correctpassword = "password"
        const incorrectpassword = "Change123"
        const waitforexecutionstep = 4000;
        cy.wait(waitforexecutionstep)
        
        cy.contains("Sign In").click()

        cy.wait(waitforexecutionstep)

        cy.contains('Forgot password?').click()

        cy.wait(waitforexecutionstep)

        cy.get('#email').type(correctemail)

        cy.get('#forgotPwd').click()
        cy.wait(waitforexecutionstep)

        cy.get('#number1').type("1")
        cy.get('#number2').type("1")
        cy.get('#number3').type("1")
        cy.get('#number4').type("1")

        cy.wait(waitforexecutionstep)
        

        cy.get("input[placeholder='Password']").type(correctpassword)
        cy.get(':nth-child(1) > .toggle-password > svg > path').click()


    })


    it('TC-58-TC-59-TC-68TC-69 Verify the functionality to click on the eye icon', function(){
        const correctemail = "Bilalseebiz7500+338@gmail.com";

        const correctpassword = "Bilal7500"
        const incorrectpassword = "Change123"
        const waitforexecutionstep = 4000;

        cy.visit("https://www.seebiz.cloud")

        cy.wait(waitforexecutionstep)

        cy.contains("Sign In").click()

        cy.wait(waitforexecutionstep)

        cy.contains('Forgot password?').click()

        cy.wait(waitforexecutionstep)

        cy.get('#email').type(correctemail)

        cy.get('#forgotPwd').click()
        cy.wait(waitforexecutionstep)

        cy.get('#number1').type("1")
        cy.get('#number2').type("1")
        cy.get('#number3').type("1")
        cy.get('#number4').type("1")

        cy.wait(waitforexecutionstep)
        cy.get("input[placeholder='Password']").type(correctpassword)
        cy.get("input[placeholder='Confirm Password']").type(correctpassword)
        cy.get(':nth-child(3) > .toggle-password > svg > path').should('be.visible')
        cy.get(':nth-child(3) > .toggle-password > svg > path').click()


    })

    it('TC-56 & TC-57 Verify the functionality to click on the eye icon', function(){

        const correctpassword = "Bilal7500"
        const incorrectpassword = "Change123"
        const waitforexecutionstep = 4000;
        const correctemail = "Bilalseebiz7500+338@gmail.com";

        cy.wait(waitforexecutionstep)

        cy.contains("Sign In").click()

        cy.wait(waitforexecutionstep)

        cy.contains('Forgot password?').click()

        cy.wait(waitforexecutionstep)

        cy.get('#email').type(correctemail)

        cy.get('#forgotPwd').click()
        cy.wait(6000)

        cy.get('#number1').type("1")
        cy.get('#number2').type("1")
        cy.get('#number3').type("1")
        cy.get('#number4').type("1")

        cy.wait(waitforexecutionstep)
        

        cy.get(':nth-child(1) > .form-control').should('be.visible')
        cy.get("input[placeholder='Password']").should('be.visible')



    })

    it('TC-33.1 Verify the functionality to open the marketplace landing page',function(){

        const correctemailforlogin = "bilalseebiz7500+331@gmail.com";

        const correctpassword = "Bilal7500"
        const incorrectpassword = "Change123"
        const waitforexecutionstep = 4000;
        cy.wait(waitforexecutionstep)

        cy.contains("Sign In").click()

        cy.get("[Placeholder='Email']").type(correctemailforlogin)
        cy.get("[Placeholder='Password']").type(correctpassword)

        cy.get('#loginBtn').click()


    })


    it('TC-75 Verify the functionality to logout from inventory page', () => {

        cy.wait(4000)
        cy.contains("Sign In").click()
        const mail = "bilalseebiz7500+s28@gmail.com";
        const correctpassword = "Bilal7500"

        cy.get("[Placeholder='Email']").type(mail)
        cy.get("[Placeholder='Password']").type(correctpassword)

        cy.get('#loginBtn').click()

        cy.wait(13000)
        cy.get('.sso-user-img > img').should('have.attr', 'src', 'https://s3-us-west-2.amazonaws.com/seebiz/sso/user/65a0e087d71ff57756aaeff1/1705042125825-XGE.jpeg')
        //cy.get('.sso-user-img > img').should('have.value','')

    })

    

})