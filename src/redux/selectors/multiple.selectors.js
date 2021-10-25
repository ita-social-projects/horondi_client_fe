export const selectProductsIdCommentsLanguageUserData = ({ Language, User, Comments }) => ({
  commentsLoading: Comments.commentsLoading,
  comments: Comments.comments,
  currentLimit: Comments.limit,
  language: Language.language,
  userData: User.userData,
  userOrders: User.userOrders,
  getCommentsLoading: Comments.getCommentsLoading,
  commentsCount: Comments.commentsCount,
  skip: Comments.skip
});

export const selectCurrencyProductsCategoryFilter = ({
  Currency,
  Products: { productToSend }
}) => ({
  currency: Currency.currency,
  productToSend
});

export const selectLanguageProductsUserWishlist = ({ Language, Products, User, Cart }) => ({
  language: Language.language,
  productToSend: Products.productToSend,
  userData: User.userData,
  cartList: Cart.list
});

export const selectLocation = ({ router }) => ({
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
