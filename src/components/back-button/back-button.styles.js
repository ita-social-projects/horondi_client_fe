import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  backBtn: {
    position: 'absolute',
    top: '120px',
    justifyContent: 'start',
    '@media (max-width: 600px)': { top: '110px' },
    '&:hover': { background: 'inherit', transform: 'scale(1.1)' }
  },
  arrowIcon: {
    fontSize: '36px',
    fill: theme.palette.arrowIcon.arrowColor,
    '@media (max-width: 750px)': { fontSize: '32px' },
    '@media (max-width: 500px)': { fontSize: '28px' }
  }
}));
