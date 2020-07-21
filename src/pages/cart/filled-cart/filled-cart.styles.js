import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    margin: '100px auto'
  },
  table: {
    display: 'flex',
    flexDirection: 'column'
  },
  tableHeader: {
    fontSize: '1.5em',
    display: 'flex',
    borderColor: '#DADADA',
    borderStyle: 'solid',
    borderWidth: '1px 0 1px',
    '& > tr': {
      display: 'flex',
      width: '100%',
      '& > *': {
        margin: '10px 0'
      }
    },
    '& tr > th:first-child': {
      flex: '1'
    },
    '& tr > th:not(:first-child)': {
      width: 200
    }
  },
  tableBody: {
    borderColor: '#DADADA',
    borderStyle: 'solid',
    borderWidth: '0 0 1px'
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
