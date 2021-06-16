import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    justifyContent: 'space-between'
  },
  image: {
    textAlign: 'center'
  },
  description: {
    textAlign: 'center',
    lineHeight: '30px',
    fontSize: '1.2em'
  },
  itemImg: {
    marginLeft: 20
  }
}));
