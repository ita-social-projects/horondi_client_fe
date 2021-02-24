import { DEFAULT_CURRENCY } from '../configs';
import { CHECKOUT_TITLES } from '../translations/checkout.translations';

export const currentCurrencyValue = (language, currency) =>
  currency === DEFAULT_CURRENCY ? CHECKOUT_TITLES[language].UAH : CHECKOUT_TITLES[language].USD;

export const constructorPartPrice = (priceBasic, priceGobelen, priceBottom) => [
  priceBasic,
  priceGobelen,
  priceBottom
];
export const constructorPrices = (prices, currency) => {
  if (prices.basicPrice && prices.frontPocketPrice && prices.bottomPrice) {
    return (
      prices.basicPrice[currency].value +
      prices.frontPocketPrice[currency].value +
      prices.bottomPrice[currency].value
    );
  }
};

export const constructorImageInput = {
  MODEL: 'model',
  BASIC: 'basic',
  PATTERN: 'pattern',
  BOTTOM: 'bottom'
};
