import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  classicButton: {
    width: 'fit-content',
    minWidth: 200,
    height: 50,
    border: '2px solid black',
    transition: 'all .2s ease',
    backgroundColor: 'white',
    textTransform: 'uppercase',
    fontSize: '1.2em',
    cursor: 'pointer',
    fontWeight: '600',
    '&:hover': {
      color: 'white',
      backgroundColor: 'black'
    }
  }
}));
