import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(({ palette }) => ({
  productItem: (props) => ({
    background: `center / cover url(${props.imageUrl}) no-repeat  ${
      palette.type === 'light' ? '#e3e7ea' : '#262626'
    }`,
    height: '100%',
    width: '100%',
    position: 'relative',
    '&:hover': {
      boxShadow: '5px 5px 20px #c5c5c5'
    }
  }),
  wrapper: {
    width: '100%',
    maxHeight: '380px',
    aspectRatio: 0.8,
    cursor: 'pointer',
    position: 'relative',
    '@media (max-width: 600px)': {
      maxHeight: '340px'
    },
    '@media (max-width: 500px)': {
      maxWidth: '100%',
      flexBasis: '100%'
    },
    '@media (max-width: 450px)': {
      maxHeight: '300px'
    }
  },
  unavailableContainer: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    background: 'rgba(255,255,255, 0.5)'
  },
  name: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    height: 'fit-content',
    width: '100%',
    position: 'absolute',
    backgroundColor: 'rgba(3,3,3,0.6)',
    bottom: 0,
    color: 'white',
    padding: '0px 15px',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '12px',
    '@media (max-width: 600px)': { padding: '4px 8px' }
  },
  title: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    columnGap: '8px',
    fontSize: '16px',
    marginTop: '5px',
    minHeight: '38px',
    textTransform: 'capitalize',
    '@media (max-width: 750px)': { fontSize: '14px' }
  },
  unavailableText: {
    fontSize: '10px',
    lineHeight: '28px',
    textTransform: 'none'
  },
  price: {
    display: 'flex',
    whiteSpace: 'nowrap',
    alignItems: 'center',
    fontSize: '20px',
    fontWeight: '600',
    color: 'white',
    '@media (max-width: 600px)': {
      fontSize: '18px'
    }
  },
  currency: {
    paddingTop: '5px'
  },
  addToFavouriteButton: {
    position: 'absolute',
    top: '18px',
    right: '18px',
    zIndex: 2,
    background: palette.common.white,
    opacity: '0.5',
    width: '30px',
    height: '30px',
    '& svg': { color: palette.common.black },
    '&:hover': { opacity: '0.8', background: palette.common.white }
  }
}));
