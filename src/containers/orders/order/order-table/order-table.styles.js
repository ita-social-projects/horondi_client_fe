import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  table: {
    display: 'flex',
    flexDirection: 'column'
  },
  tableHeader: {
    display: 'flex',
    borderColor: '#DADADA',
    borderStyle: 'solid',
    borderWidth: '1px 0 1px',
    width: '100%',
    '& > div': {
      margin: '10px 0',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: '1.5em',
      '@media (max-width: 768px)': {
        fontSize: '1em'
      }
    },
    '& > div:first-child': {
      flex: '1'
    },
    '& > div:not(:first-child)': {
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
    margin: '40px 0'
  },
  backButton: {
    '&:visited': {
      color: 'inherit'
    },
    '& > svg': {
      fontSize: '2.5em',
      transition: 'transform .2s ease',
      '&:hover': {
        transform: 'scale(1.1)'
      }
    }
  }
}));
