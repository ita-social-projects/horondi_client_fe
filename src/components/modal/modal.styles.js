import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  message: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 5,
    position: 'relative',
    marginTop: '-15px'
    // fontSize:'5px'
  },
  '@media (max-width: 950px)': {
    message: {
      marginTop: 3,
      marginLeft: '5px',
      position: 'absolute',
      top: '5px',
      float: 'left'
    }
  },
  paper: {
    position: 'absolute',
    top: '53%',
    left: '51%',
    // marginLeft:'50%',
    // marginTop:'210px',
    transform: 'translate(-50%, -50%)',
    height: '30%',
    width: 300,
    backgroundColor: '#F1F3F4',
    color: 'black',
    border: '5px solid #666',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),

    '@media (max-width: 950px)': {
      width: '320px',
      height: '8%',
      top: '69%',
      left: '38%',
      '& p': {
        fontSize: '1em'
      }
    }
  },
  buttonGroup: {
    width: '100%',
    height: '30%',
    textAlign: 'center',
    '& > button': {
      color: theme.palette.button.normal.color,
      backgroundColor: theme.palette.button.normal.backgroundColor,
      paddingBottom: '5px',
      margin: 3,
      // width: '130px',
      '&:hover': {
        color: theme.palette.button.hover.color,
        backgroundColor: theme.palette.button.hover.backgroundColor
      }
    },
    '@media (max-width: 950px)': {
      width: '50px'
    }
  }

  //   '@media (max-width: 920px)': {
  //        buttonDel:{
  //          position:'absolute',
  // top:'40px',
  // left:'-0px'

  //  }
  //     },

  //     '@media (max-width: 900px)': {
  //       buttonCan:{
  //         position:'absolute',
  // top:'40px',
  // right:'40px'

  // }
  //   },
}));
