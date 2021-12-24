import { makeStyles } from '@material-ui/core/styles';
import BG from '../../images/9.jpg';

export const useStyles = makeStyles((theme) => ({
  recoveryBackground: {
    background: `url(${BG}) no-repeat `,
    backgroundSize: 'cover',
    height: '1000px',
    position: 'relative'
  },
  recoveryForm: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  heading: {
    fontSize: '34px',
    lineHeight: '46px',
    textAlign: 'center',
    marginBottom: '25px',
    marginTop: 0,
    textTransform: 'capitalize',
    color: theme.palette.textColor
  },
  emailInput: {
    marginBottom: '21px',
    '& label': {
      transform: 'translate(14px, 14px) scale(1)'
    },
    '& div > input': {
      padding: '11px 14px !important',
      position: 'relative'
    },
    '& p': {
      position: 'absolute',
      top: '40px'
    },
    '& label.Mui-focused': {
      color: theme.palette.textColor
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: theme.palette.textColor
      },
      '&.Mui-focused fieldset': {
        borderColor: theme.palette.textColor
      }
    }
  },
  recoveryText: {
    margin: '5px 0 15px',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '0.75rem',
    lineHeight: '15px',
    textAlign: 'left',
    maxWidth: '400px'
  },
  recoverBtn: {
    border: '1px solid black',
    borderRadius: '0px',
    textTransform: 'uppercase',
    background: theme.palette.textColor,
    color: theme.palette.backgroundColor,
    '&:hover': {
      background: theme.palette.textColor,
      color: theme.palette.backgroundColor
    }
  },
  helperEmail: {
    '& p::after': {
      content: `'example@mail.com'`,
      color: '#828282'
    }
  },
  wrapForm: {
    padding: '50px 100px 60px',
    maxWidth: '685px',
    background: theme.palette.backgroundColor,
    boxSizing: 'content-box',
    minWidth: '325px',
    overflow: 'hidden'
  }
}));
