export const similarProductForCart = (similarProducts, cartList) => {
  let imagesList = [];
  if (!similarProducts.length) {
    return [];
  }

  for (const simProduct of similarProducts) {
    for (const cartProduct of cartList) {
      if (
        !imagesList.find(({ _id }) => _id === simProduct._id) &&
        simProduct.category?._id !== cartProduct.category?._id &&
        (simProduct.mainMaterial.color._id === cartProduct.mainMaterial.color._id ||
          simProduct.pattern?._id === cartProduct.pattern._id)
      ) {
        imagesList = [...imagesList, simProduct];
      }
    }
  }
  return imagesList;
};

export const getFullProducts = (similarProducts, cartList) => {
  const productsInCart = [];
  if (!similarProducts.length) {
    return [];
  }
  for (const simProduct of similarProducts) {
    for (const cartProduct of cartList) {
      if (simProduct._id === cartProduct.productId) {
        productsInCart.push(simProduct);
      }
    }
  }
  return productsInCart;
};

export const sortSizes = (unOrderedSizes) => {
  const listOfSizes = ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL'];
  const orderedSizes = [];
  unOrderedSizes.forEach((el) => {
    const index = listOfSizes.indexOf(el.size.name);
    if (index !== -1) {
      orderedSizes[index] = el;
    }
  });
  return orderedSizes;
};
