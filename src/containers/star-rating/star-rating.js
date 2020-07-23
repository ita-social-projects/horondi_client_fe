import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Rating } from '@material-ui/lab';

const StarRating = ({
  rate = 3,
  size = 'normal',
  disabled = false,
  precision = 0.5
}) => {
  const [value, setValue] = useState(rate);
  const changeHandler = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Rating
      name='simple-controlled'
      value={value}
      size={size}
      onChange={changeHandler}
      disabled={disabled}
      precision={precision}
    />
  );
};
StarRating.propTypes = {
  rate: PropTypes.number
};
StarRating.defaultProps = {
  rate: 1
};
export default StarRating;
