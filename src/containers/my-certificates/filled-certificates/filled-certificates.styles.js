import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '80px'
  },
  buttonWrapper: { width: '352px', '@media (max-width: 500px)': { width: '292px' } },
  buyButton: {
    padding: '12px 0'
  },
  certificateTable: {
    width: '100%'
  }
}));
