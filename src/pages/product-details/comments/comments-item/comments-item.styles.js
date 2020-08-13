import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => {
  const color = theme.palette.textColor;

  return {
    container: {
      color,
      '& hr': {
        border: 'none',
        color: '#C2C2C2',
        backgroundColor: '#C2C2C2',
        height: '0.05rem'
      }
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
