describe('cabinet test', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should be visible', () => {
    cy.get('.makeStyles-cabinet-9').should('be.visible').invoke('show');
  });

  it('should contain list items', () => {
    cy.get('.makeStyles-cabinet-9')
      .should('be.visible')
      .invoke('show')
      .should('be.visible')
      .find('li');
  });

  it('should contain wish list', () => {
    cy.get('.makeStyles-cabinetDropdownList-11 > :nth-child(2)')
      .invoke('show')
      .should('be.visible')
      .click()
      .url()
      .should('include', '/wishlist');
  });

  it('should contain wish list', () => {
    cy.get('.makeStyles-cabinetDropdownList-11 > :nth-child(2)')
      .invoke('show')
      .should('be.visible')
      .click()
      .url()
      .should('include', '/wishlist');
  });

  it('should contain list item', () => {
    cy.get('.makeStyles-cabinetDropdownList-11 > :nth-child(3)')
      .invoke('show')
      .should('be.visible');
  });

  it('should contain list item', () => {
    cy.get('.makeStyles-cabinetDropdownList-11 > :nth-child(4)')
      .invoke('show')
      .should('be.visible');
  });
});
