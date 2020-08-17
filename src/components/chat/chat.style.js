import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  chatIcon: ({ visible }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: visible ? '#E4B200' : 'black',
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    position: 'fixed',
    right: '4%',
    bottom: '2%',
    '&:hover': {
      background: '#E4B200'
    }
  }),
  chatForm: {
    borderRadius: '5px',
    position: 'fixed',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    right: '9%',
    bottom: '12%',
    width: '20%',
    height: '85%',
    border: 'solid 1px black',
    background: 'white',
    boxShadow: '1px 2px 2px 1px',
    zIndex: '3'
  },
  disable: {
    display: 'none'
  },
  cancelIcon: {
    position: 'absolute',
    right: '1px'
  },
  contacts: {
    background: theme.palette.backgroundColor,
    width: '100%',
    height: '40%',
    fontSize: '1.1rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  contactsTitle: {
    margin: '3px 0 2px 0',
    fontSize: '1.3rem'
  },
  phoneNumbers: {
    color: theme.palette.textColor
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
    justifyContent: 'space-around'
  },
  facebookActive: ({ themeMode }) => ({
    display: 'flex',
    justifyContent: 'center',
    background: themeMode ? '#efefef' : '#232323',
    height: '45px',
    width: '75%',
    border: '1px solid black',
    borderBottom: '0',
    borderLeft: '0'
  }),
  gmailActive: ({ themeMode }) => ({
    display: 'flex',
    justifyContent: 'center',
    background: themeMode ? '#efefef' : '#232323',
    height: '45px',
    width: '75%',
    border: '1px solid black',
    borderBottom: '0',
    borderRight: '0'
  }),
  gmailDisactive: ({ themeMode }) => ({
    display: 'flex',
    justifyContent: 'center',
    background: themeMode ? 'white' : '#232323',
    height: '45px',
    width: '25%',
    border: '1px solid black'
  }),
  facebookDisactive: ({ themeMode }) => ({
    display: 'flex',
    justifyContent: 'center',
    background: themeMode ? 'white' : '#232323',
    height: '45px',
    width: '25%',
    border: '1px solid black'
  }),
  formField: ({ themeMode }) => ({
    border: '1px solid black',
    background: themeMode ? '#efefef' : '#232323',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '75%'
  }),
  formFieldActive: ({ themeMode }) => ({
    background: themeMode ? '#efefef' : '#232323',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '75%'
  }),
  btnSend: {
    marginBottom: '20px',
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
    height: '100%',
    marginBottom: '15px'
  },
  icons: {
    width: '40px',
    height: '40px'
  },
  link: {
    color: 'white'
  },
  icon: {
    color: theme.palette.white
  }
}));
