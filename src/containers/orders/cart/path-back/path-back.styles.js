import { makeStyles } from '@material-ui/core/styles';

const path = {
  fontFamily: 'Open Sans',
  fontStyle: 'normal',
  fontWeight: 'normal',
  fontSize: '17px',
  lineHeight: '22px',
  letterSpacing: '0.0025em'
};

const whiteThemePath = {
  marginTop: '30px',
  '&, & a': {
    ...path,
    color: '#242424'
  },
  '&': {
    fontWeight: 600,
    display: 'flex',
    justifyContent: 'flex-start'
  },
  '& a:hover': {
    fontWeight: 'bold',
    transition: '0.5s'
  }
};

const darkThemePath = {
  marginTop: '30px',
  '&, & a': {
    ...path,
    color: 'rgba(254, 254, 254, 0.75)'
  },
  '&': {
    color: '#FEFEFE',
    display: 'flex',
    justifyContent: 'flex-start'
  },
  '& a:hover': {
    color: '#FEFEFE',
    fontWeight: 'bold',
    transition: '0.5s'
  }
};

export const useStyles = makeStyles(({ palette }) => ({
  path: palette.type === 'light' ? whiteThemePath : darkThemePath,
  pathLine: {
    paddingLeft: '20px'
  }
}));
