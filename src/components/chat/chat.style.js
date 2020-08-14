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
    width: '15%',
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
    marginBottom: '15%',
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
    background: '#efefef',
    height: '45px',
    width: '75%',
    border: '1px solid black',
    borderBottom: '0'
  },
  gmailActive: {
    background: '#efefef',
    height: '45px',
    width: '75%',
    border: '1px solid black',
    borderBottom: '0'
  },
  gmailDisactive: {
    background: 'white',
    height: '45px',
    width: '25%',
    border: '1px solid black',
    borderBottom: '0'
  },
  facebookDisactive: {
    background: 'white',
    height: '45px',
    width: '25%',
    border: '1px solid black',
    borderBottom: '0'
  },
  formField: {
    background: '#efefef',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '75%'
  },
  btnSend: {
    marginBottom: '35px',
    width: '70%',
    fontFamily: 'Montserrat',
    fontSize: '16px',
    lineHeight: '20px',
    height: '12%',
    backgroundColor: theme.palette.button.normal.backgroundColor,
    color: theme.palette.button.normal.color,
    textTransform: 'capitalize',
    '&:hover': {
      backgroundColor: theme.palette.button.hover.backgroundColor
    }
  },
  dataInput: {
    marginBottom: '15px',
    height: '100%'
  }
}));
