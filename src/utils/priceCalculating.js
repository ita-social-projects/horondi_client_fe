export const calcPrice = (item, currency) => (
  (item.basePrice[currency].value +
      item.selectedSize.additionalPrice[currency].value +
      item.bottomMaterial.material.additionalPrice[currency].value) *
    item.quantity
);

export const calcPriceForCart = (item, currency) => item.totalPrice[currency].value;
