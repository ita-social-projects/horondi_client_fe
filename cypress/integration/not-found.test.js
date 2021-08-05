import { LINK_TO_HOMEPAGE, LINK_BACK } from '../../src/translations/not-found-page.translations';

describe('not found page test', () => {
  beforeEach(() => {
    cy.visit('/not-found');
  });

  it('Click to back to ua homepage button', () => {
    cy.get('[data-cy=language]').click();
    cy.get('[data-cy=language1]').click();
    cy.contains(LINK_TO_HOMEPAGE[0].value).should('exist').and('be.visible').click();
  });

  it('Click to back to en homepage button', () => {
    cy.get('[data-cy=language]').click();
    cy.get('[data-cy=language2]').click();
    cy.contains(LINK_TO_HOMEPAGE[1].value).should('exist').and('be.visible').click();
  });

  it('Click to go back ua button', () => {
    cy.get('[data-cy=language]').click();
    cy.get('[data-cy=language1]').click();
    cy.visit('/');
    cy.visit('/not-found');
    cy.contains(LINK_BACK[0].value).should('exist').and('be.visible').click();
  });

  it('Click to go back ua button', () => {
    cy.get('[data-cy=language]').click();
    cy.get('[data-cy=language2]').click();
    cy.visit('/');
    cy.visit('/not-found');
    cy.contains(LINK_BACK[1].value).should('exist').and('be.visible').click();
  });

  it('Redirect if page URL is wrong', () => {
    cy.visit('/some-wrong-url');
    cy.location('pathname').should('eq', '/not-found');
  });
});
