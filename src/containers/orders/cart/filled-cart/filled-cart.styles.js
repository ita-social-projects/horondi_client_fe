import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    margin: '50px auto',
    padding: 20,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  orderWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    '@media (max-width: 768px)': {
      flexDirection: 'column'
    }
  },
  similarProductsWrapper: {
    display: 'flex',
    justifyContent: 'center'
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
