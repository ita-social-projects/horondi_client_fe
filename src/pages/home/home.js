import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';

import SliderHomePage from './slider';
import CategoriesList from './categories-list';
import OurLooks from './our-looks';
import { useStyles } from './home.styles';
import ScrollBar from '../../components/scroll-bar';
import ConstructorPreview from './contructor-preview';
import ModelsList from './modles-list';

const Home = () => {
  const location = useSelector(({ router }) => ({
    location: router.location.pathname
  }));

  const styles = useStyles();
  const homeRef = useRef(null);

  const [currentSection, setCurrentSection] = useState({ id: '#slider', sectionStyle: 'light' });

  const scrollHandler = () => {
    if (!homeRef.current) {
      return
    }
    console.log(Array.from(homeRef.current.children));
    const { scrollY } = window;
    const sectionsData = Array.from(homeRef.current.children)
      .slice(0, 5)
      .filter((item) => item.id)
      .map(item => {
        const styles = window.getComputedStyle(item);
        const margin = parseFloat(styles.marginTop) +
          parseFloat(styles.marginBottom);

        return {
          id: `#${item.id}`,
          sectionStyle: item.dataset.sectionStyle,
          nextSectionPosition: (item.offsetHeight + margin) / 2 + item.offsetTop,
          sectionStart: item.offsetTop,
        }
      })

    const sectionOnView = sectionsData.map((el, i, arr) => {
      const a = el.sectionStart <= scrollY && el.nextSectionPosition >= scrollY
      const b = el.sectionStart <= scrollY && el.nextSectionPosition <= scrollY

      if (a) {
        return el
      }
      if (b) {
        const ff = i + 1 === arr.length ? i : i + 1

        return arr[ff]
      }

      // return el.sectionStart <= scrollY && el.nextSectionPosition >= scrollY
    })

    if (sectionOnView && sectionOnView.id !== currentSection.id) {
      console.log(sectionOnView);
      // window.scrollTo(0, sectionOnView.sectionStart)
      setCurrentSection({id: sectionOnView.id, sectionStyle: sectionOnView.sectionStyle})
    }

  };

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);

    return () => window.removeEventListener('scroll', scrollHandler);
  }, []);

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
