import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  message: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 5,
    position: 'relative',
    marginTop: '-15px'
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    position: 'absolute',
    top: '53%',
    left: '51%',
    transform: 'translate(-50%, -50%)',
    height: '30%',
    width: 400,
    backgroundColor: '#F1F3F4',
    color: 'black',
    border: '5px solid #666',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '100%',
    height: '30%',
    textAlign: 'center',
    '& > button': {
      color: theme.palette.button.normal.color,
      backgroundColor: theme.palette.button.normal.backgroundColor,
      paddingBottom: '5px',
      margin: 3,
      width: '130px',
      '&:hover': {
        color: theme.palette.button.hover.color,
        backgroundColor: theme.palette.button.hover.backgroundColor
      }
    }
  }
}));
