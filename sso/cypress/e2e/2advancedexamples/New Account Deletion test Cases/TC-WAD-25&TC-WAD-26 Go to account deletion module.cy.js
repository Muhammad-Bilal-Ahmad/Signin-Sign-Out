
import AccountDeletion from "../../../PageObjects/Accountsdeletion"

/// <reference types = 'cypress' />

describe('TC-WAD-25&TC-WAD-26 Go to Account deletion module' , () => {

    it('TC-WAD-25&TC-WAD-26 Go to Account deletion module' , () => {
    
    
        cy.fixture('SignIncredentials').then((data) => {

        const ln=new AccountDeletion();
        ln.openwebsiteforsignIn()
        ln.setUserName(data.username);
        ln.setPassword(data.password);
        ln.Loginbutton();
        ln.GotoAccountpage();
        ln.Cancelpopupforaccountmodel()

          })
    })

})