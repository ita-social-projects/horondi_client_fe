describe('language test', () => {
  it('Items should be visible', () => {
    cy.visit('/');
    cy.viewport(1280, 720);
    cy.get(':nth-child(1) > [href="/backpacks"]').should('be.visible');
    cy.get(':nth-child(1) > [href="/bags"]').should('be.visible');
    cy.get(':nth-child(1) > [href="/accessories"]').should('be.visible');
    cy.get('[data-cy="language"]').should('be.visible');
    cy.get('[data-cy="language"] input').should('have.value', 0);
    cy.get('[data-cy="language"]').click();
    cy.get('[data-cy="language1"]').contains('UA');
    cy.get('[data-cy="language2"]').contains('EN');
    cy.get('[data-cy="language1"]').click();
    cy.get('[data-cy="language"] input').should('have.value', 0);
    cy.get('[data-cy="language1"]').should('be.not.visible');
    cy.get('[data-cy="language2"]').should('be.not.visible');
    cy.get('[data-cy="language"]').click();
    cy.get('[data-cy="language2"]').click();
    cy.get('[data-cy="language"] input').should('have.value', 1);
    cy.get('[data-cy="language1"]').should('be.not.visible');
    cy.get('[data-cy="language2"]').should('be.not.visible');
  });
});
