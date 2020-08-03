import { makeStyles } from '@material-ui/core/styles';
import BG from '../../images/2.jpg';

export const useStyles = makeStyles((theme) => ({
  welcome: {
    background: `url(${BG}) no-repeat `,
    backgroundSize: 'cover',
    height: '1000px'
  },
  welcomeWrapper: {
    width: '100%',
    height: '100%'
  },
  titleStyle: {
    position: 'absolute',
    width: '269px',
    height: '39px',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '48px',
    lineHeight: '59px',
    color: '#FFFFFF'
  },
  subTitleStyle: {
    position: 'absolute',
    width: '386px',
    height: '29px',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '24px',
    lineHeight: '29px',
    color: '#FFFFFF'
  },
  buttonStyle: {
    position: 'absolute',
    width: '235px',
    height: '45px',
    background: '#404040',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: '5px'
  }
}));
