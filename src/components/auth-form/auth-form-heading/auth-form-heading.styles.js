import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  heading: {
    fontWeight: 'bolder',
    fontSize: '1.75rem',
    lineHeight: '3rem',
    textAlign: 'center',
    marginBottom: '25px',
    marginTop: 0,
    color: theme.palette.textColor
  }
}));
