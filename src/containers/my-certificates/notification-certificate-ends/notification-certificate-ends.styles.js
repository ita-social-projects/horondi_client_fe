import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    gap: '56px',
    alignItems: 'center',
    fontWeight: '600',
    color: theme.palette.black,
    fontSize: '16px',
    '@media (max-width: 870px)': {
      textAlign: 'center',
      fontSize: '14px',
      gap: '32px'
    },
    '@media (max-width: 450px)': {
      fontSize: '12px',
      gap: '8px'
    }
  },
  button: {
    fontSize: '12px',
    color: theme.palette.black,
    fontWeight: '600',
    height: '40px',
    border: '1px solid',
    '@media (max-width: 450px)': {
      fontSize: '10px'
    }
  }
}));
