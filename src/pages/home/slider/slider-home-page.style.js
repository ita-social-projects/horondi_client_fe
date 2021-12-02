import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  homeHeader: {
    backgroundSize: 'cover',
    minHeight: '100vh'
  },
  sliderContent: {
    maxWidth: '40vw',
    minHeight: '90vh',
    padding: '50px 0px 50px 150px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    '@media (max-width: 1400px)': {
      maxWidth: '70vw',
      justifyContent: 'space-around',
      padding: '50px 40px 0px 100px'
    },
    '@media (max-width: 1024px)': {
      maxWidth: '75vw',
      justifyContent: 'space-around',
      padding: '25px 40px 0px 80px'
    },
    '@media (max-width: 768px)': {
      maxWidth: '90vw',
      justifyContent: 'space-around',
      padding: '25px 40px 25px 90px'
    },
    '@media (max-height: 768px)': {
      fontSize: '35px',
      padding: '25px 0px 20px 60px'
    },
    '@media (max-height: 660px) and (max-width: 600px)': {
      padding: '25px 0px 20px 35px'
    }
  },
  headerWrapper: {
    minHeight: '300px',
    '@media (max-width: 768px)': {
      maxWidth: '80vw',
      minHeight: '200px'
    },
    '@media ( max-height: 560px)': {
      width: '60vw',
      minHeight: '200px'
    }
  },
  headerTitle: {
    margin: '0px',
    fontSize: '59px',
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: '300',
    lineHeight: 'normal',
    letterSpacing: '-0.005em',
    color: '#FEFEFE',
    '@media (max-width: 1600px)': {
      fontSize: '60px'
    },
    '@media (max-width: 1200px)': {
      fontSize: '50px'
    },
    '@media (max-width: 768px)': {
      fontSize: '35px'
    },
    '@media (min-height: 1200px)': {
      fontSize: '40px'
    }
  },
  description: {
    marginBottom: '15px',
    display: 'block',
    fontSize: '18px',
    fontFamily: 'Open Sans',
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
    minHeight: '8rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    '@media (max-width: 768px)': {
      minHeight: '5rem'
    },
    '@media (max-width: 320px)': {
      minHeight: '5rem'
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
