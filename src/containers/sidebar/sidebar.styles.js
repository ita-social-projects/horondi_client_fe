import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  drawer: ({ fromSideBar }) => ({
    '& .MuiDrawer-paper': {
      top: 64,
      padding: theme.spacing(3),
      zIndex: 11,
      height: fromSideBar ? '100vh' : 'calc(100vh - 64px)',
      width: 'fit-content',
      minWidth: '400px',
      maxWidth: '550px',
      '@media (max-width: 768px)': {
        top: '40px',
        height: fromSideBar ? '100vh' : 'calc(100vh - 40px)'
      }
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
    transform: 'scale(1.5)'
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
      fontSize: '2.5em'
    },
    '&:hover span': {
      textDecoration: 'underline'
    }
  },
  subList: {
    marginTop: '50px'
  },
  subItem: {
    color: theme.palette.textColor,
    textTransform: 'uppercase',
    display: 'flex',
    margin: '0 20px',
    cursor: 'pointer',
    '& span': {
      fontSize: '1em'
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
    borderRadius: '100%',
    width: '40px !important',
    height: '40px',
    '&:hover': {
      color: theme.palette.backgroundColor,
      backgroundColor: theme.palette.textColor
    }
  },
  constructorItem: {
    padding: '3% 0 0'
  }
}));
