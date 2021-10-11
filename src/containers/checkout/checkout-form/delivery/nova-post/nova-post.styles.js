import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  novaPostContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    width: '100%',
    marginBottom: '2%'
  },
  error: {
    color: '#e60000',
    marginTop: 15
  },
  novaPostTitle: {
    fontWeight: 700,
    fontSize: 23,
    marginLeft: '10%',
    '@media (max-width: 920px)': {
      width: '100%'
    }
  },
  novaPostData: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    marginBottom: '2%',
    marginLeft: '10%'
  },
  dataInput: {
    width: 600,
    marginBottom: '1%',
    '@media (max-width: 768px)': {
      width: '80%'
    }
  },
  disabled: {
    border: '1px solid red'
  }
}));
