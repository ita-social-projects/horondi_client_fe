import React, { useEffect } from 'react';
import { ButtonGroup, Button } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { useStyles } from './language.styles';
import { setToLocalStorage, getFromLocalStorage } from '../../services/local-storage.service';
import { LANGUAGE } from '../../configs';
import { LANGUAGES_LIST } from './constants';

const LanguageComponent = ({ fromSideBar }) => {
  const language = getFromLocalStorage(LANGUAGE);
  const styles = useStyles({ fromSideBar, language });
  const { i18n } = useTranslation();

  const handleChange = (e) => {
    const targetValue = e.target.value;
    setToLocalStorage(LANGUAGE, targetValue);
    i18n.changeLanguage(targetValue);
  };

  useEffect(() => {
    i18n.changeLanguage(language);
  }, []);

  const mappedLanguages = LANGUAGES_LIST.map((lang) => (
    <Button key={lang} value={lang}>
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
