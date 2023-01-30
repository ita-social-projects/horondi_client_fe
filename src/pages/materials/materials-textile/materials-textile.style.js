import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    marginBottom: '40px',
    '@media (max-width: 768px)': {
      justifyContent: 'center',
      flexWrap: 'wrap'
    }
  },
  image: {
    width: '255px',
    height: '435px'
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '0 30px',
    '& h3': {
      fontSize: '34px',
      fontWeight: '400',
      marginBottom: '0'
    },
    '& ul': {
      fontSize: '16px',
      paddingLeft: '20px'
    }
  }
}));
