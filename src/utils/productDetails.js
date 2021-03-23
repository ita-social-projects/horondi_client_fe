export const isProductInCartAlready = (cartList, productToSend) =>
  cartList.find(
    ({ product, options }) =>
      product._id === productToSend.product._id &&
      options.selectedSize._id === productToSend.options.selectedSize._id
  );

export const similarProductForCart = (similarProducts, cartList) => {
  let imagesList = [];
  for (const simProduct of similarProducts) {
    for (const cartProduct of cartList) {
      if (
        !imagesList.find(({ _id }) => _id === simProduct._id) &&
        simProduct.category._id !== cartProduct.product.category._id &&
        (simProduct.mainMaterial.color._id === cartProduct.product.mainMaterial.color._id ||
          simProduct.pattern._id === cartProduct.product.pattern._id)
      ) {
        imagesList = [...imagesList, simProduct];
      }
    }
  }
  return imagesList;
};
