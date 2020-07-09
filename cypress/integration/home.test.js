describe('home page test', () => {
  it('Click to news button', () => {
    cy.visit('/');
    cy.get('[href="/news"] > .MuiButtonBase-root')
      .should('exist')
      .and('be.visible')
      .click();
  });

  it('Click to about us button', () => {
    cy.visit('/');
    cy.get('[href="/about-us"] > .MuiButtonBase-root')
      .should('exist')
      .and('be.visible')
      .click();
  });

  it('Click to bags category item', () => {
    cy.visit('/');
    cy.get('[href="/bags"] > .makeStyles-categoryItem-36')
      .should('exist')
      .and('be.visible')
      .click()
      .url()
      .should('include', '/bags');
  });

  it('Click to backpacks category item', () => {
    cy.visit('/');
    cy.get('[href="/backpacks"] > .makeStyles-categoryItem-36')
      .should('exist')
      .and('be.visible')
      .click()
      .url()
      .should('include', '/backpacks');
  });

  it('Click to accessories category item', () => {
    cy.visit('/');
    cy.get('[href="/accessories"] > .makeStyles-categoryItem-36')
      .should('exist')
      .and('be.visible')
      .click()
      .url()
      .should('include', '/accessories');
  });

  it('"Horondi style" section tests', () => {
    cy.visit('/');
    cy.get('.makeStyles-home-13 > :nth-child(3)')
      .should('exist')
      .and('be.visible');
  });
});
