import { makeStyles } from '@material-ui/core/styles';

const flexCenter = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

export const useStyles = makeStyles(({ palette }) => ({
  chatIcon: () => ({
    ...flexCenter,
    background: palette.black,
    margin: '0px 12px',
    padding: '0px',
    position: 'fixed',
    zIndex: '900',
    bottom: '30px',
    top: 'auto',
    height: '60px',
    width: '60px',
    borderRadius: '29px',
    boxShadow: 'rgba(0, 0, 0, 0.15) 0px 4px 12px 0px',
    right: '12px',
    border: 'none',
    transition: 'background 0.3s',
    '@media (max-width: 768px)': {
      boxShadow: ' 0 0 10px white',
      zIndex: 900
    },
    '&:hover': {
      cursor: 'pointer',
      background: palette.yellow
    },
    '&:disabled': {
      background: palette.lightGrayShade
    }
  }),
  iconsMessengers: {
    margin: '0px 12px',
    padding: '0px',
    position: 'fixed',
    zIndex: '900',
    bottom: '110px',
    top: 'auto',
    height: '60px',
    width: '60px',
    borderRadius: '29px',
    boxShadow: 'rgba(0, 0, 0, 0.15) 0px 4px 12px 0px',
    background: 'none',
    display: 'block',
    right: '12px'
  },
  msgIcon: {
    ...flexCenter,
    width: '60px',
    height: '60px',
    background: 'black',
    position: 'fixed',
    zIndex: '900',
    borderRadius: '50%',
    marginBottom: '20px',
    cursor: 'pointer',
    boxShadow: 'white 0px 0px 10px',
    transition: 'background 0.3s',
    '&:hover': {
      background: palette.yellow
    }
  },
  msgIconActive: (mailFormVisible) => ({
    ...flexCenter,
    width: '60px',
    height: '60px',
    background: mailFormVisible ? palette.yellow : palette.black,
    borderRadius: '50%',
    marginBottom: '20px',
    cursor: 'pointer',
    position: 'fixed',
    zIndex: '900'
  }),
  mailForm: {
    position: 'fixed',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    right: '15%',
    top: '108px',
    bottom: '10%',
    minWidth: '275px',
    width: '320px',
    height: 'fit-content',
    borderRadius: '4px',
    padding: '16px 4px 4px 4px',
    zIndex: 899,
    overflow: 'auto',
    background: palette.backgroundColor,
    boxShadow: '0px 5px 8px rgba(0, 0, 0, 0.25)',
    '@media (max-width: 768px)': {
      width: '70%',
      right: '15%',
      top: '93px'
    },
    '@media (max-width: 556px)': {
      top: '123px'
    },
    '@media (max-width: 420px)': {
      top: '93px',
      width: '90%',
      right: '5%'
    }
  },
  cancelIcon: {
    position: 'absolute',
    top: '6px',
    right: '4px',
    '&:hover': {
      cursor: 'pointer'
    }
  },
  contacts: {
    ...flexCenter,
    background: palette.backgroundColor,
    height: '40%',
    fontSize: '1rem',
    flexDirection: 'column',
    margin: '0 60px 0 0'
  },
  contactsTitle: {
    margin: '3px 70px 10px 0',
    fontSize: '1.3rem'
  },
  phoneNumbers: {
    color: palette.textColor,
    display: 'flex',
    marginBottom: '10px'
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
  contactForm: {
    ...flexCenter,
    flexDirection: 'column',
    width: '100%'
  },
  btnSend: {
    marginBottom: '20px',
    width: '90%',
    background: palette.button.normal.backgroundColor,
    fontSize: '1.5em',
    padding: 10,
    color: palette.button.normal.color,
    '& a': {
      color: 'inherit'
    },
    '&:hover': {
      backgroundColor: palette.button.hover.backgroundColor,
      color: palette.button.hover.color
    },
    '@media (max-width: 768px)': {
      fontSize: '1em',
      padding: 5
    }
  },
  dataInput: {
    height: '100%',
    marginBottom: '15px',
    width: '90%'
  },
  icon: {
    color: palette.white,
    fontSize: '35px',
    '@media (max-width: 768px)': {
      fontSize: '25px !important'
    }
  },
  iconContact: {
    margin: '0 15px 0 0',
    fontSize: '20px',
    paddingTop: '2px'
  },
  activeMsgWrapper: {
    height: '65%',
    width: '100%'
  },
  thankForMsgWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '60%'
  },
  thankForMsg: {
    fontSize: '1rem',
    marginBottom: '20px'
  },
  fbChatWrapper: {
    zIndex: 100
  }
}));
