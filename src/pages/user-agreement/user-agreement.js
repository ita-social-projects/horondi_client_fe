import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import parse from 'html-react-parser';

import { useStyles } from './user-agreement.style';
import { getBusinessPageByCode } from '../../redux/business-pages/business-pages.actions';

const UserAgreement = () => {
  const dispatch = useDispatch();
  const { userAgreementPage, language } = useSelector(({ BusinessPages, Language }) => ({
    userAgreementPage: BusinessPages.pages.userAgreement,
    language: Language.language
  }));

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getBusinessPageByCode('user-agreement'));
  }, [dispatch]);
  const userAgreementText = userAgreementPage.text && parse(userAgreementPage.text[language].value);
  const styles = useStyles();

  return (
    <div className={styles.root}>
      {userAgreementPage.title && <h1>{userAgreementPage.title[language].value}</h1>}
      {userAgreementText}
    </div>
  );
};

export default UserAgreement;
