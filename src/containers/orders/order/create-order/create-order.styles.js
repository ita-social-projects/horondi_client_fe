import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  btnCreateOrder: {
    display: 'flex',
    background: theme.palette.button.normal.backgroundColor,
    borderRadius: '5px',
    color: theme.palette.button.normal.color,
    '&:hover': {
      backgroundColor: theme.palette.button.hover.backgroundColor,
      color: theme.palette.button.hover.color
    }
  },
  btnCatalogue: {
    margin: '10px 0 10px 20px',
    background: 'none',
    borderRadius: 5,
    border: 'none',
    cursor: 'pointer',
    alignSelf: 'flex-end',
    color: 'grey',
    outline: 'none',
    '&:hover': {
      color: '#363636'
    },
    '&:active': {
      color: theme.palette.textColor
    }
  }
}));
