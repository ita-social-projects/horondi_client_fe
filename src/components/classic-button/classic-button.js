import React from 'react';
import { useStyles } from './classic-button.styles';

export const ClassicButton = ({
  buttonType,
  innerText,
  onClickHandler,
  style
}) => {
  const styles = useStyles();

  return (
    <button
      type={buttonType}
      onClick={onClickHandler}
      className={styles[style]}
    >
      {innerText}
    </button>
  );
};
