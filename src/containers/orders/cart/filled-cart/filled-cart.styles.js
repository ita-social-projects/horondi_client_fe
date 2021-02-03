import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    margin: '50px auto',
    padding: 20
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
    justifyContent: 'flex-end',
    flexWrap: 'wrap'
  },
  btnCreateOrder: {
    margin: '0 0 20px 20px',
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
