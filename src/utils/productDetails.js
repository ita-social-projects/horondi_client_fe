export const isProductInCartAlready = (cartList, productToSend) =>
  cartList.find(
    ({ _id, selectedSize }) =>
      _id === productToSend._id && selectedSize._id === productToSend.selectedSize._id
  );

export const similarProductForCart = (similarProducts, cartList) => {
  let imagesList = [];
  for (const simProduct of similarProducts) {
    for (const cartProduct of cartList) {
      if (
        simProduct.category._id !== cartProduct.categoryID &&
        (simProduct.mainMaterial.color._id === cartProduct.mainMaterialColorID ||
          simProduct.pattern._id === cartProduct.patternID)
      ) {
        imagesList = [...imagesList, simProduct];
      }
    }
  }
  return imagesList;
};
