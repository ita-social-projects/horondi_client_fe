export const ProductDetailsCommentsPageSelector = ({
  Products,
  Language,
  User,
  Comments
}) => ({
  commentsLoading: Comments.commentsLoading,
  comments: Comments.comments,
  currentLimit: Comments.limit,
  productId: Products.product._id,
  language: Language.language,
  userData: User.userData
});

export const CurrencyAndProductsSelector = ({
  Currency,
  Products: { product, productLoading, productToSend, filters }
}) => ({
  currency: Currency.currency,
  categoryFilter: filters.categoryFilter,
  isLoading: productLoading,
  product,
  productToSend
});
