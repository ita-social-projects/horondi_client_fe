export const calcPriceForCart = (item, currency, quantity) =>
  item.totalPrice[currency].value * quantity;
