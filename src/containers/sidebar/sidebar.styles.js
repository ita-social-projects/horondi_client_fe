import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  drawer: ({ fromSideBar }) => ({
    '& .MuiDrawer-paper': {
      padding: '18px 24px 15px 24px',
      backgroundColor: theme.palette.type === 'light' ? '#FFFFFF' : '#000000',
      zIndex: 11,
      height: '100vh',
      width: 'fit-content',
      minWidth: '360px',
      maxWidth: '450px',
      '@media (max-width: 768px)': {
        width: '100%'
      }
    },
    '& ::-webkit-scrollbar': {
      display: 'none;'
    }
  }),
  sticky: ({ fromSideBar }) => ({
    '& .MuiDrawer-paper': {
      top: '40px',
      height: fromSideBar ? '100vh' : 'calc(100vh - 40px)'
    }
  }),
  closeIconContainer: {
    display: 'flex',
    alignItems: 'right',
    justifyContent: 'right'
  },
  closeIcon: {
    width: '3px',
    height: '3px',
    transform: 'scale(1.2)',
    '& svg': {
      color: theme.palette.type === 'light' ? '#000000' : '#5B5B5B'
    }
  },
  sideMenuContent: {
    width: '75%'
  },
  itemHighlighting: {
    width: '100%',
    borderBottom: '2px solid gray'
  },
  mainItem: {
    color: theme.palette.textColor,
    textTransform: 'uppercase',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    width: '100%',
    marginTop: '20px',
    marginBottom: '20px',
    '@media (max-width: 450px)': {
      marginTop: '10px',
      marginBottom: '10px'
    },
    '& span, & svg': {
      fontSize: '24px',
      fontWeight: '500',
      '@media (max-width: 450px)': {
        fontSize: '16px',
        fontWeight: '500'
      }
    },
    '& svg': {
      color: theme.palette.type === 'light' ? '#000000' : '#5B5B5B'
    }
  },
  subList: {
    fontSize: '1.3rem',
    marginTop: '45px'
  },
  subItem: {
    color: theme.palette.textColor,
    textTransform: 'uppercase',
    display: 'flex',
    margin: '0 0 10px',
    cursor: 'pointer',
    '@media (max-width: 450px)': {
      margin: '0 0 5px'
    },
    '& span': {
      fontSize: '14px'
    },
    '&:before': {
      content: "'◆'",
      fontSize: '1.2rem',
      display: 'block',
      color: '#3F51B5',
      width: 15,
      height: 27,
      position: 'relative',
      bottom: '4px',
      marginRight: 10,
      transition: 'opacity .2s ease'
    },
    '&:hover span': {
      textDecoration: 'underline'
    }
  },
  socialIconsStyles: {
    color: theme.palette.textColor,
    transition: 'all 0.5s',
    padding: '0.5rem',
    '&:hover': {
      color: theme.palette.backgroundColor,
      backgroundColor: theme.palette.textColor
    }
  },
  constructorItem: {
    padding: '1% 0 0'
  },
  rightBar: {
    top: '30%'
  },
  certificateItem: {
    color: theme.palette.textColor,
    textTransform: 'uppercase',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    width: '100%',
    marginTop: '20px',
    marginBottom: '20px',
    '@media (max-width: 450px)': {
      marginTop: '10px',
      marginBottom: '10px'
    },
    '& span, & svg': {
      fontSize: '24px',
      fontWeight: '500',
      '@media (max-width: 450px)': {
        fontSize: '16px',
        fontWeight: '500'
      }
    },
    '& svg': {
      marginLeft: '10px'
    }
  }
}));
