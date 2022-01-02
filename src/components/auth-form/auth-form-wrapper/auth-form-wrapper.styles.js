import { makeStyles } from '@material-ui/core/styles';
import BG from '../../../images/9.jpg';

export const useStyles = makeStyles((theme) => ({
  imgBackground: {
    background: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${BG}) no-repeat `,
    backgroundSize: 'cover',
    position: 'relative',

    height: '100vh',
    '@media (max-width: 525px)': {
      background: 'none'
    }
  },
  outerForm: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden'
  },
  innerForm: {
    padding: '50px 118px',
    maxWidth: '685px',
    background: theme.palette.backgroundColor
  },
  minimumWidth: {
    minWidth: '280px'
  }
}));
