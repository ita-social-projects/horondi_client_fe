import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => {
  const color = theme.palette.textColor;

  return {
    loadMore: {
      color,
      width: '95%',
      margin: '0 0 0 auto',
      padding: '10px 0',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      borderTop: '2px solid #c2c2c2'
    },
    loadMoreText: {
      fontWeight: 600,
      marginBottom: '5px',
      '&:hover': {
        cursor: 'pointer',
        borderBottom: theme.palette.comments.border,
        height: '20px'
      }
    },
    container: {
      margin: '20px 0',
      borderRadius: '4px',
      fontFamily: 'Open sans',
      border: theme.palette.comments.border,
      padding: '20px',
      '@media (max-width: 768px)': {
        padding: '10px'
      }
    },
    replyForm: {
      margin: '0',
      borderTop: '2px solid #C2C2C2'
    },
    comments: {
      fontSize: '14px'
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
      marginRight: '0',
      color: theme.palette.comments.deleteIcon.color,
      '&:hover': {
        cursor: 'pointer'
      }
    },
    text: {
      fontSize: '16px',
      fontWeight: '400',
      flexGrow: 1,
      maxWidth: '90%'
    },
    button: {
      margin: '0',
      fontSize: '14px',
      lineHeight: '20px',
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
      fontSize: '16px',
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
      margin: 'auto',
      marginRight: '0'
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
      alignSelf: 'baseline',
      opacity: 0.5
    },
    reply: {
      display: 'flex',
      alignItems: 'center',
      marginTop: '10px',
      marginBottom: '10px'
    },
    icon: {
      height: '20px',
      width: '20px',
      color,
      opacity: 0.5
    },
    iconF: {
      height: '16px',
      width: '16px',
      color,
      opacity: 0.75
    },
    rateIcon: {
      '& :first-child': {
        opacity: '1'
      }
    }
  };
});
