import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  mainTitle: {
    color: 'rgba(0, 0, 0, 0.54)',
    fontSize: '2.5rem',
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '35px'
  },
  orderFormWrapper: {
    margin: '0 auto',
    maxWidth: '800px'
  },
  subTitle: {
    color: 'rgba(0, 0, 0, 0.54)',
    fontSize: '1.8rem',
    marginBottom: '20px'
  },
  contactsFields: {
    display: 'flex',
    flexDirection: 'column'
  },
  contactFild: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '20px'
  },
  dataInput: {
    width: '350px'
  }
}));
