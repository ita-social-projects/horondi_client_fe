import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  categoryItem: (props) => ({
    backgroundImage: `url("${props.image}")`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundColor: theme.palette.carouselItem.normal.backgroundColor,
    display: 'flex',
    alignItems: 'flex-end',
    width: 'calc(100% - 40px)',
    borderRadius: '6px',
    height: '500px',
    margin: '20px',
    cursor: 'pointer',
    boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.12)',
    padding: '26px 24px',
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
    alignItems: 'center',
    '& svg': {
      marginLeft: '4px'
    }
  },
  categoryName: {
    fontSize: ' 20px',
    fontWeight: '600'
  }
}));
