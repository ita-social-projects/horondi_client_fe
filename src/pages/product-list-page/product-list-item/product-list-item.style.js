import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() => ({
  productItem: (props) => ({
    background: `url(${props.image}) no-repeat center ${
      props.isLightTheme ? '#e3e7ea' : '#262626'
    }`,
    backgroundSize: 'cover',
    height:'100%',
    width:'100%',
    position: 'relative',
    boxShadow: '0px 5px 8px #c5c5c5',
  }),
  wrapper:{
    height:'400px',
    width:'100%',
    cursor: 'pointer',
  },
  name: {
    display: 'flex',
    flexDirection: 'column',
    height: '4rem',
    width: '100%',
    position: 'absolute',
    backgroundColor: 'rgba(3,3,3,0.6)',
    bottom: 0,
    color: 'white',
    padding: '.5rem',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '12px'
  },
  title: {
    display: 'flex',
    justifyContent: 'space-between'
  }
}));
