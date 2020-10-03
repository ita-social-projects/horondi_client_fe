import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import logo1 from './fot-home/photo_2020-07-09_15-48-27.jpg';
import logo2 from './fot-home/photo_2020-07-09_15-48-27 (2).jpg';
import logo3 from './fot-home/photo_2020-07-09_15-48-28.jpg';
import { sliderHome } from './slider-home-page.style';

const SliderHomePage = () => {
  const styles = sliderHome();

  return (
    <div className={styles.container}>
      <AwesomeSlider className={styles.slider}>
        <div data-src={logo1} />
        <div data-src={logo2} />
        <div data-src={logo3} />
      </AwesomeSlider>
    </div>
  );
};

export default SliderHomePage;
