import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import { useStyles } from './slider-home-page.style';
import { useSelector } from 'react-redux';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import { carouselInterval } from '../../../configs';

const AutoplaySlider = withAutoplay(AwesomeSlider);

const SliderHomePage = () => {
  const styles = useStyles();
  const { categories } = useSelector(({ Categories: { list } }) => ({
    categories: list.filter((element) => element.isMain)
  }));
  return (
    <div className={styles.captionBlock}>
      <AutoplaySlider
        play={true}
        interval={carouselInterval}
        className={styles.slider}
      >
        {categories.map(({ images }) => (
          <div key={images.large} data-src={images.large} />
        ))}
      </AutoplaySlider>
    </div>
  );
};

export default SliderHomePage;
