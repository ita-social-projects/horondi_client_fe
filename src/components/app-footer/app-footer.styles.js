import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    scrollSnapStop: 'none',
    scrollSnapAlign: 'start',
    marginTop: 'auto'
  },
  footer: {
    backgroundColor: '#000000',
    color: '#ffffff',
    display: 'flex',
    clear: 'both'
  },
  cardDeck: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4,auto)',
    gridAutoRows: 'auto',
    justifyItems: 'start',
    gap: '16px',
    padding: '48px 0 24px 24px',
    boxSizing: 'border-box',
    alignItems: 'start',
    '& a': {
      transition: 'color .2s ease'
    },
    '& a:hover': {
      color: '#bebebe'
    },
    '@media screen and (max-width: 768px)': {
      gridTemplateColumns: 'repeat(2,auto)',
      gap: '32px',
      padding: '42px 0 22px 22px'
    },
    '@media screen and (max-width: 500px)': {
      gridTemplateColumns: '1fr',
      gap: '24px',
      padding: '36px 0 20px 20px'
    }
  },
  icons: {
    position: 'relative',
    fontSize: '2rem',
    paddingRight: '0.8rem',
    color: '#ffffff'
  },
  socialIconsStyles: {
    color: '#ffffff',
    fontSize: '3rem',
    transition: 'all 0.5s',
    padding: '0.5rem',
    borderRadius: '100%',
    width: '40px !important',
    height: '40px',
    '&:hover': {
      color: '#000000',
      backgroundColor: '#ffffff'
    }
  }
}));
