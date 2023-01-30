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
  },
  product: { textAlign: 'left' },
  tableHeader: () => ({
    fontStyle: 'normal',
    '& > th': {
      '@media (max-width: 810px)': {
        padding: '10px'
      },
      '@media (max-width: 610px)': {
        padding: '3px'
      }
    }
  })
}));
