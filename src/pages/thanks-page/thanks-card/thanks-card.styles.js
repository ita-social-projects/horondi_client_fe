import { makeStyles } from '@material-ui/core/styles';
import BG from '../../../images/thanks.png';

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
    color: palette.type === 'light' ? whiteText : blackText,
    backgroundColor: palette.type === 'light' ? blackText : whiteText,
    '&:hover': {
      backgroundColor: palette.type === 'light' ? '#151515' : '#d1d1d1'
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
    color: palette.type === 'light' ? blackText : whiteText,
    '&:hover': {
      backgroundColor: palette.type === 'light' ? blackText : whiteText,
      color: palette.type === 'light' ? whiteText : blackText
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
  }
}));
