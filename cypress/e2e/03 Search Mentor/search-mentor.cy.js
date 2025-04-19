describe('Search Mentoring Testcase', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.get('#basic_email').type('azmiqualityassurance@gmail.com');
        cy.get('#basic_password').type('automation');
        cy.get('[type="submit"]').contains('Sign In').click();
        cy.get('h1').should('contain','Hi'); 
    });
    it('search mentoring is valid data (positif)', () => {
        let searchMentorValid = 'Microsoft';
        cy.get('#searchMentor').type(`${searchMentorValid}{enter}`);
        cy.get(':nth-child(2) > .\\!leading-\\[1\\.5\\]').should('have.text', searchMentorValid);
    });

    it('search mentoring is invalid data (negative)', () => {
        let searchMentorInvalid = 'XXX'
        cy.get('#searchMentor').clear('');
        cy.get('#searchMentor').type(`${searchMentorInvalid}{enter}`);
        cy.get('.mt-2').should('contain', 'Coba cari kata kunci lain, sementara itu ');
    });

});