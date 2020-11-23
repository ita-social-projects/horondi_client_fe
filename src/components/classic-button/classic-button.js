import React from 'react';
import { useStyles } from './classic-button.styles';

export const ClassicButton = ({
  buttonType,
  innerText,
  onClickHandler,
  buttonStyle,
  customStyles = {}
}) => {
  const styles = useStyles();

  return (
    <button
      type={buttonType}
      onClick={onClickHandler}
      className={styles[buttonStyle]}
      style={{ ...customStyles }}
    >
      {innerText}
    </button>
  );
};
