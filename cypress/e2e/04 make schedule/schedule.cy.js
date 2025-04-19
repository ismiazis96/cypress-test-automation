describe('Make Testcase Schedule', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.get('#basic_email').type('azmiqualityassurance@gmail.com');
        cy.get('#basic_password').type('automation');
        cy.get('[type="submit"]').contains('Sign In').click();
        cy.get('h1').should('contain','Hi');

    });

    it('create schedule with mentor is valid data (positif)', () => {
        /* ==== Generated with Cypress Studio ==== */
        let namaMentor = 'Irvan';
        let namaUrlMentor = 'irvan-095';
        let notes = 'It has survived not only five centuries, but also the';
        cy.get('#searchMentor').type(`${namaMentor}{enter}`);
        cy.wait(2000);
        cy.get(`[href="/mentoring/${namaUrlMentor}"] > .flex-1 > .border-b > .line-clamp-1`).click();
        cy.get('.mt-3').contains('Ajukan Jadwal').click();
        cy.get('.col-start-1 > .relative').click();
        cy.get('#mentoring-schedule-topic-request-session-btn').click();
        cy.get('.rmdp-container > :nth-child(1) > .h-9').click();
        cy.get('[tabindex="0"] > .sd').click();
        cy.get('[aria-label="Choose Wednesday April 23 of 2025"] > .sd').click();
        
        cy.get('#proposedTimes_0_startTime').type('10:00');
        cy.get('#proposedTimes_0_endTime').type('12:00');
        // cy.get('#mentoring-schedule-pick-schedule-request-session-btn > span').click();
        cy.get('#notes').clear();
        cy.get('#notes').type(notes);
        cy.get('.ant-select-selection-overflow').click();
        cy.get('.ant-select-item-option-active > .ant-select-item-option-content > .flex > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input').check();
        cy.wait(2000);
        cy.get('#mentoring-schedule-pick-schedule-request-session-btn > span').click();
        cy.get('#commitCheckbox').check();
        cy.wait(2000);
        cy.get('#mentoring-schedule-finish-request-session-btn').click();
        cy.wait(2000);
        cy.get('.mt-4').should('have.text', 'kamu akan segera diberi tahu setelah Mentor menyetujui/menolak permintaan kamu.');
        cy.screenshot();
        /* ==== End Cypress Studio ==== */
    });

    it.skip('search mentoring is invalid data (negative)', () => {
        /* ==== Generated with Cypress Studio ==== */
        cy.get('#searchMentor').clear();
        cy.get('#searchMentor').type('Vito Corleone{enter}');
        cy.get('.border-b > .line-clamp-1').click();
        cy.get('.mt-3').click();
        cy.get('.col-start-1 > .relative > .font-semibold').click();
        cy.get('#mentoring-schedule-topic-request-session-btn > span').click();
        cy.get('.rmdp-container > :nth-child(1) > .h-9').click();
        cy.get('[tabindex="0"] > .sd').click();
        cy.get('[aria-label="Choose Wednesday April 23 of 2025"] > .sd').click();
        cy.get('#proposedTimes_0_startTime').clear('1');
        cy.get('#proposedTimes_0_startTime').type('10:00');
        cy.get('#proposedTimes_0_endTime').clear('1');
        cy.get('#proposedTimes_0_endTime').type('12:00');
        cy.get('.ant-select-selection-overflow').click();
        cy.get('.ant-select-item-option-active > .ant-select-item-option-content > .flex > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input').check();
        cy.get('#notes').click();
        cy.get('#notes').click();
        cy.get(':nth-child(1) > .rounded-b-md').click();
        cy.get('.ant-modal-wrap').click();
        cy.get('#notes').click();
        cy.get('#notes').click();
        cy.get('#notes').click();
        cy.get('#mentoring-schedule-pick-schedule-request-session-btn > span').click();
        cy.get('#commitCheckbox').check();
        /* ==== End Cypress Studio ==== */
    });

});