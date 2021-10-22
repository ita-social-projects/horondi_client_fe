import { CONSTRUCTOR_TITLES } from '../translations/constructor.translations';

export const constructorPartPrice = (priceBasic, priceGobelen, priceBottom, priceSize) => [
  priceBasic,
  priceGobelen,
  priceBottom,
  priceSize
];
export const constructorPartNames = (language) =>
  language
    ? ['Матеріал основи:', 'Гобелен:', 'Матеріал дна:', 'Розмір:', 'Спинка:']
    : ['Basic material:', 'Front-Pocket material:', 'Bottom material:', 'Size:', 'Back:'];

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
  BOTTOM: 'bottom',
  SIZE: 'size'
};
