import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  logo: {
    letterSpacing: '0.2rem',
    fontSize: '1.5rem',
    margin: '0 0.6rem 0 0.2rem',
    color: '#ffffff',
    textDecoration: 'none',
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    '@media (max-width: 900px)': {
      marginLeft: '-20px',
      fontSize: '1rem'
    }
  },
  link: {
    textDecoration: 'none',
    color: '#ffffff',
    padding: '0.3rem 0.5rem',
    fontSize: '1.2rem',
    letterSpacing: '0.1rem',
    transition: 'all 0.3s',
    cursor: 'pointer',
    '&:hover': {
      color: '#000000',
      backgroundColor: '#ffffff'
    },
    fontFamily: 'Montserrat',
    textTransform: 'uppercase',
    '@media (max-width: 900px)': {
      display: 'none'
    }
  },
  moreItem: {
    minWidth: '6rem',
    margin: '0.5rem',
    borderRadius: 0
  },
  moreItemLink: {
    textDecoration: 'none',
    fontSize: '1.2rem',
    fontFamily: 'Montserrat',
    textTransform: 'uppercase',
    color: '#000'
  }
}));
