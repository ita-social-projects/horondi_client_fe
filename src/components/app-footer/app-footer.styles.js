import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  root: {
    width: '100%'
  },
  footer: {
    backgroundColor: '#000000',
    color: '#ffffff',
    padding: '10px'
  },
  cardDeck: {
    display: 'flex',
    flexFlow: 'row wrap'
  },
  icons: {
    position: 'relative',
    fontSize: '2rem',
    paddingRight: '0.8rem',
    color: '#ffffff'
  }
}));
