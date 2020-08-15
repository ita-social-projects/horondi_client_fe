import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    margin: '50px auto'
  },
  table: {
    margin: '50px auto',
    display: 'flex',
    flexDirection: 'column'
  },
  tableHeader: {
    display: 'flex',
    borderColor: '#DADADA',
    borderStyle: 'solid',
    borderWidth: '1px 0 1px',
    '@media (max-width: 768px)': {
      fontSize: '1em'
    },
    '& > tr': {
      display: 'flex',
      width: '100%',
      '& > *': {
        margin: '10px 0'
      }
    },
    '& > div:first-child': {
      flex: '1'
    },
    '& tr > th:not(:first-child)': {
      width: 200,
      '@media (max-width: 768px)': {
        width: 100
      }
    }
  },
  total: {
    textAlign: 'right',
    fontSize: '1.5em',
    fontWeight: 'bold',
    margin: 20
  }
}));
