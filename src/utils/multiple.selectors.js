export const selectLocation = ({ router }) => ({
  location: router.location.pathname
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
