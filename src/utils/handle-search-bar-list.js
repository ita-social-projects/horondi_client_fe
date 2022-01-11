import React from 'react';
import Typography from '@material-ui/core/Typography';
import { NOTHING_FOUND_MESSAGE } from '../configs';
import Loader from '../components/loader';

export const handleSearchListLoading = (searchBarLoading, className, language) =>
  searchBarLoading ? (
    <Loader />
  ) : (
    <Typography className={className} variant='h3'>
      {NOTHING_FOUND_MESSAGE[language]}
    </Typography>
  );
