import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  categoryItem: (props) => ({
    backgroundImage: `url("${props.image}")`,
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
    color: 'inherit',
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
    '&:hover:after, &:hover > div': {
      opacity: 1
    },
    '&:hover > span': {
      display: 'none'
    },
    '@media (max-width: 768px)': {
      width: 'calc(100% - 40px)',
      height: '420px'
    }
  }),
  categoryInner: {
    position: 'absolute',
    bottom: '5%',
    left: '35%',
    opacity: 0,
    zIndex: 10,
    color: 'white',
    fontFamily: 'Open Sans',
    fontSize: '1.4em',
    textTransform: 'uppercase',
    transform: 'translateX(-50%)',
    width: '100%'
  },
  categoryName: {
    position: 'absolute',
    fontFamily: 'Open Sans',
    bottom: '5%',
    fontSize: ' 20px',
    fontWeight: '600',
    zIndex: 11,
    color: theme.palette.textColor
  }
}));
