export const item = {
  price: [{ currency: 'ua', value: 100 }],
  quantity: 1,
  options: { size: { _id: 'some id' } },
  product: {
    _id: 'some id',
    images: { primary: { thumbnail: '/img' } },
    name: [{ value: 'ua' }]
  },
  allSizes: [{ size: { _id: 'some id', name: 'some name' } }]
};
export const props = {
  item,
  language: 0,
  calcPrice: () => 10,
  currency: 0,
  user: {},
  cartQuantityLoading: false,
  setModalVisibility: () => null,
  setModalItem: () => null
};
