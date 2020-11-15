import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import SliderHomePage from './slider';
import CategoriesList from './categories-list';
import OurLooks from './our-looks';
import { useStyles } from './home.styles';
import ScrollBar from '../../components/scroll-bar';
import ConstructorPreview from './contructor-preview';
import ModelsList from './modles-list';
import CircularLoadingBar from '../../components/circular-loading-bar';
import { Loader } from '../../components/loader/loader';
import { getHomePageSliderImages } from '../../redux/homepage-slider/homepage-slider.actions';

const Home = () => {
  const { location, sliderLoading } = useSelector(({ router, HomePageSlider }) => ({
    location: router.location.pathname,
    sliderLoading: HomePageSlider.loading
  }));


  const dispatch = useDispatch();
  const styles = useStyles();
  const homeRef = useRef(null);

  const [currentSection, setCurrentSection] = useState({ id: '#slider', sectionStyle: 'light' });

  useEffect(() => {
    dispatch(getHomePageSliderImages());
  }, [dispatch]);

  const scrollHandler = () => {
    if (!homeRef.current) {
      return;
    }

    const windowMiddle = window.scrollY + window.innerHeight / 2;
    const sectionsData = Array.from(homeRef.current.children)
      .slice(0, 5)
      .filter((item) => item.id)
      .map((item, i) => {

        const styles = window.getComputedStyle(item);
        const margin = parseFloat(styles.marginTop) +
          parseFloat(styles.marginBottom);

        return {
          id: `#${item.id}`,
          index: i,
          sectionStyle: item.dataset.sectionStyle,
          nextSectionPosition: (item.offsetHeight + margin) / 2 + item.offsetTop,
          sectionStart: item.offsetTop,
          sectionEnd: item.offsetTop + item.offsetHeight + margin
        };
      });

    const sectionOnView = sectionsData.find((el, i, arr) => {
      return el.sectionStart <= windowMiddle && el.sectionEnd >= windowMiddle;
    });

    console.log(sectionOnView);

    if (sectionOnView && sectionOnView.id !== currentSection.id) {
      //console.log(sectionOnView);
      // window.scrollTo(0, sectionOnView.sectionStart)
      setCurrentSection({ id: sectionOnView.id, sectionStyle: sectionOnView.sectionStyle });
    }

  };

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);

    return () => window.removeEventListener('scroll', scrollHandler);
  }, []);

  if (sliderLoading) {
    return <Loader />
  }

  return (
    <div
      ref={homeRef}
      className={styles.home}
      data-cy='home-page'
    >
      <SliderHomePage/>
      <CategoriesList/>
      <ConstructorPreview/>
      <ModelsList/>
      <OurLooks/>
      <ScrollBar
        currentSection={currentSection}
      />
    </div>
  );
};

export default Home;
