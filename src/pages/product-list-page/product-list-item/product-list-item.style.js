import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(({ palette }) => ({
  productItem: (props) => ({
    background: `url(${props.image}) no-repeat center ${
      palette.type === 'light' ? '#e3e7ea' : '#262626'
    }`,
    backgroundSize: 'cover',
    height: '100%',
    width: '100%',
    position: 'relative',
    '&:hover': {
      boxShadow: '5px 5px 20px #c5c5c5'
    }
  }),
  wrapper: {
    height: '380px',
    width: '100%',
    cursor: 'pointer',
    '@media (max-width: 450px)': {
      height: '320px'
    }
  },
  name: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    height: '4rem',
    width: '100%',
    position: 'absolute',
    backgroundColor: 'rgba(3,3,3,0.6)',
    bottom: 0,
    color: 'white',
    padding: '0px 15px',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '12px'
  },
  title: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '14px',
    marginTop: '5px',
    textTransform: 'capitalize'
  },
  price: {
    marginLeft: '10px',
    display: 'flex',
    whiteSpace: 'nowrap',
    alignItems: 'center',
    fontSize: '20px',
    fontWeight: '600',
    color: 'white'
  },
  currency: {
    paddingTop: '5px'
  }
}));
