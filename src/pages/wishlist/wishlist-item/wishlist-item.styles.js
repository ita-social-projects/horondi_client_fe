import { makeStyles } from '@material-ui/core/styles';

const button = {
  borderRadius: '4px',
  fontStyle: 'normal',
  fontWeight: '600',
  fontSize: '14px',
  lineHeight: '20px',
  letterSpacing: '0.0125em',
  textTransform: 'uppercase',
  '@media (max-width: 880px)': {
    padding: '4px 2px',
    fontSize: '10px'
  },
  '@media (max-width:500px)': {
    fontSize: '8px'
  }
};

export const useStyles = makeStyles(({ palette }) => ({
  root: {
    justifyContent: 'space-between',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden'
  },
  allItems: {
    '@media (max-width:868px)': {
      padding: '3px 0'
    }
  },
  product: {
    display: 'flex',
    alignItems: 'center',
    marginRight: '50px',
    '@media (max-width: 1100px)': {
      flexDirection: 'column',
      marginRight: '0'
    }
  },
  itemImg: {
    '@media (max-width: 576px)': {
      width: '70px'
    }
  },
  itemName: (isLightTheme) => ({
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '24px',
    lineHeight: '32px',
    color: isLightTheme ? '#242424' : '#FEFEFE',
    '@media (max-width:768px)': {
      fontSize: '13px',
      lineHeight: '20px'
    }
  }),
  description: (isLightTheme) => ({
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '14px',
    lineHeight: '22px',
    letterSpacing: '0.0025em',
    color: isLightTheme ? '#242424' : '#FEFEFE',
    '@media (max-width:768px)': {
      display: 'none'
    }
  }),
  price: {
    fontSize: '15px',
    textAlign: 'center',
    textTransform: 'uppercase',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'spaceBetween',
    marginLeft: '5px',
    '& svg': {
      fontSize: '15px',
      marginRight: '5px'
    }
  },
  delete: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  deleteIcon: {
    marginLeft: '20px',
    cursor: 'pointer',
    '@media (max-width: 880px)': {
      marginLeft: '0'
    }
  },
  priceWrapper: {
    textAlign: 'center',
    fontSize: '12px'
  },
  deleteWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  cartButton: {
    ...button,
    background: palette.button.normal.backgroundColor,
    color: palette.button.normal.color,
    '&:hover': {
      backgroundColor: palette.button.hover.backgroundColor,
      color: palette.button.hover.color
    }
  },
  detailsButton: {
    ...button,
    marginTop: '15px',
    background: palette.backgroundColor,
    color: palette.textColor,
    border: `1px solid ${palette.button.normal.borderColor}`,
    '&:hover': {
      backgroundColor: palette.button.hoverSecondary.backgroundColor
    }
  }
}));
