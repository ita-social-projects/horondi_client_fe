import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  mainTitle: {
    color: 'rgba(0, 0, 0, 0.54)',
    fontSize: '2.5rem',
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '35px'
  },
  orderFormWrapper: {
    margin: '0 auto',
    maxWidth: '800px'
  },
  subTitle: {
    color: 'rgba(0, 0, 0, 0.54)',
    fontSize: '1.8rem',
    marginBottom: '20px'
  },
  contactsFields: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '40px'
  },
  contactField: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '20px'
  },
  deliveryType: {
    marginBottom: '20px'
  },
  btnWrapper: {
    display: 'flex',
    justifyContent: 'center'
  },
  btnCreateOrder: {
    marginBottom: '20px',
    background: theme.palette.button.normal.backgroundColor,
    borderRadius: '5px',
    fontSize: '1.5em',
    color: theme.palette.button.normal.color,
    '&:hover': {
      backgroundColor: theme.palette.button.hover.backgroundColor,
      color: theme.palette.button.hover.color
    }
  },
  addInfo: {
    marginBottom: '20px',
    marginTop: '20px'
  },
  dataInput: {
    width: '350px'
  },
  dataInputCurrier: {
    width: '250px'
  },
  comments: {
    marginTop: '20px'
  },
  deliveryTypeSelected: {
    margin: '0 auto',
    border: '1px solid black',
    height: '350px',
    width: '800px',
    borderRadius: '4px',
    padding: '30px',
    transform: 'translateX(-30px)',
    boxSizing: 'content-box'
  },
  contactsTitle: {
    fontWeight: '400',
    fontSize: '2em'
  },
  content: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%'
  },
  contacts: {
    width: '41%'
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
    fontWeight: '700',
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
  day: {
    display: 'inline-block'
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1
  },
  link: {
    display: 'block',
    lineHeight: '0'
  }
}));
