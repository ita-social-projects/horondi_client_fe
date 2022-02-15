import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: '1200px',
    boxSizing: 'border-box',
    background: 'none',
    '@media (max-width: 600px)': {
      width: '100%',
      margin: '0'
    },
    boxShadow: 'none'
  },
  product: {
    display: 'flex',
    flexWrap: 'wrap',
    '@media (max-width: 1150px)': {
      display: 'block'
    }
  },
  test: {
    display: 'flex',
    alignItems: 'center'
  },
  productDetails: {
    flex: '1 1 50%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    wordSpacing: '0.2rem',
    fontWeight: '500',
    paddingLeft: '20px',
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
    alignItems: 'center',
    width: 120,
    transition: '0.1s',
    '&:hover': {
      transform: 'scale(1.1)'
    }
  },
  arrowIcon: {
    fontSize: '52px',
    fill: theme.palette.arrowIcon.arrowColor
  }
}));
