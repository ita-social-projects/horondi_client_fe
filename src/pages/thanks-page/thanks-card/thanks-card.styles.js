import { makeStyles } from '@material-ui/core/styles';
import BG from '../../../images/thanks.png';

const fontFamily = 'Open Sans';
const whiteText = '#FEFEFE';
const blackText = '#242424';

export const useStyles = makeStyles(({ palette }) => ({
  thanksCardContainer: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageWrapper: {
    background: `url(${BG}) no-repeat center center`,
    backgroundSize: 'cover',
    height: '65%',
    width: '50vh',
    '@media (max-width: 959px)': {
      display: 'none'
    }
  },
  infoCard: {
    backgroundColor: palette.type === 'light' ? '#FFFFFF' : '#242424',
    width: '460px',
    height: '499px',
    left: '260px',
    top: '268px'
  },
  thanksForBuy: {
    margin: '40px 30px 40px 30px',
    fontFamily,
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '26px',
    lineHeight: '32px',
    textAlign: 'center',
    color: palette.type === 'light' ? blackText : whiteText
  },
  orderNumber: {
    color: palette.type === 'light' ? blackText : whiteText,
    fontSize: '18px',
    textAlign: 'center'
  },
  customerInfo: {
    margin: '10px 25px 10px 25px'
  },
  infoChunk: {
    margin: '10px 25px 10px 25px',
    color: palette.type === 'light' ? blackText : whiteText
  },
  chunkName: {
    fontSize: '15px',
    display: 'inline'
  },
  chunkValue: {
    fontSize: '15px',
    display: 'inline'
  },
  controllBlock: {},
  continueShopping: {
    margin: '10px 10% 10px 10%',
    color: palette.type === 'light' ? blackText : whiteText,
    width: '80%',
    height: '44px',
    borderRadius: '4px',
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '14px',
    lineHeight: '20px',
    letterSpacing: '0.0125em',
    textTransform: 'uppercase'
  },
  goToHomePage: {
    margin: '10px 10% 10px 10%',
    color: palette.type === 'light' ? blackText : whiteText,
    width: '80%',
    height: '44px',
    borderRadius: '4px',
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '14px',
    lineHeight: '20px',
    letterSpacing: '0.0125em',
    textTransform: 'uppercase'
  }
}));
