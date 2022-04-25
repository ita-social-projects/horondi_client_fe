import React from 'react';
import { useTranslation } from 'react-i18next';

import { useStyles } from './about-us.style';
import { useAppStyles } from '../../components/app/app.styles';

const AboutUsPage = () => {
  const { t } = useTranslation();

  const styles = useStyles();
  const appStyles = useAppStyles();

  return (
    <div className={appStyles.rootApp}>
      <div className={`${appStyles.containerApp} ${styles.root}`}>
        <h1>{t('aboutUs.title')}</h1>
        <hr />
        <div className={`${styles.section}`}>
          <div>
            <h3>{t('aboutUs.sections.0.title')}</h3>
            <p>{t('aboutUs.sections.0.paragraphs.0')}</p>
            <p>{t('aboutUs.sections.0.paragraphs.1')}</p>
          </div>
          <img
            className={`${styles.firstSectionImg}`}
            src='https://horondi.blob.core.windows.net/horondi/images/large_eex9310l0lagyle_2022-03-09_15-00-26-358.jpg'
            alt='2022-03-09_15-00-26-358.jpg'
          />
        </div>

        <div className={`${styles.section} ${styles.oneParagraph}`}>
          <img
            className={`${styles.secondSectionImg}`}
            src='https://horondi.blob.core.windows.net/horondi/images/large_eewk311kwahkx2s_horondi-2.jpg'
            alt='horondi-2.jpg'
          />
          <div>
            <p>{t('aboutUs.sections.1.paragraphs.0')}</p>
            <p>{t('aboutUs.sections.1.paragraphs.1')}</p>
          </div>
        </div>

        <div className={`${styles.section}`}>
          <div>
            <h3>{t('aboutUs.sections.2.title')}</h3>
            <p>{t('aboutUs.sections.2.paragraphs.0')}</p>
            <p>{t('aboutUs.sections.2.paragraphs.1')}</p>
          </div>
          <img
            className={`${styles.thirdSectionImg}`}
            src='https://horondi.blob.core.windows.net/horondi/images/large_eex9310l0larlf1_2022-03-09_15-01-30-126.jpg'
            alt='2022-03-09_15-01-30-126.jpg'
          />
        </div>

        <img
          className={`${styles.bottomImg}`}
          src='https://horondi.blob.core.windows.net/horondi/images/large_eex9310l0larlf2_2022-03-09_15-04-28-794.jpg'
          alt='2022-03-09_15-04-28-794.jpg'
        />
      </div>
    </div>
  );
};

export default AboutUsPage;
