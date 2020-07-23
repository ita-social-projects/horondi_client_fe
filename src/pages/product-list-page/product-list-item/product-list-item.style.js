import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  productItem: (props) => ({
    background: `url(${props.image}) no-repeat center`,
    backgroundSize: 'cover',
    width: '12rem',
    height: '15rem',
    margin: '1rem',
    cursor: 'pointer',
    position: 'relative',
    borderRadius: '0px 0px 5px 5px'
  }),
  name: {
    display: 'flex',
    flexDirection: 'column',
    height: '4rem',
    width: '12rem',
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
