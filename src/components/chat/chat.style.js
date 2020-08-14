import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  chatIcon: {
    position: 'fixed',
    right: '3%',
    bottom: '1%'
  },
  chatForm: {
    borderRadius: '5px',
    position: 'fixed',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    right: '6%',
    bottom: '11%',
    width: '20%',
    height: '65%',
    border: 'solid 1px black',
    background: 'white',
    zIndex: '3'
  },
  disable: {
    display: 'none'
  },
  contacts: {
    marginTop: '15px',
    fontSize: '1.1rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  contactsTitle: {
    margin: '3px 0 2px 0',
    fontSize: '1.3rem'
  },
  mailTitle: {
    marginTop: '5%',
    marginBottom: '6%',
    fontSize: '1.3rem'
  },
  logo: {
    height: '15px',
    width: '15px'
  },
  tabs: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: '30px'
  },
  facebookActive: {
    display: 'flex',
    justifyContent: 'center',
    background: '#efefef',
    height: '45px',
    width: '75%',
    border: '1px solid black',
    borderBottom: '0'
  },
  gmailActive: {
    display: 'flex',
    justifyContent: 'center',
    background: '#efefef',
    height: '45px',
    width: '75%',
    border: '1px solid black',
    borderBottom: '0'
  },
  gmailDisactive: {
    display: 'flex',
    justifyContent: 'center',
    background: 'white',
    height: '45px',
    width: '25%',
    border: '1px solid black'
    // borderBottom: '0',
  },
  facebookDisactive: {
    display: 'flex',
    justifyContent: 'center',
    background: 'white',
    height: '45px',
    width: '25%',
    border: '1px solid black'
    // borderBottom: '0'
  },
  formField: {
    border: '1px solid black',
    background: '#efefef',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '75%'
  },
  formFieldActive: {
    background: '#efefef',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '75%'
  },
  btnSend: {
    // fontFamily: 'Montserrat',
    // fontSize: '16px',
    // lineHeight: '20px',
    // height: '12%',
    // backgroundColor: theme.palette.button.normal.backgroundColor,
    // color: theme.palette.button.normal.color,
    // textTransform: 'capitalize',
    // '&:hover': {
    //   backgroundColor: theme.palette.button.hover.backgroundColor
    // }
    // marginBottom: '35px',
    // width: '77%',
    background: theme.palette.button.normal.backgroundColor,
    borderRadius: '5px',
    fontSize: '1.5em',
    padding: 10,
    color: theme.palette.button.normal.color,
    '& a': {
      color: 'inherit'
    },
    '&:hover': {
      backgroundColor: theme.palette.button.hover.backgroundColor,
      color: theme.palette.button.hover.color
    },
    '@media (max-width: 768px)': {
      fontSize: '1em',
      padding: 5
    }
  },
  dataInput: {
    marginBottom: '15px',
    height: '100%'
  },
  icons: {
    width: '40px',
    height: '40px'
  },
  link: {
    color: 'white'
  }
}));
