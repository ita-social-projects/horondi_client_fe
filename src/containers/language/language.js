import React from 'react';
import { useDispatch } from 'react-redux';
import { Select, MenuItem } from '@material-ui/core';
import {
  setToLocalStorage,
  getFromLocalStorage
} from '../../services/localstorage.service';
import useStyles from './language.styless';
import { changeLanguage } from '../../redux/language/language.actions';
import { LANGUAGES_LIST } from '../../configs';

const languageInLocalStorage = getFromLocalStorage('language') || 0;

const Language = () => {
  const styles = useStyles();
  const dispatch = useDispatch();
  dispatch(changeLanguage(languageInLocalStorage));

  const handleChange = (e) => {
    const targetValue = e.target.value;
    if (targetValue === languageInLocalStorage) {
      dispatch(changeLanguage(targetValue));
    }
    setToLocalStorage('language', targetValue);
    dispatch(changeLanguage(targetValue));
  };
  const mappedLanguages = LANGUAGES_LIST.map(({ lang, value }) => (
    <MenuItem id={`language${value + 1}`} key={value} value={value}>
      {lang}
    </MenuItem>
  ));
  return (
    <div id='language' className={styles.rootLanguage}>
      <Select
        className={styles.rootSelect}
        defaultValue={languageInLocalStorage}
        onClick={handleChange}
      >
        {mappedLanguages}
      </Select>
    </div>
  );
};

export default Language;
