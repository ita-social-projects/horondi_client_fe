import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  categoryItem: {
    color: theme.palette.textColor,
    textTransform: 'uppercase',
    display: 'flex',
    alignItems: 'center',
    margin: '0 20px',
    cursor: 'pointer',
    '& span, & svg': {
      fontSize: '2em'
    },
    '&:hover span': {
      textDecoration: 'underline'
    }
  },
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  itemHighlighting: {
    width: '100%',
    marginTop: '3%',
    borderBottom: '2px solid gray'
  },
  list: {
    margin: '10px 0 0 0',
    listStyle: 'none'
  },
  nested: {
    '&:hover': {
      background: 'none'
    },
    '& span': {
      textTransform: 'uppercase',
      fontSize: '14px',
      fontWeight: '400'
    },
    '&:hover span': {
      textDecoration: 'underline'
    },
    '& a': {
      color: 'inherit'
    },
    '&:before': {
      content: "'◆'",
      fontSize: '1.2rem',
      display: 'block',
      color: theme.palette.type === 'light' ? '#000000' : '#FFFFFF',
      width: 15,
      height: 27,
      position: 'relative',
      bottom: '1px',
      marginRight: 10
    }
  }
}));
