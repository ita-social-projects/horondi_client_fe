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

    transition: 'all 0.5s ease-out',
    '& .MuiToolbar-regular': {
      minHeight: '35px'
    },
    '& .MuiTypography-body1': {
      color: 'rgba(254, 254, 254, 0.75)'
    },
    '@media (max-width: 768px)': {
      position: 'fixed',
      top: 0,
      zIndex: 1000,
      '& .MuiToolbar-regular': {
        padding: 0,
        width: '95%',
        margin: 'auto'
      }
    }
  },
  sticky: {
    transform: 'translateY(-35px)',
    transition: 'all 0.5s ease-out'
  },
  headerspace: {
    display: 'block',
    width: '100%',
    height: '106px',
    backgroundColor: '#F1F1F1',
    '@media (max-width: 768px)': {
      height: '72px'
    }
  },
  upperToolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0px 80px',
    borderBottom: '1px solid white'
  },
  theme: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: '40px',
    '& .MuiTypography-root': {
      width: '40px',
      textAlign: 'center'
    },
    '& .MuiSwitch-root': {
      width: '32px',
      height: '14px',
      padding: '0px',
      margin: '0 5px',
      display: 'flex'
    },
    '& .MuiSwitch-switchBase': {
      padding: 2,
      color: '#808080',
      '&.Mui-checked': {
        transform: 'translateX(17px)',
        color: '#242424',
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: '#808080',
          borderColor: theme.palette.primary.main
        }
      }
    },
    '& .MuiSwitch-thumb': {
      width: 10,
      height: 10,
      boxShadow: 'none'
    },
    '& .MuiSwitch-track': {
      border: `1px solid ${theme.palette.grey[500]}`,
      borderRadius: '12px',
      opacity: 1,
      backgroundColor: theme.palette.common.white
    },
    '& .Mui-checked': {},
    '@media (max-width: 900px)': {
      marginRight: '0px'
    }
  },
  language: {
    marginRight: '40px',
    '@media (max-width: 900px)': {
      marginRight: '0px'
    }
  },
  currency: {
    marginRight: '40px',
    '@media (max-width: 900px)': {
      marginRight: '0px'
    }
  },
  callUs: {
    width: '185px',
    textAlign: 'right',
    '@media (max-width: 450px)': {
      display: 'none'
    }
  },
  bottomToolbar: {
    padding: '15px 80px',
    transition: 'all 0.5s ease-out'
  },
  logo: {
    letterSpacing: '0.2rem',
    fontSize: '1.5rem',
    color: '#ffffff',
    textDecoration: 'none',
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    '@media (max-width: 768px)': {
      marginLeft: '0px',
      fontSize: '1rem'
    }
  },
  menuButton: {
    color: '#ffffff',
    marginRight: '24px',
    padding: '0px',
    '@media (max-width: 768px)': {
      padding: '12px 5px 12px'
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
  },
  rightBar: {}
}));
