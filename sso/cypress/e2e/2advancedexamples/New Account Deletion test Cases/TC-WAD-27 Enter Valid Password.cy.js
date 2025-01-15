
import AccountDeletion from "../../../PageObjects/Accountsdeletion"

/// <reference types = 'cypress' />

describe('TC-WAD-27 Enter the Valid Password ' , () => {

    it('TC-WAD-27 Enter the Valid Password ' , () => {
    
    
        cy.fixture('SignIncredentials').then((data) => {

        const ln=new AccountDeletion();
        ln.openwebsiteforsignIn()
        ln.setUserName(data.username);
        ln.setPassword(data.password);
        ln.Loginbutton();
        ln.GotoAccountpage();
        ln.ValidpasswordforAccountDeletion();

        })
    })

    it('TC-WAD-27.1 Enter the InValid Password ' , () => {
    
    
        cy.fixture('SignIncredentials').then((data) => {

        const ln=new AccountDeletion();
        ln.openwebsiteforsignIn()
        ln.setUserName(data.username);
        ln.setPassword(data.password);
        ln.Loginbutton();
        ln.GotoAccountpage();
        ln.InValidpasswordforAccountDeletion();

        })
    })

})