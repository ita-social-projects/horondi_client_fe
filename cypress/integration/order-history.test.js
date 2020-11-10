describe('empty order history test', () => {
  const MOCK_EMAIL = 'kapov@gmail.com';
  const MOCK_PASSWORD = 'QazxsW21';
  it('should enter and open order history page', () => {
    cy.visit('/login');
    cy.get('form input[name=email]').should('be.visible').type(MOCK_EMAIL);
    cy.get('form input[name=password]')
      .should('be.visible')
      .type(MOCK_PASSWORD)
      .type('{enter}');
    cy.wait(2000);
    cy.get('[data-cy="cabinet-dropdown"]')
      .invoke('show')
      .should('be.visible')
      .find('a[href="/order-history"]')
      .click();
    cy.get('[data-cy="cabinet-dropdown"]').invoke('hide');
  });
  it('should contain empty orders message and img', () => {
    cy.get('[data-cy=empty-order-history] > .MuiTypography-root').should(
      'contain',
      'Ваша історія замовлень пуста'
    );
    cy.get('[data-cy="empty-order-history"] img').should('be.visible');
  });
  it('should contain start shopping button', () => {
    cy.get('[data-cy=empty-order-history] > a > .MuiButtonBase-root').should(
      'be.visible'
    );
  });
  it('start shopping button should be clickable', () => {
    cy.get('[data-cy=empty-order-history] > a > .MuiButtonBase-root').click();
  });
});
