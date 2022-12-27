import React from 'react';
import PropTypes from 'prop-types';
import { Rating } from '@material-ui/lab';

const StarRating = ({ rate, size = 'normal', disabled = false, precision = 0.1, readOnly }) => (
  <Rating
    name='simple-controlled'
    value={rate}
    size={size}
    disabled={disabled}
    precision={precision}
    readOnly
  />
);
StarRating.propTypes = {
  rate: PropTypes.number,
  size: PropTypes.string,
  disabled: PropTypes.bool,
  precision: PropTypes.number
};
StarRating.defaultProps = {
  rate: 1,
  size: 'small',
  disabled: false,
  precision: 0.1
};
export default StarRating;
