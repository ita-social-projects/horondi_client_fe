import React, { useState, useRef } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import Carousel from 'react-multi-carousel';
import { useTranslation } from 'react-i18next';
import { responsiveCarousel } from './constants';
import { useStyles } from './slider.styles';
import 'react-awesome-slider/dist/styles.css';

import ArrowRight from '../../../images/ArrowRight.svg';
import ArrowLeft from '../../../images/ArrowLeft.svg';

const Slider = ({ sliderlImages, patterns }) => {
  const [selected, setSelected] = useState(0);
  const styles = useStyles();
  const { t } = useTranslation();

  const sliderRef = useRef();
  const carouselRef = useRef();

  const amountOfSlides = (`0${  patterns.length}`).slice(-2);
  const currentSlide = (`0${  selected + 1}`).slice(-2);

  const sliderItem = patterns.map((pattern, index) => (
    <div key={pattern._id} data-src={sliderlImages[index]}>
      <p className={styles.sliderText}>{t(`${pattern.translationsKey}.name`)}</p>
      <div className={styles.counter}>
        <span>{currentSlide}</span>
        <span> / </span>
        <span>{amountOfSlides}</span>
      </div>
    </div>
  ));

  const onClickHandler = (element) => {
    const prevIndex = sliderRef.current.index;
    const currentIndex = +element.target.dataset.index;

    if (prevIndex > currentIndex) {
      return sliderRef.current.goTo({ index: currentIndex, direction: false });
    }

    sliderRef.current.goTo({ index: currentIndex, direction: true });
  };

  const onTransitionEnd = (element) => {
    const {slidesToShow} = carouselRef.current.state;

    setSelected(element.currentIndex);

    if (element.slides - slidesToShow < element.currentIndex) {
      return carouselRef.current.goToSlide(element.slides - slidesToShow);
    }

    carouselRef.current.goToSlide(element.currentIndex);
  };

  return (
    <>
      <p>{t(`materialsPage.sliderDescription`)}</p>
      <AwesomeSlider
        ref={sliderRef}
        bullets={false}
        onTransitionEnd={onTransitionEnd}
        className={styles.slider}
        organicArrows={false}
        buttonContentLeft={<img src={ArrowLeft} alt='right arrow' />}
        buttonContentRight={<img src={ArrowRight} alt='left arrow' />}
      >
        {sliderItem}
      </AwesomeSlider>
      <Carousel
        ref={carouselRef}
        responsive={responsiveCarousel}
        arrows={false}
        itemClass='carousel-item'
        centerMode
      >
        {sliderlImages.map((image, index) => (
          <img
            src={image}
            key={index}
            alt=''
            data-index={index}
            draggable={false}
            onClick={onClickHandler}
            className={`${styles.image} ${selected === index ? styles.selected : ''}`}
          />
        ))}
      </Carousel>
    </>
  );
};

export default Slider;
