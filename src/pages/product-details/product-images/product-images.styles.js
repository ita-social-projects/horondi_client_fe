import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  images: {
    display: 'grid',
    gridAutoFlow: 'column',
    gridTemplate: 'repeat(3, 1fr) / 1fr 4fr',
    gridGap: '20px',
    '@media (max-width: 500px)': {
      display: 'flex',
      justifyContent: 'center',
      padding: theme.spacing(2)
    },
    '& img': {
      transition: 'all 0.3s',
      transform: 'scale(1)',
      width: '100%',
      '&:hover': {
        cursor: 'pointer',
        transform: 'scale(1.1)'
      }
    }
  },
  primaryImage: (props) => ({
    gridRow: '1 / -1',
    background: `url(${props.primaryImage}) no-repeat center`,
    backgroundSize: 'cover',
    height: '500px',
    cursor: 'pointer',
    width: '500px',
    transition: 'all 0.3s',
    transform: 'scale(1)',
    '&:hover': {
      cursor: 'pointer',
      transform: 'scale(1.05)'
    },
    '@media (max-width: 1600px)': {
      width: 'auto',
      height: 'auto'
    }
  }),
  sideImage: {
    '@media (max-width: 500px)': {
      display: 'none'
    }
  }
}));
