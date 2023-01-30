import { makeStyles } from '@material-ui/core/styles';

const name = {
  fontWeight: '700',
  fontSize: '20px',
  lineHeight: '32px'
};
const description = {
  fontWeight: '400',
  fontSize: '14px',
  lineHeight: '22px',
  letterSpacing: '0.0025em'
};

export const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    justifyContent: 'space-between'
  },
  itemDescription: {
    ...description,
    color: theme.palette.textColor,
    '@media (max-width: 650px)': {
      fontSize: theme.typography.body1.fontSize
    }
  },
  itemName: {
    ...name,
    color: theme.palette.textColor,
    '@media (max-width: 900px)': {
      fontSize: theme.typography.h4.fontSize
    },
    '@media (max-width: 650px)': {
      fontSize: theme.typography.subtitle1.fontSize
    }
  },
  itemImg: {
    objectFit: 'cover',
    height: '150px',
    width: '140px',
    marginRight: '30px',
    '@media (max-width: 900px)': {
      height: '120px',
      width: '110px',
      marginRight: '16px'
    },
    '@media (max-width: 650px)': {
      marginRight: 0
    }
  },
  constructorProductImg: {
    objectFit: 'fill'
  },
  product: {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'left',
    '@media (max-width: 768px)': {
      flexDirection: 'column',
      textAlign: 'center'
    },
    '@media (max-width: 650px)': {
      gridRow: '1/4'
    }
  },
  price: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& svg': {
      marginRight: '3px',
      fontSize: '18px'
    }
  },
  promo: {
    display: 'flex',
    flexDirection: 'column'
  },
  selectSizeStyle: {
    width: '71px',
    height: '40px',
    fontSize: theme.typography.h4.fontSize,
    fontWeight: theme.typography.h4.fontWeight,
    '& legend': {
      display: 'none'
    },
    '& .MuiSelect-outlined': {
      '@media (max-width: 768px)': {
        paddingRight: '24px'
      }
    },
    '& .MuiSelect-select:focus': {
      background: 'transparent'
    },
    '@media (max-width: 768px)': {
      fontSize: theme.typography.subtitle1.fontSize,
      width: '62px'
    }
  },
  loadingBar: {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center'
  },
  deleteIcon: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: theme.palette.cart.iconColor,
    cursor: 'pointer'
  },
  sizes: {
    '@media (max-width: 650px)': { gridColumn: 2, gridRow: 3 },
    '@media (max-width: 450px)': { display: 'none' }
  },
  delete: { '@media (max-width: 650px)': { gridColumn: 3, gridRow: 3 } },
  quantity: { '@media (max-width: 450px)': { gridColumn: 3, gridRow: 2 } },
  totalPrice: { '@media (max-width: 450px)': { gridColumn: 3, gridRow: 1 } },
  productPrice: {
    '@media (max-width: 650px)': {
      display: 'none'
    }
  }
}));
