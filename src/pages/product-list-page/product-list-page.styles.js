import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    padding: '0 2rem 1rem 2rem',
    width: '100vw'
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
    alignContent: 'start',
    margin: '0 0 0 2rem',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    gridTemplateRows: 'auto',
    gridGap: '1rem',

    '@media (max-width:768px)': {
      gridTemplateColumns: 'repeat(3,1fr)',
      margin: '1rem 0 0 0'
    },
    '@media (max-width:600px)': {
      gridTemplateColumns: '1fr 1fr',
      margin: '1rem 0 0 0'
    },
    '@media (max-width:520px)': {
      gridTemplateColumns: '1fr 1fr',
      margin: '1rem 0 0 0'
    },
    '@media (max-width:420px)': {
      gridTemplateColumns: '1fr',
      margin: '1rem 0 0 0'
    }
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
    width: '100%'
  },
  products: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  list: {
    '@media (min-width:500px)': {
      display: 'flex'
    }
  },
  hide: {
    textAlign: 'center',
    textDecorationLine: 'underline'
  },
  mobile: {
    '@media (min-width:500px)': {
      display: 'none'
    }
  }
}));
export default useStyles;
