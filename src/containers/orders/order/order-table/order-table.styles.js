import { makeStyles } from '@material-ui/core/styles';

const title = {
  fontWeight: '600',
  fontSize: '48px',
  lineHeight: '65px'
};

export const useStyles = makeStyles((theme) => ({
  titleWrapper: {
    ...title,
    '@media (max-width: 900px)': {
      fontSize: theme.typography.h1.fontSize,
      lineHeight: theme.typography.h1.lineHeight
    },
    '@media (max-width: 650px)': {
      fontSize: theme.typography.h2.fontSize,
      lineHeight: theme.typography.h2.lineHeight
    }
  },
  root: {
    maxWidth: '1440px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  table: {
    width: '100%',
    whiteSpace: 'nowrap',
    '& .MuiTableCell-root': {
      '@media (max-width: 650px)': {
        borderBottom: 'none'
      }
    },
    '& tr': {
      '@media (max-width: 650px)': {
        display: 'grid',
        gridTemplateColumns: '2fr 1fr 1fr',
        gridTemplateRows: 'auto',
        borderBottom: '1px solid lightgrey'
      },
      '& >th': {
        '@media (max-width: 650px)': {
          display: 'none'
        }
      }
    },
    '& td': {
      padding: '16px 0',
      lineHeight: '28px',
      fontSize: theme.typography.h4.fontSize,
      fontWeight: theme.typography.h4.fontWeight,
      textAlign: 'center',
      '&:first-child': {
        textAlign: 'left',
        '@media (max-width: 768px)': {
          textAlign: 'center'
        }
      },
      '@media (max-width: 900px)': {
        fontSize: '18px'
      },
      '@media (max-width: 650px)': {
        margin: 'auto'
      }
    }
  },
  tableHeader: {
    borderTopWidth: '1px',
    borderTopStyle: 'solid',
    borderTopColor: theme.palette.cart.borderColor,
    '& >th': {
      padding: '10px 0',
      fontSize: theme.typography.h6.fontSize,
      fontWeight: theme.typography.body1.fontWeight,
      lineHeight: theme.typography.h6.lineHeight,
      textAlign: 'center'
    }
  }
}));
