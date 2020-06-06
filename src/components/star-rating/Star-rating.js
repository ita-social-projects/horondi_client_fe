import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import withStoreService from '../hoc';

const StarRatings = ({
  id,
  userId,
  precision = 1,
  size = 'small',
  readOnly = true,
  ratingService
}) => {
  const [value, setValue] = React.useState(0);

  const changeRating = (rate) => {
    ratingService.updateRate(id, userId, rate);
  };

  return (
    <div>
      <Box component='fieldset' mb={3} borderColor='transparent'>
        <Typography component='legend'>Ваша оцінка</Typography>
        <Rating
          name='simple-controlled'
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
            if (id && userId) {
              changeRating(newValue);
            }
          }}
        />
      </Box>
      <Box component='fieldset' mb={3} borderColor='transparent'>
        <Typography component='legend'>Read only</Typography>
        <Rating name='read-only' value={value} readOnly />
      </Box>
      <Box component='fieldset' mb={3} borderColor='transparent'>
        <Typography component='legend'>Disabled</Typography>
        <Rating name='disabled' value={value} disabled />
      </Box>
      <Box component='fieldset' mb={3} borderColor='transparent'>
        <Typography component='legend'>Pristine</Typography>
        <Rating name='pristine' value={null} />
      </Box>
    </div>
  );
};
export default withStoreService()(StarRatings);
