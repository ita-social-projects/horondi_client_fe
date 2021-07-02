import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => {
  const color = theme.palette.textColor;

  return {
    loadMore: {
      width: '95%',
      margin: '0 0 0 auto',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      borderTop: '2px solid #c2c2c2',
      paddingTop: '10px'
    },
    loadMoreText: {
      '&:hover': {
        cursor: 'pointer',
        borderBottom: '2px solid #000000',
        height: '20px'
      }
    },
    container: {
      color,
      borderTop: '2px solid #C2C2C2',
      padding: '10px 0'
    },
    comments: {
      fontWeight: '500'
    },
    date: {
      color
    },
    comment: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '10px'
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
      display: 'flex'
    },

    deleteIcon: {
      '&:hover': {
        cursor: 'pointer'
      }
    },
    text: {
      flexGrow: 1,
      maxWidth: '90%'
    },
    notAproveText: {
      color: '#989898'
    },
    button: {
      margin: '0',
      height: '30px',
      '&:hover': {
        cursor: 'pointer',
        borderBottom: '2px solid #000000'
      }
    },
    replyCount: {
      display: 'flex',
      marginLeft: '15px',
      fontSize: '14px',
      '&:hover': {
        cursor: 'pointer'
      }
    },
    user: {
      display: 'flex',
      alignItems: 'center'
    },
    name: {
      fontSize: '1rem',
      fontWeight: '700'
    },
    icons: {
      height: '30px'
    },
    loader: {
      padding: '0'
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
      display: 'flex',
      margin: 'auto'
    },
    boughtIcon: {
      color: '#01a00d',
      fontSize: '30px',
      marginRight: '5px'
    },
    replyText: {
      paddingLeft: '10px',
      '&:hover': {
        borderBottom: '2px solid #000000'
      }
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
    replyIcon: {
      marginRight: '15px',
      alignSelf: 'baseline'
    },
    reply: {
      display: 'flex',
      alignItems: 'center',
      marginTop: '10px',
      marginBottom: '10px'
    },
    icon: {
      color: `rgb(${color} / 87%)`
    }
  };
});
