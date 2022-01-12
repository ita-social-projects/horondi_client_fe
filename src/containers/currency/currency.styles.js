import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: ({ fromSideBar }) => ({
    '& .MuiButtonGroup-root': {
      height: '20px',
      '&:hover': {
        backgroundColor: 'none',
        '& .MuiButtonGroup-groupedOutlinedHorizontal:not(:last-child)': {
          borderRight: `1px solid ${fromSideBar ? '' : 'rgba(254, 254, 254, 0.75)'}`
        },
        '& span': {
          color: fromSideBar ? '' : 'rgba(254, 254, 254, 0.75)'
        }
      },
      '& .MuiButton-root': {
        padding: '5px 8px',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: '12px',
        letterSpacing: '0.0015em',
        color: fromSideBar ? theme.palette.textColor : 'rgba(254, 254, 254, 0.75)',
        borderRadius: '0px',
        '&:hover': {
          backgroundColor: 'transparent',
          color: fromSideBar ? '' : 'rgba(254, 254, 254, 0.75)',
          textDecoration: 'underline'
        },
        '& > span': {
          zIndex: -1
        }
      }
    },
    '& .MuiButton-outlined': {
      border: 'none'
    },
    '& .MuiButtonGroup-groupedOutlinedHorizontal:not(:last-child)': {
      borderRight: `1px solid ${
        fromSideBar ? theme.palette.textColor : 'rgba(254, 254, 254, 0.75)'
      }`
    }
  })
}));
