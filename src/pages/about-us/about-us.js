import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import parse from 'html-react-parser';

import { useStyles } from './about-us.style';
import { ABOUT_US_IMAGES } from '../../configs';
import { getBusinessPageByCode } from '../../redux/businessPages/businessPages.actions';

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

  const aboutUsText = Object.keys(aboutUsPage).length
    ? parse(aboutUsPage.text[language].value)
    : 'No text provided';
  const styles = useStyles();

  return (
    <div className={styles.root}>
      {aboutUsPage.title && <h1>{aboutUsPage.title[language].value}</h1>}
      {aboutUsText}
    </div>
  );
};

export default AboutUs;
