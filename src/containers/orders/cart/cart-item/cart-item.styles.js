import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    padding: '10px 0',
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    borderBottom: '1px solid #DADADA',
    '& > div:not(:first-child)': {
      width: 200,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      '@media (max-width: 768px)': {
        width: 120,
        maxWidth: 120,
        minWidth: 120
      }
    }
  },
  itemData: {
    display: 'flex',
    flex: '1',
    '@media (max-width: 551px)': {
      flexDirection: 'column'
    }
  },
  image: (props) => ({
    flexBasis: 100,
    display: 'flex',
    justifyContent: 'center',
    borderRadius: 50,
    '& > a': {
      background: `url('${props.image}')no-repeat center center`,
      backgroundSize: 'cover',
      borderRadius: 5,
      display: 'block',
      width: '100px',
      height: '100px',
      '@media (max-width: 768px)': {
        borderRadius: '50%'
      }
    }
  }),
  description: {
    display: 'flex',
    flexDirection: 'column',
    padding: '0 20px',
    '& a': {
      color: 'inherit'
    },
    '& > span': {
      lineHeight: '30px',
      '@media (max-width: 768px)': {
        fontSize: '.8em'
      }
    }
  },
  itemName: {
    fontSize: '1.7em'
  },
  price: {
    position: 'relative',
    fontSize: 16,
    '@media (max-width: 551px)': {
      textAlign: 'right'
    }
  },
  trash: {
    position: 'absolute',
    right: 10,
    cursor: 'pointer',
    color: 'darkgrey',
    '&:hover': {
      color: 'grey'
    },
    '&:active': {
      color: 'black'
    },
    '@media (max-width: 768px)': {
      bottom: 10
    }
  },
  doneIcon: {
    position: 'relative',
    top: 2,
    fontSize: '1.5em'
  }
}));
