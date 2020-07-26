import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  productItem: (props) => ({
    background: `url(${props.image}) no-repeat center`,
    backgroundSize: 'cover',
    width: '16rem',
    height: '25rem',
    margin: '1rem',
    cursor: 'pointer',
    position: 'relative',
    borderRadius: '0px 0px 5px 5px',

    '@media (max-width:1024px)': {
      width: '16rem'
    },
    '@media (max-width:768px)': {
      width: '19rem',
      height: '25rem'
    },
    '@media (max-width:500px)': {
      width: '100%',
      height: '20rem'
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
