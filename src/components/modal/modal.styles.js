import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '16px',
    gap: '24px',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 480,
    backgroundColor: theme.palette.backgroundColor,
    outline: '0',
    boxShadow: theme.shadows[5],
    '@media (max-width: 500px)': {
      width: '320px'
    }
  },
  closeIcon: {
    position: 'fixed',
    top: '16px',
    right: '16px',
    color: '#808080',
    fontSize: '26px',
    cursor: 'pointer'
  }
}));
