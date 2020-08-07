import { makeStyles } from '@material-ui/core/styles';
import BG from '../../images/4.jpg';

export const useStyles = makeStyles((theme) => ({
  newPassBackground: {
    background: `url(${BG}) no-repeat `,
    backgroundSize: 'cover',
    height: '1000px',
    position: 'relative'
  },
  newPassForm: {
    backgroundColor: theme.palette.backgroundColor,
    width: '400px',
    minHeight: '100px',
    textAlign: 'center',
    position: 'absolute',
    top: '202px',
    right: '56px',
    padding: '50px'
  },
  heading: {
    fontSize: '24px',
    lineHeight: '29px',
    marginBottom: '25px',
    marginTop: '0px',
    fontStyle: 'normal',
    fontWeight: 'normal'
  },
  passwordInput: {
    marginBottom: '31px',
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
  changeBtn: {
    fontSize: '16px',
    lineHeight: '20px',
    height: '42px',
    backgroundColor: theme.palette.button.normal.backgroundColor,
    color: theme.palette.button.normal.color,
    textTransform: 'capitalize',
    '&:hover': {
      backgroundColor: theme.palette.button.hover.backgroundColor,
      color: theme.palette.button.hover.color
    }
  }
}));
