import React from 'react';
import Button from '@material-ui/core/Button';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { ERROR_PAGE_MESSAGE } from '../../configs';
import { useStyles } from './errorPage.styles';

const ErrorPage = () => {
  const language = useSelector(({ Language }) => Language.language);
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <div className={classes.error}>
        <div className={classes.info}>
          <h2>{ERROR_PAGE_MESSAGE[language].value}</h2>
          <Link to='/'>
            <Button className={classes.headerButton} variant='contained'>
              {ERROR_PAGE_MESSAGE[language].button}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
