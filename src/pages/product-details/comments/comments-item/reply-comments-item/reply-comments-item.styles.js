import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => {
  const color = theme.palette.textColor;

  return {
    container: {
      color,
      borderTop: '2px solid #C2C2C2',
      maxWidth: '756px',
      margin: '0 80px 0 120px',
      padding: '24px 0',
      '@media (max-width: 1100px)': {
        margin: '0 50px 0 80px'
      },
      '@media (max-width: 768px)': {
        margin: '0 20px 0 40px'
      },
      '@media (max-width: 600px)': {
        margin: '0 10px 0 20px'
      }
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
      display: 'flex',
      alignItems: 'center'
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
      fontSize: '16px',
      fontWeight: '400',
      paddingBottom: '5px'
    },
    button: {
      '&:hover': {
        cursor: 'pointer'
      }
    },
    user: {
      display: 'flex',
      paddingBottom: '12px',
      alignItems: 'center'
    },
    avatar: {
      width: '60px',
      height: '60px'
    },
    name: {
      fontSize: '16px',
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
      display: 'flex'
    },
    userIcons: {
      margin: 'auto',
      marginRight: '0'
    },
    boughtIcon: {
      color: '#01a00d',
      fontSize: '30px',
      marginRight: '5px'
    },
    replyIcon: {
      transform: 'rotate(180deg)',
      marginRight: '15px'
    },
    checkIcon: {
      position: 'relative',
      height: '30px',
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
      width: '28px',
      height: '28px',
      paddingBottom: '10px',
      color: `rgb(${color} / 87%)`
    }
  };
});
