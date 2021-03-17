export const selectInfoForSimilarProducts = ({
  Language,
  Currency,
  Products: { products, product }
}) => ({
  language: Language.language,
  similarProducts: products,
  product,
  currency: Currency.currency
});
