import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import parse from 'html-react-parser';
import _ from 'lodash';

import { useStyles } from './business-page.style';
import { getBusinessPageByCode } from '../../redux/business-pages/business-pages.actions';
import Contacts from '../contacts/contacts';

const BusinessPage = ({ match }) => {
  const dispatch = useDispatch();
  const pageCode = match.params.page;
  const pageCamelCase = _.camelCase(pageCode);
  const { page, language } = useSelector(({ BusinessPages, Language }) => ({
    page: BusinessPages.pages[pageCamelCase],
    language: Language.language
  }));

  useEffect(() => {
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
