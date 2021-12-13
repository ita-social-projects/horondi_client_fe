import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  categoryItem: (props) => ({
    backgroundImage: `url("${props.image}")`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundColor: theme.palette.carouselItem.normal.backgroundColor,
    display: 'flex',
    width: '350px',
    height: '350px',
    cursor: 'pointer',
    boxShadow: '(0px 8px 16px rgba(0, 0, 0, 0.12))',
    padding: '0px',
    borderRadius: '6px',
    position: 'relative',
    color: theme.palette.textColor,
    '&:hover > div': {
      display: 'flex'
    },
    '&:hover': {
      border: theme.palette.carouselItem.hover.border
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
    display: 'none',
    fontSize: '14px',
    fontWeight: 600,
    textTransform: 'uppercase',
    transform: 'translateX(-50%)',
    width: '100%',
    '&:hover': {
      left: '42px',
      transition: 'all 0.5 ease-in'
    }
  },
  categoryName: {
    position: 'absolute',
    left: '24px',
    bottom: '24px',
    fontFamily: 'Open Sans',
    fontSize: ' 20px',
    fontWeight: '600',
    lineHeight: '28px',
    letterSpacing: '0.0015em',
    zIndex: 11,
    color: theme.palette.textColor
  }
}));
