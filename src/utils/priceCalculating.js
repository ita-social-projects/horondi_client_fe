export const calcPriceForCart = (item, currency) =>
  item.price[currency].value * item.quantity;
