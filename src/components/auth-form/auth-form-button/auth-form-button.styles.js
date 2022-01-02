import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  authBtn: {
    border: '1px solid black',
    borderRadius: '0px',
    textTransform: 'uppercase',
    background: theme.palette.textColor,
    color: theme.palette.backgroundColor,
    '&:hover': {
      background: theme.palette.textColor,
      color: theme.palette.backgroundColor
    }
  }
}));
