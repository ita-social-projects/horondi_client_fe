import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
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
        fontSize: '1em',
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
