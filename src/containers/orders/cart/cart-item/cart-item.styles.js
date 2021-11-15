import { makeStyles } from '@material-ui/core/styles';

const name = {
  fontFamily: 'Open Sans',
  fontStyle: 'normal',
  fontWeight: 'bold',
  fontSize: '24px',
  lineHeight: '32px'
};
const description = {
  fontFamily: 'Open Sans',
  fontStyle: 'normal',
  fontWeight: 'normal',
  fontSize: '14px',
  lineHeight: '22px',
  letterSpacing: '0.0025em'
};

export const useStyles = makeStyles(({ palette }) => ({
  root: {
    width: '100%',
    justifyContent: 'space-between'
  },
  description: {
    textAlign: 'center',
    lineHeight: '30px'
  },
  itemDescription: {
    ...description,
    color: palette.type === 'light' ? '#242424' : '#FEFEFE'
  },
  itemName: {
    ...name,
    color: palette.type === 'light' ? '#242424' : '#FEFEFE'
  },
  price: {
    textAlign: 'center'
  },
  product: {
    display: 'flex',
    alignItems: 'center'
  },
  quantityWrapper: {
    width: '250px'
  },
  selectSizeStyle: {
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: palette.type === 'light' ? 'rgba(91, 91, 91, 0.2)' : '#5B5B5B',
    width: '71px',
    height: '40px'
  },
  loadingBar: {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center'
  },
  deleteIcon: {
    marginLeft: '20px',
    cursor: 'pointer'
  },
  priceWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  itemImg: {
    marginLeft: 20
  },
  delete: {
    marginTop: '15px'
  }
}));
