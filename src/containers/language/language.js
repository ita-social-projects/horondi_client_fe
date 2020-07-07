import React from 'react';
import { useDispatch } from 'react-redux';
import { Select, MenuItem } from '@material-ui/core';
import {
  setToLocalStorage,
  getFromLocalStorage
} from '../../services/localstorage.service';
import useStyles from './language.styless';
import { changeLanguage } from '../../redux/language/language.actions';

const languageInLocalStorage = JSON.parse(getFromLocalStorage('language')) || 0;
const languages = [
  { lang: 'UA', value: 0 },
  { lang: 'EN', value: 1 }
];
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
  const mappedLanguages = languages.map(({ lang, value }) => (
    <MenuItem key={value} value={value}>
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
