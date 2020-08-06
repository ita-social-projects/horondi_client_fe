import { makeStyles } from '@material-ui/core/styles';
import BG from '../../images/welcome.jpg';

export const useStyles = makeStyles((theme) => ({
  confirmation: {
    background: `url(${BG}) no-repeat `,
    backgroundSize: 'cover',
    height: '700px',
    position: 'relative'
  },
  welcome: {
    minHeight: '100px',
    padding: '30px',
    width: '400px',
    textAlign: 'center',
    position: 'absolute',
    top: '209px',
    left: '0px',
    right: '0px',
    margin: 'auto',
    borderRadius: '7px',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    '& h2': {
      margin: '0',
      color: 'white',
      textTransform: 'uppercase',
      fontSize: '48px'
    },
    '& h3': {
      margin: '0',
      color: 'white',
      fontSize: '24px'
    },
    '& button': {
      marginTop: '45px',
      height: '45px',
      backgroundColor: '#404040',
      color: 'white',
      width: '135px',
      '&:hover': {
        backgroundColor: 'black'
      }
    }
  },
  buttonGroup: {
    '& > *': {
      margin: theme.spacing(1),
      textTransform: 'capitalize'
    }
  }
}));
