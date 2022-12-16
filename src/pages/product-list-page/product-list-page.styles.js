import { makeStyles } from '@material-ui/styles';

const drawerWidth = 320;

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '0 32px 16px',
    width: '100%',
    '@media (max-width: 768px)': { padding: '0 0 16px' }
  },
  productsWrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
    rowGap: '48px',
    marginBottom: '96px',
    '@media (max-width:600px)': { marginBottom: '60px', rowGap: '24px' }
  },
  productsDiv: {
    width: '100%',
    '@media (max-width: 768px)': {
      padding: 0,
      margin: 0
    }
  },
  paginationDiv: {
    display: 'flex',
    justifyContent: 'center',
    '& ul': {
      '& li': {
        '& button': {
          opacity: 1,
          borderRadius: 2,
          padding: '25px 20px',
          margin: '0 5px',
          '@media (max-width:600px)': { padding: '22px 15px' }
        }
      }
    },
    '& Mui-selected': {
      backgroundColor: 'black'
    },
    '@media (max-width:500px)': {
      padding: '1rem 0'
    }
  },
  products: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  list: {
    display: 'flex',
    flexDirection: 'row'
  },
  filterMenu: {
    '@media (max-width: 959px)': {
      display: 'none'
    }
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    display: 'none',
    '@media (max-width: 959px)': {
      display: 'block'
    }
  },
  drawerPaper: {
    width: drawerWidth,
    overflowY: 'auto'
  },
  drawerContainer: {
    display: 'flex',
    paddingTop: '20px',
    justifyContent: 'center'
  },
  hide: {
    textAlign: 'center',
    textDecorationLine: 'underline'
  },
  center: {
    width: '3rem',
    margin: '22rem auto',
    '@media (max-width: 1400px)': {
      margin: '13rem auto'
    }
  },
  defaultBlock: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.textColor,
    fontSize: '1.2em'
  },
  defaultBackpackIcon: {
    width: '167px',
    height: '182px',
    margin: '50px auto'
  }
}));
