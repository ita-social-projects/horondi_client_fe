import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ palette }) => ({
  tableCell: () => ({
    textAlign: 'center',
    width: '25%',
    color: palette.type === 'light' ? '#363636' : '#ffffff',
    fontSize: 15,
    fontWeight: 500,
    borderTop: palette.type === 'light' ? '1px solid #636262' : '1px solid #ffffff',
    borderBottom: palette.type === 'light' ? '1px solid #636262' : '1px solid #ffffff'
  }),
  titleWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  cartActionButtons: {
    display: 'flex',
    justifyContent: 'flex-end',
    minHeight: 40
  },
  thunksInfoTitle: () => ({
    fontSize: 19,
    color: palette.type === 'light' ? '#000000' : '#ffffff',
    fontWeight: 500,
    alignSelf: 'flex-start'
  }),
  orderDataContainer: {
    width: '80%',
    display: 'flex',
    flexDirection: 'column'
  },
  tableHeader: () => ({
    width: '100%',
    paddingBottom: 10,
    paddingTop: 10,
    '& >th': {
      padding: 8,
      textAlign: 'center'
    }
  }),
  result: () => ({
    width: '100%',
    borderBottom: palette.type === 'light' ? '1px solid #636262' : '1px solid #ffffffff',
    display: 'flex',
    marginBottom: '5%',
    padding: '2% 0 2% 0'
  }),

  resultTitle: () => ({
    width: '50%',
    color: palette.type === 'light' ? '#363636' : '#ffffff',
    fontSize: 16,
    fontWeight: 600,
    textAlign: 'start',
    paddingLeft: '8%'
  }),
  resultStatus: () => ({
    width: '25%',
    color: palette.type === 'light' ? '#363636' : '#ffffff',
    fontSize: 16,
    fontWeight: 600,
    textAlign: 'center'
  }),
  resultTotalSum: () => ({
    width: '25%',
    color: palette.type === 'light' ? '#343434' : '#ffffff',
    fontSize: 16,
    fontWeight: 600,
    textAlign: 'center'
  })
}));
