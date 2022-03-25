import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ palette }) => ({
  cardDeck: {
    display: 'flex'
  },
  cardBody: {
    flex: 1,
    padding: '50px 25px 25px',
    '& h6': {
      padding: '4px 0',
      fontSize: '12px',
      color: palette.white
    },
    '@media screen and (max-width: 768px)': {
      flex: '1 1 50%'
    },
    '@media screen and (max-width: 552px)': {
      flex: 1,
      textAlign: 'center',
      width: '100%',
      padding: '10px 25px',
      borderBottom: '1px solid #9d9d9d'
    }
  },

  cardTitle: {
    marginBottom: '10px',
    '& h5': {
      fontSize: '14px',
      fontWeight: '600'
    }
  },
  cardLink: {
    color: palette.white,
    fontSize: '12px',
    '&:hover': {
      color: palette.white
    }
  },
  contactsListContainer: {
    display: 'flex',
    '&>img': {
      paddingRight: '18px'
    },
    '@media screen and (max-width: 552px)': {
      justifyContent: 'center'
    }
  }
}));
