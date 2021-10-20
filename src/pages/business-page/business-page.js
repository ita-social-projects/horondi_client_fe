import React, { useEffect, useState } from 'react';
import parse from 'html-react-parser';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@apollo/client';

import { useStyles } from './business-page.style';
import { getBusinessTextByCode } from './operations/business-page.queries';
import errorOrLoadingHandler from '../../utils/errorOrLoadingHandler';

const BusinessPage = ({ match }) => {
  const [page, setPage] = useState({});
  const code = match.params.page;
  const { i18n } = useTranslation();
  const language = i18n.language === 'ua' ? 0 : 1;

  const { loading, error } = useQuery(getBusinessTextByCode, {
    variables: { code },
    onCompleted: (data) => setPage(data.getBusinessTextByCode)
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [code]);

  const addressText = page?.text && parse(page?.text[language].value);
  const styles = useStyles();

  if (loading || error) return errorOrLoadingHandler(error, loading);

  return (
    <div className={styles.root}>
      {page.title && <h1>{page.title[language].value}</h1>}
      {addressText}
    </div>
  );
};

export default BusinessPage;
