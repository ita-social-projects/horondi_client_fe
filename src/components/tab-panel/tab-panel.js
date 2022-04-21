import React from 'react';
import { Typography } from '@material-ui/core';

const TabPanel = ({ children, value, index, ...rest }) => (
  <Typography
    component='div'
    role='tabpanel'
    hidden={value !== index}
    aria-label={`tab panel ${index + 1}`}
    {...rest}
  >
    {children}
  </Typography>
);

export default TabPanel;
