import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => {
  const color = theme.palette.textColor;

  return {
    container: {
      color,
      borderTop: '2px solid #C2C2C2'
    },
    comments: {
      margin: '0.5rem 0 1.5rem',
      fontWeight: '500'
    },
    date: {
      color
    },
    head: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  };
});

export default useStyles;
