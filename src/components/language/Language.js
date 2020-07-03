import React, { useState, useEffect } from 'react';
import LanguageIcon from '@material-ui/icons/Language';
import { Button, Card, MenuItem } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import {
  setToLocalStorage,
  getFromLocalStorage
} from '../../services/localstorage.service';
import useStyles from './language.styles';
import { initLanguageSaga } from '../../redux/language/language.action';

const languageInLocalStorage = JSON.parse(getFromLocalStorage('language')) || 0;

const Language = () => {
  const [language, setLanguage] = useState(languageInLocalStorage);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initLanguageSaga(language));
  }, [dispatch, language]);

  const handleChange = (e) => {
    setToLocalStorage('language', e.target.value);
    setLanguage(e.target.value);
  };

  return (
    <div className={classes.root}>
      <Button id='lang-icon' variant='outlined' className={classes.icon}>
        <LanguageIcon />
      </Button>
      <Card>
        <ul className={classes.list} onClick={handleChange}>
          <MenuItem value={0}>UA</MenuItem>
          <MenuItem value={1}>EN</MenuItem>
        </ul>
      </Card>
    </div>
  );
};

export default Language;
