import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  homeHeader: {
    position: 'relative',
    height: 'calc(100vh - 50px)',
    alignItems: 'center',
    display: 'flex',
    backgroundPosition: 'bottom',
    backgroundSize: 'cover'
  },
  headerWrapper: {
    width: '30%',
    position: 'absolute',
    top: '10%',
    left: '12%',
    zIndex: 9,
    textAlign: 'start',
    '@media (max-width: 768px)': {
      width: '60%'
    }
  },
  headerTitle: {
    marginTop: '5%',
    fontSize: '55px',
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: '300',
    lineHeight: '80px',
    letterSpacing: '-0.005em',
    color: '#FEFEFE',
    '@media (max-width: 768px)': {
      fontSize: '35px'
    }
  },
  description: {
    marginTop: '5%',
    marginBottom: '10%',
    fontSize: '17px',
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: 'normal',
    lineHeight: '25px',
    letterSpacing: '0.005em',
    color: '#FEFEFE',
    '@media (max-width: 768px)': {
      display: 'none'
    }
  },
  buttonStyles: {
    height: '44px',
    width: '174px',
    position: 'absolute',
    bottom: '27%',
    left: '12%',
    fontStyle: 'normal',
    fontWeight: '600',
    fontFamily: 'Open Sans',
    fontSize: '14px',
    lineHeight: '25px',
    backgroundColor: '#020202',
    color: '#FEFEFE',
    border: '1px solid #FEFEFE',
    '&:hover': {
      backgroundColor: '#1d1d1d',
      color: '#FEFEFE'
    }
  },
  arrows: {
    display: 'flex',
    columnGap: '24px',
    position: 'absolute',
    bottom: '15%',
    left: '12%',
    '&:hover': {
      cursor: 'pointer'
    },
    '& img': {
      width: '76px'
    }
  },
  slideNumber: {
    color: '#E4E7ED',
    fontSize: '15px',
    fontWeight: '700',
    '& span:nth-child(1)': {
      fontSize: '18px'
    }
  },
  sliderInner: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.45)'
  }
}));
