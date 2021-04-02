import clsx from 'clsx';
import React, { useState, useEffect, useRef } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import { useStyles } from './slider.styles';

const Slider = (props) => {
  const styles = useStyles();
  const { bulletsSet } = props;
  const [selected, setSelected] = useState(0);

  const onClickHandler = (e) => {
    slider.current.goTo({ index: +e.target.dataset.index, direction: true });
    slider.current.onTransitionRequest(+e.target.dataset.index);
  };

  const slider = useRef();

  useEffect(() => {
    setSelected(slider.current.index);
  }, [slider.current?.index]);

  return (
    <div>
      <AwesomeSlider ref={slider} {...props} />
      <div className={styles.container}>
        {bulletsSet &&
          bulletsSet.map((bullet, i) => (
            <img
              src={bullet}
              key={`${bullet}${i}`}
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
