import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    justifyContent: 'space-between',
    textAlign: 'center'
  },
  image: {
    '& img': {
      width: '100%'
    }
  },
  description: {
    lineHeight: '30px',
    fontSize: '1.2em'
  },
  productName: {
    fontWeight: 'bold',
    fontSize: '24px',
    lineHeight: '32px',
    marginBottom: '0px'
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
