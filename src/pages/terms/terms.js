import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import parse from 'html-react-parser';

import { useStyles } from './terms.style';
import { getBusinessPageByCode } from '../../redux/business-pages/business-pages.actions';

const Terms = () => {
  const dispatch = useDispatch();
  const { termsPage, language } = useSelector(({ BusinessPages, Language }) => ({
    termsPage: BusinessPages.pages.terms,
    language: Language.language
  }));

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getBusinessPageByCode('terms'));
  }, [dispatch]);
  const termsText = termsPage.text && parse(termsPage.text[language].value);
  const styles = useStyles();

  return (
    <div className={styles.root}>
      {termsPage.title && <h1>{termsPage.title[language].value}</h1>}
      {termsText}
    </div>
  );
};

export default Terms;
