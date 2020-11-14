import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  constructorPreview: ({ isMouseIn }) => ({
    scrollSnapAlign: 'start',
    height: '100vh',
    position: 'relative',
    scrollSnapStop: 'normal',
    margin: '50px 0',
    boxSizing: 'border-box',
    overflowY: 'hidden',
    '&:after': {
      opacity: isMouseIn ? 1 : 0,
      transition: 'opacity .5s ease',
      content: `''`,
      position: 'absolute',
      top: 0,
      right: 0,
      left: 0,
      bottom: 0,
      zIndex: 1,
      background:
        'linear-gradient(rgb(171 171 171 / 13%) 0%, rgb(0, 0, 0) 100%)'
    }
  }),
  constructorInner: ({ isMouseIn }) => ({
    transition: 'all .2s ease',
    color: 'white',
    content: `''`,
    position: 'absolute',
    height: '200px',
    right: 0,
    left: 0,
    bottom: isMouseIn ? 0 : -100,
    display: 'flex',
    alignItems: 'flex-end',
    padding: 30,
    zIndex: 5,
    background:
      'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(0,0,0,1) 100%);'
  }),
  constructorInnerIcon: ({ isMouseIn }) => ({
    position: 'absolute',
    left: '50%',
    top: 20,
    transform: `translateX(-50%) ${
      isMouseIn ? 'rotate(180deg)' : 'rotate(0deg)'
    }`,
    fontSize: '4em'
  }),
  constructorInnerLink: {
    color: 'white',
    fontSize: '3em',
    '& span': {
      marginLeft: '10px'
    }
  }
}));
