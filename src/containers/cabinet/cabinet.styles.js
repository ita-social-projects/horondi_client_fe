import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  cabinet: (props) => ({
    color: 'white',
    padding: '0 4px',
    position: 'relative',
    cursor: 'pointer',
    zIndex: 2,
    '&:hover': {
      backgroundColor: 'white',
      '& ul': {
        display: 'block'
      },
      '& > svg': {
        color: props.logged ? 'white' : 'black'
      },
      '&::after': {
        background: 'black'
      }
    },
    '&::after': {
      display: props.logged ? 'block' : 'none',
      content: `''`,
      width: 30,
      height: 30,
      background: 'white',
      position: 'absolute',
      left: '5px',
      top: '1px',
      zIndex: 1,
      borderRadius: '50%'
    },
    '& svg': {
      position: 'relative',
      zIndex: 2,
      fontSize: '2rem',
      color: props.logged ? 'black' : 'white'
    }
  })
}));
