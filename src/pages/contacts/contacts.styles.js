import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '50px',
    '@media screen and (max-width: 768px)': {
      marginBottom: '30px'
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
    margin: '0 0 30px 10px',
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
    fontWeight: '700',
    marginRight: '15px',
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
      width: 'auto',
      marginBottom: '30px'
    }
  },
  mapImageInactive: {
    display: 'none'
  },
  mapImage: {
    width: '100%',
    float: 'none',
    maxHeight: '100%',
    margin: '0',
    '&:hover': {
      filter: 'brightness(.8)',
      transition: '.3s'
    }
  },
  contactAddress: {
    '& > p': {
      margin: '0',
      fontSize: '1em',
      lineHeight: '1.43'
    }
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1
  },
  link: {
    display: 'block',
    lineHeight: '0'
  }
}));
