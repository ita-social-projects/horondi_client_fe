import { makeStyles } from '@material-ui/core/styles';

const button = {
  borderRadius: '4px',
  fontFamily: 'Open Sans',
  fontStyle: 'normal',
  fontWeight: '600',
  fontSize: '14px',
  lineHeight: '20px',
  letterSpacing: '0.0125em',
  textTransform: 'uppercase',
  '@media (max-width: 768px)': {
    padding: '4px 2px',
    fontSize: '10px'
  },
  '@media (max-width:500px)': {
    fontSize: '9px'
  }
};

export const useStyles = makeStyles(() => ({
  root: {
    justifyContent: 'space-between',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden'
  },
  allItems: {
    '@media (max-width:768px)': {
      padding: '3px 0'
    }
  },
  product: {
    display: 'flex',
    alignItems: 'center',
    marginRight: '50px',
    '@media (max-width: 980px)': {
      flexDirection: 'column',
      marginRight: '0'
    }
  },
  itemImg: {
    '@media (max-width: 768px)': {
      width: '80px'
    }
  },
  itemName: (isLightTheme) => ({
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '24px',
    lineHeight: '32px',
    color: isLightTheme ? '#242424' : '#FEFEFE',
    '@media (max-width:768px)': {
      fontSize: '14px',
      lineHeight: '20px'
    }
  }),
  description: (isLightTheme) => ({
    fontFamily: 'Open Sans',
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
  delete: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  deleteIcon: {
    marginLeft: '20px',
    cursor: 'pointer',
    '@media (max-width: 768px)': {
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
  cartButton: (isLightTheme) => ({
    ...button,
    '&:hover': {
      backgroundColor: isLightTheme ? '#3F3F3F' : '#020202',
      color: '#FEFEFE'
    },
    background: isLightTheme ? '#020202' : '#FEFEFE',
    color: isLightTheme ? '#FEFEFE' : '#020202'
  }),
  detailsButton: (isLightTheme) => ({
    ...button,
    marginTop: '15px',
    '&:hover': {
      backgroundColor: isLightTheme ? '#3F3F3F' : '#020202',
      color: '#FEFEFE'
    },
    background: isLightTheme ? '#FEFEFE' : 'none',
    border: isLightTheme ? 'none' : '1px solid #FEFEFE',
    color: isLightTheme ? '#020202' : '#FEFEFE'
  })
}));
