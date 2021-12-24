import { makeStyles } from '@material-ui/core/styles';

const name = {
  fontWeight: '700',
  fontSize: '24px',
  lineHeight: '32px'
};
const description = {
  fontWeight: '400',
  fontSize: '14px',
  lineHeight: '22px',
  letterSpacing: '0.0025em'
};

export const useStyles = makeStyles(({ palette }) => ({
  root: {
    width: '100%',
    justifyContent: 'space-between'
  },
  itemDescription: {
    ...description,
    color: palette.textColor
  },
  itemName: {
    ...name,
    color: palette.textColor
  },
  product: {
    display: 'flex',
    alignItems: 'center'
  },
  price: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& svg': {
      marginRight: '5px',
      fontSize: '20px'
    }
  },
  selectSizeStyle: {
    width: '71px',
    height: '40px',
    fontSize: '20px',
    fontWeight: 400,
    '& legend': {
      display: 'none'
    },
    '& .MuiSelect-select:focus': {
      background: 'transparent'
    }
  },
  loadingBar: {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center'
  },
  deleteIcon: {
    color: palette.cart.iconColor,
    cursor: 'pointer'
  }
}));
