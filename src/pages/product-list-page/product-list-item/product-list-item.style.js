import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  productItem: (props) => ({
    background: `url(${props.image}) no-repeat center`,
    backgroundSize: 'cover',
    width: '100%',
    height: '25rem',
    cursor: 'pointer',
    position: 'relative',
    borderRadius: '0px 0px 5px 5px',
    backgroundColor: 'lightgrey',
    '@media (max-width:1024px)': {
      height: '22rem'
    },
    '@media (max-width:768px)': {
      height: '16rem'
    },
    '@media (max-width:520px)': {
      height: '22rem'
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
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '12px'
  }
}));
export default useStyles;
