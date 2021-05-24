import { COMMENTS } from '../translations/product-details.translations';
import { TEXT_VALUE } from '../configs';

export const handleRateTip = (userId, language, hasBought) => {
  if (!userId) {
    return COMMENTS[language].unregisteredTip;
  }
  return !hasBought ? COMMENTS[language].registeredTip : COMMENTS[language].successfulTip;
};

export const handleClassName = (name, stylesText, stylesInput) =>
  `${name === TEXT_VALUE ? stylesText : stylesInput}`;

export const handleTextField = (name, userData) =>
  (name !== TEXT_VALUE && !userData) || name === TEXT_VALUE;

export const handleHelperText = (errorsName) => errorsName || '';
