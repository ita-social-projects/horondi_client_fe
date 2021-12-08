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
    margin: '10px',
    listStyle: 'none'
  },
  nested: {
    marginLeft: '-2%',
    '&:hover': {
      background: 'none'
    },
    '& span': {
      textTransform: 'uppercase',
      fontSize: '1.2em'
    },
    '& a': {
      color: 'inherit'
    },
    '&:before': {
      content: "'◆'",
      fontSize: '1.2rem',
      display: 'block',
      color: '#4267B2',
      width: 15,
      height: 27,
      position: 'relative',
      top: '50%',
      marginRight: 10,
      opacity: 0,
      transition: 'opacity .2s ease'
    },
    '&:hover:before': {
      opacity: 1
    }
  }
}));
