import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  description: {
    '& p': {
      display: 'inline-block',
      margin: '0',
      fontSize: ' 14px',
      lineHeight: '19px'
    }
  }
}));
