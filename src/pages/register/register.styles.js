import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  registerSuccess: {
    backgroundColor: theme.palette.backgroundColor,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    '& p': {
      textAlign: 'center',
      fontSize: theme.typography.h4.fontSize
    }
  },
  registerBtn: {
    backgroundColor: theme.palette.textColor,
    color: theme.palette.backgroundColor,
    marginBottom: '10px',
    padding: '10px 0',
    '&:hover': {
      color: theme.palette.button.hover.color,
      backgroundColor: theme.palette.button.hover.backgroundColor
    }
  },
  infoLogo: {
    width: '34px',
    height: '34px',
    margin: '0 auto'
  }
}));
