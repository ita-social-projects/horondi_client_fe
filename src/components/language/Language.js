import React, { useState, useEffect, useCallback } from 'react';
import {
  setToLocalStorage,
  getFromLocalStorage
} from 'src/services/localstorage.service';
import LanguageIcon from '@material-ui/icons/Language';
import { Button, Card, MenuItem } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import useStyles from './language.styles';
import { initLanguageSaga } from '../../redux/language/language.action';

const languageInLocalStorage = JSON.parse(getFromLocalStorage('language')) || 0;

const Language = () => {
  const [language, setLanguage] = useState(languageInLocalStorage);
  const classes = useStyles();
  const dispatch = useDispatch();

  const setLanguageToStore = useCallback(
    (lang) => {
      dispatch(initLanguageSaga(lang));
    },
    [dispatch]
  );

  useEffect(() => {
    setLanguageToStore(language);
  }, [setLanguageToStore, language]);

  const setChangedLanguage = (value) => {
    setToLocalStorage('language', value);
    setLanguage(value);
  };

  const handleChange = (e) => {
    setChangedLanguage(e.target.value);
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
