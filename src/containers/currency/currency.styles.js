import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  root: ({ fromSideBar }) => ({
    '& .MuiSelect-root': {
      padding: '0 10px',
      fontStyle: 'normal',
      fontWeight: 600,
      fontSize: '12px',
      lineHeight: '16px',
      color: fromSideBar ? '#000' : 'rgba(254, 254, 254, 0.75)',
      textAlign: 'center',
      '&:hover': {
        borderBottom: '1px solid rgba(254, 254, 254, 0.75)',
        color: fromSideBar ? '#fff' : 'rgba(254, 254, 254, 0.75)'
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
