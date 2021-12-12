import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: ({ fromSideBar }) => ({
    '& .MuiSelect-root': {
      padding: '0 10px',
      fontFamily: 'Open Sans',
      fontStyle: 'normal',
      fontWeight: 600,
      fontSize: '12px',
      lineHeight: '16px',
      color: fromSideBar ? theme.palette.textColor : 'rgba(254, 254, 254, 0.75)',
      textAlign: 'center',
      '&:hover': {
        borderBottom: '1px solid',
        borderColor: theme.palette.backgroundColor,
        color: fromSideBar ? theme.palette.textColor : 'rgba(254, 254, 254, 0.75)'
      },
      '&:focus': {
        backgroundColor: 'transparent'
      }
    },
    '& .MuiInput-underline:after, & .MuiInput-underline:before': {
      display: 'none'
    },
    '& .MuiSelect-icon': {
      display: 'none'
    }
  }),
  item: {
    color: '#fff',
    backgroundColor: '#000',
    borderRadius: '0px',
    '&.Mui-selected': {
      backgroundColor: '#000',
      '&:hover': {
        backgroundColor: '#242424'
      }
    },
    '&:hover': {
      backgroundColor: '#242424'
    }
  }
}));
