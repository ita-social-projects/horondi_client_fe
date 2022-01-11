import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ palette }) => ({
  root: {
    width: '100%'
  },
  code: {
    fontWeight: '700',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'left'
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
    marginRight: '25px'
  },
  status: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'left',
    color: palette.green
  },
  loadingBar: {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center'
  },
  iconBtn: {
    border: 'none',
    backgroundColor: palette.white,
    marginLeft: '5px'
  },
  itemImg: {
    height: '79px',
    width: '168px'
  },
  copyIcon: {
    display: 'flex',
    alignItems: 'center',
    color: palette.lightGrayShade,
    '&:hover': {
      color: palette.darkGray,
      cursor: 'pointer'
    }
  },
  area: {
    font: 'inherit',
    fontWeight: '600',
    border: palette.white,
    resize: 'none',
    overflow: 'hidden',
    width: '110px',
    height: '28px',
    pointerEvents: 'none'
  }
}));
