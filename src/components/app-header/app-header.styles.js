import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    scrollSnapStop: 'none',
    scrollSnapAlign: 'start'
  },
  header: {
    backgroundColor: '#000000',
    position: 'fixed',
    '@media (max-width: 768px)': {
      position: 'fixed',
      top: 0,
      zIndex: 1000,
      height: '40px',
      transition: 'all 1s linear'
    }
  },
  headerSticky: {
    backgroundColor: '#212121ab',
    position: 'fixed',
    '@media (max-width: 768px)': {
      position: 'fixed',
      top: 0,
      zIndex: 1000,
      height: '40px',
      transition: 'all 0.5s ease-out'
    }
  },
  logo: {
    letterSpacing: '0.2rem',
    fontSize: '1.5rem',
    margin: '0 0.6rem 0 0.2rem',
    color: '#ffffff',
    textDecoration: 'none',
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    '@media (max-width: 768px)': {
      marginLeft: '-20px',
      fontSize: '1rem'
    }
  },
  menuButton: {
    color: '#ffffff'
  },
  categories: {
    flexGrow: 1
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },
  item: {
    width: '280px',
    height: '30px'
  },
  icon: {
    '@media (min-width: 900px)': {
      width: '3px'
    }
  },
  rightBar: {}
}));
