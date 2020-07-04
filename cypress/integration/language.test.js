describe('language test', () => {
  it('Items should be visible', () => {
    cy.visit('/');
    cy.viewport(1280, 720);
    cy.get('.makeStyles-logo-4').should('be.visible');
    cy.get(':nth-child(1) > [href="/backpacks"]').should('be.visible');
    cy.get(':nth-child(1) > [href="/bags"]').should('be.visible');
    cy.get(':nth-child(1) > [href="/accessories"]').should('be.visible');
    cy.get('.MuiButton-label > .MuiSvgIcon-root').should('be.visible');
    cy.get('#lang-icon').trigger('mouseover');
    cy.get('#language').invoke('show').should('be.visible');
    cy.get('#language1').should('have.value', 0);
    cy.get('#language1').contains('UA');
    cy.get('#language2').should('have.value', 1);
    cy.get('#language2').contains('EN');
    cy.get('#language').invoke('hide').should('not.be.visible');
    cy.get('[href="/backpacks"] > .makeStyles-categoryItem-23').should('exist');
  });
});
