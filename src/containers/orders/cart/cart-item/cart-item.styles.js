import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    margin: '10px 0',
    display: 'flex',
    width: '100%',
    '& > div:not(:first-child)': {
      width: 200,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      '@media (max-width: 768px)': {
        width: 100
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
    position: 'relative'
  },
  trash: {
    position: 'absolute',
    right: 10,
    cursor: 'pointer',
    '@media (max-width: 551px)': {
      bottom: 20
    }
  },
  doneIcon: {
    position: 'relative',
    top: 2,
    fontSize: '1.5em'
  }
}));
