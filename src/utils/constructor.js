import { DEFAULT_CURRENCY } from '../configs';
import { CHECKOUT_TITLES } from '../translations/checkout.translations';
import { CONSTRUCTOR_TITLES } from '../translations/constructor.translations';

export const currentCurrencyValue = (language, currency) =>
  currency === DEFAULT_CURRENCY ? CHECKOUT_TITLES[language].UAH : CHECKOUT_TITLES[language].USD;

export const constructorPartPrice = (priceBasic, priceGobelen, priceBottom) => [
  priceBasic,
  priceGobelen,
  priceBottom
];
export const constructorPartNames = (language) =>
  language
    ? ['Матеріал основи:', 'Гобелен:', 'Матеріал низу:']
    : ['Basic material:', 'Front-Pocket material:', 'Bottom material:'];

export const constructorEndPrice = (priceTotal) => {
  if (!priceTotal) {
    return CONSTRUCTOR_TITLES.END_PRICE;
  }
  return `${priceTotal} `;
};

export const constructorImageInput = {
  MODEL: 'model',
  BASIC: 'basic',
  PATTERN: 'pattern',
  BOTTOM: 'bottom'
};
