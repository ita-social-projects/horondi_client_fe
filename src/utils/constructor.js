import i18next from 'i18next';

export const constructorPartPrice = ({ pattern, bottom, size, basic }) => [
  basic,
  pattern,
  bottom,
  size
];

export const constructorEndPrice = (priceTotal) => {
  if (!priceTotal) {
    return i18next.t('common.endPrice');
  }
  return `${priceTotal} `;
};
