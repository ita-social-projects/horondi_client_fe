import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ palette }) => ({
  tableHead: {
    borderTopWidth: '1px',
    borderTopStyle: 'solid',
    borderTopColor: palette.cart.borderColor,
    '& >th': {
      padding: '10px 15px',
      fontSize: '14px',
      fontWeight: 600,
      lineHeight: '20px',
      textAlign: 'left'
    },
    '& >th:last-child': {
      paddingLeft: '40px'
    }
  }
}));
