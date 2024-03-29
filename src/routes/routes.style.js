import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ palette }) => ({
  root: {
    backgroundColor: palette.backgroundColor,
    flexGrow: '1',
    paddingTop: '92px',
    display: 'flex',
    flexDirection: 'column'
  }
}));
