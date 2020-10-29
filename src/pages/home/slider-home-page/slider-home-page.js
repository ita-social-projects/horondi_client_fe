import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import { useStyles } from './slider-home-page.style';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import { carouselInterval } from '../../../configs';
import image1 from '../../../images/sliderHomePage/IMG_0423.jpg';
import image2 from '../../../images/sliderHomePage/IMG_0120.jpg';
import image3 from '../../../images/sliderHomePage/photo_2020-07-09_15-48-27.jpg';

const AutoplaySlider = withAutoplay(AwesomeSlider);

const SliderHomePage = () => {
  const styles = useStyles();
  return (
    <div className={styles.captionBlock}>
      <AutoplaySlider
        play={true}
        interval={carouselInterval}
        className={styles.slider}
        organicArrows={false}
      >
        <div key={image1} data-src={image1} />
        <div key={image2} data-src={image2} />
        <div key={image3} data-src={image3} />
      </AutoplaySlider>
    </div>
  );
};

export default SliderHomePage;
