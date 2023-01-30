import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  consentMessage: { fontWeight: theme.typography.body2.fontWeight },
  consentLink: {
    color: theme.palette.textColor,
    textDecoration: 'underline',
    '&:hover': {
      color: theme.palette.blue
    }
  },
  googleText: { textAlign: 'center', marginBottom: '10px' },
  loginBtn: {
    display: 'flex',
    justifyContent: 'flex-end',
    color: theme.palette.textColor,
    textDecoration: 'none',
    '&:hover': {
      color: theme.palette.blue
    }
  },
  registerError: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    height: theme.typography.body1.lineHeight,
    fontSize: theme.typography.body1.fontSize,
    color: theme.palette.error.main,
    marginBottom: '12px'
  }
}));
