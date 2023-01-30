import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  cardBody: ({ position, fromSideBar }) => ({
    flex: position === 'center' ? 0 : 1,
    '@media screen and (max-width: 552px)': {
      width: fromSideBar ? 'fit-content' : '50%',
      padding: fromSideBar ? '' : '20px 25px 10px',
      margin: fromSideBar ? '20px 0 10px 0' : ''
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
      justifyContent: 'left',
      textAlign: 'center',
      marginLeft: '0px',
      fontSize: '20px'
    },
    '@media (max-width: 500px)': {
      fontSize: '18px'
    }
  }),
  cardBodyFooter: {
    '@media (max-width: 768px)': {
      gridColumn: 1
    }
  },
  iconsBox: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: '65px',
    '@media (max-width: 768px)': {
      paddingTop: '25px'
    }
  },
  cardTitleFooter: {
    marginTop: 'auto',
    '& h5': {
      '@media screen and (max-width: 500px)': { fontSize: '14px' }
    }
  },
  cardTitle: {
    fontSize: '14px'
  },
  iconsContainer: ({ position, fromSideBar }) => ({
    display: 'flex',
    justifyContent: position,
    marginLeft: fromSideBar ? '6px' : '',
    '@media screen and (max-width: 500px)': {
      justifyContent: fromSideBar ? '' : 'space-around',
      marginLeft: fromSideBar ? '0px' : ''
    },
    transform: fromSideBar ? 'scale(1.1)' : '',
    marginTop: '19px'
  }),
  iconWrap: {
    margin: '0 8px',
    color: 'transparent',
    transition: 'color 0.5s linear 0s',
    '&:hover': {
      color: theme.palette.type === 'light' ? '#000000' : '#FFFFFF'
    }
  }
}));
