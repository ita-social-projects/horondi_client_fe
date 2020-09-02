import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import parse from 'html-react-parser';

import { useStyles } from './privacy-policy.style';
import { getBusinessPageByCode } from '../../redux/businessPages/businessPages.actions';

const PrivacyPolicy = () => {
  const dispatch = useDispatch();
  const { privacyPolicyPage, language } = useSelector(
    ({ BusinessPages, Language }) => ({
      privacyPolicyPage: BusinessPages.pages.privacyPolicy,
      language: Language.language
    })
  );

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getBusinessPageByCode('privacy-policy'));
  }, [dispatch]);

  const privacyPolicyText = Object.keys(privacyPolicyPage).length
    ? parse(privacyPolicyPage.text[language].value)
    : 'No text provided';
  const styles = useStyles();

  return (
    <div className={styles.root}>
      {privacyPolicyPage.title && (
        <h1>{privacyPolicyPage.title[language].value}</h1>
      )}
      {privacyPolicyText}
    </div>
  );
};

export default PrivacyPolicy;
