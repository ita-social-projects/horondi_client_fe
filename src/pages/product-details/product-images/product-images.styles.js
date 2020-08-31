import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  container: {
    '@media (max-width: 1150px)': {
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
    gridTemplate: 'repeat(3, 190px) / 29% 71%',
    '& img': {
      transition: 'all 0.3s',
      transform: 'scale(1)',
      width: '100%',
      '&:hover': {
        cursor: 'pointer',
        transform: 'scale(1.1)'
      },
      '&:nth-child(1)': {
        width: '700px',
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
    '@media (max-width: 1600px)': {
      gridTemplate: 'repeat(3, 140px) / 29% 71%'
    },
    '@media (max-width: 1300px)': {
      gridTemplate: 'repeat(3, 120px) / 125px 260px'
    },
    '@media (max-width: 500px)': {
      gridTemplate: '14rem / 0',
      gridGap: '0'
    }
  },
  primaryImage: (props) => ({
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
      width: '330px',
      height: '350px'
    }
  })
}));

export default useStyles;
