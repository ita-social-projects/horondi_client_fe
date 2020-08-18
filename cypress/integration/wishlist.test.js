describe('empty wishlist test', () => {
  beforeEach(() => {
    cy.visit('/wishlist');
  });

  it('should be visible', () => {
    cy.get('[data-cy="empty-wishlist"]').should('be.visible');
  });

  it('should contain image', () => {
    cy.get('[data-cy="empty-wishlist"]').find('img').should('be.visible');
  });

  it('should contain button with link to homepage', () => {
    cy.get('[data-cy="empty-wishlist"]')
      .find('button')
      .should('be.visible')
      .click();
  });
});
