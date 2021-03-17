export const selectInfoForSimilarProducts = ({
  Language,
  Currency,
  Products: { products, product },
  Cart
}) => ({
  language: Language.language,
  similarProducts: products,
  product,
  currency: Currency.currency,
  cartList: Cart.list
});
