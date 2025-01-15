
import AccountDeletion from "../../../PageObjects/Accountsdeletion"

/// <reference types = 'cypress' />

describe('TC-WAD-52 Resend Valid OTP' , () => {

    beforeEach(() => {
        // run these tests as if in a desktop
        // browser with a 720p monitor
        cy.viewport(1600, 900)
      })
    it('TC-WAD-52 Resend Valid OTP' , () => {
    
    
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
        ln.ResendvalidOTP();
        })
    })

  
 
  

})