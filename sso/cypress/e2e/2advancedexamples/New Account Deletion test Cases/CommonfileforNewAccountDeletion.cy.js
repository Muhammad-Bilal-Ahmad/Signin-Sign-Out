
import AccountDeletion from "../../../PageObjects/Accountsdeletion"

/// <reference types = 'cypress' />

describe('Common File for New Account Deletion Test cases' , () => {

    beforeEach(() => {
        // run these tests as if in a desktop
        // browser with a 720p monitor
        cy.viewport(1600, 900)
    })
    const ln = new AccountDeletion();

    it('TC-WAD-25&TC-WAD-26 Go to Account deletion module' , () => {
    
    
        cy.fixture('SignIncredentials').then((data) => {
        ln.openwebsiteforsignIn()
        ln.setUserName(data.username);
        ln.setPassword(data.password);
        ln.Loginbutton();
        ln.GotoAccountpage();
        ln.Cancelpopupforaccountmodel()

          })
    })

    it('TC-WAD-27 Enter the Valid Password ' , () => {
    
    
        cy.fixture('SignIncredentials').then((data) => {
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
        ln.openwebsiteforsignIn()
        ln.setUserName(data.username);
        ln.setPassword(data.password);
        ln.Loginbutton();
        ln.GotoAccountpage();
        ln.InValidpasswordforAccountDeletion();

        })
    })

    it('TC-WAD-28 Invite mail to the helper' , () => {
        cy.fixture('SignIncredentials').then((data) => {
        ln.openwebsiteforsignIn()
        ln.setUserName(data.username);
        ln.setPassword(data.password);
        ln.Loginbutton();
        ln.GotoAccountpage();
        ln.ValidpasswordforAccountDeletion();
        ln.Mailsenttohelper();


        })
    })

    it('TC-WAD-29 Cancel the Invite mail to the helper' , () => {
        cy.fixture('SignIncredentials').then((data) => {
        ln.openwebsiteforsignIn()
        ln.setUserName(data.username);
        ln.setPassword(data.password);
        ln.Loginbutton();
        ln.GotoAccountpage();
        ln.ValidpasswordforAccountDeletion();
        ln.Cancelthemailpopup();

        
        })
    })


    it('TC-WAD-30 Delete button for marketlace buyer side' , () => {
        cy.fixture('SignIncredentials').then((data) => {
        ln.openwebsiteforsignIn()
        ln.setUserName(data.username);
        ln.setPassword(data.password);
        ln.Loginbutton();
        ln.GotoAccountpage();
        ln.ValidpasswordforAccountDeletion();
        ln.Deletbuttonformarketplaceaccount();
        })
    })

    it('TC-WAD-31 Proceed button for marketplace from buyer and seller side' , () => {
        cy.fixture('SignIncredentials').then((data) => {
        ln.openwebsiteforsignIn()
        ln.setUserName(data.username);
        ln.setPassword(data.password);
        ln.Loginbutton();
        ln.GotoAccountpage();
        ln.ValidpasswordforAccountDeletion();
        ln.Deletbuttonformarketplaceaccount();
        ln.Proceesbuttonforbuyerside();
        })
    })

    it('TC-WAD-32 Proceed button for marketplace from buyer and seller side' , () => {
        cy.fixture('SignIncredentials').then((data) => {
        ln.openwebsiteforsignIn()
        ln.setUserName(data.username);
        ln.setPassword(data.password);
        ln.Loginbutton();
        ln.GotoAccountpage();
        ln.ValidpasswordforAccountDeletion();
        ln.Deletbuttonformarketplaceaccount();
        ln.Proceesbuttonforsellerside()
        })
    })

    it('TC&36 & TC-37 & TC-WAD-47 & TC-WAD-48 & TC-WAD-49 & TC-WAD-51 Valid Password for 3 way authentication' , () => {
        cy.fixture('SignIncredentials').then((data) => {
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

    it('TC-WAD-50 Cancel the Email Pop Up' , () => {
        cy.fixture('SignIncredentials').then((data) => {
        ln.openwebsiteforsignIn()
        ln.setUserName(data.username);
        ln.setPassword(data.password);
        ln.Loginbutton();
        ln.GotoAccountpage();
        ln.ValidpasswordforAccountDeletion();
        ln.Deletbuttonformarketplaceaccount();
        ln.Proceesbuttonforsellerside();
        ln.canceltheemailaddressfield();
        })
    })

    it('TC-WAD-52 Resend Valid OTP' , () => {
        cy.fixture('SignIncredentials').then((data) => {
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

    it('TC-WAD-53 Valid OTP for Mobile Verification' , () => {
    
    
        cy.fixture('SignIncredentials').then((data) => {
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

    it('TC&43 & TC-WAD-44 Resend OTP from buyer side' , () => {
        cy.fixture('SignIncredentials').then((data) => {
        ln.openwebsiteforsignIn()
        ln.setUserName(data.username);
        ln.setPassword(data.password);
        ln.Loginbutton();
        ln.GotoAccountpage();
        ln.ValidpasswordforAccountDeletion();
        ln.Deletbuttonformarketplaceaccount();
        ln.ResendOTPfromBuyerSide();
        })
    })

    it('TC&43 & TC-WAD-44 Resend OTP from buyer side' , () => {
        cy.fixture('SignIncredentials').then((data) => {
        ln.openwebsiteforsignIn()
        ln.setUserName(data.username);
        ln.setPassword(data.password);
        ln.Loginbutton();
        ln.GotoAccountpage();
        ln.ValidpasswordforAccountDeletion();
        ln.Deletbuttonformarketplaceaccount();
        ln.Mobileverificationfrombuyerside();
        })
    })

    it('Full flow of Account Deletion' , () => {
        cy.fixture('SignIncredentials').then((data) => {
        ln.openwebsiteforsignIn()
        ln.setUserName(data.username);
        ln.setPassword(data.password);
        ln.Loginbutton();
        ln.GotoAccountpage();
        ln.ValidpasswordforAccountDeletion();
        ln.Deletbuttonformarketplaceaccount();
        ln.Mobileverificationfrombuyerside();
        })
    })

})




