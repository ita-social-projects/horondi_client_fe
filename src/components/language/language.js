import React from 'react';
import { useDispatch } from 'react-redux';
import {
  setToLocalStorage,
  getFromLocalStorage
} from '../../services/localstorage.service';
import useStyles from './language.styless';
import { changeLanguage } from '../../redux/language/language.actions';

const languageInLocalStorage = JSON.parse(getFromLocalStorage('language')) || 0;

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

  return (
    <select
      className={styles.rootSelect}
      defaultValue={languageInLocalStorage}
      id='language'
      onClick={handleChange}
    >
      <option className={styles.LanguageOption} id='language1' value={0}>
        UA
      </option>
      <option id='language2' value={1}>
        EN
      </option>
    </select>
  );
};

export default Language;
