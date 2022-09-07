import { makeStyles } from '@material-ui/core/styles';
import BG from '../../images/9.jpg';

export const useStyles = makeStyles(({ palette }) => ({
  thanksBackground: {
    background: `url(${BG}) no-repeat center center fixed `,
    backgroundSize: 'cover',
    height: '100%',
    position: 'relative'
  },
  linkToPayment: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 400,
    fontSize: 17,
    outline: 'none',
    background: palette.button.normal.backgroundColor,
    borderRadius: '10px',
    width: 250,
    marginBottom: 50,
    height: 43,
    alignSelf: 'flex-end',
    marginRight: '11%',
    cursor: 'pointer',
    color: palette.button.normal.color,
    '&:hover': {
      backgroundColor: palette.button.hover.backgroundColor,
      color: palette.button.hover.color
    }
  },
  thanksInfo: {
    height: '100%',
    width: '100%'
  }
}));
