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
    '& img': {
      width: '100%',
      borderRadius: 5,
      minWidth: 60,
      '@media (max-width: 610px)': {
        float: 'left'
      }
    }
  },
  description: {
    display: 'flex',
    textAlign: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 20,
    '@media (max-width: 610px)': {
      fontSize: '0.8em'
    },
    '& button': {
      margin: '10px 0 0',
      color: theme.palette.button.normal.color,
      width: '230px',
      backgroundColor: theme.palette.button.normal.backgroundColor,
      fontSize: '1em',
      padding: '5px 10px',
      '@media (max-width: 610px)': {
        width: '120px',
        marginRight: '16em',
        fontSize: '0.7em'
      },
      '&:hover': {
        color: theme.palette.button.hover.color,
        backgroundColor: theme.palette.button.hover.backgroundColor
      }
    },
    '& a': {
      color: 'inherit'
    }
  },
  itemName: {
    fontSize: '1.7em',
    '@media (max-width: 610px)': {
      fontSize: '1em',
      fontWeight: 'bold',
      marginRight: '12em'
    }
  },
  price: {
    position: 'relative',
    '@media (max-width: 550px)': {
      left: -110,
      fontSize: '0.8em',
      fontWeight: 'bold'
    }
  }
}));
