import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  mainTitle: {
    color: 'rgba(0, 0, 0, 0.54)',
    fontSize: '2.5rem'
  },
  orderFormWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  subTitle: {
    color: 'rgba(0, 0, 0, 0.54)',
    fontSize: '1.8rem'
  },
  contactsFields: {
    display: 'flex',
    flexDirection: 'column'
  },
  dataInput: {
    width: '300px'
  }
}));
