export const selectLanguageAndContactsLoadingContacts = ({
  Language,
  Contacts: { loading, contacts }
}) => ({
  contacts,
  loading,
  language: Language.language
});

export const selectProductsIdCommentsLanguageUserData = ({
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

export const selectCurrencyProductsCategoryFilter = ({
  Currency,
  Products: { product, productLoading, productToSend, filters }
}) => ({
  currency: Currency.currency,
  categoryFilter: filters.categoryFilter,
  isLoading: productLoading,
  product,
  productToSend
});

export const selectLightModeAndLocation = ({ Theme, router }) => ({
  lightMode: Theme.lightMode,
  location: router.location.pathname
});
