import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  root: () => ({
    position: 'relative',
    marginRight: '37px',
    background: 'rgb(255, 255, 255, 0.2)',
    borderRadius: '6px',
    '& .MuiInput-input': {
      padding: '12px 5px 12px 46px',
      fontFamily: 'Open Sans',
      fontStyle: 'normal',
      fontWeight: '600',
      fontSize: '14px',
      lineHeight: '20px',
      color: 'rgba(254, 254, 254, 0.75);',
      '@media (max-width: 900px)': {
        marginRight: '10px'
      }
    },
    '& .MuiSvgIcon-root': {
      position: 'absolute',
      top: '11px',
      left: '12px'
    },
    '& .MuiInput-underline:after, & .MuiInput-underline:before': {
      display: 'none'
    }
  })
}));
