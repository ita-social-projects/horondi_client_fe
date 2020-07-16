import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  items: {
    height: '25px !important',
    lineHeight: '25px !important',
    '& button': {
      background: 'red',
      boxSizing: 'border-box',
      padding: 0,

      minWidth: 0,

      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '12px'
    }
  }
}));
export default useStyles;
