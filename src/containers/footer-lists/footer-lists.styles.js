import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  cardDeck: {
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      flexFlow: 'row wrap',
      width: '71%'
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  },
  cardBody: {
    [theme.breakpoints.up('sm')]: {
      flex: '1 1 auto',
      minHeight: '1px',
      padding: '1.25rem'
    },
    [theme.breakpoints.down('sm')]: {
      minHeight: '1px',
      padding: '1.25rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
  },
  cardTitle: {
    fontSize: '1.25rem',
    marginBottom: '0.75rem'
  },
  cardLink: {
    color: '#ffffff',
    '&:hover': {
      color: '#ffffff'
    }
  }
}));
