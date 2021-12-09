import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  drawer: ({ fromSideBar }) => ({
    '& .MuiDrawer-paper': {
      top: 64,
      padding: theme.spacing(3),
      zIndex: 11,
      height: fromSideBar ? '100vh' : 'calc(100vh - 64px)',
      width: 'fit-content',
      maxWidth: '400px',
      '@media (max-width: 768px)': {
        top: '40px',
        height: fromSideBar ? '100vh' : 'calc(100vh - 40px)'
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
    width: '40px',
    height: '40px',
    transform: 'scale(1.2)'
  },
  sideMenuContent: {
    width: '85%'
  },
  itemHighlighting: {
    width: '100%',
    marginTop: '3%',
    borderBottom: '2px solid gray'
  },
  mainItem: {
    color: theme.palette.textColor,
    textTransform: 'uppercase',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    width: '100%',
    '& span, & svg': {
      fontSize: '24px'
    }
  },
  subList: {
    marginTop: '60px',
    fontSize: '1.3rem'
  },
  subItem: {
    color: theme.palette.textColor,
    textTransform: 'uppercase',
    display: 'flex',
    margin: '0 0 15px',
    cursor: 'pointer',
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
    fontSize: '3rem',
    transition: 'all 0.5s',
    padding: '0.5rem',
    '&:hover': {
      color: theme.palette.backgroundColor,
      backgroundColor: theme.palette.textColor
    }
  },
  constructorItem: {
    padding: '3% 0 0'
  },
  rightBar: {
    marginLeft: '1%'
  }
}));
