import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  tableCell: ({ isLightTheme }) => ({
    textAlign: 'center',
    width: '25%',
    color: isLightTheme ? '#ffffffff' : '#363636',
    fontSize: 18,
    fontWeight: 500
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
  thunksInfoTitle: {
    fontSize: 25,
    color: '#000000',
    fontWeight: 400,
    alignSelf: 'flex-start'
  },
  orderDataContainer: {
    width: '80%',
    display: 'flex',
    flexDirection: 'column'
  },
  tableHeader: {
    borderTop: '1px solid #DADADA',
    borderBottom: '1px solid #DADADA',
    width: '100%',
    paddingBottom: 10,
    paddingTop: 10,
    '& >th': {
      padding: 8,
      textAlign: 'center'
    }
  },
  quantity: {
    color: 'grey',
    fontWeight: 'lighter'
  }
}));
