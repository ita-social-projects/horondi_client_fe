const etalonString = 'test';
const minPrice = 1312;

export const product = {
  images: { primary: { small: 'test' } },
  name: { 0: { value: etalonString }, 1: { value: 'test' } },
  category: { name: [{ value: 'Bags' }] },
  rate: 2,
  basePrice: 50,
  sizes: [
    {
      price: minPrice
    }
  ]
};
