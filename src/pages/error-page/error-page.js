import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { push } from 'connected-react-router';
import { useSelector, useDispatch } from 'react-redux';

import { useStyles } from './error-page.styles';
import { ERROR_PAGE_IMAGES } from '../../configs';
import {
  ERROR_PAGE_MESSAGE,
  LINK_TO_HOMEPAGE
} from '../../translations/errorpage.translations';

const ErrorPage = () => {
  const dispatch = useDispatch();

  const { language, isLightTheme, errorMessage } = useSelector(
    ({ Language, Theme, Error }) => ({
      language: Language.language,
      isLightTheme: Theme.lightMode,
      errorMessage: Error.error
    })
  );
  console.log('Im alife');
  useEffect(() => {
    console.log(errorMessage);
    if (!errorMessage) {
      dispatch(push('/'));
    }
  }, [dispatch, errorMessage]);

  const styles = useStyles();

  const errorImagePath = isLightTheme
    ? ERROR_PAGE_IMAGES.light
    : ERROR_PAGE_IMAGES.dark;

  return (
    <div className={styles.wrapper}>
      <div className={styles.error}>
        <img
          className={styles.errorImage}
          src={errorImagePath}
          alt={ERROR_PAGE_MESSAGE.DEFAULT_ERROR[language].value}
        />
        <div className={styles.info}>
          <h2>
            {errorMessage && ERROR_PAGE_MESSAGE[errorMessage]
              ? ERROR_PAGE_MESSAGE[errorMessage][language].value
              : ERROR_PAGE_MESSAGE.DEFAULT_ERROR[language].value}
          </h2>
          <Link to='/'>
            <Button variant='contained'>
              {LINK_TO_HOMEPAGE[language].value}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ErrorPage;
