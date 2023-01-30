import { makeStyles } from '@material-ui/core/styles';

const flexCenter = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

export const useStyles = makeStyles(({ palette }) => ({
  iconsMessengers: {
    position: 'fixed',
    zIndex: '1001',
    bottom: '30px',
    right: '22px',
    display: 'flex',
    flexDirection: 'column',
    background: 'none'
  },
  msgIcon: {
    ...flexCenter,
    background: palette.black,
    height: '60px',
    width: '60px',
    marginTop: '20px',
    borderRadius: '50%',
    boxShadow: 'rgba(0, 0, 0, 0.15) 0px 4px 12px 0px',
    border: 'none',
    '&:hover': {
      cursor: 'pointer',
      background: palette.yellow
    },
    '@media (max-width: 768px)': {
      boxShadow: ' 0 0 5px white'
    },
    '&:disabled': {
      background: 'lightGrayShade'
    }
  },
  msgIconActive: (mailFormVisible) => ({
    background: mailFormVisible ? palette.yellow : palette.black
  }),
  mailForm: {
    ...flexCenter,
    position: 'fixed',
    right: '7.5%',
    top: '145px',
    bottom: '10%',
    width: '340px',
    height: 'fit-content',
    borderRadius: '4px',
    padding: '16px ',
    zIndex: 1002,
    overflow: 'auto',
    background: palette.backgroundColor,
    boxShadow: '0px 5px 8px rgba(0, 0, 0, 0.25)',
    '@media (max-width: 600px)': {
      width: '70%',
      right: '15%'
    },
    '@media (max-width: 450px)': {
      width: '90%',
      right: '5%'
    }
  },
  cancelIcon: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    '& svg': { height: '20px', width: '20px' },
    '&:hover': {
      cursor: 'pointer'
    }
  },
  mailTitle: {
    margin: '14px 0',
    fontSize: '1.3rem'
  },
  contactForm: {
    ...flexCenter,
    flexDirection: 'column',
    width: '100%'
  },
  btnSend: {
    width: '90%'
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
  }
}));
