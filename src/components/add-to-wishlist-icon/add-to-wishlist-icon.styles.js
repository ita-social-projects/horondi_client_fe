import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(({ palette }) => ({
  heart: {
    padding: 0,
    alignSelf: 'center',
    '& svg': {
      fontSize: '22px',
      '&:hover': {
        transform: 'scale(1.1)'
      }
    }
  }
}));
