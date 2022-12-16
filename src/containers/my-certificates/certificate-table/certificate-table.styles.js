import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  iconBtn: {
    color: 'inherit',
    opacity: '0.6',
    backgroundColor: 'inherit',
    border: 'none',
    '&:hover': {
      color: theme.palette.blue,
      cursor: 'pointer'
    }
  },
  image: {
    height: '85px',
    width: '170px',
    '@media (max-width: 860px)': {
      gridRow: '1/span 3',
      gridColumn: 1,
      height: '70px',
      width: '140px'
    },
    '@media (max-width: 450px)': { display: 'none' }
  },
  table: {
    '@media (max-width: 750px)': { borderTop: theme.palette.imageContainer.border },
    '& td': {
      fontSize: '18px',
      padding: '20px 12px',
      '@media (max-width: 860px)': {
        fontSize: theme.typography.h5.fontSize
      },
      '@media (max-width: 750px)': {
        padding: 0,
        border: 'none'
      }
    }
  },
  code: {
    fontWeight: theme.typography.body1.fontWeight,
    '@media (max-width: 750px)': { gridRow: '1/span 3', gridColumn: 2 },
    '@media (max-width: 610px)': { gridRow: 1 }
  },
  tableRow: {
    '@media (max-width: 750px)': {
      display: 'grid',
      gridTemplateColumns: 'fit-content(100px)',
      gridAutoRows: 'auto',
      padding: '18px 0 ',
      columnGap: '12px',
      borderBottom: theme.palette.imageContainer.border,
      justifyItems: 'left',
      alignItems: 'center'
    }
  },
  price: {
    whiteSpace: 'nowrap',
    '@media (max-width: 750px)': { gridColumn: 4, gridRow: 3 },
    '@media (max-width: 610px)': { gridColumn: 3, justifySelf: 'center' }
  },
  actionItems: {
    textAlign: 'center',
    '@media (max-width: 750px)': { gridColumn: 4, gridRow: 1 },
    '@media (max-width: 610px)': { gridColumn: 3, justifySelf: 'center' }
  },
  date: {
    '@media (max-width: 750px)': { gridColumn: 3, gridRow: 3 },
    '@media (max-width: 610px)': { gridColumn: 2 }
  },
  status: {
    color: theme.palette.green,
    '@media (max-width: 750px)': { gridColumn: 3, gridRow: 1 },
    '@media (max-width: 610px)': { gridColumn: 2, gridRow: 2 }
  },
  notActive: {
    filter: 'grayscale(100%)',
    backgroundColor: theme.palette.myCertificate.backgroundColorGray,
    '& td': { color: theme.palette.myCertificate.notActiveTextColor },
    pointerEvents: 'none'
  },
  expires: {
    backgroundColor: theme.palette.myCertificate.backgroundColorRed,
    '& td:nth-child(4)': {
      color: theme.palette.red
    }
  }
}));
