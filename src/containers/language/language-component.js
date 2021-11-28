import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MenuItem } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { useStyles } from './language.styles';
import { setToLocalStorage, getFromLocalStorage } from '../../services/local-storage.service';
import { changeLanguage } from '../../redux/language/language.actions';
import { LANGUAGES_LIST, DEFAULT_LANGUAGE, languageName } from '../../configs';
import Dropdown from '../../components/dropdown';

const languageInLocalStorage = getFromLocalStorage('language') || DEFAULT_LANGUAGE;

const LanguageComponent = ({ fromSideBar }) => {
  const dispatch = useDispatch();
  const styles = useStyles();
  const { language } = useSelector(({ Language }) => ({
    language: Language.language
  }));
  useEffect(() => {
    if (!fromSideBar) {
      dispatch(changeLanguage(languageInLocalStorage));
    }
  }, [dispatch, fromSideBar]);

  const { i18n } = useTranslation();

  const handleChange = (e) => {
    const targetValue = e.target.value;
    if (targetValue !== undefined) {
      i18n.changeLanguage(targetValue === 0 ? 'ua' : 'en');
      setToLocalStorage(languageName, targetValue);
      dispatch(changeLanguage(targetValue));
    }
  };
  const mappedLanguages = LANGUAGES_LIST.map(({ lang, value }) => (
    <MenuItem data-cy={`${languageName}${value + 1}`} key={value} value={value}>
      {lang}
    </MenuItem>
  ));
  return (
    <div data-cy='language' className={styles.root}>
      <Dropdown
        mappedItems={mappedLanguages}
        handler={handleChange}
        defaultValue={DEFAULT_LANGUAGE}
        value={language}
        fromSideBar={fromSideBar}
      />
    </div>
  );
};

export default LanguageComponent;
