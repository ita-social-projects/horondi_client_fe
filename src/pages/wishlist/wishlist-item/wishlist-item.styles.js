import { makeStyles } from '@material-ui/core/styles';

const button = {
  padding: '14px',
  minWidth: '220px',
  borderRadius: '4px',
  fontStyle: 'normal',
  fontWeight: '600',
  fontSize: '14px',
  lineHeight: '20px',
  letterSpacing: '0.0125em',
  textTransform: 'uppercase',
  '@media (max-width:600px)': {
    fontSize: '12px',
    minWidth: 'auto',
    padding: '10px'
  },
  '@media (max-width:450px)': {
    fontSize: '10px',
    padding: '8px',
    minWidth: 'auto'
  }
};

export const useStyles = makeStyles(({ palette }) => ({
  root: {
    justifyContent: 'space-between',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    position: 'relative'
  },
  allItems: {
    padding: '16px 0',
    '&:nth-child(3)': {
      '@media (max-width: 600px)': {
        verticalAlign: 'top'
      }
    },
    '&:nth-child(2)': {
      '@media (max-width: 600px)': {
        verticalAlign: 'bottom'
      }
    }
  },
  product: {
    display: 'flex',
    alignItems: 'center',
    '@media (max-width: 900px)': {
      flexDirection: 'column',
      alignItems: 'flex-start'
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
  itemName: (isLightTheme) => ({
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '20px',
    lineHeight: '32px',
    color: isLightTheme ? '#242424' : '#FEFEFE',
    '@media (max-width:768px)': {
      fontSize: '18px',
      lineHeight: '24px'
    },
    '@media (max-width: 450px)': {
      fontSize: '16px',
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
      fontSize: '12px'
    }
  }),
  price: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& p': { fontSize: '20px', margin: '10px 0' },
    '& svg': {
      marginRight: '3px',
      fontSize: '18px'
    },
    '@media (max-width:450px)': {
      position: 'absolute',
      bottom: '16px',
      right: '60px'
    }
  },
  delete: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  deleteButton: {
    marginLeft: '20px',
    cursor: 'pointer',
    alignSelf: 'flex-start',
    '@media (max-width: 900px)': {
      marginLeft: '14px',
      padding: '6px',
      alignSelf: 'center'
    },
    '@media (max-width: 600px)': {
      position: 'absolute',
      bottom: '24px'
    }
  },
  deleteIcon: {
    fill: '#818181'
  },
  priceWrapper: { display: 'flex', justifyContent: 'flex-start' },
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
    border: `1px solid ${palette.text.disabled}`,
    '&:hover': {
      backgroundColor: palette.button.hoverSecondary.backgroundColor
    },
    '@media (max-width: 450px)': {
      marginTop: '12px'
    }
  }
}));
