import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    margin: '50px auto'
  },
  table: {
    display: 'flex',
    flexDirection: 'column'
  },
  tableHeader: {
    display: 'flex',
    borderColor: '#DADADA',
    borderStyle: 'solid',
    borderWidth: '1px 0 1px',
    width: '100%',
    '& > div': {
      margin: '10px 0',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: '1.5em',
      '@media (max-width: 768px)': {
        fontSize: '1em'
      }
    },
    '& > div:first-child': {
      flex: '1'
    },
    '& > div:not(:first-child)': {
      width: 200,
      '@media (max-width: 768px)': {
        width: 100
      }
    }
  },
  total: {
    textAlign: 'right',
    fontSize: '1.5em',
    fontWeight: 'bold',
    margin: 20
  },
  controlButtons: {
    textAlign: 'right',
    '& button': {
      margin: '0 5px',
      color: theme.palette.button.normal.color,
      backgroundColor: theme.palette.button.normal.backgroundColor,
      '&:hover': {
        color: theme.palette.button.hover.color,
        backgroundColor: theme.palette.button.hover.backgroundColor
      }
    }
  }
}));
