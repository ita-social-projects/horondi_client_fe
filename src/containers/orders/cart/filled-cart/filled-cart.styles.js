import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    margin: '50px auto'
  },
  backButton: {
    '&:visited': {
      color: 'inherit'
    },
    '& > svg': {
      fontSize: '2.5em',
      transition: 'transform .2s ease',
      '&:hover': {
        transform: 'scale(1.1)'
      }
    }
  },
  btnWrapper: {
    display: 'flex',
    justifyContent: 'space-around'
  },
  btnCreateOrder: {
    marginBottom: '20px',
    background: theme.palette.button.normal.backgroundColor,
    borderRadius: '5px',
    fontSize: '1.5em',
    color: theme.palette.button.normal.color,
    '&:hover': {
      backgroundColor: theme.palette.button.hover.backgroundColor,
      color: theme.palette.button.hover.color
    }
  }
}));
