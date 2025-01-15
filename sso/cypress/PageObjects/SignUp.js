class SignUp{

 Password = "Change123"

CheckURL(){
    cy.url().should("eq", "https://accounts.seebiz.cloud/signup")

};

ClickonGetstart(){
    cy.contains('Get Started').click()
};

GotoSignin(){

    cy.visit('https://accounts.seebiz.cloud')
}
CheckEmailField(){

    cy.get("input[placeholder='Email']").should('exist')

}
CheckEplaceholder(){

    cy.get("input[placeholder='Email']").should('have.attr', 'placeholder', 'Email');

}
WriteinEmail(userEmail){

    cy.get("input[placeholder='Email']").type(userEmail).should('have.value', userEmail)
}
Checkmsgicon(){
    cy.get('.svg-inline--fa')
      .should('exist') // Assertion: Verify the element exists
      .and('be.visible'); // Assertion: Verify the element is visible
}
CheckPassfield(){
cy.get("input[placeholder='Password']").should('exist').and('be.visible')

}
CheckPassPlaceholder(){

    cy.get("input[placeholder='Password']").should('have.attr', 'placeholder', 'Password');

}
CheckEyeIconPass(){
    cy.get(":nth-child(2) > .toggle-password > svg > path")
    .should('exist') // Assertion: Verify the element exists
    .and('be.visible');
}
ClickEyeiconPass(){
    cy.get(":nth-child(2) > .toggle-password > svg > path").click()

}
CheckifPassVisible(){

    cy.get("input[placeholder='Password']").should('have.attr', 'type', 'text')
}
ClickEyeiconcnfrmPass(){
    cy.get(":nth-child(4) > .toggle-password > svg > path").click()

}
CheckifcnfrmPassVisible(){

    cy.get("input[placeholder='Confirm Password']").should('have.attr', 'type', 'text')
}
ConfirmEyeicon(){
    cy.get(":nth-child(4) > .toggle-password > svg > path")
    .should('exist') // Assertion: Verify the element exists
    .and('be.visible')
}

SetPass(){
cy.get("input[placeholder='Password']").type(this.Password).should('have.value',this.Password)

}
SetInvalidPass(){
    cy.get("input[placeholder='Password']").type('Qwerty').should('have.value','Qwerty')
    cy.get("input[placeholder='Confirm Password']").type('Qwerty')
    
    }

verifyPasshas8ch(){

cy.get("input[placeholder='Password']").type('asdfghjk').should('have.value','asdfghjk')
cy.get('.error-list > :nth-child(1) > svg > path').invoke('attr', 'd').then(dAttributeValue => {
    // Assert the value of the 'd' attribute
    expect(dAttributeValue).to.equal("M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"); // Replace with your expected value
  });

}
verifyPasshas1num(){
    
    cy.get("input[placeholder='Password']").type('asdfghj1').should('have.value','asdfghj1')
    cy.get('.error-list > :nth-child(2) > svg > path').invoke('attr', 'd').then(dAttributeValue => {
        // Assert the value of the 'd' attribute
        expect(dAttributeValue).to.equal("M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"); // Replace with your expected value
      });
    
    
 }
 verifyPasshasUpnLow(){
    
    cy.get("input[placeholder='Password']").type('Asdfghj1').should('have.value','Asdfghj1')
    cy.get('.error-list > :nth-child(3) > svg > path').invoke('attr', 'd').then(dAttributeValue => {
        // Assert the value of the 'd' attribute
        expect(dAttributeValue).to.equal("M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"); // Replace with your expected value
      });
    
    
 }

SetConfirmPass(){
cy.get("input[placeholder='Confirm Password']").type('Change123')

}

SetInvalidConfirmPass(){
    cy.get("input[placeholder='Confirm Password']").type('Change333')
    
}
CheckErrorinvalidCnfrmPass(){
    cy.contains('Passwords do not match').should('exist');

}

CheckCnfrmPassfield(){
    cy.get("input[placeholder='Confirm Password']")
   .should('exist')
   .and('be.visible')
}
CheckCnfrmPassPlaceholder(){
    
     cy.get("input[placeholder='Confirm Password']").should('have.attr', 'placeholder', 'Confirm Password');
    
}
SelectCheckbx(){
cy.get("#inlineCheckbox1").click()

}
TnCnoErrorcheck(){
    cy.contains('Verify terms and condition').should('not.exist')
}
TnCErrorcheck(){
    cy.contains('Verify terms and condition').should('exist')
}
ClickOnTnC(){
    cy.get('[href="https://www.seebiz.cloud/page/terms"]').click()
    cy.url().should('eq',"https://www.seebiz.cloud/page/terms")
}
ClickOnPrivacy(){
    cy.get('[href="https://www.seebiz.cloud/page/privacy"]').click()
    cy.url().should('eq',"https://www.seebiz.cloud/page/privacy")
}
CheckErrorjustemail(){
    cy.contains('Please enter password').should('exist').and('be.visible')
    cy.contains('Verify terms and condition').should('exist').and('be.visible')

}
CheckErrorskipcnfrmPass(){
    cy.contains('Please enter confirm password').should('exist').and('be.visible')

}
CheckErrorskipEmail(){
    cy.contains('Please enter your email').should('exist').and('be.visible')
}
ClickLoginbtn(){
cy.get('#loginBtn').click()

}
DoubleClicklgnbtn(){
cy.get('#loginBtn').dblclick()

}
EmailVerifyPage(){
    cy.url().should('eq','https://accounts.seebiz.cloud/emailverificationCode')

}
checkforinvalidpass(){
    cy.url().should('not.eq','https://accounts.seebiz.cloud/emailverificationCode')

}
Invalidemailcheck(){
    cy.contains('Invalid email address').should('be.visible');

}
ExistingAccCheck(){
    cy.contains('Email already exists.').should('be.visible');

}
ClickEmailverifyLink(){
    cy.get('.btn_resendEmail').click()
}
GotoPreviousPage(){
    cy.go(-1)
}
AllPswdvalidationcross(){
    cy.get("body > div > div > div.auth-container-right > div > form > ul > li:nth-child(1) > svg")
        .should('have.css', 'fill', 'rgb(255, 12, 0)');
    cy.get("body > div > div > div.auth-container-right > div > form > ul > li:nth-child(2) > svg")
        .should('have.css', 'fill', 'rgb(255, 12, 0)');
    cy.get("body > div > div > div.auth-container-right > div > form > ul > li:nth-child(3) > svg")
        .should('have.css', 'fill', 'rgb(255, 12, 0)');
}
InvalidOTP(num){
    const otpFieldSelectors = [
        '#number1',
        '#number2',
        '#number3',
        '#number4'
      ];
    
      const otpDigit = num;
    
      // Loop through each OTP input field selector and input '1'
      otpFieldSelectors.forEach((selector) => {
        cy.get(selector).type(otpDigit); // Enter '1' into each OTP field
      });
}
InvalidOTPError(){
    cy.contains('Please enter valid code').should('exist').and('be.visible')
}
ClickverifyEmailbtn(){
    cy.get('#signInBtn').click()
}
ClickResendbtn(){
    cy.get('#resendButton').click()
}
MultiClickResendbtn(){
    cy.get('#resendButton').dblclick()
}
CheckResendbtn(){
    cy.get('#resendButton').should('exist').and('be.visible')
}

Resendtimercheck(){
    cy.get('#countDown').should('exist').and('be.visible')
}
CheckemailsentText(){
    cy.contains('Email sent successfully!').should('exist').and('be.visible')
}
NoOTPerror(){
    cy.contains('Please enter 4 digit code').should('exist').and('be.visible')
}

}

export default SignUp;