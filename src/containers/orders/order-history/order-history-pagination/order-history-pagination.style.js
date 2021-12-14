import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  paginationDiv: {
    display: 'flex',
    justifyContent: 'center',
    margin: '76px 0 98px 0',
    '& ul': {
      '& li': {
        '& button': {
          opacity: 1,
          borderRadius: 0,
          height: '50px',
          width: '50px',
          margin: '0 5px'
        }
      }
    },
    '& Mui-selected': {
      backgroundColor: 'black'
    },
    '@media (max-width:500px)': {
      padding: '1rem 0',
      '& ul': {
        '& li': {
          '& button': {
            minWidth: '25px',
            height: '25px',
            padding: 0,
            margin: 0
          }
        }
      }
    }
  }
}));
