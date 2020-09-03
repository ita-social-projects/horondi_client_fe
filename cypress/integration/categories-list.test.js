describe('home page test', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Click to categories list item - "bags"', () => {
    cy.get('[href="/bags"] > [data-cy="category-item"]')
      .should('exist')
      .and('be.visible')
      .click()
      .url()
      .should('include', '/bags');
  });

  it('Click to categories list item - "backpacks"', () => {
    cy.get('[href="/backpacks"] > [data-cy="category-item"]')
      .should('exist')
      .and('be.visible')
      .click()
      .url()
      .should('include', '/backpacks');
  });

  it('Click to categories list item - "accessories"', () => {
    cy.get('[href="/accessories"] > [data-cy="category-item"]')
      .should('exist')
      .and('be.visible')
      .click()
      .url()
      .should('include', '/accessories');
  });
});
