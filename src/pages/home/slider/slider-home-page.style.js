import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  homeHeader: {
    position: 'relative',
    height: '100vh',
    backgroundSize: 'cover'
  },
  headerWrapper: {
    width: '35vw',
    marginLeft: '165px',
    textAlign: 'start',
    '@media (max-width: 768px)': {
      width: '60vw',
      marginLeft: '50px'
    },
    '@media ( max-height: 560px)': {
      width: '60vw'
    }
  },
  headerTitle: {
    marginTop: '38px',
    fontSize: '75px',
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: '300',
    lineHeight: '100px',
    letterSpacing: '-0.005em',
    color: '#FEFEFE',
    '@media (max-width: 1600px)': {
      fontSize: '60px'
    },
    '@media (max-width: 1200px)': {
      fontSize: '50px'
    },
    '@media (max-width: 768px)': {
      fontSize: '35px',
      lineHeight: '50px'
    }
  },
  description: {
    marginBottom: '15px',
    fontSize: '18px',
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: 'normal',
    lineHeight: '30px',
    letterSpacing: '0.005em',
    color: '#FEFEFE',
    '@media (max-width: 768px)': {
      display: 'none'
    }
  },
  navWrapper: {
    marginLeft: '165px',
    marginTop: '550px',
    position: 'absolute',
    '@media (max-width: 1600px)': {
      marginLeft: '165px',
      marginTop: '600px'
    },
    '@media (max-width: 1100px)': {
      marginLeft: '165px',
      marginTop: '700px'
    },
    '@media (max-width: 768px)': {
      marginLeft: '50px',
      marginTop: '450px',
      width: '60vw'
    }
  },
  buttonStyles: {
    height: '50px',
    width: '210px',
    display: 'block',
    fontStyle: 'normal',
    fontWeight: '600',
    fontFamily: 'Open Sans',
    fontSize: '16px',
    lineHeight: '25px',
    backgroundColor: 'rgba(40, 40, 40, 0.2)',
    color: '#FEFEFE',
    border: '1px solid #FEFEFE',
    borderRadius: '0',
    '&:hover': {
      backgroundColor: '#1d1d1d',
      color: '#FEFEFE'
    }
  },
  arrows: {
    marginTop: '80px',
    marginLeft: '5px',
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
    marginTop: '85px',
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
