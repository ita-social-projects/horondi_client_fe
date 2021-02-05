import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  table: {
    display: 'flex',
    flexDirection: 'column'
  },
  titleWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  cartActionButtons: {
    display: 'flex',
    justifyContent: 'flex-end',
    minHeight: 40
  },
  cartButton: {
    margin: '10px 0 10px 20px',
    background: 'none',
    borderRadius: 5,
    border: 'none',
    cursor: 'pointer',
    alignSelf: 'flex-end',
    color: 'grey',
    outline: 'none',
    '&:hover': {
      color: '#363636'
    },
    '&:active': {
      color: theme.palette.textColor
    }
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
      fontSize: '1.2em',
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
  quantity: {
    color: 'grey',
    fontWeight: 'lighter'
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
