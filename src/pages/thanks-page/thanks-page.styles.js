import { makeStyles } from '@material-ui/core/styles';
import BG from '../../images/rectangle.png';

export const useStyles = makeStyles((theme) => ({
  thanks: {
    background: `url(${BG}) no-repeat center`,
    backgroundSize: 'cover',
    height: '800px',
    fontFamily: 'Montserrat',
    color: '#FFFFFF',
    display: 'flex',
    justifyContent: 'flex-end',
    padding: 50
  },
  thanksWrapper: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  },
  titleStyle: {
    fontWeight: '600',
    fontSize: '4em',
    '@media (max-width: 768px)': {
      fontSize: '3em'
    }
  },
  buttonStyle: {
    background: theme.palette.button.normal.backgroundColor,
    borderRadius: '5px',
    fontSize: '1.5em',
    padding: 10,
    color: theme.palette.button.normal.color,
    '& a': {
      color: 'inherit'
    },
    '&:hover': {
      backgroundColor: theme.palette.button.hover.backgroundColor,
      color: theme.palette.button.hover.color
    },
    '@media (max-width: 768px)': {
      fontSize: '1em',
      padding: 5
    }
  }
}));
