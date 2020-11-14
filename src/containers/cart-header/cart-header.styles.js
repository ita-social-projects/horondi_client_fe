import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  root: ({ fromSideBar }) => ({
    color: fromSideBar ? '#000' : '#fff'
  })
}));
