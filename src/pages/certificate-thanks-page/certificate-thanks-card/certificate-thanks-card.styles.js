import { makeStyles } from '@material-ui/core/styles';
import BG from '../../../images/thanks.png';

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
    backgroundColor: palette.backgroundColor,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    maxWidth: '460px',
    maxHeight: '530px',
    left: '260px',
    top: '268px',
    overflowY: 'auto',
    padding: '24px'
  },
  thanksForBuy: {
    marginBottom: '30px',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '26px',
    lineHeight: '32px',
    textAlign: 'center'
  },
  certificateText: {
    margin: '30px 16px',
    fontSize: '18px',
    textAlign: 'center',
    lineHeight: '35px'
  },
  certificateInfo: {
    margin: '10px 25px 10px 25px'
  },
  infoChunk: {
    margin: '10px 25px 10px 25px',
    fontSize: '16px'
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
    color: palette.backgroundColor,
    backgroundColor: palette.textColor,
    '&:hover': {
      backgroundColor: palette.type === 'light' ? '#151515' : '#d1d1d1'
    },
    width: '80%',
    height: '44px',
    borderRadius: '1px',
    borderColor: palette.textColor,
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
    '&:hover': {
      backgroundColor: palette.textColor,
      color: palette.backgroundColor
    },
    width: '80%',
    height: '44px',
    borderRadius: '1px',
    borderColor: palette.textColor,
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '14px',
    lineHeight: '20px',
    letterSpacing: '0.0125em',
    textTransform: 'uppercase'
  }
}));
