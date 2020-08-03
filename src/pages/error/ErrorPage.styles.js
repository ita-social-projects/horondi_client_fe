import { makeStyles } from '@material-ui/core/styles';

import oops from '../../images/oops.png';

export const useStyles = makeStyles((theme) => ({
  error: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: `url(${oops}) no-repeat`,
    backgroundSize: 'cover'
  },
  info: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
}));
