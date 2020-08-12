import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '60vh'
  },
  content: {
    display: 'flex',
    justifyContent: 'flex-start',
    width: '90%'
  },
  contacts: {
    marginLeft: '30px',
    width: '30%'
  },
  contactsItem: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  contactsDetails: {
    width: '50%'
  }
}));
