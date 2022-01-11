import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  container: {
    borderBottom: '1px solid gray',
    padding: '10px 0px'
  },
  mainItem: {
    color: theme.palette.textColor,
    textTransform: 'uppercase',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    cursor: 'pointer',
    width: '100%',
    position: 'relative',
    '& span, & svg': {
      fontSize: '1.2em'
    },
    '&:hover span': {
      textDecoration: 'underline'
    }
  },
  clearFilter: {
    cursor: 'pointer',
    color: 'gray',
    '&:hover': {
      textDecoration: 'underline',
      color: 'red'
    }
  },
  mainItemIcon: {
    position: 'absolute',
    right: '15px',
    top: '5px'
  },
  nested: {
    '&:hover': {
      background: 'none'
    },
    '& span': {
      textTransform: 'uppercase',
      fontSize: '0.9em'
    }
  }
}));
