import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  root: {
    margin: '50px auto'
  },
  backButton: {
    '&:visited': {
      color: 'inherit'
    },
    '& > svg': {
      fontSize: '2.5em',
      transition: 'transform .2s ease',
      '&:hover': {
        transform: 'scale(1.1)'
      }
    }
  }
}));
