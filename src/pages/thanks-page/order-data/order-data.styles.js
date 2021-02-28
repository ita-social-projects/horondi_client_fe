import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  tableCell: ({ isLightTheme }) => ({
    textAlign: 'center',
    width: '25%',
    color: isLightTheme ? '#ffffffff' : '#363636',
    fontSize: 15,
    fontWeight: 500,
    borderTop: '1px solid #636262',
    borderBottom: '1px solid #636262'
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
    fontSize: 19,
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
    borderTop: '1px solid #636262',
    borderBottom: '1px solid #636262',
    width: '100%',
    paddingBottom: 10,
    paddingTop: 10,
    '& >th': {
      padding: 8,
      textAlign: 'center'
    },
    marginBottom: '5%'
  },
  quantity: {
    color: 'grey',
    fontWeight: 'lighter'
  },
  result: {
    width: '100%'
  },

  resultTitle: ({ isLightTheme }) => ({
    width: '25%',
    borderTop: '1px solid #636262',
    borderBottom: '1px solid #636262',
    color: isLightTheme ? '#ffffffff' : '#363636',
    fontSize: 16,
    fontWeight: 500
  })
}));
