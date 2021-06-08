import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import parse from 'html-react-parser';

import { useStyles } from './business-page.style';
import { getBusinessPageByCode } from '../../redux/business-pages/business-pages.actions';

const BusinessPage = ({ match }) => {
  const dispatch = useDispatch();
  const pageCode = match.params.page;
  const pageParam = pageCode
    .split('-')
    .map((word, i) => (i !== 0 ? word[0].toUpperCase() + word.slice(1) : word))
    .join('');
  const { page, language } = useSelector(({ BusinessPages, Language }) => ({
    page: BusinessPages.pages[pageParam],
    language: Language.language
  }));

  useEffect(() => {
    const pageCode = match.params.page;
    dispatch(getBusinessPageByCode(pageCode));
    window.scrollTo(0, 0);
  }, [match.params.page, dispatch]);

  const addressText = page?.text && parse(page?.text[language].value);
  const styles = useStyles();

  return (
    <div className={styles.root}>
      {page.title && <h1>{page.title[language].value}</h1>}
      {addressText}
    </div>
  );
};

export default BusinessPage;
