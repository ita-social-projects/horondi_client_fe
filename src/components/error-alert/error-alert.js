import React from 'react';
import useStyles from './error-alert.styles';
import { ERROR_PAGE_IMAGES } from '../../configs';
import { useSelector } from 'react-redux';
import ERROR_ALERT_MESSAGE from '../../translations/error-alert.translations';
function ErrorAlert() {
  const styles = useStyles();
  const { language, isLightTheme } = useSelector(
    ({ Language, Theme, Error }) => ({
      language: Language.language,
      isLightTheme: Theme.lightMode
    })
  );
  const errorImagePath = isLightTheme
    ? ERROR_PAGE_IMAGES.light
    : ERROR_PAGE_IMAGES.dark;

  return (
    <div className={styles.alertContainer}>
      <img className={styles.errorImage} src={errorImagePath} alt={'error'} />
      <div className={styles.alertContant}>
        {ERROR_ALERT_MESSAGE.ERROR_MESSAGE[language].value}
      </div>
    </div>
  );
}

export default ErrorAlert;
