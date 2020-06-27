import React, { useState, useEffect, useCallback } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {
  setToLocalStorage,
  getFromLocalStorage
} from 'src/services/localstorage.service';
import LanguageIcon from '@material-ui/icons/Language';
import { InputLabel } from '@material-ui/core';
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
    <div>
      <FormControl variant='outlined' className={classes.formControl}>
        <InputLabel id='demo-simple-select-label'>
          <LanguageIcon
            style={{ color: 'white', fontSize: '2rem', marginTop: '2rem' }}
          />
        </InputLabel>

        <Select value={language} onChange={handleChange}>
          <MenuItem value={0}>UA</MenuItem>
          <MenuItem value={1}>EN</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default Language;
