import i18next from 'i18next';

export const constructorPartPrice = (priceGobelen, priceBottom) => [
  // priceBasic,
  priceGobelen,
  priceBottom
  // priceSize
];
export const constructorPartNames = (language) =>
  language
    ? // ? ['Матеріал основи:', 'Гобелен:', 'Матеріал дна:', 'Розмір:', 'Спинка:']
      // : ['Basic material:', 'Front-Pocket material:', 'Bottom material:', 'Size:', 'Back:'];
    ['Гобелен:', 'Матеріал дна:']
    : ['Front-Pocket material:', 'Bottom material:'];

export const constructorEndPrice = (priceTotal) => {
  if (!priceTotal) {
    return i18next.t('common.endPrice');
  }
  return `${priceTotal} `;
};

// export const constructorImageInput = {
//   MODEL: 'model',
//   BASIC: 'basic',
//   PATTERN: 'pattern',
//   BOTTOM: 'bottom',
//   SIZE: 'size'
// };
