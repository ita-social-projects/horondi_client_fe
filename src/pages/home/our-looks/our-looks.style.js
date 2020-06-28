import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  imageSection: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, 200px)',
    justifyContent: 'center'
  },
  imageWrapper: {
    height: '15em',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },
  title: {
    fontSize: '2em',
    marginBottom: '1.5em',
    color: theme.palette.textColor
  }
}));
