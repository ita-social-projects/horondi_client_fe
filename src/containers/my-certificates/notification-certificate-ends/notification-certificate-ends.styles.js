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
    textTransform: 'uppercase',
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
    fontSize: '14px',
    lineHeight: '16px',
    color: theme.palette.black,
    fontWeight: '600',
    height: '40px',
    '@media (max-width: 750px)': {
      fontSize: '12px',
      lineHeight: '14px'
    },
    '@media (max-width: 450px)': {
      fontSize: '10px',
      lineHeight: '12px'
    }
  }
}));
