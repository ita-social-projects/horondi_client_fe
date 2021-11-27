import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ButtonGroup, Button } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { useStyles } from './language.styles';
import { setToLocalStorage, getFromLocalStorage } from '../../services/local-storage.service';
import { changeLanguage } from '../../redux/language/language.actions';
import { LANGUAGES_LIST, DEFAULT_LANGUAGE, languageName } from '../../configs';

const languageInLocalStorage = getFromLocalStorage(LANGUAGE) || DEFAULT_LANGUAGE;

const LanguageComponent = ({ fromSideBar }) => {
  const dispatch = useDispatch();
  const styles = useStyles({ fromSideBar });
  useEffect(() => {
    if (!fromSideBar) {
      dispatch(changeLanguage(languageInLocalStorage));
    }
  }, [dispatch, fromSideBar]);

  const handleChange = (e) => {
    const targetValue = parseInt(e.target.value);
    if (targetValue !== undefined) {
      i18n.changeLanguage(LANGUAGES_LIST[targetValue].lang.toLowerCase());
      setToLocalStorage(LANGUAGE, targetValue);
      dispatch(changeLanguage(targetValue));
    }
  };
  const mappedLanguages = LANGUAGES_LIST.map(({ lang, value }) => (
    <Button data-cy={`${languageName}${value + 1}`} key={value} value={value}>
      {lang}
    </Button>
  ));
  return (
    <div data-cy='language' className={styles.root}>
      <ButtonGroup onClick={handleChange}>{mappedLanguages}</ButtonGroup>
    </div>
  );
};

export default LanguageComponent;
