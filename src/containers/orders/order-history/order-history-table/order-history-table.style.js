import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  tableCell: {
    textAlign: 'center',
    width: '25%',
    fontSize: 15,
    fontWeight: 500,
    '& div': {
      width: '60%',
      textAlign: 'right'
    }
  }
}));
