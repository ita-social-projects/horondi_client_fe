import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: '140px',
    '& p, & ul, & li, & span': {
      color: `${theme.palette.textColor} !important`,
      fontSize: '1rem',
      lineHeight: '2rem',
      '@media (max-width: 670px)': {
        lineHeight: '1.5rem',
        textAlign: 'justify'
      }
    },
    '& h3': {
      '@media (max-width: 670px)': {
        textAlign: 'center',
        fontSize: '1.5rem'
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
      verticalAlign: 'middle',
      display: ' inline-block',
      paddingLeft: '15px',
      fontStyle: 'normal',
      fontWeight: 'normal'
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
    },

    '& h2': {
      fontWeight: '400',
      fontSize: '30px',
      '@media (max-width: 670px)': {
        fontSize: '21px'
      },
      '& span, & strong': {
        fontWeight: '400',
        fontSize: '30px',
        '@media (max-width: 670px)': {
          fontSize: '21px'
        }
      }
    }
  }
}));
