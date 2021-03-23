export const calcPriceForCart = (item, currency, quantity) => item.price[currency].value * quantity;
