import { makeStyles } from '@material-ui/core/styles';
import { changeCurrency } from '../../redux/currency/currency.actions';

export const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: '#000000'
  },
  menuButton: {
    color: '#ffffff',
    '@media (min-width: 900px)': {
      display: 'none'
    }
  },
  categories: {
    flexGrow: 1
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },
  item: {
    width: '280px',
    height: '30px'
  },
  icon: {
    '@media (min-width: 900px)': {
      width: '3px'
    }
  }
}));
