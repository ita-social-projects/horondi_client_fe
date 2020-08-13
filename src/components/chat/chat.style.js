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
    height: '40%',
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
  logo: {
    height: '15px',
    width: '15px'
  },
  messengerGmail: {
    display: 'flex',
    width: '100%',
    height: '50%',
    background: 'yellow',
    border: '1px solid black'
  },
  messengerFacebook: {
    display: 'flex',
    width: '100%',
    height: '50%',
    background: 'yellow',
    border: '1px solid black'
  },
  tabs: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: '30px'
  },
  facebookActive: {
    background: 'yellow',
    height: '45px',
    width: '90px',
    border: '1px solid black',
    borderBottom: '0'
  },
  gmailActive: {
    background: 'yellow',
    height: '45px',
    width: '90px',
    border: '1px solid black',
    borderBottom: '0'
  },
  gmailDisactive: {
    background: 'white',
    height: '45px',
    width: '20px',
    border: '1px solid black',
    borderBottom: '0'
  },
  facebookDisactive: {
    background: 'white',
    height: '45px',
    width: '20px',
    border: '1px solid black',
    borderBottom: '0'
  }
}));
