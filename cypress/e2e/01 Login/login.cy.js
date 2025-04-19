describe('Scenario Login', () => {
    const baseUrl = '/';
  
    beforeEach(() => {
      cy.visit(baseUrl);
    });
  
    it.skip('Login with valid credentials (positive)', () => {
      cy.get('#basic_email').type('azmiqualityassurance@gmail.com');
      cy.get('#basic_password').type('automation');
      cy.get('[type="submit"]').contains('Sign In').click();
      cy.get('h1').should('contain','Hi');
    });
  
    it.skip('Login with invalid password (negative)', () => {
      cy.get('#basic_email').type('azmiqualityassurance@gmail.com');
      cy.get('#basic_password').type('passwordfalse');
      cy.get('.border-none').click();
      cy.wait(2000);
      cy.get('.ant-message-custom-content > :nth-child(2) > .flex > :nth-child(1)').should('be.visible');
    });
  
    it('Login with empty fields email & password (negative)', () => {
      cy.get('#basic_email').clear();
      cy.get('#basic_password').clear();
      cy.get('.border-none').click();
      cy.get('.ant-form-item-explain-error').should('contain', 'Missing email');
      cy.get('.ant-form-item-explain-error').should('contain', 'Missing password');
    });
  });
  