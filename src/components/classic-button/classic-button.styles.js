import { makeStyles } from '@material-ui/core/styles';

const defaultStyles = {
  width: 'fit-content',
  minWidth: 200,
  height: 50,
  border: '2px solid black',
  transition: 'all .2s ease',
  textTransform: 'uppercase',
  fontSize: '1.2em',
  cursor: 'pointer',
  fontWeight: '600',
  margin: '20px',
  borderRadius: 0,
  outline: 'none'
};

export const useStyles = makeStyles(() => ({
  classic: {
    ...defaultStyles,
    color: 'black',
    backgroundColor: 'white',
    '&:hover': {
      color: 'white',
      backgroundColor: 'black'
    }
  },
  inverse: {
    ...defaultStyles,
    color: 'white',
    backgroundColor: 'black',
    '&:hover': {
      color: 'black',
      backgroundColor: 'white'
    }
  }
}));
