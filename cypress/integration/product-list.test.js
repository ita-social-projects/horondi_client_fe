/* eslint-disable cypress/no-assigning-return-values */
describe('filter test', () => {
  it('Click to clear filter button', () => {
    cy.visit('/bags');
    cy.get('[data-cy="bags"]').should('exist').and('be.visible');
    cy.get('[data-cy="backpacks"]').should('exist').and('be.visible');
    cy.get('[data-cy="accessories"]').should('exist').and('be.visible');
    cy.get('[data-cy="clear_filter_button"]')
      .should('exist')
      .and('be.visible')
      .click();
  });
  it('Click to filter button', () => {
    cy.visit('/bags');
    cy.get('[data-cy="filter_button"]')
      .should('exist')
      .and('be.visible')
      .click();
  });
  it('Filters should be exist', () => {
    cy.visit('/bags');
    cy.get('[data-cy="search"]').should('exist').and('be.visible');
    cy.get('[data-cy="hot_item_filter"]').should('exist').and('be.visible');
    cy.get('[data-cy="price_filter"]').should('exist').and('be.visible');
    cy.get('[data-cy="category_filter"]').should('exist').and('be.visible');
    cy.get('[data-cy="colors_filter"]').should('exist').and('be.visible');
    cy.get('[data-cy="patterns_filter"]').should('exist').and('be.visible');
  });
});
describe('products tests', () => {
  it('products should be sorted by popularity', () => {
    const products = () =>
      cy.window().its('store').invoke('getState').its('Products');
    cy.visit('/bags');
    cy.get(
      '.MuiFormControl-root > .MuiInputBase-root > .MuiSelect-root'
    ).select('популярністю', { log: true });
    cy.wait(5000);
    products().its('sortByPopularity').should('be.equal', -1);
    products().its('sortByPrice').should('be.equal', 0);
    products().its('sortByRate').should('be.equal', 0);
    products()
      .its('filtredProducts')
      .should(($products) => {
        console.log($products[0]);
        expect($products[0].purchasedCount).to.be.equal(43);
        expect($products[$products.length - 1].purchasedCount).to.be.equal(16);
      });
  });
  it('products should be sorted by price ascending', () => {
    const products = () =>
      cy.window().its('store').invoke('getState').its('Products');
    cy.visit('/bags');
    cy.get(
      '.MuiFormControl-root > .MuiInputBase-root > .MuiSelect-root'
    ).select('від дешевих до дорогих');
    cy.wait(5000);
    products().its('sortByPopularity').should('be.equal', 0);
    products().its('sortByPrice').should('be.equal', 1);
    products().its('sortByRate').should('be.equal', 0);
    products().its('filtredProducts').should('have.length', 9);
    products()
      .its('filtredProducts')
      .should(($products) => {
        console.log($products);
        expect($products[0].basePrice).to.be.equal(500);
        expect($products[$products.length - 1].basePrice).to.be.equal(900);
      });
  });
  it('products should be sorted by price descending', () => {
    const products = () =>
      cy.window().its('store').invoke('getState').its('Products');
    cy.visit('/bags');
    cy.get(
      '.MuiFormControl-root > .MuiInputBase-root > .MuiSelect-root'
    ).select('від дорогих до дешевих', { log: true });
    cy.wait(3000);
    products().its('sortByPopularity').should('be.equal', 0);
    products().its('sortByPrice').should('be.equal', -1);
    products().its('sortByRate').should('be.equal', 0);
    products()
      .its('filtredProducts')
      .should(($products) => {
        console.log($products);
        expect($products[0].basePrice).to.be.equal(950);
        expect($products[$products.length - 1].basePrice).to.be.equal(500);
      });
  });
  it('products should be sorted by rate descending', () => {
    const products = () =>
      cy.window().its('store').invoke('getState').its('Products');
    cy.visit('/bags');
    cy.get(
      '.MuiFormControl-root > .MuiInputBase-root > .MuiSelect-root'
    ).select('рейтингом', { log: true });
    cy.wait(3000);
    products().its('sortByPopularity').should('be.equal', 0);
    products().its('sortByPrice').should('be.equal', 0);
    products().its('sortByRate').should('be.equal', -1);
    products()
      .its('filtredProducts')
      .should(($products) => {
        console.log($products);
        expect($products[0].rate).to.be.equal(3.8);
        expect($products[$products.length - 1].rate).to.be.equal(0);
      });
  });
  it('in store should be 9 products', () => {
    const products = () =>
      cy.window().its('store').invoke('getState').its('Products');
    cy.visit('/bags');
    cy.get('[title="nine products per page"]').click();
    cy.wait(3000);
    products().its('filtredProducts').should('have.length', 9);
    products().its('productsPerPage').should('be.equal', 9);
    cy.get('[title="eighteen products per page"]').click();
    cy.wait(3000);
    products().its('productsPerPage').should('be.equal', 18);
    products().its('filtredProducts').should('have.length', 11);
  });
  it('current page must be added to store', () => {
    const products = () =>
      cy.window().its('store').invoke('getState').its('Products');
    cy.get('.MuiPagination-ul').should('be.visible');
    cy.get('.MuiPagination-ul > :nth-child(2) > .MuiButtonBase-root').click();
    expect(products().its('currentPage')).to.equal(0);
  });
});
