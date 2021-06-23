export const calcPriceForCart = (item, currency) => item.price[currency].value * item.quantity;
export const min = (minPrice,currency) => parseInt(minPrice ? minPrice[currency].value / 100 : 0, 10);
export const max = (maxPrice,currency) => parseInt(maxPrice ? maxPrice[currency].value / 100 : 1000, 10);
