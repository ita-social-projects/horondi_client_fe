import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 80,
    '& p, & ul, & li, & span': {
      color: `${theme.palette.textColor} !important`,
      fontSize: '1rem',
      lineHeight: '2rem',
      '@media (max-width: 670px)': {
        lineHeight: '1.5rem',
        textAlign: 'justify',
        margin: '0 20px'
      }
    },
    '& h3': {
      '@media (max-width: 670px)': {
        textAlign: 'center',
        fontSize: '1.5rem'
      }
    },
    '& > h1': {
      textAlign: 'center',
      transform: 'scale(1, 1.1)',
      fontStyle: 'normal',
      fontWeight: '300',
      fontSize: '59px',
      lineHeight: '46px',
      letterSpacing: '0.0025em',
      '@media (max-width: 670px)': {
        fontSize: '35px'
      }
    },
    '& > pre': {
      padding: '3px',
      color: '#ffffff',
      display: ' inline-block',
      borderRadius: '70%',
      background: '#3f51b5'
    },
    '& > h2': {
      letterSpacing: '-0.0025em',
      display: ' inline-block',
      paddingLeft: '15px',
      fontStyle: 'normal',
      fontWeight: 'normal',
      '@media (max-width: 670px)': {
        marginLeft: '45px'
      }
    },
    '& > p > strong': {
      color: 'white',
      padding: 2,
      alignSelf: 'flex-start',
      position: 'relative',
      fontWeight: 'bold',
      zIndex: 1,
      '&::after': {
        content: `''`,
        position: 'absolute',
        right: 0,
        top: 0,
        left: 0,
        bottom: 0,
        backgroundColor: 'black',
        zIndex: -1
      }
    },
    '& img': {
      width: 381,
      height: 'auto',
      float: ' left',
      margin: '0 20px 20px 0',
      '@media (max-width: 670px)': {
        width: 305,
        margin: '10px 20px'
      }
    }
  }
}));
