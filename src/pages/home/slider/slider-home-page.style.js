import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  homeHeader: {
    position: 'relative',
    height: 'calc(100vh - 50px)',
    backgroundSize: 'cover'
  },
  headerWrapper: {
    width: '32vw',
    position: 'absolute',
    top: 40,
    left: 140,
    zIndex: 1,
    textAlign: 'start',
    '@media (max-width: 768px)': {
      width: '60vw'
    }
  },
  headerTitle: {
    marginTop: 0,
    marginBottom: 0,
    paddingTop: '10px',
    fontSize: '50px',
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
    marginTop: '15px',
    marginBottom: '15px',
    fontSize: '15px',
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: 'normal',
    lineHeight: '23px',
    letterSpacing: '0.005em',
    color: '#FEFEFE',
    '@media (max-width: 768px)': {
      display: 'none'
    }
  },
  text: {
    paddingTop: 0,
    position: 'absolute',
    top: 40
  },
  navWrapper: {
    marginTop: '45px',
    position: 'absolute'
  },
  buttonStyles: {
    height: '43px',
    width: '174px',
    display: 'block',
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
    paddingTop: '15px',
    display: 'flex',
    columnGap: '24px',
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
