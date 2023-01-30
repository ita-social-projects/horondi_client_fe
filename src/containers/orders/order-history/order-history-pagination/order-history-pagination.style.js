import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
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
          '@media (max-width:500px)': { padding: '22px 15px' }
        }
      }
    },
    '& .Mui-selected': {
      border: '1px solid'
    },
    '@media (max-width:500px)': {
      padding: '1rem 0'
    }
  }
}));
