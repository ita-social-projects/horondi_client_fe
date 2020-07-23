describe('home page test', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Click to categories list items', () => {
    cy.get('[href="/bags"] > .makeStyles-categoryItem-36')
      .should('exist')
      .and('be.visible')
      .click()
      .url()
      .should('include', '/bags');

    cy.get('[href="/backpacks"] > .makeStyles-categoryItem-36')
      .should('exist')
      .and('be.visible')
      .click()
      .url()
      .should('include', '/backpacks');

    cy.get('[href="/accessories"] > .makeStyles-categoryItem-36')
      .should('exist')
      .and('be.visible')
      .click()
      .url()
      .should('include', '/accessories');
  });
});
