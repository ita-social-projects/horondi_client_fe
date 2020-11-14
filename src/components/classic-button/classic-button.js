import React from 'react';
import { useStyles } from './classic-button.styles';

export const ClassicButton = ({ buttonType, innerText, onClickHandler }) => {
  const styles = useStyles();

  return (
    <button
      type={buttonType}
      onClick={onClickHandler}
      className={styles.classicButton}
    >
      {innerText}
    </button>
  );
};
