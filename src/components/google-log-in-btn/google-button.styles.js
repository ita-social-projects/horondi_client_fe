import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  loginBtn: {
    border: '1px solid',
    borderColor: theme.palette.textColor,
    borderRadius: '4px',
    marginBottom: '10px',
    textTransform: 'capitalize',
    backgroundColor: theme.palette.backgroundColor,
    color: theme.palette.textColor,
    '&:hover': {
      color: theme.palette.button.normal.backgroundColor
    }
  },
  socialLogo: {
    width: '17px',
    height: '17px',
    marginRight: '10px'
  }
}));
