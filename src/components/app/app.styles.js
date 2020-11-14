import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  app: ({ isHome }) => ({
    scrollSnapType: isHome ? 'y mandatory' : 'none',
    height: '100vh',
    overflowY: 'scroll',
    scrollBehavior: 'smooth'
    //   height: 100vh;
    //   overflow-y: scroll;
    // scroll-behavior: smooth;
  }),
  center: {
    width: '3rem',
    margin: '22rem auto',
    '@media (max-width: 1400px)': {
      margin: '13rem auto'
    }
  }
}));
