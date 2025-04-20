describe('Search Mentoring Testcase', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.fixture('userLogin').then((user) => {
            cy.login(user.email, user.password);
            cy.get('h1').should('contain', 'Hi');
          }); 
    });
    it('search mentoring is valid data (positive)', () => {
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