import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  homeHeader: {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh'
  },
  overlay: {
    position: 'relative',
    top: '0',
    left: '0',
    width: '100%',
    height: '100vh',
    background: 'rgba(0,0,0,0.3)'
  },
  sliderContent: {
    minHeight: '90vh',
    padding: '50px 0',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    '@media (max-width: 1400px)': {
      maxWidth: '80vw',
      padding: '50px 40px 0px 100px'
    },
    '@media (max-width: 768px)': {
      maxWidth: '90vw',
      padding: '25px 40px 25px 90px'
    },
    '@media (max-height: 575px)': {
      fontSize: '35px',
      padding: '50px 0px 20px 60px'
    },
    '@media (max-width: 600px)': {
      padding: '25px 0px 20px 35px'
    }
  },
  headerWrapper: {
    minHeight: '350px',
    '@media (max-width: 768px)': {
      maxWidth: '80vw',
      minHeight: '200px'
    },
    '@media ( max-height: 560px)': {
      minHeight: '200px'
    }
  },
  slideNumber: {
    color: '#E4E7ED',
    fontSize: '16px',
    fontWeight: '400',
    '& span:nth-child(1)': {
      fontSize: '20px',
      fontWeight: '600'
    }
  },
  headerTitle: {
    margin: '0px',
    fontSize: '59px',
    fontStyle: 'normal',
    fontWeight: '300',
    lineHeight: 'normal',
    letterSpacing: '-0.005em',
    color: '#FEFEFE',
    '@media (max-width: 1600px)': {
      fontSize: '60px'
    },
    '@media (max-width: 1400px)': {
      fontSize: '50px'
    },
    '@media (max-width: 1200px)': {
      fontSize: '40px'
    },
    '@media (max-width: 991px)': {
      fontSize: '35px'
    },
    '@media (max-width: 575px)': {
      fontSize: '25px'
    },
    '@media (min-height: 1200px)': {
      fontSize: '40px'
    }
  },
  description: {
    marginBottom: '15px',
    display: 'block',
    fontSize: '18px',
    fontStyle: 'normal',
    fontWeight: 'normal',
    lineHeight: '30px',
    letterSpacing: '0.005em',
    color: '#FEFEFE',
    '@media (max-width: 767px)': {
      display: 'none'
    },
    '@media (max-height: 450px)': {
      display: 'none'
    },
    '@media (max-height: 1200px)': {
      fontSize: '16px'
    },
    '@media (max-height: 500px)': {
      fontSize: '14px'
    }
  },
  navWrapper: {
    minHeight: '130px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    '@media (max-width: 768px)': {
      minHeight: '95px'
    }
  },
  buttonStyles: {
    padding: '12px 48px',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '14px',
    lineHeight: '18px',
    textAlign: 'center',
    color: '#FEFEFE',
    border: '1px solid #FEFEFE',
    borderRadius: '0',
    '&:hover': {
      backgroundColor: 'rgba(40, 40, 40, 0.7)'
    }
  },
  arrows: {
    display: 'flex',
    columnGap: '30px'
  },
  arrow: {
    backgroundColor: 'transparent',
    border: 'none',
    padding: 0,
    cursor: 'pointer',
    '&:disabled': {
      opacity: 0.45,
      cursor: 'default'
    }
  }
}));
