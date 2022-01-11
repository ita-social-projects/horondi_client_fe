describe('not found page test', () => {
  beforeEach(() => {
    cy.visit('/not-found');
  });

  it('Click to back to ua homepage button', () => {
    cy.get('[data-cy=language]').click();
    cy.get('[data-cy=language1]').click();
    cy.get('[data-cy=home]').click({ force: true });
  });

  it('Click to back to en homepage button', () => {
    cy.get('[data-cy=language]').click();
    cy.get('[data-cy=language2]').click();
    cy.get('[data-cy=home]').click({ force: true });
  });

  it('Click to go back ua button', () => {
    cy.get('[data-cy=language]').click();
    cy.get('[data-cy=language1]').click();
    cy.visit('/');
    cy.visit('/not-found');
    cy.get('[data-cy=back]').click({ force: true });
  });

  it('Click to go back en button', () => {
    cy.get('[data-cy=language]').click();
    cy.get('[data-cy=language2]').click();
    cy.visit('/');
    cy.visit('/not-found');
    cy.get('[data-cy=back]').click({ force: true });
  });

  it('Redirect if page URL is wrong', () => {
    cy.visit('/some-wrong-url');
    cy.location('pathname').should('eq', '/not-found');
  });
});
