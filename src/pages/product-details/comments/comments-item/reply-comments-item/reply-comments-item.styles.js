import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => {
  const color = theme.palette.textColor;

  return {
    container: {
      color,
      borderTop: '2px solid #C2C2C2',
      width: '90%',
      margin: '0 0 0 auto',
      paddingLeft: '20px',
      borderLeft: '10px solid #C2C2C2'
    },
    comments: {
      fontWeight: '500'
    },
    date: {
      color,
      paddingRight: '15px'
    },
    comment: {
      display: 'flex',
      justifyContent: 'space-between'
    },
    commentActions: {
      width: '60px',
      justifySelf: 'flex-end'
    },
    editIcon: {
      marginRight: '5px',
      color: '#3a6ac9',
      '&:hover': {
        cursor: 'pointer'
      }
    },
    deleteIcon: {
      color: 'tomato',
      '&:hover': {
        cursor: 'pointer'
      }
    },
    text: {
      flexGrow: 1,
      marginRight: '10px',
      marginTop: '20px',
      marginBottom: '20px'
    },
    button: {
      textTransform: 'none',
      textAlign: 'center',
      fontSize: '1rem',
      backgroundColor: theme.palette.button.normal.backgroundColor,
      color: theme.palette.button.normal.color,
      '&:hover': {
        backgroundColor: theme.palette.button.hover.backgroundColor,
        color: theme.palette.button.hover.color
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
      marginTop: '23px',
      marginLeft: '15px',
      fontSize: '1rem',
      fontWeight: '700'
    },
    icons: {
      height: '30px'
    },
    loader: {
      borderTop: '2px solid #C2C2C2',
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
      alignItems: 'baseline'
    },
    userIcons: {
      display: 'flex',
      alignItems: 'flex-end'
    },
    boughtIcon: {
      color: '#01a00d'
    },
    replyIcon: {
      transform: 'rotate(180deg)',
      marginRight: '15px'
    }
  };
});
