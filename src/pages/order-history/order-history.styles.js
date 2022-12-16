import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  orderTable: {
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
    marginBottom: '80px',
    width: '100%'
  },
  loader: {
    margin: '100px auto'
  }
}));
