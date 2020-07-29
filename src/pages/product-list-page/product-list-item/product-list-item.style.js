import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  productItem: (props) => ({
    background: `url(${props.image}) no-repeat center`,
    backgroundSize: 'cover',
    width: '28%',
    height: '25rem',
    margin: '1rem',
    cursor: 'pointer',
    position: 'relative',
    borderRadius: '0px 0px 5px 5px',
    backgroundColor: 'lightgrey',
    '@media (max-width:1280px)': {
      width: '44%',
      height: '30rem'
    },

    '@media (max-width:1024px)': {
      width: '44%',
      height: '25rem'
    },
    '@media (max-width:950px)': {
      width: '40%',
      height: '20rem'
    },
    '@media (max-width:768px)': {
      width: '44%',
      height: '25rem',
      justifyContent: 'center'
    },
    '@media (max-width:650px)': {
      width: '43%',
      height: '20rem'
    },
    '@media (max-width:550px)': {
      width: '42%',
      height: '20rem'
    },

    '@media (max-width:470px)': {
      width: '100%',
      height: '25rem'
    }
  }),
  name: {
    display: 'flex',
    flexDirection: 'column',
    height: '4rem',
    width: '100%',
    position: 'absolute',
    backgroundColor: 'rgb(3, 3, 3,.6)',
    bottom: 0,
    color: 'white',
    padding: '.5rem',
    borderRadius: '0px 0px 5px 5px',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '12px'
  }
}));
export default useStyles;
