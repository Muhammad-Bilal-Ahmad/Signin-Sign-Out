class ActivityLogPage  {


    constructor() {
      // Define page elements
      this.emailInput = "#email";
      this.passwordInput = "input[placeholder='Password']";
      this.signInButton = ".sso-sign-in";
      this.loginInButton = "#loginBtn";
      this.deleteAccountButton = ".btn-cancel";
      this.confirmPasswordInput = "#customInput";
      this.showPasswordIcon = "#password > div:nth-child(2) > svg > path";
      this.sendInviteButton = ".account-del-text > .d-flex > span";
      this.invitationCard = ".modal-header";
      
      // Add more elements as needed
    }
      visit(url) {
        cy.visit(url);
      }
    
      signIn(email, password) {
        // Sign in action
        cy.get(this.signInButton).click();
        cy.get(this.emailInput).type(email);
        cy.get(this.passwordInput).type(password);
        cy.get(this.showPasswordIcon).click();
        cy.get(this.loginInButton).click({force:true});
        
        cy.wait(13000)
      }
      clickDeleteAccount() {
        cy.get(this.deleteAccountButton).click();
      }
    
      enterConfirmPassword(password) {
        cy.get(this.confirmPasswordInput).type(password);
      }
    
      showPassword() {
        cy.get(this.showPasswordIcon).click();
      }
      GotoAccounts(){
        cy.get('.sso-user-img > img').click();
        cy.contains('My Account').invoke('removeAttr', 'target').click();
        cy.contains("Activity Log").should("exist")
      }
      checkActivityLog(){
        cy.contains("Activity Log").should('have.text', "Activity Log")
      }
      ChangeProfilePicForActivityLog(){
        cy.get('.sso-user-img > img').click();
        cy.contains('My Account').invoke('removeAttr', 'target').click();
        cy.get('.active > .menu-text-left').click().wait(2000)

        const filepath = "LessOneMB.jpg";
        cy.get("input[type='file']").attachFile(filepath)
        cy.wait(6000)

      }
      ChangeProfileNameForActivityLog(){
        cy.get('.sso-user-img > img').click();
        cy.contains('My Account').invoke('removeAttr', 'target').click();
        cy.get('.active > .menu-text-left').click().wait(2000)
        cy.url().should('include', 'https://accounts.seebiz.cloud/myProfile');

        cy.get('#hideName').should("have.text", "Change name").click()
        cy.get('#customInput').click().clear().type("Bilal")
        cy.get('.btn-update').should('have.text',"Change Name").click()
 
       

      }
      ChangePasswordForActivityLog(){
        const oldpassword = 'Bilal7500'
        const newpassword = 'Change123'
        const confirmnewpassword = 'Change123'
        cy.get('.sso-user-img > img').click();
        cy.contains('My Account').invoke('removeAttr', 'target').click();
        cy.get('.active > .menu-text-left').click().wait(2000)
        cy.url().should('include', 'https://accounts.seebiz.cloud/myProfile');
        cy.get('#passwordHide').should("have.text", "Change Password").click()    
        cy.get('#Pasword > .input_box > .input-container > #customInput').type(oldpassword).should('have.value',oldpassword)
        cy.get(':nth-child(2) > .input_box > .input-container > #customInput').type(newpassword).should('have.value',newpassword)
        cy.get(':nth-child(3) > .input_box > .input-container > #customInput').type(confirmnewpassword).should('have.value',confirmnewpassword)
        cy.get('#psdBtn').should('have.text', "Change Password").click()
        cy.get('h3').should('have.text', 'Are you sure?')
        cy.wait(1000)
        cy.get('.btn_default').should('have.text', "Keep me logged in").click()
        cy.wait(1000)
      }
      ChangeNumberForActivityLog(){
        const ChangeNumber = '911'

        cy.get('.sso-user-img > img').click();
        cy.contains('My Account').invoke('removeAttr', 'target').click();
        cy.get('.active > .menu-text-left').click().wait(2000)
        cy.url().should('include', 'https://accounts.seebiz.cloud/myProfile');
        cy.get('#hidePhone').should("have.text", "Edit Phone Number").click()    
        cy.get('#customInput').clear().type(ChangeNumber).should('have.value', ChangeNumber)
        cy.get('.btn-update').should('have.text', 'Change Number').click() 
        cy.get('.Toastify__toast-body > :nth-child(2)').should('have.text', 'Number update successfully')
        cy.wait(1000)

      }
      EnableTwoWayVarForActivityLog(){
        const Pass = 'Bilal7500'
        const OTP = '1111'
        cy.get('.sso-user-img > img').click();
        cy.contains('My Account').invoke('removeAttr', 'target').click();
         cy.contains("Privacy & Security").should("exist").click();
        cy.contains("Account Information").should("exist").click();
        cy.url().should('include', 'https://accounts.seebiz.cloud/authSecurity');
        cy.get('#enable_two_way_auth').should('have.text',"Enable Two Way Auth").click();
        cy.get(':nth-child(1) > .twoWayAuthData').should("exist").click();
        cy.get('.btn-update').should('have.text', "Next").click()
        cy.get('#customInput').type(Pass).should('have.value', Pass)
        cy.get('.btn-update').should('have.text', "Next").click()
        cy.wait(2000)
        cy.url().should('include', 'https://accounts.seebiz.cloud/twoStepVerification');

        cy.get('#customInput').type(OTP).should('have.value', OTP)
        cy.get('.btn-update').should('have.text', "Next").click()
        cy.wait(3000)


      }
      DisableTwoWayVarForActivityLog(){
        const Pass = 'Bilal7500'
        const OTP = '1111'

         cy.contains("Privacy & Security").should("exist").click();
        cy.contains("Account Information").should("exist").click();
        cy.url().should('include', 'https://accounts.seebiz.cloud/authSecurity');
        cy.get('#enable_two_way_auth').should('have.text',"Disable Two Way Auth").click();

        cy.get('.btn-update').should('have.text', "TURN OFF").click()
        cy.get('h3').should('have.text', "Are you sure?").click()

        cy.get('.btn_primary').should('have.text', "Yes").click()

        cy.get('#customInput').type(Pass).should('have.value', Pass)
        cy.get('.btn-update').should('have.text', "Next").click()
        cy.wait(2000)
        cy.url().should('include', 'https://accounts.seebiz.cloud/twoStepVerification');

        cy.get('#customInput').type(OTP).should('have.value', OTP)
        cy.get('.btn-update').should('have.text', "Next").click()
        cy.wait(3000)




        




      }

      
      ClickActivityLog(){
        cy.contains("Activity Log").should('have.text', "Activity Log").click();
        cy.url().should('include', 'https://accounts.seebiz.cloud/activityLog');





      }
      VerifytheLogafteruploadPic(){
        cy.get('.timeline-wrapper > :nth-child(1)').should("exist")
        cy.get(':nth-child(1) > .timeline-right-sec > .head-sec > span').should('have.text', "Profile Picture").click()
        cy.get('.body-top-sec-widget > :nth-child(1) > :nth-child(1)').should("exist")

      }
      VerifytheLogafterChangeName(){
        cy.get('.timeline-wrapper > :nth-child(1)').should("exist")
        cy.get(':nth-child(1) > .timeline-right-sec > .head-sec > span').should('have.text', "Name Change").click()
        cy.get('.body-top-sec-widget > :nth-child(1) > :nth-child(1)').should("exist")
        cy.get('.body-widget-right').should('have.text','The user "Bilal " Name update successfully')

      }
      VerifytheLogafterChangePass(){
        cy.get('.timeline-wrapper > :nth-child(1)').should("exist")
        cy.get(':nth-child(1) > .timeline-right-sec > .head-sec > span').should('have.text', "Password Change").click()
        cy.get('.body-top-sec-widget > :nth-child(1) > :nth-child(1)').should("exist")
        cy.get('.body-top-sec-widget > :nth-child(1) > :nth-child(1) > .body-widget-right').should('have.text','The user "Bilal " Password update successfully')

      }
      VerifytheLogafterChangeNumber(){
        cy.get('.timeline-wrapper > :nth-child(1)').should("exist")
        cy.get(':nth-child(1) > .timeline-right-sec > .head-sec > span').should('have.text', "Edit phone number inside SSO").click()
        cy.get('.body-top-sec-widget > :nth-child(1) > :nth-child(1)').should("exist")
        cy.get('.body-top-sec-widget > :nth-child(1) > :nth-child(1) > .body-widget-right').should('have.text','The user "Bilal " Number update successfully')

      }
      VerifytheLogafterEnableTwoWayAuth(){
        cy.get('.timeline-wrapper > :nth-child(1)').should("exist")
        cy.get(':nth-child(1) > .timeline-right-sec > .head-sec > span').should('have.text', "Enable/Disable 2 Factor Authentication for login").click()
        cy.get('.body-top-sec-widget > :nth-child(1) > :nth-child(1)').should("exist")
        cy.get(':nth-child(2) > .body-sec > .body-top-sec-wrapper > .body-top-sec-widget > :nth-child(1) > :nth-child(1) > .body-widget-right').should('have.text','The user "Bilal " Password match successfully!')
        cy.get(':nth-child(3) > .body-sec > .body-top-sec-wrapper > .body-top-sec-widget > :nth-child(1) > :nth-child(1) > .body-widget-right').should('have.text','The user "Bilal " Two-factor authentication is enabled')
      }
      VerifytheLogafterAccountDeletion(){
        cy.get('.timeline-wrapper > :nth-child(1)').should("exist")
        cy.get(':nth-child(1) > .timeline-right-sec').should("exist")
        cy.get(':nth-child(1) > .timeline-right-sec > .head-sec > span').should('have.text', "Delete Process").click()
        cy.get('.body-top-sec-widget > :nth-child(1) > :nth-child(1)').should("exist")
        cy.get('.body-widget-right').should('have.text','The user "Bilal " Success of below verifications.')
        cy.get('.date-time > :nth-child(4)').should('have.text','Email Verification')
      }
      
      RestorePassword(){
        const oldpassword = 'Change123'
        const newpassword = 'Bilal7500'
        const confirmnewpassword = 'Bilal7500'
        cy.get('.left-top-navigation > .dashboard-left-nav > :nth-child(2) > a > .menu-text-left > .menu-text').should('have.text', "Profile").click()
        cy.get('.active > .menu-text-left').click().wait(2000)
        cy.url().should('include', 'https://accounts.seebiz.cloud/myProfile');
        cy.get('#passwordHide').should("have.text", "Change Password").click()    
        cy.get('#Pasword > .input_box > .input-container > #customInput').type(oldpassword).should('have.value',oldpassword)
        cy.get(':nth-child(2) > .input_box > .input-container > #customInput').type(newpassword).should('have.value',newpassword)
        cy.get(':nth-child(3) > .input_box > .input-container > #customInput').type(confirmnewpassword).should('have.value',confirmnewpassword)
        cy.get('#psdBtn').should('have.text', "Change Password").click()
        cy.get('h3').should('have.text', 'Are you sure?')
        cy.wait(1000)
        cy.get('.btn_default').should('have.text', "Keep me logged in").click()
        cy.wait(1000)
      }
      CheckActivitylogTitle(){
        cy.get('.page-heading').should('have.text', "Activity Log").click();


      }
      CheckNoActivityFound(){
        cy.get("div[class='timeline-wrapper'] div").should('have.text', "No Activity Found")
      }
      RenderingFilterDropdown(){
        cy.get('#sort-select').should("exist");
      }
      ClickFilterDropdown(){
        cy.get('#sort-select').should("exist").select("Today");
        cy.get('.timeline-wrapper > :nth-child(1)').should("exist")


      }
      ClickFilterDropdownWeekly(){
        cy.get('#sort-select').should("exist").select("weekly");
        cy.get('.timeline-wrapper > :nth-child(1)').should("exist")

      }
      ClickFilterDropdownMonthly(){
        cy.get('#sort-select').should("exist").select("Monthly");
        cy.get('.timeline-wrapper > :nth-child(1)').should("exist")

      }

      OTPSelectAccountrole()
      {
       
       cy.get('.sso-user-img > img').click();
       cy.contains('My Account').invoke('removeAttr', 'target').click();
       cy.contains("Privacy & Security").should("exist")
       cy.contains("Privacy & Security").click();
       cy.contains("Account Deletion").should("exist").click();
       cy.get('#customInput').type("Bilal7500")
       cy.get(':nth-child(1) > .input-container > div > .eye--icon').click().wait(2000)
       // Confirm Password
       cy.get('.btn_primary').click();
       cy.get('h6').should('have.text', 'Marketplace')
       cy.get('.organizations-count').should('have.text', '2 Organizations')
       cy.get('.btn-cancel').should('have.text', 'Delete').click()
       cy.get('h3').should('have.text', 'Select Account Role To Delete')
     
      }
      EnterOTPBuyerSide(){
        cy.get('.btn-update').should('have.text', "Send OTP").click()
        cy.url().should('include', 'https://accounts.seebiz.cloud/authProcess').wait(1000);
       /* cy.get('#number1').click().type("1")
        cy.get('#number2').click().type("1")
        cy.get('#number3').click().type("1")
        cy.get('#number4').click().type("1")*/
        const inputFieldSelectors = [
         '#number1', // Selector for the first input field
         '#number2', // Selector for the second input field
         '#number3', // Selector for the third input field
         '#number4' // Selector for the fourth input field
       ];
       
     
       const numberToEnter = '1'; 
     
       // Loop through each input field selector and enter the same number
       inputFieldSelectors.forEach((selector) => {
         cy.get(selector)
           .type(numberToEnter);
           //.should('have.value', numberToEnter); // Ensure the value is entered correctly
       });
   
   
      }
      ClickButtonMobileOTP(){
        cy.get('.btn-update').should('have.text', "Send OTP").click({force:true});
        cy.get(2000)
        cy.get('.mini-heading').should('have.text', "Verify your phone number");
        cy.url().should('include', 'https://accounts.seebiz.cloud/authProcess').wait(1000);
    
    
    
      }
      OTPEnterEmaiLAddress(){
        cy.get('.btn-update').click()
        cy.url().should('include', 'https://accounts.seebiz.cloud/authProcess').wait(1000);
        cy.get('.mini-heading').should('have.text', "Verify your email address");
        cy.get('.mb-40').should('have.text', "bilalseebiz7500+338@gmail.com");
    
        //h3[normalize-space()='Verify your email address']
      }
      OTPthreeStepbuyerSidePass()
      {
       cy.url().should('include', 'https://accounts.seebiz.cloud/accountDeletion').wait(1000);
       // Proceed Buyer only 
       cy.get(':nth-child(2) > .account-delete-details > .d-flex > .btn-update').should('have.text', "Proceed").click()
        //Click Delete Button 
   
        
        cy.url().should('include', 'https://accounts.seebiz.cloud/authProcess');
         // Click and write Pass.
         cy.get('h2').should('have.text', '3-Factor Authentication Process');
   
   
         cy.get('#customInput').click().type("Bilal7500")
         //Show Pass.
         cy.get('.eye--icon').should("exist").click();     
      }

    }

    export default ActivityLogPage ;