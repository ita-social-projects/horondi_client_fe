import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    margin: '50px auto'
  },
  tableHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    borderColor: '#DADADA',
    borderStyle: 'solid',
    borderWidth: '1px 0 1px',
    width: '100%',
    '& > div': {
      margin: '10px 0',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: '1.5em',
      '@media (max-width: 860px)': {
        fontSize: '1.2em'
      },
      '@media (max-width: 768px)': {
        fontSize: '1em'
      }
    },
    '@media (max-width: 600px)': {
      flexDirection: 'column'
    }
  }
}));
