import React, { useState, useEffect } from 'react';
import ScrollBar from '../scroll-bar';

const fakeRef = {
  current: {
    children: [
      {
        id: 'slider',
        dataset: {
          sectionStyle: undefined
        },
        offsetTop: 75,
        offsetHeight: 564
      },
      {
        id: 'catalog',
        dataset: {
          sectionStyle: 'light'
        },
        offsetTop: 639,
        offsetHeight: 612
      },
      {
        id: 'constructor',
        dataset: {
          sectionStyle: 'dark'
        },
        offsetTop: 1301,
        offsetHeight: 1127
      },
      {
        id: 'models',
        dataset: {
          sectionStyle: 'light'
        },
        offsetTop: 2478,
        offsetHeight: 960
      },
      {
        id: 'horondiStyle',
        dataset: {
          sectionStyle: 'light'
        },
        offsetTop: 3438,
        offsetHeight: 700
      }
    ]
  }
};

export const TestWrapper = () => {
  const [didMount, setDidMount] = useState(false);

  useEffect(() => {
    setDidMount(true);

    return () => setDidMount(false);
  }, []);

  return (
    <>
      <div>
        <div id='slider' style={{ height: '564px' }}>
          SliderHomePage
        </div>
        <div id='catalog' style={{ height: '612px' }}>
          CategoriesList
        </div>
        <div id='constructor' style={{ height: '1121px' }}>
          ConstructorPreview
        </div>
        <div id='models' style={{ height: '960px' }}>
          ModelsList
        </div>
        <div id='horondiStyle' style={{ height: '700px' }}>
          OurLooks
        </div>
      </div>
      {didMount && <ScrollBar homeRef={fakeRef} />}
    </>
  );
};
