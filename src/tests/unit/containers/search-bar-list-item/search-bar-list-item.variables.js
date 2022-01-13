const etalonString = 'test';
const minPrice = 1312;

export const product = {
  images: { primary: { small: 'test' } },
  name: { 0: { value: etalonString }, 1: { value: 'test' } },
  basePrice: { 0: { value: 0, currency: 'UAH' } },
  sizes: [
    {
      price: [
        {
          value: minPrice,
          currency: 'UAH'
        }
      ]
    }
  ]
};

export const mockStore = {
  currency: 0,
  lightMode: true
};
