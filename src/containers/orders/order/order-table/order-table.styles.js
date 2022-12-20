import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
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
    '& tbody tr': {
      '@media (max-width: 650px)': {
        display: 'grid',
        gridTemplateColumns: '2fr 1fr 1fr',
        gridTemplateRows: '1fr 0 1fr',
        borderBottom: '1px solid lightgrey',
        padding: '12px 0'
      },
      '@media (max-width: 450px)': {
        gridTemplateRows: 'auto',
        padding: '12px'
      }
    },
    '& td': {
      padding: '16px 0',
      lineHeight: '28px',
      fontSize: theme.typography.h4.fontSize,
      fontWeight: theme.typography.h4.fontWeight,
      textAlign: 'center',
      '&:first-child': {
        alignItems: 'center',
        textAlign: 'left',
        '@media (max-width: 650px)': {
          alignItems: 'center'
        },
        '@media (max-width: 450px)': {
          alignItems: 'start',
          width: '100%'
        }
      },
      '@media (max-width: 900px)': {
        fontSize: '18px'
      },
      '@media (max-width: 650px)': {
        margin: 'auto',
        padding: 0
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
      textAlign: 'center',
      '@media (max-width: 650px)': {
        display: 'none'
      }
    }
  }
}));
