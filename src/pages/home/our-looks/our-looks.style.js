import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  imageSection: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 200px)',
    justifyContent: 'center',
    '@media screen and (max-width: 991px)': {
      gridTemplateColumns: 'repeat(2, 200px)'
    },
    '@media screen and (max-width: 552px)': {
      gridTemplateColumns: 'repeat(1, 200px)'
    }
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
