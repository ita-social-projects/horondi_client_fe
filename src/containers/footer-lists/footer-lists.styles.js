import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  cardDeck: {
    display: 'flex'
  },
  cardBody: {
    flex: 1,
    padding: '25px',
    '@media screen and (max-width: 552px)': {
      width: '50%'
    }
  },

  cardTitle: {
    marginBottom: '10px',
    '@media screen and (max-width: 552px)': {
      textAlign: 'center'
    }
  },
  cardLink: {
    color: '#ffffff',
    '&:hover': {
      color: '#ffffff'
    }
  }
}));
