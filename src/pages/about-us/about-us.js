import React from 'react';
import parse from 'html-react-parser';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@apollo/client';
import { useStyles } from './about-us.styles';
import { useAppStyles } from '../../components/app/app.styles';
import errorOrLoadingHandler from '../../utils/errorOrLoadingHandler';
import { getBusinessTextByCode } from './operation/about-us.queries';
import { ABOUT_US_CODE } from './constants';
import PageTitle from '../../components/page-title';
import BackButton from '../../components/back-button';

const AboutUs = () => {
  const { t } = useTranslation();
  const styles = useStyles();
  const appStyles = useAppStyles();

  const { data, loading, error } = useQuery(getBusinessTextByCode, {
    variables: { code: ABOUT_US_CODE }
  });

  if (loading || error) return errorOrLoadingHandler(error, loading);
  const aboutUsData = data.getBusinessTextByCode;
  const key = aboutUsData.translationsKey;
  const translatedTitle = t(`${key}.title`);
  const translatedSections = t(`${key}.sections`, { returnObjects: true });

  const sections = translatedSections.map((section, idx) => (
    <div key={section.id} className={`${styles.section}`}>
      <div>
        <h3>{section.title}</h3>
        <p>{parse(section.text)}</p>
      </div>
      <img
        className={`${styles.sectionImg}`}
        src={aboutUsData.sectionsImgs[idx].src}
        alt={aboutUsData.sectionsImgs[idx].name}
      />
    </div>
  ));

  return (
    <div className={appStyles.rootApp}>
      <div className={`${appStyles.containerApp} ${styles.root}`}>
        <BackButton />
        <PageTitle title={translatedTitle} titleLine />
        <div className={`${styles.sections}`}>{sections}</div>
        <img
          className={`${styles.bottomImg}`}
          src={aboutUsData.footerImg.src}
          alt={aboutUsData.footerImg.name}
        />
      </div>
    </div>
  );
};

export default AboutUs;
