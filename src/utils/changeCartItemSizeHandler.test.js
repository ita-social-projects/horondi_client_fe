import changeCartItemSizeHandler from './changeCartItemSizeHandler';

const product = {
  allSizes: [
    {
      size: { _id: '604394cba7532c33dcb326d6' },
      price: [
        { value: 2050, currency: 'UAH' },
        { value: 76, currency: 'USD' }
      ]
    }
  ],
  dimensions: { volumeInLiters: 22, weightInKg: 1 },
  id: '1633258519639',
  options: { size: { _id: '60439516a7532c33dcb326d7' } },
  price: [
    { value: 3050, currency: 'UAH' },
    { value: 80, currency: 'USD' }
  ],
  quantity: 7,
  sidePocket: false,
  product: { _id: '60588c204b419a0ec128e4bc' }
};
const cart = [product, product];

describe('changeCartItemSizeHandler test', () => {
  it('should return expected result', () => {
    const result = changeCartItemSizeHandler(
      { id: cart[0].id },
      {
        price: cart[0].price,
        size: cart[0].options.size,
        quantity: 7
      },
      cart
    );

    expect(result.length).toBe(1);
  });
});
