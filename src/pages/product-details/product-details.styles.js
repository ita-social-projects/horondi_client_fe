import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  container: {
    fontFamily: 'Open San',
    width: '80%',
    minHeight: '1200px',
    margin: '2rem auto',
    boxSizing: 'border-box',
    '@media (max-width: 600px)': {
      width: '100%',
      margin: '0'
    }
  },
  product: {
    display: 'flex',
    padding: '2rem',
    '@media (max-width: 1150px)': {
      display: 'block'
    },
    '@media (max-width: 400px)': {
      padding: '0.5rem'
    }
  },
  test: {
    display: 'flex',
    alignItems: 'center'
  },
  productDetails: {
    flex: '1 1 40%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    wordSpacing: '0.2rem',
    fontWeight: '500',
    marginLeft: '20px',
    '@media (max-width: 600px)': {
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
  },
  backBtn: {
    display: 'flex',
    alignItems: 'center',
    padding: '20px 0 0 20px',
    width: 120,
    transition: '0.1s',
    '&:hover': {
      transform: 'scale(1.1)'
    }
  }
}));
