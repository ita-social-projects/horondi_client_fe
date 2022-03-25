import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from '@material-ui/core';
import { useStyles } from './slider-home-page.style';
import arrowRight from '../../../images/Arrow 6.svg';
import arrowLeft from '../../../images/Arrow 5.svg';
import { images } from './slider-data';
import { useAppStyles } from '../../../components/app/app.styles';

const SliderHomePage = () => {
  const [currImg, setCurrImg] = useState(0);
  const styles = useStyles();
  const appStyles = useAppStyles();
  const { t } = useTranslation();

  return (
    <div
      id='slider'
      style={{ backgroundImage: `url(${images[currImg].img})`, backgroundPosition: 'center' }}
      className={styles.homeHeader}
    >
      <div className={styles.overlay}>
        <div className={`${appStyles.containerApp} ${styles.sliderContent}`}>
          <div className={styles.headerWrapper}>
            <div className={styles.slideNumber}>
              <span>{images[currImg].slideNumber} / </span> <span> 03</span>
            </div>
            <h2 className={styles.headerTitle}> {t(images[currImg].title)}</h2>
            <p className={styles.description}>{t(images[currImg].description)}</p>
          </div>
          <div className={styles.navWrapper}>
            <Link to={images[currImg].linkTo}>
              <Button className={styles.buttonStyles}>{t(images[currImg].buttonName)} </Button>
            </Link>
            <br />
            <div className={styles.arrows}>
              <img
                onClick={() => {
                  (currImg > 0 && setCurrImg(currImg - 1)) ||
                    (currImg === 0 && setCurrImg(images.length - 1));
                }}
                src={arrowLeft}
                alt='arrow left'
              />
              <img
                onClick={() => {
                  (currImg < images.length - 1 && setCurrImg(currImg + 1)) ||
                    (currImg === images.length - 1 && setCurrImg(images.length - 1 - currImg));
                }}
                src={arrowRight}
                alt='arrow right'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderHomePage;
