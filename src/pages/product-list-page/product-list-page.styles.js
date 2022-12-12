import { makeStyles } from '@material-ui/styles';

const drawerWidth = 320;

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '0 2rem 1rem 2rem',
    width: '100%'
  },
  productsWrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column'
  },
  productsDiv: {
    width: '100%',

    '@media (max-width: 768px)': {
      padding: 0,
      margin: 0
    }
  },
  sortDiv: {
    paddingTop: '51px',
    '@media (max-width: 960px)': {
      paddingTop: '21px'
    },
    '& div': {
      flexWrap: 'wrap',
      marginRight: 0
    }
  },
  header: {
    display: 'flex',
    justifyContent: 'center',
    fontSize: '59px',
    fontWeight: 'normal',
    borderBottom: '1px solid gray',
    padding: '80px 1rem 50px 1rem'
  },

  paginationDiv: {
    display: 'flex',
    justifyContent: 'center',
    margin: '76px 0 98px 0',
    '& ul': {
      '& li': {
        '& button': {
          borderRadius: 0,
          height: '50px',
          width: '50px',
          margin: '0 5px'
        },
        '& button.Mui-selected': {
          backgroundColor: theme.palette.gray,
          border: theme.palette.type === 'light' ? '1px solid #000000' : '1px solid #FEFEFE'
        }
      }
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
    fontSize: '0.9em',
    margin: '0 auto',
    display: 'none',
    color: theme.palette.backgroundColor,
    backgroundColor: theme.palette.textColor,
    '&:hover': {
      backgroundColor: theme.palette.button.hover.backgroundColor,
      color: theme.palette.button.hover.color
    },
    '@media (max-width: 959px)': {
      display: 'block'
    }
  },
  filterButtonBlock: {
    padding: '15px'
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
    width: drawerWidth
  },
  drawerContainer: {
    overflow: 'auto',
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
