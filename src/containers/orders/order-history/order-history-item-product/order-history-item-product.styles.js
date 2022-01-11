import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    justifyContent: 'space-between',
    textAlign: 'center'
  },
  image: {
    '& img': {
      maxHeight: '165px',
      minHeight: '130px'
    }
  },
  price: {
    fontSize: '20px',
    lineHeight: '28px',
    textAlign: 'center',
    textTransform: 'uppercase',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'spaceBetween',
    marginLeft: '-15px',
    '& svg': {
      fontSize: '20px',
      marginRight: '5px'
    }
  },
  productName: {
    fontWeight: 'bold',
    fontSize: '24px',
    lineHeight: '32px',
    marginBottom: '0px',
    marginTop: '40px',
    whiteSpace: 'nowrap'
  },
  productBottom: {
    fontSize: '14px',
    lineHeight: '22px',
    marginTop: '0px'
  },
  itemImg: {
    marginLeft: '20px'
  },
  sumTotal: {
    width: '60%'
  }
}));
