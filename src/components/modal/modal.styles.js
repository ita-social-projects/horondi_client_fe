import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  },
  buttonGroup: {
    width: '100%',
    textAlign: 'center',
    '& > button': {
      color: theme.palette.button.normal.textColor,
      backgroundColor: theme.palette.button.normal.backgroundColor,
      '&:hover': {
        color: theme.palette.button.hover.textColor,
        backgroundColor: theme.palette.button.hover.backgroundColor
      }
    }
  }
}));
