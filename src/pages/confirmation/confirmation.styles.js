import { makeStyles } from '@material-ui/core/styles';
import BG from '../../images/welcome.jpg';

export const useStyles = makeStyles((theme) => ({
  confirmation: {
    background: `center/cover url(${BG}) no-repeat `,
    flex: 1
  },
  welcome: {
    height: '200px',
    position: 'absolute',
    top: '0',
    left: '0',
    right: '0',
    bottom: '150px',
    margin: 'auto',
    padding: '20px',
    width: '400px',
    textAlign: 'center',
    borderRadius: '7px',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    '& h2': {
      margin: '0',
      color: 'white',
      textTransform: 'uppercase',
      fontSize: '3rem'
    },
    '& h3': {
      margin: '0',
      color: 'white',
      fontSize: '1.5rem'
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
