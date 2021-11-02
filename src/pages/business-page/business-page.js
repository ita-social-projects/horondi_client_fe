import React, { useState } from 'react';
import parse from 'html-react-parser';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@apollo/client';

import { useStyles } from './business-page.style';
import { getBusinessTextByCode } from './operations/business-page.queries';
import errorOrLoadingHandler from '../../utils/errorOrLoadingHandler';

const BusinessPage = ({ match }) => {
  const [page, setPage] = useState({});
  const code = match.params.page;
  const { t } = useTranslation();

  const { loading, error } = useQuery(getBusinessTextByCode, {
    variables: { code },
    onCompleted: (data) => setPage(data.getBusinessTextByCode)
  });

  const addressText = page?.text && parse(t(`${page.translations_key}.text`));
  const styles = useStyles();

  if (loading || error) return errorOrLoadingHandler(error, loading);

  return (
    <div className={styles.root}>
      {page.title && <h1>{t(`${page.translations_key}.title`)}</h1>}
      {addressText}
    </div>
  );
};

export default BusinessPage;
