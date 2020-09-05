import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  center: {
    width: '3rem',
    margin: '22rem auto',
    '@media (max-width: 1400px)': {
      margin: '13rem auto'
    }
  }
}));
