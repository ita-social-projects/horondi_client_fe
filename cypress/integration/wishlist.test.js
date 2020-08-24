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

describe('empty wishlist test', () => {
  beforeEach(() => {
    cy.visit('/wishlist');
  });

  it('should be visible', () => {
    cy.get('[data-cy="empty-wishlist"]').should('be.visible');
  });

  it('should contain image', () => {
    cy.get('[data-cy="empty-wishlist"]').find('img').should('be.visible');
  });

  it('should contain button with link to homepage', () => {
    cy.get('[data-cy="empty-wishlist"]')
      .find('button')
      .should('be.visible')
      .click();
  });
});

describe('filled wishlist test', () => {
  it('should be visible', () => {
    clearLocalStorage();
    setToLocalStorage('wishlist', [fakeProduct]);
    cy.visit('/wishlist');
    cy.get('[data-cy="filled-wishlist"]').should('be.visible');
  });
});

describe('wishlist item test', () => {
  beforeEach(() => {
    clearLocalStorage();
    setToLocalStorage('wishlist', [fakeProduct]);
    cy.visit('/wishlist');
  });

  it('should have clickable image with link', () => {
    cy.get('[data-cy="filled-wishlist"]')
      .find('[data-cy="wishlist-item-img"]')
      .should('be.visible')
      .click();
  });

  it('should have clickable title with link', () => {
    cy.get('[data-cy="filled-wishlist"]')
      .find('[data-cy="wishlist-item-description"] > a:first-child')
      .should('be.visible')
      .click();
  });

  it('should have button to redirecting to product', () => {
    cy.get('[data-cy="filled-wishlist"]')
      .find('[data-cy="wishlist-item-description"] > button')
      .should('be.visible')
      .click();
  });

  it('should have button to remove item from wishlist', () => {
    cy.get('[data-cy="wishlist-item-remove"]').should('be.visible');
  });

  it('should to show modal window', () => {
    cy.get('[data-cy="wishlist-item-remove"]').click();
  });

  it('should to remove item from wishlist and show empty wishlist component', () => {
    cy.get('[data-cy="wishlist-item-remove"]').click();

    cy.get('[data-cy="removing-modal"]').find('button:first-child').click();

    cy.get('[data-cy="empty-wishlist"]').should('be.visible');
  });

  it('should to not remove item from wishlist', () => {
    cy.get('[data-cy="wishlist-item-remove"]').click();
    cy.get('[data-cy="removing-modal"]').find('button:last-child').click();
  });
});
