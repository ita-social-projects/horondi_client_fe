import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    padding: '0 3rem 1rem 2rem',
    width: '100vw'
  },
  div: {
    display: 'flex',
    flexDirection: 'row',
    maxWidth: '100%',
    border: '1px solid red',
    alignItems: 'base-line',
    justifyContent: 'flex-start',
    flexWrap: 'wrap'
  },
  productsDiv: {
    display: 'flex',
    width: '75%',
    flexDirection: 'row',
    maxWidth: '100%',
    border: '1px solid red',
    alignItems: 'base-line',
    justifyContent: 'flex-start',
    flexWrap: 'wrap'
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
  list: {
    display: 'flex'
  },
  products: {
    display: 'flex',
    flexWrap: 'wrap'
  }
}));
export default useStyles;
