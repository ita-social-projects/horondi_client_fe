import { makeStyles } from '@material-ui/core/styles';
import BACKGROUND from '../../images/9.jpg';
import BACKGROUND_REGISTERED_USER from '../../images/4.jpg';

export const useStyles = makeStyles((theme) => ({
  registerContainer: {
    overflowX: 'hidden',
    height: '875px'
  },
  formContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '61px 0',
    zIndex: 2
  },
  registerBackground: {
    height: '875px',
    width: '100%',
    position: 'absolute',
    zIndex: 1,
    background: `url(${BACKGROUND}) no-repeat `,
    backgroundSize: 'cover',
    filter: 'brightness(30%) contrast(90%)'
  },
  formWrapper: {
    alignItems: 'center',
    width: '684px',
    height: '753px',
    zIndex: 3,
    filter: 'drop-shadow(8px 8px 10px dark-gray)',
    '& .MuiGrid-item': {
      padding: '0px !important'
    },
    '@media (max-width: 959px)': {
      padding: '0 50px'
    },
    '@media (max-width: 525px)': {
      padding: '0 15px'
    }
  },
  formBackgroundRegisteredUser: {
    height: '350px',
    width: '275px',
    background: `url(${BACKGROUND_REGISTERED_USER}) no-repeat `,
    backgroundSize: 'cover',
    '@media (max-width: 959px)': {
      display: 'none'
    }
  },
  registerSuccess: {
    backgroundColor: theme.palette.backgroundColor,
    width: '100%',
    height: '350px',
    padding: '30px 63px 63px',
    '& p': {
      textAlign: 'center',
      fontSize: '20px'
    }
  },
  registerSuccessInfo: {
    display: 'flex',
    flexDirection: 'column',
    height: '225px'
  },
  registerBtn: {
    border: '1px solid black',
    borderRadius: '4px',
    marginBottom: '10px',
    textTransform: 'capitalize',
    backgroundColor: 'white',
    color: 'black',
    '&:hover': {
      color: theme.palette.button.normal.backgroundColor
    },
    alignItems: 'center'
  },
  infoLogo: {
    width: '34px',
    height: '34px',
    margin: '0 auto',
    display: 'block',
    marginBottom: '23px'
  }
}));
