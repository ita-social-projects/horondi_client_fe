import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { MenuItem } from '@material-ui/core';
import {
  setToLocalStorage,
  getFromLocalStorage
} from '../../services/local-storage.service';
import { changeLanguage } from '../../redux/language/language.actions';
import { LANGUAGES_LIST, DEFAULT_LANGUAGE } from '../../configs';
import Dropdown from '../../components/dropdown';

const languageInLocalStorage =
  getFromLocalStorage('language') || DEFAULT_LANGUAGE;

const Language = () => {
  const dispatch = useDispatch();

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
    <MenuItem data-cy={`language${value + 1}`} key={value} value={value}>
      {lang}
    </MenuItem>
  ));
  return (
    <div data-cy='language'>
      <Dropdown
        mappedItems={mappedLanguages}
        handler={handleChange}
        defaultValue={languageInLocalStorage}
      />
    </div>
  );
};

export default Language;
