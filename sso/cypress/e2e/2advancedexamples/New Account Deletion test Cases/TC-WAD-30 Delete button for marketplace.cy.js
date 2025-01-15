
import AccountDeletion from "../../../PageObjects/Accountsdeletion"

/// <reference types = 'cypress' />

describe('TC-WAD-30 Delete button for marketlace buyer side' , () => {

    beforeEach(() => {
        // run these tests as if in a desktop
        // browser with a 720p monitor
        cy.viewport(1600, 900)
      })
    it('TC-WAD-30 Delete button for marketlace buyer side' , () => {
    
    
        cy.fixture('SignIncredentials').then((data) => {

        const ln=new AccountDeletion();
        ln.openwebsiteforsignIn()
        ln.setUserName(data.username);
        ln.setPassword(data.password);
        ln.Loginbutton();
        ln.GotoAccountpage();
        ln.ValidpasswordforAccountDeletion();
        ln.Deletbuttonformarketplaceaccount();
        })
    })

 
  

})