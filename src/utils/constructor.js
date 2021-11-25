import i18next from 'i18next';

export const constructorPartPrice = (priceGobelen, priceBottom) => [priceGobelen, priceBottom];
export const constructorPartNames = (language) =>
  language ? ['Гобелен:', 'Матеріал дна:'] : ['Front-Pocket material:', 'Bottom material:'];

export const constructorEndPrice = (priceTotal) => {
  if (!priceTotal) {
    return i18next.t('common.endPrice');
  }
  return `${priceTotal} `;
};
