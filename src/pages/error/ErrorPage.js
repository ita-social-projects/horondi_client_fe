import React from 'react';
import Button from '@material-ui/core/Button';
import { useSelector } from 'react-redux';

import { CONFIRM_ERROR } from '../../configs';
import { useStyles } from './erorrPage.styles';
import oops from '../../images/oops.png';

const errorPage = (props) => {
  const { language } = useSelector((state) => ({
    language: state.Language.language
  }));
  const classes = useStyles();

  return (
    <div className={classes.error}>
      <div className={classes.info}>
        <h2>{CONFIRM_ERROR[language].value}</h2>
        <Button variant='contained'>{CONFIRM_ERROR[language].button}</Button>
      </div>
    </div>
  );
};

export default errorPage;
