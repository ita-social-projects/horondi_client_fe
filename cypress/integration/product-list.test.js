describe('news test', () => {
  it('Click to clear filter button', () => {
    cy.visit('/bags');
    cy.get('[data-cy="bags"]').should('exist').and('be.visible');
    cy.get('[data-cy="backpacks"]').should('exist').and('be.visible');
    cy.get('[data-cy="accessories"]').should('exist').and('be.visible');
    cy.get('[data-cy="clear_filter_button"]')
      .should('exist')
      .and('be.visible')
      .click();
  });

  it('Click to filter button', () => {
    cy.visit('/bags');
    cy.get('[data-cy="filter_button"]')
      .should('exist')
      .and('be.visible')
      .click();
  });

  it('Filters should be exist', () => {
    cy.visit('/bags');
    cy.get('[data-cy="search"]').should('exist').and('be.visible');
    cy.get('[data-cy="hot_item_filter"]').should('exist').and('be.visible');
    cy.get('[data-cy="price_filter"]').should('exist').and('be.visible');
    cy.get('[data-cy="category_filter"]').should('exist').and('be.visible');
    cy.get('[data-cy="colors_filter"]').should('exist').and('be.visible');
    cy.get('[data-cy="patterns_filter"]').should('exist').and('be.visible');
  });
});
