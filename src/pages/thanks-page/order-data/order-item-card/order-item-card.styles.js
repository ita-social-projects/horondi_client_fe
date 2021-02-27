import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

export const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    justifyContent: 'space-between'
  },
  image: {
    textAlign: 'center',
    width: '25%'
  },
  description: ({ isLightTheme }) => ({
    textAlign: 'center',
    width: '25%',
    color: isLightTheme ? '#ffffffff' : '#363636',
    fontSize: 18,
    fontWeight: 500
  }),
  imgItem: {
    height: 170,
    width: 150
  }
}));
