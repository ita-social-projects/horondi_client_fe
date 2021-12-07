import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  head: {
    display: 'flex',
    justifyContent: 'space-between',
    '@media (max-width: 600px)': {
      flexDirection: 'column',
      alignItems: 'center'
    },
    marginBottom: '15px'
  },
  title: {
    fontSize: '1.4rem',
    fontWeight: '700'
  },
  description: {
    textAlign: 'left',
    '@media (max-width: 400px)': {
      padding: '0'
    }
  },
  priceContainer: {
    marginTop: '0.5rem'
  },
  price: {
    fontSize: '1.17rem',
    fontWeight: '700',
    marginLeft: 7,
    color: theme.palette.textColor,
    '@media (max-width: 600px)': {
      fontSize: '1rem',
      marginLeft: 3
    },
    alignSelf: 'center'
  },
  look: {
    display: 'flex',
    wordSpacing: '0.2rem',
    maxHeight: '4.5rem',
    '@media (max-width: 600px)': {
      justifyContent: 'center'
    }
  },
  subtitle: {
    fontWeight: '700',
    alignSelf: 'center',
    '@media (max-width: 600px)': {
      justifyContent: 'center'
    }
  },
  details: {
    '& div': {
      marginBottom: '0.3rem'
    }
  },
  circle: {
    width: '2.5rem',
    height: '2.5rem',
    borderRadius: '50%',
    margin: '1rem 1.5rem 0.8rem 0.5rem'
  }
}));
