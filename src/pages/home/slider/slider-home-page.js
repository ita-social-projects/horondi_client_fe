import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from '@material-ui/core';
import { useQuery } from '@apollo/client';
import { useStyles } from './slider-home-page.style';
import ArrowLeft from '../../../images/ArrowLeft.svg';
import ArrowRight from '../../../images/ArrowRight.svg';
import { useAppStyles } from '../../../components/app/app.styles';
import { getAllSlides } from '../operations/slider/slider.queries';
import { IMG_URL } from '../../../configs';
import errorOrLoadingHandler from '../../../utils/errorOrLoadingHandler';

const SliderHomePage = () => {
  const [currSlide, setCurrSlide] = useState(0);
  const [slides, setSlides] = useState([]);
  const styles = useStyles();
  const appStyles = useAppStyles();
  const { t, i18n } = useTranslation();
  const language = i18n.language === 'ua' ? 0 : 1;
  const { loading, error } = useQuery(getAllSlides, {
    onCompleted: (data) => setSlides(data.getAllSlides.items)
  });

  const handleNumPrefix = (slideNumber) => (slideNumber < 10 ? `0${slideNumber}` : slideNumber);
  const handleSlideSwitch = (num) => setCurrSlide((prevSlide) => prevSlide + num);

  if (loading || error) {
    return errorOrLoadingHandler(error, loading);
  }

  return (
    slides.length && (
      <div
        id='slider'
        style={{ backgroundImage: `url("${IMG_URL}${slides[currSlide].images.large}")` }}
        className={styles.homeHeader}
      >
        <div className={styles.overlay}>
          <div className={`${appStyles.containerApp} ${styles.sliderContent}`}>
            <div className={styles.headerWrapper}>
              <div className={styles.slideNumber}>
                <span>{handleNumPrefix(currSlide + 1)}</span>
                <span> / </span>
                <span>{handleNumPrefix(slides.length)}</span>
              </div>
              <h2 className={styles.headerTitle}>{slides[currSlide].title[language].value}</h2>
              <p className={styles.description}>{slides[currSlide].description[language].value}</p>
            </div>
            <div className={styles.navWrapper}>
              <Button className={styles.buttonStyles} component={Link} to={slides[currSlide].link}>
                {t('home.readMore')}
              </Button>
              <div className={styles.arrows}>
                <button
                  className={styles.arrow}
                  onClick={() => handleSlideSwitch(-1)}
                  type='button'
                  aria-label='previous slide'
                  disabled={currSlide === 0}
                >
                  <img src={ArrowLeft} alt='left arrow' aria-hidden='true' />
                </button>
                <button
                  className={styles.arrow}
                  onClick={() => handleSlideSwitch(1)}
                  type='button'
                  aria-label='next slide'
                  disabled={currSlide === slides.length - 1}
                >
                  <img src={ArrowRight} alt='right arrow' aria-hidden='true' />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default SliderHomePage;
