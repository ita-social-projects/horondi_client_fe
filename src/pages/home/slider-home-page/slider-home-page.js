import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';

import { Backdrop } from '@material-ui/core';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';

import 'react-awesome-slider/dist/styles.css';
import { useStyles } from './slider-home-page.style';

import LoadingBar from '../../../components/loading-bar';
import { getHomePageSliderImages } from '../../../redux/homepage-slider/homepage-slider.actions';

import { HOME_BUTTONS } from '../../../translations/homepage.translations';

const AutoplaySlider = withAutoplay(AwesomeSlider);

const SliderHomePage = () => {
  const styles = useStyles();
  const dispatch = useDispatch();

  const { images, loading, language } = useSelector(
    ({ HomePageSlider, Language }) => ({
      images: HomePageSlider.images,
      loading: HomePageSlider.loading,
      language: Language.language
    })
  );

  useEffect(() => {
    dispatch(getHomePageSliderImages());
  }, [dispatch]);
  if (loading) {
    return (
      <Backdrop className={styles.backdrop} open={loading} invisible>
        <CircularLoadingBar color='inherit' />
      </Backdrop>
    );
  }

  return (
    <div className={styles.captionBlock}>
      <AutoplaySlider
        play
        cancelOnInteraction
        interval={6000}
        className={styles.slider}
        mobileTouch
        buttons={false}
        fillParent
        infinite
      >
        {images.items.map((item) => (
          <div key={item._id} data-src={item.images.large}>
            <a className={clsx(styles.hoverArrow, 'arrow')} href={item.link}>
              {HOME_BUTTONS[language].SEE_MORE}
              <span>&#8594;</span>
            </a>
            <div className={clsx(styles.sliderInner, 'slider')}>
              <p className={styles.title}>{item.title[language].value}</p>
              <p className={styles.description}>
                {item.description[language].value}
              </p>
            </div>
          </div>
        ))}
      </AutoplaySlider>
    </div>
  );
};

export default SliderHomePage;
