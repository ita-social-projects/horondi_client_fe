import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import parse from 'html-react-parser';
import _ from 'lodash';

import { useStyles } from './business-page.style';
import { getBusinessPageByCode } from '../../redux/business-pages/business-pages.actions';
// import { getBusinessTextByCode } from './operations/business-page.queries';

// import { useQuery } from '@apollo/client';

const BusinessPage = ({ match }) => {
  // const [businessPage, setBusinessPage] = useState({
  //   aboutUs: {},
  //   terms: {},
  //   materials: {},
  //   privacyPolicy: {},
  //   paymentAndShipping: {},
  //   userAgreement: {}
  // });

  const dispatch = useDispatch();
  const pageCode = match.params.page;
  const pageCamelCase = _.camelCase(pageCode);
  const { page, language } = useSelector(({ BusinessPages, Language }) => ({
    page: BusinessPages.pages[pageCamelCase],
    language: Language.language
  }));

  // const something = useQuery(getBusinessTextByCode, {
  //   onCompleted: (data) => console.log(data)
  // });
  // console.log(pageCode);

  useEffect(() => {
    dispatch(getBusinessPageByCode(pageCode));
    window.scrollTo(0, 0);
  }, [pageCode, dispatch]);

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
