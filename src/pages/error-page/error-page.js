import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import { useSelector } from 'react-redux';

import { useStyles } from './error-page.styles';
import { ERROR_PAGE_IMAGES } from '../../configs';
import { ERROR_PAGE_MESSAGE } from '../../translations/errorpage.translations';

const ErrorPage = () => {
  const { language, isLightTheme, errorMessage } = useSelector(
    ({ Language, Theme, Error }) => ({
      language: Language.language,
      isLightTheme: Theme.lightMode,
      errorMessage: Error.error
    })
  );

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
          alt={ERROR_PAGE_MESSAGE[language].title}
        />
        <div className={styles.info}>
          <h2>
            {errorMessage
              ? errorMessage.e.message
              : ERROR_PAGE_MESSAGE[language].title}
          </h2>
          <Link to='/'>
            <Button variant='contained'>
              {ERROR_PAGE_MESSAGE[language].toHomepage}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
