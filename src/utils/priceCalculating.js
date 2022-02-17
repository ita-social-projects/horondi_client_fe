export const calcPriceForCart = (price, quantity, discount) => {
  if (discount) {
    return Math.round(price * quantity - (price * quantity * discount) / 100);
  }

  return price * quantity;
};

const roundPrice = (price) => parseInt(price, 10);
export const getMin = (minPrice, currency) => (minPrice ? roundPrice(minPrice[currency].value) : 0);
export const getMax = (maxPrice, currency) =>
  maxPrice ? roundPrice(maxPrice[currency].value) : 1000;
