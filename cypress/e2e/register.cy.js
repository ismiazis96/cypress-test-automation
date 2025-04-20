describe('Test Case Register', () => {
    beforeEach(() => {
        cy.visit('https://job-portal-user-dev-skx7zw44dq-et.a.run.app/'); 
    });
    
    it('register with email data valid', () => {
        // create variabel
        let fullname = 'dataqatesting05';
        let email = 'dataqatesting05@gmail.com';

        cy.get('#dealls-navbar-register-btn').click();
        cy.get(':nth-child(2) > .mt-auto > .text-white').click();
        cy.get('#mentor-onboarding_fullName').type(fullname);
        cy.get('#mentor-onboarding_email').type(email);
        cy.get('#mentor-onboarding_whatsapp').type('6284634374637');
        cy.get('.order-1 > span').click();
        cy.get(':nth-child(1) > .gap-4 > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-btn > .box-border > .relative > .flex > .font-bold').click();
        cy.get('#expertise-list-form_careerPanels_0_category').click();
        cy.get('.ant-select-item-option-active').click();
        cy.get('.overflow-y-auto > :nth-child(1) > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input').check();
        cy.get('.order-1 > span').click();
        cy.get('#companyName').type('tokopedia{enter}');
        cy.get('#rc_select_15').click();
        cy.wait(5000);
        cy.get('#rc_select_15').type('sawit{enter}');
        cy.get('#roleLevel').click();
        cy.get('#roleLevel').type('staff');
        cy.get(':nth-child(6) > .relative > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > [style="position: absolute; top: 0px; left: 0px; width: 100%;"] > :nth-child(1) > .ant-select-dropdown > :nth-child(1) > .flex').click();
        cy.get('#roleName').type('QA Software engineer{enter}');
        cy.get('#startDate').type('01/2022');
        cy.get('#endDate').type('01/2025');
        cy.get('.order-1 > span').click();
        cy.get('#institution').type('universitas UI{enter}');
        cy.get('.ant-select-dropdown > div > .flex').click();
        cy.get('#major').type('sistem informasi{enter}');
        cy.get('#startDate').type('01/2015');
        cy.get('#endDate').type('01/2020');
        cy.get('.order-1 > span').contains('Selanjutnya').click();
        cy.get('.space-y-1 > .font-bold').contains('Lewati').click();
        cy.wait(2000);
        cy.get('.ant-checkbox-input').check();
        cy.get('.order-1 > span').click();
        cy.get('#password').type('automation');
        cy.get('#confirmPassword').type('automation');
        cy.get('#checkPrivacyPolicy').check();
        cy.get('#mentoring-onboarding-finish-btn').click();
        cy.get('article.flex > :nth-child(1) > .flex').click();
        cy.wait(2000);
        cy.get('.text-\\[\\#FEE156\\]').should('have.text', 'for applying as mentor');
    });

    it('Register with Email Already exist (Negative)', () => {
        cy.get('#dealls-navbar-register-btn').click();
        cy.get(':nth-child(2) > .mt-auto > .text-white').click();
        cy.get('#mentor-onboarding_fullName').type('dataqatesting');
        cy.get('#mentor-onboarding_email').type('dataqatesting@gmail.com');
        cy.get('#mentor-onboarding_whatsapp').type('6284634374637');
        cy.get('.order-1 > span').click();
        
        // verify page
        cy.get('.ant-message-notice-content').should('contain','Email already registered, please login');
    });

    it.skip('Register multiple data from JSON', () => {
        cy.fixture('mentorRegisterData').then((users) => {
          users.forEach((user) => {
            // one flow register
            cy.get('#dealls-navbar-register-btn').click();
            cy.get(':nth-child(2) > .mt-auto > .text-white').click();
    
            // Input datas from JSON
            cy.get('#mentor-onboarding_fullName').type(user.fullname);
            cy.get('#mentor-onboarding_email').type(user.email);
            cy.get('#mentor-onboarding_whatsapp').type('6284634374637');

            // next proses
            cy.get('.order-1 > span').click();
            cy.get(':nth-child(1) > .gap-4 > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-btn > .box-border > .relative > .flex > .font-bold').click();
            cy.get('#expertise-list-form_careerPanels_0_category').click();
            cy.get('.ant-select-item-option-active').click();
            cy.get('.overflow-y-auto > :nth-child(1) > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input').check();
            cy.get('.order-1 > span').click();
            cy.get('#companyName').type('tokopedia{enter}');
            cy.get('#rc_select_11').click();
            cy.wait(5000);
            cy.get('#rc_select_11').type('sawit{enter}');
            cy.get('#roleLevel').click();
            cy.get('#roleLevel').type('staff');
            cy.get(':nth-child(6) > .relative > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > [style="position: absolute; top: 0px; left: 0px; width: 100%;"] > :nth-child(1) > .ant-select-dropdown > :nth-child(1) > .flex').click();
            cy.get('#roleName').type('QA Software engineer{enter}');
            cy.get('#startDate').type('01/2022');
            cy.get('#endDate').type('01/2025');
            cy.get('.order-1 > span').click();
            cy.get('#institution').type('universitas UI{enter}');
            cy.get('.ant-select-dropdown > div > .flex').click();
            cy.get('#major').type('sistem informasi{enter}');
            cy.get('#startDate').type('01/2015');
            cy.get('#endDate').type('01/2020');
            cy.get('.order-1 > span').contains('Selanjutnya').click();
            cy.get('.space-y-1 > .font-bold').contains('Lewati').click();
            cy.wait(2000);
            cy.get('.ant-checkbox-input').check();
            cy.get('.order-1 > span').click();
            cy.get('#password').type('automation');
            cy.get('#confirmPassword').type('automation');
            cy.get('#checkPrivacyPolicy').check();
            cy.get('#mentoring-onboarding-finish-btn').click();
            cy.get('article.flex > :nth-child(1) > .flex').click();
            cy.wait(2000);

            // verify page
            cy.get('.text-\\[\\#FEE156\\]').should('have.text', 'for applying as mentor');
    
            
          });
        });
      });
});