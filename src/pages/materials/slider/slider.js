import clsx from 'clsx';
import React, { useState, useRef } from 'react';
import AwesomeSlider from 'react-awesome-slider';

import { useStyles } from './slider.styles';

const Slider = (props) => {
  const styles = useStyles();
  const { bulletsSet } = props;
  const [selected, setSelected] = useState(0);

  const onClickHandler = (e) => {
    sliderRef.current.goTo({ index: +e.target.dataset.index, direction: true });
    sliderRef.current.onTransitionRequest(+e.target.dataset.index);
  };

  const onTransitionEnd = (info, ...args) => {
    props.onTransitionEnd(info, ...args);
    setSelected(info.currentIndex);
  };

  const sliderRef = useRef();

  return (
    <div>
      <AwesomeSlider ref={sliderRef} {...props} onTransitionEnd={onTransitionEnd} />
      <div className={styles.container}>
        {bulletsSet &&
          bulletsSet.map((bullet, i) => (
            <img
              src={bullet}
              key={i}
              alt={i}
              className={clsx({
                [styles.image]: true,
                [styles.selected]: selected === i
              })}
              data-index={i}
              onClick={onClickHandler}
            />
          ))}
      </div>
    </div>
  );
};

export default Slider;
