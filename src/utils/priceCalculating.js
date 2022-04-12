export const calcPriceForCart = (price, quantity, discount) => {
  if (discount) {
    return Math.round(price * quantity - (price * quantity * discount) / 100);
  }

  return Math.round(price * quantity);
};

const roundPrice = (price) => parseInt(price, 10);
export const getMin = (minPrice, currency) =>
  minPrice ? roundPrice(minPrice * currency.exchangeRate) : 0;
export const getMax = (maxPrice, currency) =>
  maxPrice ? roundPrice(maxPrice * currency.exchangeRate) : 1000;
export const fixPrice = (prices, currency) =>
  prices.map((el) => roundPrice(el / currency.exchangeRate));

export const priceCalculation = (price, { exchangeRate }) => Math.round(price * exchangeRate);
