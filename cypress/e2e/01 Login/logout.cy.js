describe('Scenario Login', () => {
    const baseUrl = '/';
  
    beforeEach(() => {
      cy.visit(baseUrl);
      cy.get('#basic_email').type('azmiqualityassurance@gmail.com');
      cy.get('#basic_password').type('automation');
      cy.get('[type="submit"]').contains('Sign In').click();
      cy.get('h1').should('contain','Hi');
    });
  
    it('Logout Page Mentoring', () => {
      cy.get('.ant-avatar > img').click();
      cy.get('.ant-dropdown-menu-title-content').contains('Keluar').click();
      cy.get(':nth-child(2) > .LinkItem_navbar_link_item__Toizn > .inline-block').click();
      cy.get('#dealls-navbar-login-btn').click();
      cy.get('.text-xl').should('have.text', 'Sign In');
    });
  

  });
  