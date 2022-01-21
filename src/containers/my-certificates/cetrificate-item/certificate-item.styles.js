import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ palette }) => ({
  root: {
    width: '100%'
  },
  itemImg: {
    height: '79px',
    width: '168px',
    marginRight: '25px'
  },
  area: (isLightTheme) => ({
    backgroundColor: isLightTheme ? palette.backgroundColor : palette.backgroundColor,
    color: isLightTheme ? palette.textColor : palette.textColor,
    font: 'inherit',
    fontWeight: '600',
    border: palette.white,
    resize: 'none',
    overflow: 'hidden',
    width: '110px',
    height: '28px',
    pointerEvents: 'none'
  }),
  copyBtn: (isLightTheme) => ({
    backgroundColor: isLightTheme ? palette.backgroundColor : palette.backgroundColor,
    border: 'none'
  }),
  copyIcon: (isLightTheme) => ({
    backgroundColor: isLightTheme ? palette.backgroundColor : palette.backgroundColor,
    display: 'flex',
    alignItems: 'center',
    color: palette.lightGrayShade,
    '&:hover': {
      color: palette.blue,
      cursor: 'pointer'
    }
  }),
  code: {
    fontWeight: '700',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'left',
    marginRight: '25px'
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
    marginRight: '50px',
    '& svg': {
      marginRight: '5px'
    }
  },
  date: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'left',
    marginRight: '25px'
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
  loadingBar: {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center'
  }
}));
