import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => {
  const color = theme.palette.textColor;

  return {
    container: {
      color,
      borderTop: '2px solid #C2C2C2',
      width: '95%',
      margin: '0 0 0 auto',
      paddingLeft: '20px',
      paddingTop: '10px'
    },
    comments: {
      fontWeight: '500'
    },
    date: {
      color
    },
    comment: {
      display: 'flex',
      justifyContent: 'space-between'
    },
    commentActions: {
      paddingLeft: '20px',
      display: 'flex'
    },
    editIcon: {
      marginRight: '5px',
      color: '#3a6ac9',
      '&:hover': {
        cursor: 'pointer'
      }
    },
    textContent: {
      display: 'flex',
      justifyContent: 'space-between'
    },
    deleteIcon: {
      '&:hover': {
        cursor: 'pointer'
      }
    },
    text: {
      flexGrow: 1,
      maxWidth: '89%',
      paddingBottom: '5px'
    },
    notAproveText: {
      color: '#d3d3d3',
      paddingBottom: '5px'
    },
    button: {
      '&:hover': {
        cursor: 'pointer'
      }
    },
    user: {
      display: 'flex'
    },
    avatar: {
      width: '60px',
      height: '60px'
    },
    name: {
      marginBottom: '10px',
      fontSize: '1rem',
      fontWeight: '700'
    },
    icons: {
      height: '30px'
    },
    loader: {
      padding: '55px 0'
    },
    line: {
      marginTop: '45px'
    },
    clear: {
      marginTop: '15px'
    },
    userContainer: {
      display: 'flex',
      alignItems: 'end'
    },
    userIcons: {
      margin: 'auto'
    },
    boughtIcon: {
      color: '#01a00d',
      fontSize: '30px'
    },
    replyIcon: {
      transform: 'rotate(180deg)',
      marginRight: '15px'
    },
    checkIcon: {
      position: 'relative',
      '&:before': {
        top: '4px',
        left: '13px',
        width: '6px',
        height: '9px',
        content: "' '",
        position: 'absolute',
        transform: 'rotate(45deg)',
        borderRight: '2px solid #ffffff',
        borderBottom: '2px solid #ffffff'
      }
    },
    icon: {
      color: `rgb(${color} / 87%)`
    }
  };
});
