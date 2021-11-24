import { makeStyles } from '@material-ui/core/styles';

import GoogleLogo from '../../images/google.png';

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
  googleLogo: {
    background: `url(${GoogleLogo}) no-repeat `,
    backgroundSize: 'cover',
    width: '22px',
    height: '22px',
    marginRight: '10px'
  }
}));
