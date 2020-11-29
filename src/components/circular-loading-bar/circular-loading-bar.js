import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useStyles } from './circular-loading-bar.styles';

export default function CircularLoadingBar() {
  const styles = useStyles();

  return <CircularProgress className={styles.root} disableShrink />;
}
