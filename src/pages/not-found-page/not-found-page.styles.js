import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '70vh'
  },
  link: {
    color: '#1976D2'
  },
  button: {
    fontFamily: 'Open Sans',
    fontWeight: '600',
    fontSize: '14px',
    marginBottom: '1.2em',
    color: theme.palette.button.normal.color,
    backgroundColor: theme.palette.button.normal.backgroundColor,
    '&:hover': {
      color: theme.palette.button.hover.color,
      backgroundColor: theme.palette.button.hover.backgroundColor
    }
  },
  imageContainer: {
    display: 'inline-block'
  },
  image: {
    height: '100%',
    width: '100%',
    maxWidth: '100%',
    maxHeight: '100%',
    objectFit: 'contain',
    objectPosition: 'center',
    transform: 'translateY(11%)',
    '@media (max-width: 768px)': {
      maxWidth: '80px',
      maxHeight: '120px'
    }
  },
  info: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& h2': {
      margin: '15px 20px',
      fontFamily: 'Montserrat',
      fontWeight: 'bold',
      textAlign: 'center',
      fontSize: '280px',
      '@media (max-width: 768px)': {
        fontSize: '120px'
      }
    },
    '& h3': {
      fontFamily: 'Montserrat',
      fontWeight: 'bold',
      fontSize: '24px',
      margin: '0px',
      textAlign: 'center'
    },
    '& p': {
      fontFamily: 'Montserrat',
      fontWeight: '500',
      fontSize: '16px',
      margin: '0px 0px 24px 0px',
      textAlign: 'center'
    }
  }
}));
