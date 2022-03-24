import { makeStyles } from '@material-ui/core/styles';

const name = {
  fontWeight: '700',
  fontSize: '24px',
  lineHeight: '32px',
  '@media (max-width: 420px)': {
    fontSize: '14px',
    fontWeight: '700'
  }
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
    color: palette.textColor,
    '@media (max-width: 420px)': {
      fontSize: '12px'
    }
  },
  itemName: {
    ...name,
    color: palette.textColor
  },
  constructorProductImgContainer: {
    padding: '0 45px',
    '@media (max-width: 600px)': {
      padding: '0 32px'
    }
  },
  constructorProductImg: {
    width: 130,
    height: 133,
    '@media (max-width: 600px)': {
      width: 60,
      height: 60
    }
  },

  product: {
    display: 'flex',
    alignItems: 'center',
    '@media (max-width: 420px)': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
  },
  price: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& svg': {
      marginRight: '3px',
      fontSize: '18px'
    },
    '@media (max-width: 420px)': {
      fontSize: '14px',
      '& svg': {
        marginRight: '2px',
        fontSize: '14px'
      }
    }
  },
  promo: {
    display: 'flex',
    flexDirection: 'column'
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
    },
    '@media (max-width: 425px)': {
      fontSize: '14px',
      width: '75px',
      height: '35px'
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
  },
  selectInputStyle: {
    '@media (max-width: 425px)': {
      fontSize: '14px',
      width: '55px',
      height: '35px'
    }
  }
}));
