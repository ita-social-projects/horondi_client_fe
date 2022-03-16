import React from 'react';
import { ButtonGroup, Button } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { useStyles } from './language.styles';
import { setToLocalStorage } from '../../services/local-storage.service';
import { LANGUAGE } from '../../configs';
import { LANGUAGES_LIST } from './constants';

const LanguageComponent = ({ fromSideBar }) => {
  const styles = useStyles({ fromSideBar });
  const { i18n } = useTranslation();

  const handleChange = (e) => {
    const targetValue = e.target.value;
    setToLocalStorage(LANGUAGE, targetValue);
    i18n.changeLanguage(targetValue);
  };

  const mappedLanguages = LANGUAGES_LIST.map(({ lang, value }) => (
    <Button data-cy={`${LANGUAGE}${value + 1}`} key={value} value={lang}>
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
