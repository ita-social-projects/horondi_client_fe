import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ palette }) => ({
  cardDeck: {
    display: 'flex'
  },
  cardBody: {
    '& h6': {
      padding: '4px 0',
      fontSize: '14px',
      color: palette.white,
      '@media screen and (max-width: 500px)': {
        fontSize: '12px'
      }
    }
  },

  cardTitle: {
    marginBottom: '10px',
    '& h5': {
      fontSize: '16px',
      fontWeight: '600',
      '@media screen and (max-width: 500px)': {
        fontSize: '14px'
      }
    }
  },
  cardLink: {
    color: palette.white,
    fontSize: '14px',
    '&:hover': {
      color: palette.white
    },
    '@media screen and (max-width: 500px)': {
      fontSize: '12px'
    }
  },
  contactsListContainer: {
    display: 'flex',
    '&>img': {
      paddingRight: '18px'
    }
  },
  catalogs: {
    '@media (max-width: 768px)': {
      gridColumn: 2,
      gridRow: 1
    },
    '@media (max-width: 410px)': {
      gridColumn: 1,
      gridRow: 2
    }
  },
  footerInformation: {
    '@media (max-width: 768px)': {
      gridColumn: 1,
      gridRow: 2
    },
    '@media (max-width: 410px)': {
      gridColumn: 1,
      gridRow: 3
    }
  },
  contacts: {
    '@media (max-width: 768px)': {
      gridColumn: 2,
      gridRow: 2
    },
    '@media (max-width: 410px)': {
      gridColumn: 1,
      gridRow: 4
    }
  }
}));
