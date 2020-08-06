// import { makeStyles } from '@material-ui/core/styles';
// import BG from '../../images/Rectangle.png';
//
// export const useStyles = makeStyles(theme=> ({
//   thanks: {
//     background: `url(${BG}) no-repeat `,
//     backgroundSize: 'cover',
//     height: '800px',
//     fontFamily: 'Montserrat',
//     fontStyle: 'normal',
//     color: '#FFFFFF',
//     alignItems: 'flex-end'
//   },
//   thanksWrapper: {
//     width: '100%',
//     height: '100%',
//     display: 'flex',
//     flexDirection: 'column'
//   },
//   titleStyle: {
//     marginTop: '5%',
//     width: '95%',
//     height: '60px',
//     fontWeight: '600',
//     fontSize: '48px',
//     lineHeight: '59px',
//     display: 'flex',
//     justifyContent: 'flex-end'
//   },
//   linkStyle: {
//     display: 'flex',
//     width: '23%',
//     height: '63px',
//     background: '#404040',
//     boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
//     borderRadius: '5px',
//     fontWeight: 'normal',
//     fontSize: '18px',
//     color: '#FFFFFF',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginTop: '15%',
//     marginLeft: '72%',
//     '&:hover': {
//       backgroundColor: theme.palette.button.hover.backgroundColor,
//       color: theme.palette.button.hover.color
//     }
//   }
// }));
import { makeStyles } from '@material-ui/core/styles';
import BG from '../../images/Rectangle.png';

export const useStyles = makeStyles((theme) => ({
  thanks: {
    background: `url(${BG}) no-repeat center`,
    backgroundSize: 'cover',
    height: '800px',
    fontFamily: 'Montserrat',
    color: '#FFFFFF',
    display: 'flex',
    justifyContent: 'flex-end',
    padding: 50
  },
  thanksWrapper: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  },
  titleStyle: {
    fontWeight: '600',
    fontSize: '4em',
    '@media (max-width: 768px)': {
      fontSize: '3em'
    }
  },
  textStyle: {
    color: '#ffffff'
  },
  buttonStyle: {
    background: '#404040',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: '5px',
    fontSize: '1.5em',
    padding: 10,
    '&:hover': {
      backgroundColor: theme.palette.button.hover.backgroundColor,
      color: theme.palette.button.hover.color
    },
    '@media (max-width: 768px)': {
      fontSize: '1em',
      padding: 5
    }
  }
}));
