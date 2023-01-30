import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: () => ({
    display: 'flex',
    marginLeft: '12px',
    marginRight: '12px',
    alignItems: 'center',
    '& .MuiTypography-root': {
      width: '40px',
      textAlign: 'center'
    },
    '& .MuiSwitch-root': {
      width: '32px',
      height: '14px',
      padding: '0px',
      margin: '0 5px',
      display: 'flex'
    },
    '& .MuiSwitch-switchBase': {
      padding: 2,
      color: '#808080',
      '&.Mui-checked': {
        transform: 'translateX(17px)',
        color: '#242424',
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: '#808080',
          borderColor: theme.palette.primary.main
        }
      }
    },
    '& .MuiSwitch-thumb': {
      width: 10,
      height: 10,
      boxShadow: 'none'
    },
    '& .MuiSwitch-track': {
      border: `1px solid ${theme.palette.grey[500]}`,
      borderRadius: '12px',
      opacity: 1,
      backgroundColor: theme.palette.common.white
    },
    '& .Mui-checked': {}
  })
}));
