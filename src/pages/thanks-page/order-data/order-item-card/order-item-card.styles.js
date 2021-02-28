import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

export const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    justifyContent: 'space-between'
  },
  image: {
    textAlign: 'center',
    width: '25%',
    borderTop: '1px solid #636262',
    borderBottom: '1px solid #636262'
  },
  description: ({ isLightTheme }) => ({
    textAlign: 'center',
    width: '25%',
    color: isLightTheme ? '#fff' : '#363636',
    fontSize: 15,
    fontWeight: 500,
    borderTop: '1px solid #636262',
    borderBottom: '1px solid #636262'
  }),
  imgItem: {
    height: 140,
    width: 120
  }
}));
