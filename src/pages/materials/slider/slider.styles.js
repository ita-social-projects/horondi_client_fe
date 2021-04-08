import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  image: {
    width: '70px',
    height: '37px',
    borderRadius: '5px',
    objectFit: 'cover',
    margin: '0 8px',
    minWidth: 0,
    display: 'block',
    '&:hover': {
      transform: 'scale(1.1)',
      transition: '0.4s'
    }
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '15px 0'
  },
  selected: {
    border: '2px solid black'
  }
}));
