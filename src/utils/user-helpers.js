import { REGISTER_USER_ERROR } from '../translations/user.translations';
import infoImg from '../images/information.png';
import infoLightImg from '../images/info-light.png';

export const setUserErrorType = (error, language) => {
  if (error) {
    if (REGISTER_USER_ERROR[error]) {
      return REGISTER_USER_ERROR[error][language].value;
    }
    return REGISTER_USER_ERROR.DEFAULT_ERROR[language].value;
  }
  return null;
};

export const setInfoImgByTheme = (theme) => (theme ? infoImg : infoLightImg);
