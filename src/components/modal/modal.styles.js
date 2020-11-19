import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  message: {
    textAlign: 'center'
  },
  paper: {
    position: 'absolute',
    top: '50%',
    left: '51%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    backgroundColor: '#F1F3F4',
    border: '5px solid #666',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    '& p': {
      fontSize: '1.2em'
    }
  },
  buttonGroup: {
    width: '100%',
    textAlign: 'center',
    '& > button': {
      color: theme.palette.button.normal.color,
      backgroundColor: theme.palette.button.normal.backgroundColor,
      padding: 5,
      margin: 5,
      width: '150px',
      '&:hover': {
        color: theme.palette.button.hover.color,
        backgroundColor: theme.palette.button.hover.backgroundColor
      }
    }
  }
}));
