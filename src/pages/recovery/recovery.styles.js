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
    width: '684px',
    minHeight: '340px',
    background: theme.palette.backgroundColor,
    textAlign: 'center',
    position: 'absolute',
    top: 'calc(50% - 174px)',
    right: '0',
    left: '0',
    margin: '0 auto',
    padding: '50px'
  },
  heading: {
    fontSize: '1.5rem',
    lineHeight: '29px',
    marginBottom: '25px',
    marginTop: '0px',
    fontStyle: 'normal',
    fontWeight: 'normal'
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
    marginTop: '0px',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '0.75rem',
    lineHeight: '15px',
    textAlign: 'left'
  },
  recoverBtn: {
    fontSize: '1rem',
    lineHeight: '20px',
    height: '42px',
    backgroundColor: theme.palette.button.normal.backgroundColor,
    color: theme.palette.button.normal.color,
    textTransform: 'capitalize',
    '&:hover': {
      backgroundColor: theme.palette.button.hover.backgroundColor,
      color: theme.palette.button.hover.color
    }
  },
  helperEmail: {
    '& p::after': {
      content: `'example@mail.com'`,
      color: '#828282'
    }
  }
}));
