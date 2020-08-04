import { makeStyles } from '@material-ui/core/styles';

import imageURL from '../../images/oops.png';

export const useStyles = makeStyles(() => ({
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '70vh'
  },
  img: {
    position: 'relative',
    width: '100%',
    height: '100%'
  },
  error: {
    display: 'flex',
    justifyContent: 'space-evenly',
    background: `url(${imageURL}) no-repeat`,
    backgroundSize: '100% 100%',
    width: '60%',
    minHeight: '450px'
  },
  info: {
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'flex-end',
    alignItems: 'center',
    marginBottom: '80px',
    '& h2': {
      fontFamily: 'Montserrat',
      fontWeight: 'normal',
      color: 'rgba(0, 0, 0, 0.87)'
    }
  },
  headerButton: {
    background: '#404040',
    color: '#FFFFFF'
  }
}));
