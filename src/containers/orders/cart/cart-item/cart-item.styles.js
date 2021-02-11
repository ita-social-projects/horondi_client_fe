import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    justifyContent: 'space-between'
  },
  image: (props) => ({
    '& > a': {
      background: `url('${props.image}')no-repeat center center`,
      backgroundSize: 'cover',
      borderRadius: 5,
      width: '100px',
      height: '100px',
      '@media (max-width: 768px)': {
        borderRadius: '50%'
      }
    }
  }),
  description: {
    textAlign: 'center',
    lineHeight: '30px'
  },
  itemName: {
    fontSize: '1.7em',
    textDecoration: 'none',
    color: theme.palette.textColor
  },
  price: {
    position: 'relative',
    textAlign: 'center'
  },
  checkbox: {
    position: 'absolute',
    right: 10,
    top: '50%',
    transform: 'translateY(-50%)',
    cursor: 'pointer',
    '@media (max-width: 1050px)': {
      bottom: 10,
      top: 'initial',
      transform: 'none'
    }
  },
  doneIcon: {
    position: 'relative',
    top: 4,
    fontSize: '1.5em'
  }
}));
