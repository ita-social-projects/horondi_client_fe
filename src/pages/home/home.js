import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import SliderHomePage from './slider';
import CategoriesList from './categories-list';
import OurLooks from './our-looks';
import { useStyles } from './home.styles';
import ScrollBar from '../../components/scroll-bar';
import ConstructorPreview from './contructor-preview';
import ModelsList from './modles-list';
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

  const [currentSection, setCurrentSection] = useState({ id: '#slider', sectionStyle: 'light', index: 0 });
  const [isScrolling, setIsScrolling] = useState(false)

  useEffect(() => {
    dispatch(getHomePageSliderImages());
  }, [dispatch]);

  const scrollHandler = (e) => {
    if (!homeRef.current || isScrolling) {
      return;
    }

    setIsScrolling(true)

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

    const currentSectionIndex = currentSection.index

    if (e.wheelDelta > 0) {
      const isElementExist = !!sectionsData[currentSectionIndex - 1]
      console.log('UP');
      console.log(sectionsData);
      console.log(currentSectionIndex - 1);
      console.log(sectionsData[currentSectionIndex - 1]);

      const nextSection = {
        id: sectionsData[currentSectionIndex - 1].id,
        sectionStyle: sectionsData[currentSectionIndex - 1].sectionStyle,
        index: sectionsData[currentSectionIndex - 1].index
      }
      isElementExist && setCurrentSection(nextSection);

      window.scrollTo(0, nextSection.sectionStart)

    } else if (e.wheelDelta < 0) {
      console.log('DOWN');
      console.log(sectionsData);
      console.log(currentSectionIndex + 1);
      console.log(sectionsData[currentSectionIndex + 1]);
      const isElementExist = !!sectionsData[currentSectionIndex + 1]

      const nextSection = {
        id: sectionsData[currentSectionIndex + 1].id,
        sectionStyle: sectionsData[currentSectionIndex + 1].sectionStyle,
        index: sectionsData[currentSectionIndex + 1].index
      }
      isElementExist && setCurrentSection(nextSection);

      window.scrollTo(0, nextSection.sectionStart)
    }
    const sectionOnView = sectionsData.find((el, i, arr) => el.sectionStart <= windowMiddle && el.sectionEnd >= windowMiddle);

    if (sectionOnView && sectionOnView.id !== currentSection.id) {

      setCurrentSection({ id: sectionOnView.id, sectionStyle: sectionOnView.sectionStyle });
      window.scrollTo(0, sectionOnView.sectionStart)
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
    window.addEventListener('mousewheel', scrollHandler)

    return () => window.removeEventListener('mousewheel', scrollHandler);
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
      <SliderHomePage />
      <CategoriesList />
      <ConstructorPreview />
      <ModelsList />
      <OurLooks />
      <ScrollBar
        currentSection={currentSection}
      />
    </div>
  );
};

export default Home;
