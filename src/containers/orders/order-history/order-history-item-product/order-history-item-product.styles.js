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
  description: {
    lineHeight: '30px',
    fontSize: '20px'
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
    marginLeft: 20
  },
  sumTotal: {
    width: '60%'
  }
}));
