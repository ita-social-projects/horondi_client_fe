describe('Navbar test', () => {
  it('items should be visible', () => {
    cy.visit('/');
    cy.viewport(1280, 720);
    cy.get('.makeStyles-root-2').should('be.visible');
    cy.get('.makeStyles-logo-5').should('be.visible');
    cy.get('.MuiToolbar-root > [href="/backpacks"]').should('be.visible');
    cy.get('.MuiToolbar-root > [href="/backpacks"]').should('be.visible');
    cy.get('.MuiToolbar-root > [href="/backpacks"]').should('be.visible');
  });

  it('should move to a certain page', () => {
    cy.get('.MuiToolbar-root > [href="/backpacks"]')
      .click()
      .url()
      .should('include', '/backpacks');
    cy.get('.MuiToolbar-root  > [href="/bags"]')
      .click()
      .url()
      .should('include', '/bags');
    cy.get('.MuiToolbar-root  > [href="/accessories"]')
      .click()
      .url()
      .should('include', '/accessories');
    cy.get('.makeStyles-logo-5').click().url().should('include', '/');
  });
});
