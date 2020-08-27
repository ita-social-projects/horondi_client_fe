import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  container: {
    fontFamily: 'Montserrat',
    width: '80%',
    minHeight: '1200px',
    margin: '2rem auto',
    backgroundColor: theme.palette.card.backgroundColor,
    border: theme.palette.card.border,
    boxSizing: 'border-box',
    borderRadius: '5px',
    '@media (max-width: 600px)': {
      width: '100vw',
      margin: '0'
    }
  },
  product: {
    display: 'grid',
    gridTemplateColumns: '50% 50%',
    padding: '2rem',
    '@media (max-width: 1000px)': {
      display: 'block'
    },
    '@media (max-width: 400px)': {
      padding: '0.5rem'
    }
  },
  productDetails: {
    wordSpacing: '0.2rem',
    fontWeight: '500',
    '@media (max-width: 600px)': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center'
    },
    '@media (max-width: 300px)': {
      padding: '0'
    }
  },
  center: {
    width: '3rem',
    margin: '22rem auto',
    '@media (max-width: 1400px)': {
      margin: '13rem auto'
    }
  }
}));
