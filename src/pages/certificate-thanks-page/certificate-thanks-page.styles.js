import { makeStyles } from '@material-ui/core/styles';
import BG from '../../images/9.jpg';

export const useStyles = makeStyles(() => ({
  thanksBackground: {
    background: `url(${BG}) no-repeat center center fixed`,
    backgroundSize: 'cover',
    height: '100vh',
    '@media (min-height: 900px)': {
      height: '80vh'
    }
  },
  thanksInfo: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center'
  }
}));
