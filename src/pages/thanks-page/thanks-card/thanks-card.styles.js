import { makeStyles } from '@material-ui/core/styles';
import BG from '../../../images/thanks.png';

const whiteText = '#FEFEFE';
const blackText = '#242424';

export const useStyles = makeStyles(({ palette }) => ({
  thanksCardContainer: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageWrapper: {
    background: `url(${BG}) no-repeat center center`,
    backgroundSize: 'cover',
    height: '600px',
    width: '460px',
    '@media (max-width: 959px)': {
      display: 'none'
    }
  },
  infoCard: {
    backgroundColor: palette.type === 'light' ? '#FFFFFF' : '#242424',
    width: '460px',
    minHeight: '499px',
    left: '260px',
    top: '268px'
  },
  thanksForBuy: {
    margin: '40px 30px 40px 30px',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '26px',
    lineHeight: '32px',
    textAlign: 'center',
    color: palette.type === 'light' ? blackText : whiteText
  },
  orderNumber: {
    color: palette.type === 'light' ? blackText : whiteText,
    fontSize: '22px',
    textAlign: 'center'
  },
  customerInfo: {
    margin: '10px 25px 10px 25px'
  },
  infoChunk: {
    margin: '10px 25px 10px 25px',
    fontSize: '16px',
    color: palette.type === 'light' ? blackText : whiteText
  },
  chunkName: {
    display: 'inline'
  },
  chunkValue: {
    display: 'inline',
    fontWeight: 'bold'
  },
  controllBlock: {
    marginTop: '5%'
  },
  continueShopping: {
    margin: '10px 10% 10px 10%',
    backgroundColor: palette.button.normal.backgroundColor,
    color: palette.button.normal.color,
    '&:hover': {
      backgroundColor: palette.button.hover.backgroundColor
    },
    width: '80%',
    height: '44px',
    borderRadius: '1px',
    borderColor: palette.type === 'light' ? blackText : whiteText,
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '14px',
    lineHeight: '20px',
    letterSpacing: '0.0125em',
    textTransform: 'uppercase'
  },
  goToHomePage: {
    margin: '10px 10% 10px 10%',
    color: palette.textColor,
    backgroundColor: palette.backgroundColor,
    '&:hover': {
      backgroundColor: palette.button.hoverSecondary.backgroundColor
    },
    width: '80%',
    height: '44px',
    borderRadius: '1px',
    borderColor: palette.button.normal.borderColor,

    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '14px',
    lineHeight: '20px',
    letterSpacing: '0.0125em',
    textTransform: 'uppercase'
  }
}));
