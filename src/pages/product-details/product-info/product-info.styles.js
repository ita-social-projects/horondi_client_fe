import { makeStyles } from '@material-ui/core/styles';

const notAvaliable = { padding: '6px', fontSize: '14px', lineHeight: '20px', borderRadius: '4px' };

export const useStyles = makeStyles((theme) => ({
  common: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    '@media (max-width: 500px)': {
      gap: '12px'
    }
  },
  head: {
    display: 'flex',
    alignItems: 'flex-end',
    gap: '24px',
    '@media (max-width: 900px)': { gap: '16px', flexWrap: 'wrap' },
    '@media (max-width: 500px)': {
      order: '-2'
    }
  },
  title: {
    fontSize: '28px',
    lineHeight: '41px',
    fontWeight: 600,
    '@media (max-width: 900px)': { fontSize: '26px' },
    '@media (max-width: 750px)': { fontSize: '23px' }
  },
  isDeleted: {
    ...notAvaliable,
    color: theme.palette.backgroundColor,
    background: theme.palette.button.disabled.backgroundColor
  },
  notAvailable: {
    ...notAvaliable,
    color: theme.palette.red,
    background: theme.palette.lightPing
  },
  rate: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
    '@media (max-width: 750px)': { flexDirection: 'row', alignItems: 'flex-end', gap: '12px' }
  },
  comments: {
    color: theme.palette.textColor,
    textDecorationLine: 'underline'
  },
  text: {
    '& p': { color: theme.palette.textColor, margin: '0', lineHeight: '22px', fontSize: '14px' }
  },
  priceContainer: {
    fontWeight: 600,
    fontSize: '26px',
    color: theme.palette.textColor,
    '& svg': {
      verticalAlign: 'middle',
      fontSize: '25px',
      marginBottom: '2px',
      '@media (max-width: 750px)': { fontSize: '23px' },
      '@media (max-width: 500px)': { fontSize: '22px', marginBottom: '4px' }
    },
    '@media (max-width: 750px)': {
      position: 'absolute',
      top: 0,
      right: '4px',
      fontSize: '24px'
    },
    '@media (max-width: 500px)': {
      position: 'static',
      fontSize: '22px',
      margin: '-4px',
      order: '-1'
    }
  },
  look: {
    display: 'flex',
    gap: '48px',
    fontSize: '15px',
    '@media (max-width: 750px)': { gap: '24px' },
    '@media (max-width: 500px)': {
      fontSize: '14px',
      alignItems: 'flex-end',
      gap: '12px'
    }
  },
  colorAndPatern: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    gap: '6px'
  },
  subtitleBold: {
    fontWeight: 600
  },
  circle: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    transition: 'border-radius .2s'
  },
  patternButton: {
    background: 'inherit',
    textAlign: 'left',
    padding: 0,
    border: 'none',
    cursor: 'zoom-in'
  },
  zoomedPattern: {
    position: 'absolute',
    width: 'auto',
    height: 'auto',
    maxWidth: '200px',
    borderRadius: 0,
    cursor: 'zoom-out',
    zIndex: 10
  },
  addToFavouriteButton: {
    '&:hover': { background: 'inherit' }
  },
  subtitle: {
    '@media (max-width: 500px)': {
      display: 'flex',
      flexDirection: 'column'
    }
  }
}));
