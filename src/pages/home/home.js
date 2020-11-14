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

  const [childrenHeightData, setChildrenHeightData] = useState({});

  const setChildrenHeight = (parent) => {
    const data = {};
    data.totalHeight = parent.offsetHeight;

    Array.from(parent.children)
      .slice(0, 5)
      .forEach((item) => {
        data[item.id] = item.offsetHeight;
      });

    setChildrenHeightData(data);
  };

  const scrollHandler = (event) => {
    console.log(window);
    const fromTop = window.scrollY;

    console.log('scroll');
    console.log(fromTop);

    /*    Array.from(homeRef.current.children).forEach(section => {

      if (
        section.offsetTop <= fromTop &&
        section.offsetTop + section.offsetHeight > fromTop
      ) {
        console.log('add');
        section.classList.add('current');
      } else {
        console.log('remove');
        section.classList.remove('current');
      }
    });*/
  };

  window.addEventListener('scroll', () => {
    console.log('scroll');
  });

  // useEffect(() => {
  //   console.log('fffff');
  //   window.addEventListener('scroll', scrollHandler);
  // }, [])

  useEffect(() => {
    setChildrenHeight(homeRef.current);
    homeRef.current.addEventListener('scroll', scrollHandler);
  }, [homeRef]);

  return (
    <div
      ref={homeRef}
      className={styles.home}
      data-cy='home-page'
      onClick={() => console.dir(homeRef.current)}
      onScroll={() => console.log(homeRef.current.offsetTop)}
    >
      <div id='slider' className={styles.homeHeader}>
        <SliderHomePage />
      </div>
      <CategoriesList />
      <ConstructorPreview />
      <ModelsList />
      <OurLooks />
      <ScrollBar />
    </div>
  );
};

export default Home;
