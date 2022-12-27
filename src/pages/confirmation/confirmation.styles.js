import { makeStyles } from '@material-ui/core/styles';
import BG from '../../images/welcome.jpg';

export const useStyles = makeStyles((theme) => ({
  confirmation: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: `center/cover url(${BG}) no-repeat `,
    flex: 1,
    '@media (max-width: 768px)': {
      padding: '30px 10px 20px 10px'
    }
  },
  welcome: {
    display: 'flex',
    flexDirection: 'column',
    minWidth: '320px',
    padding: '32px',
    textAlign: 'center',
    borderRadius: '7px',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    '& button': {
      marginTop: '45px',
      backgroundColor: '#404040',
      color: 'white',
      width: '135px',
      '&:hover': {
        backgroundColor: 'black'
      },
      '@media (max-width: 400px)': {
        width: '114px'
      }
    }
  },
  buttonGroup: {
    '& > *': {
      margin: theme.spacing(1),
      textTransform: 'capitalize'
    }
  },
  text: {
    color: theme.palette.common.white,
    marginBottom: '12px'
  }
}));
