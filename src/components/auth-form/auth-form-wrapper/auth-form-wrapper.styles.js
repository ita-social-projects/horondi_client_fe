import { makeStyles } from '@material-ui/core/styles';
import BG from '../../../images/9.jpg';

export const useStyles = makeStyles((theme) => ({
  imgBackground: {
    background: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${BG}) no-repeat `,
    backgroundSize: 'cover',
    position: 'relative',
    padding: '50px 0',
    '@media (max-width: 620px)': {
      background: 'none',
      padding: 0
    }
  },
  outerForm: {
    minHeight: 'calc(100vh - 320px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden'
  },
  innerForm: {
    padding: '50px 106px',
    maxWidth: '620px',
    background: theme.palette.backgroundColor,
    '@media (max-width: 620px)': {
      maxWidth: '100%'
    },
    '@media (max-width: 550px)': {
      padding: '50px 72px'
    },
    '@media (max-width: 450px)': {
      padding: '50px 32px'
    }
  }
}));
