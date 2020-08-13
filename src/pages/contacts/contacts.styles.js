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
    '@media screen and (max-width: 768px)': {
      flexDirection: 'column'
    }
  },
  contacts: {
    marginLeft: '30px'
  },
  contactsItem: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '10px',
    width: '280px'
  },
  contactsDetails: {
    width: '57%'
  },
  schedule: {
    display: 'flex',
    flexDirection: 'column',
    width: '57%'
  }
}));
