import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  similarItem: (props) => ({
    background: `url(${props.image}) no-repeat center`,
    width: '100%',
    height: '360px',
    backgroundSize: 'cover',
    transition: 'all 0.3s',
    transform: 'scale(1)',
    '&:hover': {
      cursor: 'pointer',
      transform: 'scale(1.05)'
    }
  })
}));

export default useStyles;
