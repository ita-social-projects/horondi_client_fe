import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ palette }) => ({
  root: {
    width: '100%'
  },
  name: {
    paddingTop: '3px'
  },
  itemImg: {
    height: '79px',
    width: '168px'
  },
  area: {
    backgroundColor: palette.backgroundColor,
    color: palette.textColor,
    font: 'inherit',
    fontWeight: '600',
    border: palette.white,
    resize: 'none',
    overflow: 'hidden',
    width: '118px',
    height: '28px',
    pointerEvents: 'none'
  },
  iconBtn: {
    backgroundColor: palette.backgroundColor,
    border: 'none'
  },
  certificateIcon: {
    color: palette.cart.iconColor,
    '&:hover': {
      color: palette.blue,
      cursor: 'pointer'
    }
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'left',
    '& svg': {
      marginRight: '5px',
      fontSize: '20px'
    }
  },
  price: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'left',
    marginRight: '20px',
    '@media (max-width: 800px)': {
      marginRight: '35px'
    },
    '& svg': {
      marginRight: '5px'
    }
  },
  date: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'left',
    marginRight: '10px',
    '@media (max-width: 800px)': {
      marginRight: '8px'
    }
  },
  statusRed: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'left',
    color: palette.red
  },
  statusGreen: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'left',
    color: palette.green
  },
  statusBlue: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'left',
    color: palette.blue
  },
  actions: {
    paddingTop: '5px',
    marginLeft: '20px'
  },
  loadingBar: {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center'
  }
}));
