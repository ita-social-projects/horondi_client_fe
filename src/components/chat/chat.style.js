import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  chatIcon: {
    position: 'fixed',
    right: '3%',
    bottom: '1%'
  },
  chatForm: {
    borderRadius: '20px',
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
    paddingTop: '15px',
    fontSize: '1.1rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  contactsTitle: {
    padding: '3px 0 2px 0',
    fontSize: '1.3rem'
  },
  logo: {
    height: '15px',
    width: '15px'
  },
  messengers: {
    display: 'flex',
    paddingTop: '90px',
    flexDirection: 'column'
  },
  facebook: {
    color: theme.palette.button.normal.color,
    background: '#3b5998',
    '&:hover': {
      backgroundColor: theme.palette.button.hover.backgroundColor
    }
  }
}));
