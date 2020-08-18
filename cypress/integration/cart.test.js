/* describe('empty cart test', () => {
  beforeEach(() => {
    cy.visit('/cart');
  });

  it('should be visible', () => {
    cy.get('[data-cy="empty-cart"]')
      .should('be.visible')
  });

  it('should contain image', () => {
    cy.get('[data-cy="empty-cart"]')
      .find('img')
      .should('be.visible')
  });

  it('should contain button with link to homepage', () => {
    cy.get('[data-cy="empty-cart"]')
      .find('button')
      .should('be.visible')
      .click()
  });
}); */

describe('filled cart test', () => {

  /*  beforeEach(() => {
    cy.visit('/');
  }); */

  it('should be visible', () => {
    cy.visit('/');
    cy.get('[data-cy="add-to-cart"]').click();
  });

  it('should be visible', () => {
    cy.visit('/cart');
    cy.get('[data-cy="filled-cart"]').should('be.visible');
  });
});
