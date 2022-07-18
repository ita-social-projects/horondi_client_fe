import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: ({ fromSideBar }) => ({
    '& .MuiToggleButtonGroup-root': {
      height: '20px',
      '& .MuiToggleButton-root': {
        border: 'none',
        borderRadius: '0px',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: '15px',
        marginTop: '-1 px',
        letterSpacing: '0.0015em',
        color: fromSideBar ? theme.palette.textColor : 'rgba(254, 254, 254, 0.75)',
        '&.Mui-selected': {
          textDecoration: 'underline',
          backgroundColor: 'transparent'
        }
      }
    },
    '& .MuiToggleButtonGroup-grouped:first-child': {
      borderRight: `1px solid ${
        fromSideBar ? theme.palette.textColor : 'rgba(254, 254, 254, 0.75)'
      } !important`
    },
    '& .MuiToggleButton-root:first-child': {
      fontWeight: 700,
    }
  })
}));
