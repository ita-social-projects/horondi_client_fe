import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  cabinet: (props) => ({
    color: 'black',
    position: 'relative',
    cursor: 'pointer',
    width: 50,
    height: 50,
    '&:hover': {
      backgroundColor: 'red',
      '& ul': {
        display: 'block'
      },
      '& > svg': {
        color: 'white'
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
      background: 'red',
      position: 'absolute',
      left: 0,
      top: 0,
      zIndex: 1,
      borderRadius: '50%'
    },
    '& svg': {
      position: 'relative',
      zIndex: 2
    }
  }),
  cabinetDropdownList: {
    listStyle: 'none',
    display: 'none',
    position: 'absolute',
    padding: 0,
    backgroundColor: 'white',
    color: 'black',
    width: 200,
    '& li': {
      display: 'flex',
      padding: 10,
      '& span': {
        fontSize: 16,
        marginLeft: 10
      },
      '&:hover': {
        color: 'white',
        backgroundColor: 'black'
      }
    }
  }
}));
