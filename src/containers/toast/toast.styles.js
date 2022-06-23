import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ palette }) => ({
  root: () => ({
    '& > *': {
      backgroundColor: palette.type === 'light' ? '#08BE05' : '#020202'
    }
  })
}));
