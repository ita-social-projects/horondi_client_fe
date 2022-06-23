import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  head: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '15px',
    '@media (max-width: 600px)': {
      flexDirection: 'column',
      alignItems: 'center'
    },
    '@media (max-width: 1150px)': {
      flexDirection: 'row'
    }
  },
  rate: {
    display: 'block'
  },

  title: {
    fontSize: '30px',
    lineHeight: '41px',
    fontWeight: 600
  },
  description: {
    textAlign: 'left',
    '@media (max-width: 400px)': {
      padding: '0'
    }
  },
  priceContainer: {
    marginBottom: '16px'
  },
  notAvailable: {
    textAlignLast: 'center',
    color: theme.palette.red,
    background: theme.palette.lightPing,
    padding: '6px',
    fontSize: '16px',
    lineHeight: '20px',
    letterSpacing: '0.06em',
    borderRadius: '4px'
  },
  price: {
    display: 'flex',
    alignItems: 'center',
    fontWeight: 700,
    fontSize: '24px',
    lineHeight: '33px',
    color: theme.palette.textColor,
    '& svg': {
      color: theme.palette.textColor,
      fontSize: '24px',
      lineHeight: '33px'
    }
  },
  look: {
    wordSpacing: '0.2rem',
    '& img': {
      display: 'block'
    }
  },
  colorAndPatern: {
    position: 'relative',
    margin: '20px 0',
    display: 'block',
    alignItems: 'center'
  },
  subtitle: {
    alignSelf: 'center',
    fontSize: '14px',
    '@media (max-width: 600px)': {
      justifyContent: 'center'
    }
  },
  subtitleBold: {
    fontWeight: '700'
  },
  details: {
    '& div': {
      marginBottom: '0.3rem'
    }
  },
  text: {
    color: theme.palette.textColor,
    margin: '16px 0',
    letterSpacing: '0.0125em',
    '& p': {
      lineHeight: '20px',
      fontSize: '14px',
      display: 'inline',
      margin: '0'
    }
  },
  circle: {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    transition: 'border-radius .2s'
  },
  comments: {
    color: theme.palette.textColor,
    display: 'block',
    textDecorationLine: 'underline'
  },
  patternButton: {
    position: 'absolute',
    padding: 0,
    display: 'block',
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'zoom-in',
    zIndex: 10
  },
  zoomedPattern: {
    width: 'auto',
    height: 'auto',
    maxWidth: '200px',
    borderRadius: 0,
    cursor: 'zoom-out'
  }
}));
