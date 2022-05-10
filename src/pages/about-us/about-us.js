import React from 'react';
import parse from 'html-react-parser';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@apollo/client';
import { useStyles } from './about-us.styles';
import { useAppStyles } from '../../components/app/app.styles';
import errorOrLoadingHandler from '../../utils/errorOrLoadingHandler';
import { getBusinessTextByCode } from './operation/about-us.queries';
import { ABOUT_US_CODE } from './constants';

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

  const sections = aboutUsData.sections[0].value.map((section, idx) => (
    <div key={section.id} className={`${styles.section}`}>
      <div>
        <h3>{t(`${key}.sections.${idx}.title`)}</h3>
        <p>{parse(t(`${key}.sections.${idx}.text`))}</p>
      </div>
      <img className={`${styles.sectionImg}`} src={section.img.src} alt={section.img.name} />
    </div>
  ));

  return (
    <div className={appStyles.rootApp}>
      <div className={`${appStyles.containerApp} ${styles.root}`}>
        <h1>{t(`${key}.title`)}</h1>
        <hr />
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
