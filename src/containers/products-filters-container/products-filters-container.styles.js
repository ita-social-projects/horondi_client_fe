import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  container: {
    borderBottom: '1px solid gray',
    borderTop: '1px solid gray',
    padding: '24px 0px',
    '& .Mui-selected': {
      backgroundColor: 'transparent'
    }
  },
  mainItem: {
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
  mainItemIcon: {
    position: 'absolute',
    right: '15px',
    top: '5px'
  },
  nestedBox: {
    marginTop: '10px',
    right: '10px'
  },
  nested: {
    '&:hover': {
      background: 'none'
    },
    '& span': {
      textTransform: 'lowercase',
      fontSize: '0.9em'
    }
  }
}));
