import React from 'react';
import Typography from '@material-ui/core/Typography';
import Loader from '../components/loader';

export const handleSearchListLoading = (searchBarLoading, className, nothingFound) =>
  searchBarLoading ? (
    <Loader />
  ) : (
    <Typography className={className} variant='h3'>
      {nothingFound}
    </Typography>
  );
