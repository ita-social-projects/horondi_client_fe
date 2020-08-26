import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    '@media (max-width: 1000px)': {
      display: 'flex',
      justifyContent: 'center'
    },
    '@media (max-width: 400px)': {
      padding: '1rem'
    }
  },
  images: {
    display: 'grid',
    gridAutoFlow: 'column',
    gridColumnGap: '2rem',
    gridRowGap: '0.3rem',
    gridTemplate: 'repeat(3, 12rem) / 8rem 27.4rem',
    overflow: 'hidden',
    '@media (max-width: 1600px)': {
      gridTemplate: 'repeat(3, 9rem) / 6rem 20.6rem'
    },
    '& img': {
      transition: 'all 0.3s',
      transform: 'scale(1)',
      width: '100%',
      '&:hover': {
        cursor: 'pointer',
        transform: 'scale(1.05)'
      },
      '&:nth-child(1)': {
        gridColumn: '2',
        gridRow: '1 / 4'
      },
      '&:nth-child(2)': {
        gridColumn: '1',
        gridRow: '1'
      },
      '&:nth-child(3)': {
        gridColumn: '1',
        gridRow: '2'
      },
      '&:nth-child(4)': {
        gridColumn: '1',
        gridRow: '3'
      }
    },
    '@media (max-width: 1300px)': {
      gridTemplate: 'repeat(3, 35%) / 18% 66%'
    },
    '@media (max-width: 1000px)': {
      gridTemplate: 'repeat(3, 8.9rem) / 5.5rem 20rem'
    },
    '@media (max-width: 500px)': {
      gridTemplate: '14rem / 0',
      gridGap: '0'
    }
  }
}));

export default useStyles;
