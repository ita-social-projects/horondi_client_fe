import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { push } from 'connected-react-router';
import { useSelector, useDispatch } from 'react-redux';
import { useStyles } from './error-page.styles';
import { ERROR_PAGE_IMAGES } from '../../configs';
import { ERROR_PAGE_MESSAGE } from '../../translations/errorpage.translations';

const ErrorPage = () => {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();

  const { isLightTheme, errorMessage } = useSelector(({ Theme, Error }) => ({
    isLightTheme: Theme.lightMode,
    errorMessage: Error.error
  }));

  const getLanguage = i18n.language === 'ua' ? 0 : 1;

  useEffect(() => {
    if (!errorMessage) {
      dispatch(push('/'));
    }
  }, [dispatch, errorMessage]);

  const styles = useStyles();

  const errorImagePath = isLightTheme ? ERROR_PAGE_IMAGES.light : ERROR_PAGE_IMAGES.dark;

  return (
    <div className={styles.wrapper}>
      <div className={styles.error}>
        <img
          className={styles.errorImage}
          src={errorImagePath}
          alt={t('errorPage.pageMessage.defaultError')}
        />
        <div className={styles.info}>
          <h2>
            {errorMessage && ERROR_PAGE_MESSAGE[errorMessage]
              ? ERROR_PAGE_MESSAGE[errorMessage][getLanguage].value
              : ERROR_PAGE_MESSAGE.DEFAULT_ERROR[getLanguage].value}
          </h2>

          <Link to='/' onClick={() => window.location.reload()}>
            <Button variant='contained'>{t('errorPage.linkToHomePage')}</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ErrorPage;
