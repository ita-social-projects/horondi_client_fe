import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import parse from 'html-react-parser';

import { useStyles } from './about-us.style';
import { getBusinessPageByCode } from '../../redux/business-pages/business-pages.actions';

const AboutUs = () => {
  const dispatch = useDispatch();
  const { aboutUsPage, language } = useSelector(
    ({ BusinessPages, Language }) => ({
      aboutUsPage: BusinessPages.pages.aboutUs,
      language: Language.language
    })
  );

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getBusinessPageByCode('about-us'));
  }, [dispatch]);

  const aboutUsText =
    aboutUsPage.text && parse(aboutUsPage.text[language].value);
  const styles = useStyles();

  return (
    <div className={styles.root}>
      {aboutUsPage.title && <h1>{aboutUsPage.title[language].value}</h1>}
      {aboutUsText}
    </div>
  );
};

export default AboutUs;
