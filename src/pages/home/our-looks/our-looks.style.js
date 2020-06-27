import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  imageSection: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  imageWrapper: {
    flexBasis: '25%',
    height: 400,
    position: 'relative',
    overflow: 'hidden',
    '& img': {
      width: '100%',
      position: 'absolute',
      top: 0,
      left: 0
    }
  },
  secondFloorImg: {
    transform: 'translateY(-100px)'
  },
  title: {
    fontSize: '30px'
  }
}));
