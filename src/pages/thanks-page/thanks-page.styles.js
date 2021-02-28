import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  thanksContainer: {
    color: '#FFFFFF',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%'
  },
  thunksTitle: {
    fontSize: 30,
    color: '#000000',
    fontWeight: 400,
    marginBottom: 0
  },

  thunksInfo: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
}));
