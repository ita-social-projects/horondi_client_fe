import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ palette }) => ({
  root: () => ({
    top: '95px',
    right: '85px',
    '& > *': {
      backgroundColor: palette.type === 'light' ? '#08BE05' : '#020202'
    }
  })
}));
