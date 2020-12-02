import { makeStyles } from '@material-ui/styles';

const drawerWidth = 320;

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    padding: '0 2rem 1rem 2rem',
    width: '100%'
  },

  div: {
    display: 'flex',
    flexDirection: 'row',
    maxWidth: '100%',
    alignItems: 'base-line',
    justifyContent: 'flex-start',
    flexWrap: 'wrap'
  },
  productsDiv: {
    width: '100%',
    padding: '0px 20px'
  },
  sortDiv: {
    alignItems: 'center',
    padding: '1rem 0',
    display: 'flex',
    justifyContent: 'flex-end',
    '& div': {
      flexWrap: 'wrap',
      justifyContent: 'center',
      marginRight: 0
    }
  },
  paginationDiv: {
    display: 'flex',
    justifyContent: 'center',
    padding: '1rem',
    '& Mui-selected': {
      backgroundColor: 'black !important'
    },
    '@media (max-width:500px)': {
      padding: '1rem 0',
      '& ul': {
        '& li': {
          '& button': {
            minWidth: '25px !important',
            height: '25px !important',
            padding: 0,
            margin: 0
          }
        }
      }
    }
  },
  button: {
    display: 'none',
    '@media (max-width: 959px)': {
      display: 'block'
    }
  },
  products: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  list: {
    display: 'flex',
    flexDirection:'row'
  },
  filterMenu:{
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
    width: drawerWidth
  },
  drawerContainer: {
    overflow: 'auto'
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
  }
}));
