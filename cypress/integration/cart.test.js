import {
  clearLocalStorage,
  setToLocalStorage
} from '../../src/services/local-storage.service';

const fakeProduct = {
  _id: 'xdfgbvc3',
  name: {
    0: { value: 'гарбуз' },
    1: { value: 'Pumpkin' }
  },
  bagBottom: 'Натуральна шкіра',
  selectedSize: 'S',
  sidePocket: {
    isSelected: true
  },
  totalPrice: 1200,
  images:
    'https://scontent.flwo4-2.fna.fbcdn.net/v/t1.0-9/47230850_1840441399415884_8917409871041658880_o.jpg?_nc_cat=102&_nc_sid=8bfeb9&_nc_ohc=hm88c7z3vA8AX-1Hz30&_nc_ht=scontent.flwo4-2.fna&oh=72d7ebf7aaa8fee317e60c68bbc8a987&oe=5F47F0CA',
  quantity: 1,
  productUrl: '/backpacks/foweoo423'
};

describe('empty cart test', () => {
  beforeEach(() => {
    cy.visit('/cart');
  });

  it('should be visible', () => {
    cy.get('[data-cy="empty-cart"]').should('be.visible');
  });

  it('should contain image', () => {
    cy.get('[data-cy="empty-cart"]').find('img').should('be.visible');
  });

  it('should contain button with link to homepage', () => {
    cy.get('[data-cy="empty-cart"]')
      .find('button')
      .should('be.visible')
      .click();
  });
});

describe('filled cart test', () => {
  beforeEach(() => {
    clearLocalStorage();
    setToLocalStorage('cart', [fakeProduct]);
    cy.visit('/cart');
  });

  it('should be visible', () => {
    cy.get('[data-cy="filled-cart"]').should('be.visible');
  });

  it('should to contain 2 linked buttons "continue shopping" and "checkout"', () => {
    cy.get('[data-cy="control-buttons"]')
      .find('a:first-child > button')
      .should('be.visible')
      .parent('a')
      .parent('[data-cy="control-buttons"]')
      .find('a:last-child > button')
      .should('be.visible');
  });

  it('after click to "continue shopping" button should to redirect to home page', () => {
    cy.get('[data-cy="control-buttons"]')
      .find('a:first-child > button')
      .click();
  });

  it('after click to "checkout" button should to redirect to checkout', () => {
    cy.get('[data-cy="control-buttons"]').find('a:last-child > button').click();
  });
});

describe('cart item test', () => {
  beforeEach(() => {
    clearLocalStorage();
    setToLocalStorage('cart', [fakeProduct]);
    cy.visit('/cart');
  });

  it('should have clickable image with link', () => {
    cy.get('[data-cy="filled-cart"]')
      .find('[data-cy="cart-item-img"]')
      .should('be.visible')
      .click();
  });

  it('should have clickable title with link', () => {
    cy.get('[data-cy="filled-cart"]')
      .find('[data-cy="cart-item-description"] > a:first-child')
      .should('be.visible')
      .click();
  });

  it('should have input for change quantity', () => {
    cy.get('[data-cy="filled-cart"]')
      .find('[data-cy="cart-item-quantity"] > input')
      .should('be.visible')
      .type('2');
  });

  it('should have button to decrease quantity by 1', () => {
    cy.get('[data-cy="cart-item-quantity"] > input')
      .should('be.visible')
      .type('1');

    cy.get('[data-cy="cart-item-quantity"] > button:first-child')
      .should('be.visible')
      .click();
  });

  it('should have button to increase quantity by 1', () => {
    cy.get('[data-cy="cart-item-quantity"] > input')
      .should('be.visible')
      .type('1');

    cy.get('[data-cy="cart-item-quantity"] > button:last-child')
      .should('be.visible')
      .click();
  });

  it('should have button to remove item from cart', () => {
    cy.get('[data-cy="cart-item-remove"]').should('be.visible');
  });

  it('should to show modal window', () => {
    cy.get('[data-cy="cart-item-remove"]').click();
  });

  it('should to remove item from cart and show empty cart component', () => {
    cy.get('[data-cy="cart-item-remove"]').click();

    cy.get('[data-cy="removing-modal"]').find('button:first-child').click();

    cy.get('[data-cy="empty-cart"]').should('be.visible');
  });

  it('should to not remove item from cart', () => {
    cy.get('[data-cy="cart-item-remove"]').click();

    cy.get('[data-cy="removing-modal"]').find('button:last-child').click();
  });
});
