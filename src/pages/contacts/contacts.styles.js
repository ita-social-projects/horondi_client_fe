import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '77vh',
    '@media screen and (max-width: 768px)': {
      height: 'auto',
      marginBottom: '20px'
    }
  },
  contactsTitle: {
    fontWeight: '400',
    fontSize: '2em'
  },
  content: {
    display: 'flex',
    justifyContent: 'flex-start',
    width: '80%',
    '@media screen and (max-width: 768px)': {
      flexDirection: 'column',
      alignItems: 'center',
      margin: 'auto'
    }
  },
  contacts: {
    marginLeft: '25px',
    '@media screen and (max-width: 768px)': {
      margin: '20px 0 0 0'
    }
  },
  contactsItem: {
    display: 'flex',
    margin: '0 0 10px 10px',
    width: '100%',
    fontFamily: 'Montserrat',
    fontSize: '1.1em',
    fontWeight: '500',
    color: theme.palette.textColor,
    '@media screen and (max-width: 768px)': {
      fontSize: '.9em'
    }
  },
  contactName: {
    width: '130px',
    '@media screen and (max-width: 768px)': {
      width: '100px'
    }
  },
  schedule: {
    display: 'flex',
    flexDirection: 'column',
    '@media screen and (max-width: 768px)': {
      width: 'auto'
    }
  },
  mapContainer: {
    width: '48%',
    height: '100%',
    '@media screen and (max-width: 768px)': {
      width: 'auto'
    }
  },
  mapImage: {
    width: '100%'
  },
  contactAddress: {
    '& > p': {
      margin: '0'
    }
  },
  day: {
    display: 'inline-block',
    width: '40px'
  }
}));
