
import AccountDeletion from "../../../PageObjects/Accountsdeletion"

/// <reference types = 'cypress' />

describe('TC&36 & TC-37 & TC-WAD-47 & TC-WAD-48 & TC-WAD-49 & TC-WAD-51 Valid Password for 3 way authentication' , () => {

    beforeEach(() => {
        // run these tests as if in a desktop
        // browser with a 720p monitor
        cy.viewport(1600, 900)
      })
    it('TC&36 & TC-37 & TC-WAD-47 & TC-WAD-48 &T C-WAD-49 & TC-WAD-51 Valid Password for 3 way authentication' , () => {
    
    
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
        })
    })

  
 
  

})