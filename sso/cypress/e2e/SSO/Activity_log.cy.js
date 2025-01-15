import ActivityLogPage  from "./Activity_logPage"

describe('Activity Log Test Cases', () => {
  const email = 'bilalseebiz7500+338@gmail.com';
  const password = 'Bilal7500';
  const newAccEmail = "bilalseebiz7500+new@gmail.com";
  const activityLogPage = new ActivityLogPage();

  beforeEach(() => {
    cy.viewport(2020, 1080);
    cy.visit('https://www.seebiz.cloud/').wait(2000);
  });
  it('T.C-AL-01:To verify the rendering of Activity Log tab', () => {
    activityLogPage.signIn(email, password);
    activityLogPage.GotoAccounts();
    activityLogPage.checkActivityLog();

  })
  it('T.C-AL-02:To verify the functionality to click on Activity Log tab ', () => {
    activityLogPage.signIn(email, password);
    activityLogPage.GotoAccounts();
    activityLogPage.checkActivityLog();
    activityLogPage.ClickActivityLog();
  })
  it('T.C-AL-03:To verify the rendering of "Activity Log" title ', () => {
    activityLogPage.signIn(email, password);
    activityLogPage.GotoAccounts();
    activityLogPage.checkActivityLog();
    activityLogPage.ClickActivityLog();
    activityLogPage.CheckActivitylogTitle();

    
  })
  it('T.C-AL-04:To verify the rendering of "No Activity Found" in Activity Log', () => {
    activityLogPage.signIn(newAccEmail, password);
    activityLogPage.GotoAccounts();
    activityLogPage.checkActivityLog();
    activityLogPage.ClickActivityLog();
    activityLogPage.CheckActivitylogTitle();
    activityLogPage.CheckNoActivityFound();
    
    
  })
  it('T.C-AL-05:To verify the rendering of Filter dropdown menu', () => {
    activityLogPage.signIn(newAccEmail, password);
    activityLogPage.GotoAccounts();
    activityLogPage.checkActivityLog();
    activityLogPage.ClickActivityLog();
    activityLogPage.CheckActivitylogTitle();
    activityLogPage.CheckNoActivityFound();
    activityLogPage. RenderingFilterDropdown()
    
    
  })
  it('T.C-AL-06:To verify the functionality to click on Filter dropdown menu', () => {
    activityLogPage.signIn(email, password);
    activityLogPage.GotoAccounts();
    activityLogPage.checkActivityLog();
    activityLogPage.ClickActivityLog();
    activityLogPage.CheckActivitylogTitle();
   // activityLogPage.CheckNoActivityFound();
    activityLogPage. RenderingFilterDropdown()
    activityLogPage. ClickFilterDropdown();
    
    
  })
  it('T.C-AL-07:To verify the rendering of "Today"', () => {
    activityLogPage.signIn(email, password);
    activityLogPage.GotoAccounts();
    activityLogPage.checkActivityLog();
    activityLogPage.ClickActivityLog();
    activityLogPage.CheckActivitylogTitle();
  //  activityLogPage.CheckNoActivityFound();
    activityLogPage. RenderingFilterDropdown()
    activityLogPage. ClickFilterDropdown();
    
  })
  it('T.C-AL-08:To verify the functionality to click on "Today" filter', () => {
    activityLogPage.signIn(email, password);
    activityLogPage.GotoAccounts();
    activityLogPage.checkActivityLog();
    activityLogPage.ClickActivityLog();
    activityLogPage.CheckActivitylogTitle();
    //activityLogPage.CheckNoActivityFound();
    activityLogPage. RenderingFilterDropdown()
    activityLogPage. ClickFilterDropdown();
    
    
  })
  it('T.C-AL-09:To verify the rendering of "Weekly"', () => {
    activityLogPage.signIn(email, password);
    activityLogPage.GotoAccounts();
    activityLogPage.checkActivityLog();
    activityLogPage.ClickActivityLog();
    activityLogPage.CheckActivitylogTitle();
  //  activityLogPage.CheckNoActivityFound();
    activityLogPage. RenderingFilterDropdown()
    activityLogPage. ClickFilterDropdownWeekly();
    
    
  })
  it('T.C-AL-10:To verify the functionality to click on "Weekly" filter', () => {
    activityLogPage.signIn(email, password);
    activityLogPage.GotoAccounts();
    activityLogPage.checkActivityLog();
    activityLogPage.ClickActivityLog();
    activityLogPage.CheckActivitylogTitle();
    //activityLogPage.CheckNoActivityFound();
    activityLogPage. RenderingFilterDropdown()
    activityLogPage. ClickFilterDropdownWeekly();
    
    
  })
  it('T.C-AL-11:To verify the rendering of "Monthly"', () => {
    activityLogPage.signIn(email, password);
    activityLogPage.GotoAccounts();
    activityLogPage.checkActivityLog();
    activityLogPage.ClickActivityLog();
    activityLogPage.CheckActivitylogTitle();
    //activityLogPage.CheckNoActivityFound();
    activityLogPage. RenderingFilterDropdown()
    activityLogPage. ClickFilterDropdownMonthly();
    
    
  })
  it('T.C-AL-12:To verify the functionality to click on "Monthly" filter', () => {
    activityLogPage.signIn(email, password);
    activityLogPage.GotoAccounts();
    activityLogPage.checkActivityLog();
    activityLogPage.ClickActivityLog();
    activityLogPage.CheckActivitylogTitle();
    //activityLogPage.CheckNoActivityFound();
    activityLogPage. RenderingFilterDropdown()
    activityLogPage. ClickFilterDropdownMonthly();
    
    
  })
  it('T.C-AL-13:To verify the rendering of "Profile Change" in Activity log', () => {
    activityLogPage.signIn(email, password);
    activityLogPage.ChangeProfilePicForActivityLog();
    activityLogPage.checkActivityLog();
    activityLogPage.ClickActivityLog();
    activityLogPage.CheckActivitylogTitle();
    activityLogPage.VerifytheLogafteruploadPic();
    
    
  })
  it('T.C-AL-14:To verify the functionality to view details of "Profile Change" in Activity log', () => {
    activityLogPage.signIn(email, password);
    activityLogPage.ChangeProfilePicForActivityLog();
    activityLogPage.checkActivityLog();
    activityLogPage.ClickActivityLog();
    activityLogPage.CheckActivitylogTitle();
    activityLogPage.VerifytheLogafteruploadPic();
    
    
  })
  it('T.C-AL-15:To verify the rendering of "Name Change" in Activity log', () => {
    activityLogPage.signIn(email, password);
    activityLogPage.ChangeProfileNameForActivityLog();
    activityLogPage.checkActivityLog();
    activityLogPage.ClickActivityLog();
    activityLogPage.CheckActivitylogTitle();
    activityLogPage. VerifytheLogafterChangeName();
    //activityLogPage.VerifytheLogafteruploadPic();
    
    
  })
  it('T.C-AL-16:To verify the functionality to view details of "Name Change" in Activity log', () => {
    activityLogPage.signIn(email, password);
    activityLogPage.ChangeProfileNameForActivityLog();
    activityLogPage.checkActivityLog();
    activityLogPage.ClickActivityLog();
    activityLogPage.CheckActivitylogTitle();
    activityLogPage. VerifytheLogafterChangeName();
    //activityLogPage.VerifytheLogafteruploadPic();
    
    
  })
  it('T.C-AL-17:To verify the rendering of "Password Change" in Activity log', () => {
    activityLogPage.signIn(email, password);
    activityLogPage.ChangePasswordForActivityLog();
    activityLogPage.checkActivityLog();
    activityLogPage.ClickActivityLog();
    activityLogPage.CheckActivitylogTitle();
    activityLogPage. VerifytheLogafterChangePass();
    activityLogPage.RestorePassword();
    //activityLogPage.VerifytheLogafteruploadPic();
    
    
  })
  it('T.C-AL-18:To verify the functionality to view details of "Password Change" in Activity log', () => {
    activityLogPage.signIn(email, password);
    activityLogPage.ChangePasswordForActivityLog();
    activityLogPage.checkActivityLog();
    activityLogPage.ClickActivityLog();
    activityLogPage.CheckActivitylogTitle();
    activityLogPage. VerifytheLogafterChangePass();
    activityLogPage.RestorePassword();
    //activityLogPage.VerifytheLogafteruploadPic();
    
    
  })
  it('T.C-AL-19:To verify the rendering of "Edit Phone Number" in Activity log', () => {
    activityLogPage.signIn(email, password);
    activityLogPage.ChangeNumberForActivityLog();
    activityLogPage.checkActivityLog();
    activityLogPage.ClickActivityLog();
    activityLogPage.CheckActivitylogTitle();
    activityLogPage. VerifytheLogafterChangeNumber();

    
  })
  it('T.C-AL-20:To verify the functionality to view details of "Edit Phone Number" in Activity log', () => {
    activityLogPage.signIn(email, password);
    activityLogPage.ChangeNumberForActivityLog();
    activityLogPage.checkActivityLog();
    activityLogPage.ClickActivityLog();
    activityLogPage.CheckActivitylogTitle();
    activityLogPage. VerifytheLogafterChangeNumber();

    
  })
  it('T.C-AL-21:To verify the rendering of "Two way Authentication" in Activity log', () => {
    activityLogPage.signIn(email, password);
    activityLogPage.EnableTwoWayVarForActivityLog();
    activityLogPage.checkActivityLog();
    activityLogPage.ClickActivityLog();
    activityLogPage.CheckActivitylogTitle();

    activityLogPage. VerifytheLogafterEnableTwoWayAuth();

    activityLogPage.DisableTwoWayVarForActivityLog();
  })
  it('T.C-AL-22:To verify the functionality to view details of "Two way Authentication" in Activity log', () => {
    activityLogPage.signIn(email, password);
    activityLogPage.EnableTwoWayVarForActivityLog();
    activityLogPage.checkActivityLog();
    activityLogPage.ClickActivityLog();
    activityLogPage.CheckActivitylogTitle();

    activityLogPage. VerifytheLogafterEnableTwoWayAuth();

    activityLogPage.DisableTwoWayVarForActivityLog();
  })
  it('T.C-AL-23 :To verify the rendering of "Account Deletion" in Activity log', () => {
    activityLogPage.signIn(email, password);
    activityLogPage.OTPSelectAccountrole();
    activityLogPage.OTPthreeStepbuyerSidePass();
    activityLogPage.OTPEnterEmaiLAddress();
    activityLogPage.EnterOTPBuyerSide();
    activityLogPage.ClickButtonMobileOTP();
    activityLogPage.checkActivityLog();
    activityLogPage.ClickActivityLog();
    activityLogPage.CheckActivitylogTitle();
    activityLogPage. VerifytheLogafterAccountDeletion();

  });





})