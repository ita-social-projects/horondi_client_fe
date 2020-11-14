import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  categoryItem: (props) => ({
    backgroundImage: `url(${props.image})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    display: 'flex',
    width: 'calc(100% - 40px)',
    height: '500px',
    margin: '20px',
    cursor: 'pointer',
    boxShadow: '0px 5px 8px #c5c5c5',
    padding: 20,
    position: 'relative',
    '&:after': {
      opacity: 0,
      transition: 'all .2s ease',
      color: 'white',
      content: `''`,
      position: 'absolute',
      top: 0,
      right: 0,
      left: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.7)'
    },
    '&:hover:after, &:hover > a': {
      opacity: 1
    },
    '&:hover > span:first-child': {
      color: 'white'
    },
    '@media (max-width: 768px)': {
      width: 'calc(100% - 40px)',
      height: '420px'
    }
  }),
  categoryInner: {
    position: 'absolute',
    bottom: 20,
    left: '50%',
    opacity: 0,
    zIndex: 10,
    color: 'white',
    fontSize: '1.3em',
    transform: 'translateX(-50%)',
    width: '100%',
    '& span': {
      marginLeft: '5px'
    }
  },
  categoryName: {
    fontSize: '2em',
    textTransform: 'uppercase',
    fontWeight: '600',
    zIndex: 10
  }
}));
