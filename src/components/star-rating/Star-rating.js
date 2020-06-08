import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import withStoreService from '../../../hoc';

const StarRatings = ({
  id,
  userId,
  precision = 1,
  size = 'small',
  readOnly = false,
  disabled = false,
  ratingService
}) => {
  const [value, setValue] = React.useState(0);

  const changeRating = (rate) => {
    ratingService.updateRate(id, userId, rate);
  };
  const changeHandler = (event, newValue) => {
    setValue(newValue);
    if (id && userId) {
      changeRating(newValue);
    }
  };
  return (
    <div>
      <Box component='fieldset' mb={3} borderColor='transparent'>
        <Typography component='legend'>Ваша оцінка</Typography>
        <Rating
          name='simple-controlled'
          value={value}
          readOnly={readOnly}
          disabled={disabled}
          size={size}
          onChange={changeHandler}
        />
      </Box>
    </div>
  );
};
export default withStoreService()(StarRatings);
