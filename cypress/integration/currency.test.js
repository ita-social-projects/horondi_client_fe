describe('currency test', () => {
  it('Items should be visible', () => {
    cy.visit('/');
    cy.viewport(1280, 720);
    cy.get(':nth-child(1) > [href="/backpacks"]').should('be.visible');
    cy.get(':nth-child(1) > [href="/bags"]').should('be.visible');
    cy.get(':nth-child(1) > [href="/accessories"]').should('be.visible');
    cy.get('#currency').should('be.visible');
    cy.get('#currency').click();
    cy.get('#currency').should('have.value', 0);
    cy.get('#currency1').contains('\u20b4');
    cy.get('#currency2').contains('\u0024');
    cy.get('#currency1').click();
    cy.get('#currency1').should('be.not.visible');
    cy.get('#currency2').should('be.not.visible');
    cy.get('#currency').click();
    cy.get('#currency2').click();
    cy.get('#currency1').should('be.not.visible');
    cy.get('#currency2').should('be.not.visible');
  });
});
