export const calcPriceForCart = (item, currency) => item.price[currency].value;
const roundPrice = (price) => parseInt(price / 100, 10);
export const getMin = (minPrice, currency) => (minPrice ? roundPrice(minPrice[currency].value) : 0);
export const getMax = (maxPrice, currency) =>
  maxPrice ? roundPrice(maxPrice[currency].value) : 1000;
