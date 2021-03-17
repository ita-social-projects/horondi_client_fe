import { makeStyles } from '@material-ui/core/styles';

import GoogleLogo from '../../images/google.png';

export const useStyles = makeStyles((theme) => ({
  loginBtn: {
    border: '1px solid black',
    borderRadius: '4px',
    marginBottom: '10px',
    textTransform: 'capitalize',
    backgroundColor: 'white',
    color: 'black',
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
