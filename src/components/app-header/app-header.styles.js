import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    scrollSnapStop: 'none',
    scrollSnapAlign: 'start'
  },
  header: {
    position: 'fixed',
    backgroundColor: '#020202',
    boxShadow: '0px 8px 16px 0px #2424241F',
    zIndex: '1301',
    transition: 'transform 0.5s ease-out',
    '& .MuiToolbar-regular': {
      minHeight: '35px',
      padding: '10px 85px',
      width: '95%',
      margin: 'auto',
      '@media (max-width: 870px)': {
        padding: '0'
      }
    },
    '& .MuiTypography-body1': {
      color: 'rgba(254, 254, 254, 0.75)'
    },
    '@media (max-width: 768px)': {
      position: 'fixed',
      top: 0,
      zIndex: 1000
    },
    '@media (max-width: 556px)': {
      paddingBottom: '45px'
    }
  },
  sticky: {
    transform: 'translateY(-35px)',
    '@media (max-width: 485px)': {
      transform: 'translateY(-95px)'
    }
  },
  headerspace: {
    display: 'block',
    width: '100%',
    height: '75px',
    backgroundColor: theme.palette.background,
    '@media (max-width: 768px)': {
      height: '72px'
    }
  },
  upperToolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0px 80px',
    borderBottom: '1px solid rgba(91, 91, 91, 0.6)',
    '@media (max-width: 485px)': {
      display: 'none'
    }
  },
  theme: {
    marginRight: '37px',
    marginLeft: 'auto',
    '@media (max-width: 900px)': {
      marginRight: '0px'
    }
  },
  language: {
    marginRight: '37px',
    '@media (max-width: 900px)': {
      marginRight: '0px'
    }
  },
  currency: {
    marginRight: '37px',
    '@media (max-width: 900px)': {
      marginRight: '0px'
    }
  },
  callUs: {
    width: '190px',
    textAlign: 'right',
    cursor: 'pointer',
    '@media (max-width: 450px)': {
      display: 'none'
    }
  },
  bottomToolbar: {
    padding: '15px 80px',
    transition: 'all 0.5s ease-out'
  },
  logo: {
    marginRight: 'auto 20px',
    letterSpacing: '0.2rem',
    fontSize: '1.5rem',
    color: '#ffffff',
    textDecoration: 'none',
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    '@media (max-width: 768px)': {
      fontSize: '1rem'
    }
  },
  menuButton: {
    color: '#ffffff',
    marginRight: '24px',
    marginLeft: '-15px',
    '@media (max-width: 768px)': {
      padding: '12px 5px 12px',
      marginLeft: 0
    }
  },
  categories: {
    flexGrow: 1
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },
  item: {
    width: '280px',
    height: '30px'
  },
  icon: {
    '@media (min-width: 900px)': {
      width: '3px'
    }
  }
}));
