import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  categoryItem: (props) => ({
    position: 'relative',
    display: 'flex',
    overflow: 'hidden',
    width: '350px',
    height: '350px',
    padding: '0px',
    backgroundImage: `url("${props.image}")`,
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    backgroundColor: theme.palette.carouselItem.normal.backgroundColor,
    backgroundRepeat: 'no-repeat',
    cursor: 'pointer',
    boxShadow: theme.palette.carouselItem.shadow.boxShadow,
    borderRadius: '6px',
    color: theme.palette.textColor,
    outline: '1px solid transparent',
    transition: 'all 0.2s ease-in-out',
    '&:hover, &:active': {
      outline: theme.palette.carouselItem.hover.border,
      transition: 'outline 0.2s ease-in-out'
    },
    '&:hover > div, &:active > div': {
      display: 'flex',
      alignItems: 'flex-end',
      paddingLeft: '24px',
      paddingBottom: '24px',
      visibility: 'visible',
      transform: 'none',
      transition: 'all 0.2s ease-in-out'
    },
    '&:hover > span, &:active > span': {
      display: 'none'
    }
  }),
  categoryInner: {
    display: 'flex',
    alignItems: 'end',
    paddingLeft: '24px',
    paddingBottom: '24px',
    visibility: 'hidden',
    fontFamily: 'Open Sans',
    fontSize: '14px',
    fontWeight: 600,
    letterSpacing: '0.0125em',
    lineHeight: '20px',
    textTransform: 'uppercase',
    transform: 'translateX(-200%)'
  },
  arrow: {
    transform: 'translateY(10%)'
  },
  categoryName: {
    display: 'flex',
    alignItems: 'end',
    paddingLeft: '24px',
    paddingBottom: '24px',
    fontFamily: 'Open Sans',
    fontSize: ' 20px',
    fontWeight: '600',
    lineHeight: '28px',
    letterSpacing: '0.0015em',
    color: theme.palette.textColor
  }
}));
