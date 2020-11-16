import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  horondiStyle: {
    height: '700px',
    position: 'relative'
  },
  imageSection: {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gridTemplateRows: 'repeat(2, 1fr)',
    flexFlow: 'wrap',
    height: '100%',
    '& :nth-child(1)': {
      gridArea: '1/1/2/3'
    },
    '& :nth-child(2)': {
      gridArea: '1/3/2/4'
    },
    '& :nth-child(3)': {
      gridArea: '1/4/2/5'
    },
    '& :nth-child(4)': {
      gridArea: '1/5/3/6'
    },
    '& :nth-child(5)': {
      gridArea: '2/1/3/2'
    },
    '& :nth-child(6)': {
      gridArea: '2/2/3/3'
    },
    '& :nth-child(7)': {
      gridArea: '2/3/3/5'
    }
  },
  imageWrapper: {
    height: '100%',
    overflow: 'hidden',
    flexBasis: '16.666%',
    '@media screen and (max-width: 991px)': {
      flexBasis: '25%'
    },
    '@media screen and (max-width: 552px)': {
      flexBasis: '50%'
    },
    '&:hover > div': {
      transform: 'scale(1.1)'
    }
  },
  image: {
    width: '100%',
    height: '100%',
    transition: 'transform .3s ease',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },
  title: {
    fontSize: '2em',
    marginBottom: '1.5em',
    color: theme.palette.textColor
  },
  center: {
    width: '3rem',
    margin: 'auto',
    paddingBottom: '11rem'
  }
}));
