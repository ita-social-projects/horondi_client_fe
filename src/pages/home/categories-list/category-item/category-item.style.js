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
    boxShadow: theme.palette.carouselItem.shadow.boxShadow,
    padding: '0px',
    borderRadius: '6px',
    position: 'relative',
    color: theme.palette.textColor,
    '&:hover > div, &:active > div': {
      display: 'flex',
      alignItems: 'center'
    },
    '&:hover, &:active': {
      border: theme.palette.carouselItem.hover.border
    },
    '&:hover > span, &:active > span': {
      display: 'none'
    }
  }),
  categoryInner: {
    display: 'none',
    position: 'absolute',
    left: '24px',
    bottom: '24px',
    fontFamily: 'Open Sans',
    fontSize: '14px',
    fontWeight: 600,
    letterSpacing: '0.0125em',
    lineHeight: '20px',
    textTransform: 'uppercase'
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
