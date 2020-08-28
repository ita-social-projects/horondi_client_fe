export const selectorContains = () => {
  cy.get('[data-cy="currency1"]').contains('\u20b4');
};
