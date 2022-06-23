import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  tableCell: {
    textAlign: 'left',
    width: '25%',
    fontSize: 15,
    fontWeight: 500,
    '& div': {
      width: '60%',
      textAlign: 'right'
    }
  },
  tableHeader: () => ({
    fontStyle: 'normal',
    '& > th': {
      '@media (max-width: 768px)': {
        padding: '10px'
      },
      '@media (max-width: 576px)': {
        padding: '3px'
      }
    }
  })
}));
