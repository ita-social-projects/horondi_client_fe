import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { MenuItem } from '@material-ui/core';
import {
  setToLocalStorage,
  getFromLocalStorage
} from '../../services/local-storage.service';
import { changeLanguage } from '../../redux/language/language.actions';
import { LANGUAGES_LIST } from '../../translations/language.tranclations';
import Dropdown from '../../components/dropdown';
import useStyles from './language.styles';

const languageInLocalStorage = getFromLocalStorage('language') || 0;

const Language = () => {
  const dispatch = useDispatch();
  const styles = useStyles();

  useEffect(() => {
    dispatch(changeLanguage(languageInLocalStorage));
  }, [dispatch]);

  const handleChange = (e) => {
    const targetValue = e.target.value;
    if (targetValue !== undefined) {
      setToLocalStorage('language', targetValue);
      dispatch(changeLanguage(targetValue));
    }
  };
  const mappedLanguages = LANGUAGES_LIST.map(({ lang, value }) => (
    <MenuItem id={`language${value + 1}`} key={value} value={value}>
      {lang}
    </MenuItem>
  ));
  return (
    <Dropdown
      styles={styles}
      mappedItems={mappedLanguages}
      handler={handleChange}
      defaultValue={languageInLocalStorage}
    />
  );
};

export default Language;
