describe('cabinet test', () => {
  it('should be visible', () => {
    cy.visit('/');
    cy.get('.makeStyles-cabinet-9').should('be.visible').invoke('show');
  });

  it('should contain list items', () => {
    cy.visit('/');
    cy.get('.makeStyles-cabinet-9')
      .should('be.visible')
      .invoke('show')
      .should('be.visible')
      .find('li');
  });

  it('should contain wish list', () => {
    cy.visit('/');
    cy.get('.makeStyles-cabinetDropdownList-11 > :nth-child(2)')
      .invoke('show')
      .should('be.visible')
      .click()
      .url()
      .should('include', '/wishlist');
  });

  it('should contain wish list', () => {
    cy.visit('/');
    cy.get('.makeStyles-cabinetDropdownList-11 > :nth-child(2)')
      .invoke('show')
      .should('be.visible')
      .click()
      .url()
      .should('include', '/wishlist');
  });

  it('should contain list item', () => {
    cy.visit('/');
    cy.get('.makeStyles-cabinetDropdownList-11 > :nth-child(3)')
      .invoke('show')
      .should('be.visible');
  });

  it('should contain list item', () => {
    cy.visit('/');
    cy.get('.makeStyles-cabinetDropdownList-11 > :nth-child(4)')
      .invoke('show')
      .should('be.visible');
  });
});
