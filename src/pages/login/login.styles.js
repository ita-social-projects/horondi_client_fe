import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  checkBox: {
    marginBottom: '12px'
  },
  linkBtn: {
    display: 'flex',
    justifyContent: 'flex-end',
    color: theme.palette.textColor,
    textDecoration: 'none',
    '&:hover': {
      color: theme.palette.blue
    }
  },
  loginError: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    height: theme.typography.body1.lineHeight,
    fontSize: theme.typography.body1.fontSize,
    color: theme.palette.error.main,
    marginTop: '4px',
    marginLeft: '14px'
  },
  orText: {
    margin: '12px 0',
    textAlign: 'center'
  }
}));
