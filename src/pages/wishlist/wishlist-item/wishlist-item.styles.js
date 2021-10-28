import { makeStyles } from '@material-ui/core/styles';

const button = {
  width: '255px',
  height: '52px',
  borderRadius: '4px',
  fontFamily: 'Open Sans',
  fontStyle: 'normal',
  fontWeight: '600',
  fontSize: '14px',
  lineHeight: '20px',
  letterSpacing: '0.0125em',
  textTransform: 'uppercase'
};

export const useStyles = makeStyles(() => ({
  root: {
    width: '1110px',
    justifyContent: 'space-between',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden'
  },
  product: {
    display: 'flex',
    alignItems: 'center',
    width: '300px',
    marginRight: '50px'
  },
  itemName: (isLightTheme) => ({
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '24px',
    lineHeight: '32px',
    color: isLightTheme ? '#242424' : '#FEFEFE'
  }),
  description: (isLightTheme) => ({
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '14px',
    lineHeight: '22px',
    letterSpacing: '0.0025em',
    color: isLightTheme ? '#242424' : '#FEFEFE'
  }),
  delete: {
    display: 'flex',
    width: '760px',
    justifyContent: 'flex-end'
  },
  deleteIcon: {
    marginLeft: '20px',
    cursor: 'pointer'
  },
  priceWrapper: {
    textAlign: 'center',
    width: '100px'
  },
  deleteWrapper: {
    display: 'flex',
    width: '300px',
    flexDirection: 'row',
    flexWrap: 'wrap',
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
