import { makeStyles } from '@material-ui/core/styles';

const path = {
  fontStyle: 'normal',
  fontWeight: 'normal',
  fontSize: '17px',
  lineHeight: '22px',
  letterSpacing: '0.0025em'
};

export const useStyles = makeStyles(({ palette }) => ({
  path: {
    marginTop: '30px',
    '&, & a': {
      ...path,
      color: palette.textColor
    },
    '&': {
      color: palette.textColor,
      fontWeight: 600,
      display: 'flex',
      justifyContent: 'flex-start'
    },
    '& a:hover': {
      color: palette.textColor,
      fontWeight: 'bold',
      transition: '0.5s'
    }
  },
  pathLine: {
    paddingLeft: '20px'
  }
}));
