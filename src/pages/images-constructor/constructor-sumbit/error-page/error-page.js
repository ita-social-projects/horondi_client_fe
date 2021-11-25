import React, { useEffect, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { push } from 'connected-react-router';
import { useSelector, useDispatch } from 'react-redux';
import { useStyles } from './error-page.styles';
import { ERROR_PAGE_IMAGES } from '../../../../configs';
import ThemeContext from '../../../../context/theme-context';
import * as errorPage from '../../../../locales/en/errorPage.json';

const ErrorPage = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const { errorMessage } = useSelector(({ Error }) => ({
    errorMessage: Error.error
  }));

  const isLightTheme = useContext(ThemeContext);

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
          alt={t('errorPage.pageMessage.DEFAULT_ERROR')}
        />
        <div className={styles.info}>
          <h2>
            {errorMessage && errorPage.pageMessage[errorMessage.error]
              ? t(`errorPage.pageMessage.${errorMessage.error}`)
              : t('errorPage.pageMessage.DEFAULT_ERROR')}
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
