import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  modelItem: {
    cursor: 'pointer',
    flex: '1 0 31.3333%',
    margin: 11,
    boxSizing: 'border-box',
    display: 'flex',
    overflow: 'hidden',
    height: 200,
    position: 'relative',
    boxShadow: '0px 8px 13px #1e1b1b6b;',
    borderRadius: '6px',
    zIndex: '3',
    '& > *': {
      flex: 1
    },
    '&:after': {
      content: `''`,
      opacity: 0,
      position: 'absolute',
      transition: 'opacity .2s ease',
      top: 0,
      right: 0,
      left: 0,
      bottom: 0
    },
    '&:hover div img': {
      zIndex: 12,
      transform: 'scale(1.1)'
    },
    '&:hover div:first-child': {
      color: 'white'
    },
    '&:hover:after': {
      opacity: '.5'
    },
    '&:hover footer': {
      opacity: 1
    }
  },
  modelItemTitle: {
    padding: 20,
    display: 'flex',
    alignItems: 'flex-start',
    zIndex: 10,
    color: theme.palette.textColor,
    fontSize: '1.6em',
    textAlign: 'left',
    transition: 'color .2s ease',
    fontWeight: '600',
    '@media (max-width: 450px)': {
      fontSize: '1.3em'
    },
    '&:hover': {
      opacity: 0
    }
  },
  modelItemImage: {
    width: '50%',
    height: '100%',
    position: 'absolute',
    right: '70px',
    backgroundSize: 'cover',
    '& img': {
      transition: 'all .2s ease',
      width: 'auto',
      height: '100%',
      '@media (max-width: 450px)': {
        height: '70%',
        marginLeft: '-30px',
        marginTop: '30px'
      }
    }
  },
  link: {
    transition: 'opacity .2s ease',
    position: 'absolute',
    bottom: 20,
    left: '5%',
    opacity: 0,
    zIndex: 10,
    color: theme.palette.textColor,
    fontSize: '14px',
    display: 'flex',
    '& svg': {
      marginLeft: '5px',
      fontSize: '1.2em'
    }
  }
}));
