import React, { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import clsx from 'clsx';

import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';

import 'react-awesome-slider/dist/styles.css';
import { useStyles } from './slider-home-page.style';

import { carouselInterval } from '../../../configs';
import { HOME_BUTTONS } from '../../../translations/homepage.translations';
import { getImage } from '../../../utils/imageLoad';

const AutoplaySlider = withAutoplay(AwesomeSlider);

const SliderHomePage = () => {
  const [imagesLinks, setImage] = useState([]);
  const styles = useStyles();

  const { images, language } = useSelector(({ HomePageSlider, Language }) => ({
    images: HomePageSlider.images,
    language: Language.language
  }));

  useMemo(() => {
    images.items &&
      images.items.forEach((item) => {
        getImage(item.images.large)
          .then((src) => setImage((prev) => [...prev, src]))
          .catch((badSrc) => setImage((prev) => [...prev, badSrc]));
      });
  }, [images]);

  return (
    <div id='slider' data-section-style='light' className={styles.homeHeader}>
      <AutoplaySlider
        play
        cancelOnInteraction
        interval={carouselInterval}
        mobileTouch
        buttons={false}
        fillParent
        infinite
      >
        {images.items.map((item, index) => (
          <div key={item._id} data-src={imagesLinks[index]}>
            <a
              className={clsx(styles.hoverArrow, 'arrow')}
              href={item.link || '/'}
            >
              {HOME_BUTTONS[language].SEE_MORE}
              <span>&#8594;</span>
            </a>
            <div className={clsx(styles.sliderInner, 'slider')}>
              <p className={styles.title}>{item.title[language].value || ''}</p>
              <p className={styles.description}>
                {item.description[language].value || ''}
              </p>
            </div>
          </div>
        ))}
      </AutoplaySlider>
    </div>
  );
};

export default SliderHomePage;
