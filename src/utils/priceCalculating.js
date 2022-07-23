export const calcPriceForCart = (price, quantity, discount) => {
  if (discount) {
    return Math.round(price * quantity - (price * quantity * discount) / 100);
  }

  return Math.round(price * quantity);
};

export const calcPriceWithCertificateForCart = (priceWithCertificate, quantity, price) => {
  return (price * quantity) - (price - priceWithCertificate);
};

export const roundPrice = (price) => parseInt(price, 10);
export const getMin = (minPrice) => (minPrice ? roundPrice(minPrice) : 0);
export const getMax = (maxPrice) => (maxPrice ? roundPrice(maxPrice) : 1000);
export const fixPrice = (prices, currency) =>
  prices.map((el) => roundPrice(el / currency.exchangeRate));

export const priceCalculation = (price, { exchangeRate }) => Math.round(price * exchangeRate);
