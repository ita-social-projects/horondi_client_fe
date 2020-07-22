import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    margin: '10px 0',
    display: 'flex',
    width: '100%',
    '& td:first-child': {
      display: 'flex',
      flex: 1
    },
    '& td:not(:first-child)': {
      width: 200,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  },
  image: {
    flexBasis: 100,
    '& > img': {
      width: '100%'
    }
  },
  description: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 20,
    '& button': {
      margin: '10px 0 0',
      color: theme.palette.button.normal.color,
      backgroundColor: theme.palette.button.normal.backgroundColor,
      '&:hover': {
        color: theme.palette.button.hover.color,
        backgroundColor: theme.palette.button.hover.backgroundColor
      }
    }
  },
  itemName: {
    fontWeight: '600'
  },
  price: {
    position: 'relative'
  },
  trash: {
    position: 'absolute',
    right: 10,
    cursor: 'pointer'
  }
}));
