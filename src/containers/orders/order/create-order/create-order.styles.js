import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  btnCreateOrder: {
    display: 'flex',
    background: theme.palette.button.normal.backgroundColor,
    borderRadius: '5px',
    color: theme.palette.button.normal.color,
    '&:hover': {
      backgroundColor: theme.palette.button.hover.backgroundColor,
      color: theme.palette.button.hover.color
    }
  }
}));
