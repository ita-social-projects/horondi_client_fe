describe('cabinet test', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should be visible', () => {
    cy.get('[data-cy="cabinet"]').should('be.visible').invoke('show');
  });

  it('should contain list items', () => {
    cy.get('[data-cy="cabinet"]')
      .invoke('show')
      .should('be.visible')
      .find('li');
  });

  it('should contain wish list', () => {
    cy.get('[data-cy="cabinet-dropdown"]')
      .invoke('show')
      .should('be.visible')
      .find('li > [href="/wishlist"]')
      .click()
      .url()
      .should('include', '/wishlist');
  });

  it('should contain list item', () => {
    cy.get('[data-cy="cabinet-dropdown"]')
      .invoke('show')
      .find('li:nth-child(2)')
      .should('be.visible');
  });

  it('should contain list item', () => {
    cy.get('[data-cy="cabinet-dropdown"]')
      .invoke('show')
      .find('li:nth-child(3)')
      .should('be.visible');
  });
});
