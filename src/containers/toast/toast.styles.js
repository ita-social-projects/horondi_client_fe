import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ palette }) => ({
  root: () => ({
    width: '305px',
    top: '80px',
    right: '80px',
    '& > *': {
      background: palette.type === 'light' ? '#08BE05' : '#020202',
      borderRadius: '6px',
      color: '#fff',
      fontSize: '16px',
      '& button': {
        color: '#fff',
        opacity: '0.8',
        margin: 'auto',
        width: '50px',
        '& svg': {
          width: '20px',
          height: '20px'
        }
      },
      '& .Toastify__toast-body': {
        marginLeft: '5px',
        display: 'flex',
        alignItems: 'center'
      },
      '& .Toastify__toast-body::before': {
        content: `url(https://design.vectr.com/chortex/welcome.svg?width=36&height=24&select=oSQ0j6b6mpage0)`
      }
    }
  })
}));
