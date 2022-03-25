import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: ({ fromSideBar, currency }) => ({
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
        '& > span': {
          zIndex: -1
        }
      }
    },
    '& .MuiButton-outlined': {
      border: 'none'
    },
    '& .MuiButtonGroup-groupedOutlinedHorizontal:last-child': {
      textDecoration: currency ? 'underline' : null
    },
    '& .MuiButtonGroup-groupedOutlinedHorizontal:not(:last-child)': {
      textDecoration: currency ? null : 'underline',
      borderRight: `1px solid ${
        fromSideBar ? theme.palette.textColor : 'rgba(254, 254, 254, 0.75)'
      }`
    }
  })
}));
