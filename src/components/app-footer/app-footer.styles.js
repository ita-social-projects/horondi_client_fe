import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  root: {
    width: '100%'
  },
  footer: {
    backgroundColor: '#000000',
    color: '#ffffff',
    padding: '10px',
    display: 'flex',
    clear: 'both'
  },
  cardDeck: {
    display: 'flex',
    width: '100%',
    '& a': {
      transition: 'color .2s ease'
    },
    '& a:hover': {
      color: '#bebebe'
    },
    '@media screen and (max-width: 552px)': {
      flexDirection: 'column',
      alignItems: 'center'
    }
  },
  icons: {
    position: 'relative',
    fontSize: '2rem',
    paddingRight: '0.8rem',
    color: '#ffffff'
  }
}));
