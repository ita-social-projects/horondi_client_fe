import React, { useState } from 'react';
import parse from 'html-react-parser';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@apollo/client';

import { useStyles } from './business-page.style';
import { useAppStyles } from '../../components/app/app.styles';
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

  const addressText = page && parse(t(`${page.translationsKey}.text`));

  const styles = useStyles();
  const appStyles = useAppStyles();

  if (loading || error) return errorOrLoadingHandler(error, loading);

  return (
    <div className={appStyles.rootApp}>
      <div className={`${appStyles.containerApp} ${styles.root}`}>
        {page && <h1>{t(`${page.translationsKey}.title`)}</h1>}
        <hr />
        {addressText}
      </div>
    </div>
  );
};

export default BusinessPage;
