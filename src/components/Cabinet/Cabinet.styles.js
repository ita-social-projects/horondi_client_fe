import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  cabinet: (props) => ({
    color: 'white',
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
      left: '1px',
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
  }),
  cabinetDropdownList: {
    listStyle: 'none',
    display: 'none',
    position: 'absolute',
    padding: 0,
    backgroundColor: 'white',
    color: 'black',
    width: 250,
    right: 0,
    top: '20px',
    '& li': {
      display: 'flex',
      padding: 10,
      alignItems: 'center',
      '& span': {
        fontSize: 16,
        marginLeft: 10
      },
      '& svg': {
        color: 'black'
      },
      '&:hover': {
        color: 'white',
        backgroundColor: 'black',
        '& svg': {
          color: 'white'
        }
      }
    }
  },
  link: {
    color: 'inherit',
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center'
  }
}));
