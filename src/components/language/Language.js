import React, { useState, useEffect, useCallback } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {
  setToLocalStorage,
  getFromLocalStorage
} from 'src/services/localstorage.service';
import LanguageIcon from '@material-ui/icons/Language';
import { Button, Menu, Card } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import useStyles from './language.styles';
import { changeLanguage } from '../../redux/language/language.action';

const languageInLocalStorage = JSON.parse(getFromLocalStorage('language')) || 0;

const Language = () => {
  const [language, setLanguage] = useState(languageInLocalStorage);
  const classes = useStyles();
  const dispatch = useDispatch();

  const setLanguageToStore = useCallback(
    (lang) => {
      dispatch(changeLanguage(lang));
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

  const handleChange = () => {
    if (language === 0) {
      setChangedLanguage(1);
    }
    if (language === 1) {
      setChangedLanguage(0);
    }
  };

  return (
    <div className={classes.root}>
      <Button id='lang-icon' variant='outlined' className={classes.icon}>
        <LanguageIcon
          style={{ color: 'white', fontSize: '2rem', marginTop: '2rem' }}
        />
      </Button>

      <Card className={classes.card} onChange={handleChange}>
        <ul>
          <li value={0}>UA</li>
          <li value={1}>EN</li>
        </ul>
      </Card>
    </div>
  );
};

export default Language;
