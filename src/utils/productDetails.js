export const isProductInCartAlready = (cartList, productToSend) => cartList.find(
  ({ _id, selectedSize }) =>
    _id === productToSend._id && selectedSize._id === productToSend.selectedSize._id
);
