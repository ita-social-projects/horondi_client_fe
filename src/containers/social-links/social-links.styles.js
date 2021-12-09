import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ palette }) => ({
  cardBody: ({ position }) => ({
    flex: position === 'center' ? 0 : 1,
    padding: '70px 10px 50px 3px',
    '@media screen and (max-width: 552px)': {
      width: '50%',
      padding: '20px 25px 10px'
    }
  }),
  logo: ({ color }) => ({
    boxSizing: 'border-box',
    letterSpacing: '0.2rem',
    fontSize: '1.5rem',
    color,
    textDecoration: 'none',
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    '@media (max-width: 768px)': {
      display: 'flex',
      justifyContent: 'center',
      textAlign: 'center',
      marginLeft: '0px',
      fontSize: '1rem'
    }
  }),
  iconsBox: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: '50px',
    '@media (max-width: 552px)': {
      paddingTop: '20px'
    }
  },
  cardTitle: {
    fontSize: '14px',
    '@media screen and (max-width: 552px)': {
      textAlign: 'center'
    }
  },
  iconsContainer: ({ position, fromSideBar }) => ({
    display: 'flex',
    justifyContent: position,
    '@media screen and (max-width: 552px)': {
      justifyContent: 'space-around'
    },
    transform: fromSideBar ? 'scale(1.4)' : '',
    margin: fromSideBar ? '1.5rem' : '',
    marginLeft: '32px'
  }),
  iconWrap: {
    margin: '0.5rem',
    color: 'transparent',
    '&:hover': {
      color: '#bebebe'
    }
  }
}));
