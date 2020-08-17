describe('contacts test', () => {
  it('Click to news button', () => {
    cy.visit('/');
    cy.get('[href="/contacts"]').should('exist').and('be.visible').click();
  });

  it('Go to contacts page', () => {
    cy.location().should((location) => {
      expect(location.href).to.eq('http://localhost:3000/contacts');
    });
  });
});
