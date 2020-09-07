import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  mainTitle: {
    color: 'rgba(0, 0, 0, 0.54)',
    fontSize: '24px'
  },
  orderFormWrapper: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column'
  }
}));
