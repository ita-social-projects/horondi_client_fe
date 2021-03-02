import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

export const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    justifyContent: 'space-between'
  },
  image: ({ isLightTheme }) => ({
    textAlign: 'center',
    width: '25%',
    borderTop: !isLightTheme ? '1px solid #636262' : '1px solid snow',
    borderBottom: !isLightTheme ? '1px solid #636262' : '1px solid snow'
  }),
  description: ({ isLightTheme }) => ({
    textAlign: 'center',
    width: '25%',
    fontSize: 15,
    fontWeight: 500,
    borderTop: !isLightTheme ? '1px solid #636262' : '1px solid snow',
    borderBottom: !isLightTheme ? '1px solid #636262' : '1px solid snow'
  }),
  imgItem: {
    height: 140,
    width: 120
  }
}));
