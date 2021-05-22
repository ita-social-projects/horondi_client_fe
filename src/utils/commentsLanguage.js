import { COMMENTS } from '../translations/product-details.translations';

export const commentsLanguage = (language, userId, hasBought) => {
  if (!userId) {
    return COMMENTS[language].unregisteredTip;
  }
  return !hasBought ? COMMENTS[language].registeredTip : COMMENTS[language].successfulTip;
};
