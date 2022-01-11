import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    outline: '0',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    '& p': {
      fontSize: '1.2em',
      margin: '0',
      '& b': {
        fontSize: '1.4em'
      }
    }
  },
  fullscreen: {
    width: '90vw',
    height: '90vh'
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: '10px',
    '& > button': {
      color: theme.palette.button.normal.color,
      backgroundColor: theme.palette.button.normal.backgroundColor,
      margin: 5,
      '&:hover': {
        color: theme.palette.button.hover.color,
        backgroundColor: theme.palette.button.hover.backgroundColor
      }
    }
  }
}));
