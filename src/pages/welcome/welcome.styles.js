import { makeStyles } from '@material-ui/core/styles';
import BG from '../../images/welcome.jpg';

export const useStyles = makeStyles(() => ({
  welcome: {
    background: `url(${BG}) no-repeat `,
    backgroundSize: 'cover',
    height: '1000px',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    color: '#FFFFFF'
  },
  welcomeWrapper: {
    width: '100%',
    height: '100%'
  },
  titleStyle: {
    width: '27%',
    height: '39px',
    fontWeight: '600',
    fontSize: '48px',
    lineHeight: '59px'
  },
  subTitleStyle: {
    width: '38%',
    height: '29px',
    fontWeight: '600',
    fontSize: '24px',
    lineHeight: '29px'
  },
  buttonStyle: {
    width: '10%',
    height: '45px',
    background: '#404040',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: '5px',
    fontWeight: 'normal',
    fontSize: '18px',
    lineHeight: '22px',
    color: '#FFFFFF'
  }
}));
