import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  product: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2,1fr)',
    gridTemplateRows: '1fr minmax(220px,auto)',
    gap: '24px',
    marginBottom: '32px',
    '@media (max-width: 900px)': {
      rowGap: '12px',
      marginBottom: 0
    },
    '@media (max-width: 750px)': {
      gridTemplateColumns: 'repeat(2,auto)',
      gridTemplateRows: 'repeat(3,auto)'
    }
  },
  container: {
    boxShadow: 'none',
    background: 'inherit'
  },
  productDetails: {
    '@media (max-width: 900px)': { gridRow: '1/3', gridColumn: 2 },
    '@media (max-width: 750px)': {
      position: 'relative',
      gridRow: 2,
      gridColumn: '1/3',
      display: 'grid',
      gridTemplateColumns: 'repeat(2,auto)',
      gridAutoRows: 'auto',
      gap: '16px'
    },
    '@media (max-width: 500px)': {
      gridTemplateColumns: '1fr',
      gap: '12px'
    }
  },
  backBtn: {
    marginBottom: '12px',
    justifyContent: 'start',
    '&:hover': { background: 'inherit', transform: 'scale(1.1)' }
  },
  arrowIcon: {
    fontSize: '36px',
    fill: theme.palette.arrowIcon.arrowColor,
    '@media (max-width: 750px)': { fontSize: '32px' },
    '@media (max-width: 500px)': { fontSize: '28px' }
  },
  submitWrapper: {
    display: 'flex',
    alignItems: 'center',
    margin: '24px 0',
    '@media (max-width: 750px)': {
      gridRow: 1,
      gridColumn: 2,
      alignSelf: 'start',
      marginTop: '128px',
    },
    '@media (max-width: 500px)': {
      margin: 0,
      gridColumn: 1,
      gridRow: 3
    }
  }
}));
