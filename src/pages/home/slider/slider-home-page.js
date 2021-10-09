import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import { useTranslation } from 'react-i18next';
import { useStyles } from './slider-home-page.style';

import { carouselInterval } from '../../../configs';
import routes from '../../../const/routes';
import { getImage } from '../../../utils/imageLoad';
import { SLIDER_HOME_PAGE } from '../../../const/style-consts';

const { pathToMain } = routes;

const AutoplaySlider = withAutoplay(AwesomeSlider);

const SliderHomePage = () => {
  const [imagesLinks, setImage] = useState([]);
  const styles = useStyles();
  const { t, i18n } = useTranslation();

  const { images } = useSelector(({ HomePageSlider }) => ({
    images: HomePageSlider.images
  }));

  const items = images.items.filter((item) => item.show === true);

  useEffect(() => {
    items &&
      items.forEach((item) => {
        getImage(item.images.large)
          .then((src) => setImage((prev) => [...prev, src]))
          .catch((badSrc) => setImage((prev) => [...prev, badSrc]));
      });
  }, [images]);

  if (!items.length) {
    items.push(images.items[0]);
  }

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
        {items.map((item, index) => (
          <div key={item._id} data-src={imagesLinks[index]}>
            <Link
              to={item.link || pathToMain}
              className={clsx(styles.hoverArrow, SLIDER_HOME_PAGE.ARROW)}
            >
              {t('common.seeMore')}
              <span>&#8594;</span>
            </Link>
            <div className={clsx(styles.sliderInner, SLIDER_HOME_PAGE.SLIDER)}>
              <p className={styles.title}>
                {item.title[i18n.language === 'ua' ? 0 : 1].value || ''}
              </p>
              <p className={styles.description}>
                {item.description[i18n.language === 'ua' ? 0 : 1].value || ''}
              </p>
            </div>
          </div>
        ))}
      </AutoplaySlider>
    </div>
  );
};

export default SliderHomePage;
