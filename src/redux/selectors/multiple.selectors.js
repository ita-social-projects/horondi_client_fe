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
  userData: User.userData,
  userOrders: User.userOrders,
  getCommentsLoading: Comments.getCommentsLoading,
  commentsCount: Comments.commentsCount,
  skip: Comments.skip
});

export const selectCurrencyProductsCategoryFilter = ({
  Theme,
  Currency,
  Products: { product, productLoading, productToSend, filters }
}) => ({
  currency: Currency.currency,
  categoryFilter: filters.categoryFilter,
  isLoading: productLoading,
  product,
  productToSend,
  isLightTheme: Theme.lightMode
});

export const selectLanguageProductsUserWishlist = ({
  Language,
  Products,
  User,
  Wishlist,
  Cart
}) => ({
  language: Language.language,
  productToSend: Products.productToSend,
  product: Products.product,
  userData: User.userData,
  wishlistItems: Wishlist.list,
  cartList: Cart.list
});

export const selectLightModeAndLocation = ({ Theme, router }) => ({
  lightMode: Theme.lightMode,
  location: router.location.pathname
});

export const selectHotItemFilter = ({ Products }) => ({
  filterStatus: Products.filterStatus
});

export const selectConstructor = ({ Constructor }) => ({
  constructorModel: Constructor.constructorModel,
  currentModel: Constructor.constructorModel.currentModel,
  basicImage: Constructor.constructorBasic.image,
  frontPocketImage: Constructor.constructorFrontPocket.image,
  patternImage: Constructor.constructorPattern.constructorImg,
  bottomImage: Constructor.constructorBottom.image,
  modelLoading: Constructor.constructorModel.modelLoading,
  basicPrice: Constructor.constructorBasic.basePrice,
  frontPocketPrice: Constructor.constructorFrontPocket.basePrice,
  bottomPrice: Constructor.constructorBottom.basePrice,
  sizePrice: Constructor.constructorSize.additionalPrice
});
export const selectLangAndCurrency = ({ Language, Currency }) => ({
  language: Language.language,
  currency: Currency.currency
});

export const selectToastSettings = (state) => state.Toast.toastSettings;

export const selectFilterData = ({ Products, Language }) => ({
  filters: Products.filters,
  language: Language.language,
  filterData: Products.filterData
});
