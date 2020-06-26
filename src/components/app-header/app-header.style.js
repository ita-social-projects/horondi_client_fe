import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  root: {
    position: 'absolute',
    width: '100%',
    top: '0'
  },
  header: {
    backgroundColor: '#000000'
  },
  logo: {
    letterSpacing: '0.2rem',
    fontSize: '1.5rem',
    margin: '0 1rem',
    color: '#ffffff',
    textDecoration: 'none',
    fontFamily: 'Montserrat',
    fontWeight: 'bold'
  },
  link: {
    textDecoration: 'none',
    color: '#ffffff',
    padding: '0.3rem 0.5rem',
    fontSize: '1.2rem',
    letterSpacing: '0.1rem',
    transition: 'all 0.3s',
    '&:hover': {
      color: '#000000',
      backgroundColor: '#ffffff'
    },
    fontFamily: 'Montserrat',
    textTransform: 'uppercase'
  },
  icons: {
    marginLeft: '62%'
  }
}));
