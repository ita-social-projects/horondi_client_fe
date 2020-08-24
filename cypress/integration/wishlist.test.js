import { FAKE_PRODUCT_FOR_TEST } from '../../src/configs';
import {
  clearLocalStorage,
  setToLocalStorage
} from '../../src/services/local-storage.service';

describe('filled wishlist test', () => {
  it('should be visible', () => {
    clearLocalStorage();
    setToLocalStorage('wishlist', [FAKE_PRODUCT_FOR_TEST]);
    cy.visit('/wishlist');
    cy.get('[data-cy="filled-wishlist"]').should('be.visible');
  });
});

describe('empty wishlist test', () => {
  beforeEach(() => {
    cy.visit('/wishlist');
  });

  it('should be visible', () => {
    cy.get('[data-cy="empty-wishlist"]').should('be.visible');
  });

  it('should contain button with link to homepage', () => {
    cy.get('[data-cy="empty-wishlist"]')
      .find('button')
      .should('be.visible')
      .click();
  });

  it('should contain image', () => {
    cy.get('[data-cy="empty-wishlist"]').find('img').should('be.visible');
  });
});

describe('wishlist item test', () => {
  beforeEach(() => {
    clearLocalStorage();
    setToLocalStorage('wishlist', [FAKE_PRODUCT_FOR_TEST]);
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

  it('should have button to redirecting to product', () => {
    cy.get('[data-cy="filled-wishlist"]')
      .find('[data-cy="wishlist-item-description"] > button')
      .should('be.visible')
      .click();
  });
});
