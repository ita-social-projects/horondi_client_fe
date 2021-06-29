import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MenuItem } from '@material-ui/core';
<<<<<<< HEAD:src/containers/language/language.js
import { useStyles } from './language.styles';
=======
>>>>>>> 98e63ecc16f2144a207c004e388c5853c28d999f:src/containers/language/language-component.js
import { setToLocalStorage, getFromLocalStorage } from '../../services/local-storage.service';
import { changeLanguage } from '../../redux/language/language.actions';
import { LANGUAGES_LIST, DEFAULT_LANGUAGE } from '../../configs';
import { languageName } from '../../const/language';
import Dropdown from '../../components/dropdown';

const languageInLocalStorage = getFromLocalStorage('language') || DEFAULT_LANGUAGE;

const LanguageComponent = ({ fromSideBar }) => {
  const dispatch = useDispatch();
<<<<<<< HEAD:src/containers/language/language.js
  const styles = useStyles();
=======
  const { language } = useSelector(({ Language }) => ({
    language: Language.language
  }));

>>>>>>> 98e63ecc16f2144a207c004e388c5853c28d999f:src/containers/language/language-component.js
  useEffect(() => {
    if (!fromSideBar) {
      dispatch(changeLanguage(languageInLocalStorage));
    }
  }, [dispatch]);

  const handleChange = (e) => {
    const targetValue = e.target.value;
    if (targetValue !== undefined) {
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
