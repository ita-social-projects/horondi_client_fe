import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import { useSelector , useDispatch } from 'react-redux';

import { useStyles } from './errorPage.styles';
import { getError } from '../../redux/error/error.actions';
import { ERROR_PAGE_MESSAGE, ERROR_PAGE_IMAGES } from '../../configs';

const ErrorPage = () => {
  const { language, isLightTheme, errorMessage } = useSelector(
    ({ Language, Theme, Error }) => ({
      language: Language.language,
      isLightTheme: Theme.lightMode,
      errorMessage: Error.error
    })
  );

  const classes = useStyles();
  const dispatch = useDispatch();

  const errorImagePath = isLightTheme
    ? ERROR_PAGE_IMAGES.light
    : ERROR_PAGE_IMAGES.dark;

  useEffect(() => {
    dispatch(getError());
  }, [dispatch]);

  return (
    <div className={classes.wrapper}>
      <div className={classes.error}>
        <img className={classes.errorImage} src={errorImagePath} alt='Oops' />
        <div className={classes.info}>
          <h2>
            {errorMessage
              ? errorMessage.e.message
              : ERROR_PAGE_MESSAGE[language].value}
          </h2>
          <Link to='/'>
            <Button variant='contained'>
              {ERROR_PAGE_MESSAGE[language].button}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
