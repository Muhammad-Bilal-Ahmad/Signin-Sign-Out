
import AccountDeletion from "../../../PageObjects/Accountsdeletion"

/// <reference types = 'cypress' />

describe('TC-WAD-53 Valid OTP for Mobile Verification' , () => {

    beforeEach(() => {
        // run these tests as if in a desktop
        // browser with a 720p monitor
        cy.viewport(1600, 900)
      })
    it('TC-WAD-53 Valid OTP for Mobile Verification' , () => {
    
    
        cy.fixture('SignIncredentials').then((data) => {

        const ln=new AccountDeletion();
        ln.openwebsiteforsignIn()
        ln.setUserName(data.username);
        ln.setPassword(data.password);
        ln.Loginbutton();
        ln.GotoAccountpage();
        ln.ValidpasswordforAccountDeletion();
        ln.Deletbuttonformarketplaceaccount();
        ln.Proceesbuttonforsellerside();
        ln.validpasswordfor3wayAuth();
        ln.MobileSendOtp();
        })
    })

  
 
  

})