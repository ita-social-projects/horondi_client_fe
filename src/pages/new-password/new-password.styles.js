import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  button: { marginTop: '12px' },
  serverError: {
    fontSize: theme.typography.body1.fontSize,
    color: theme.palette.error.main
  }
}));
