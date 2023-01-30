import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    '& h3': {
      fontSize: '48px',
      fontWeight: '400',
      marginBottom: '15px',
      marginTop: '0px'
    },
    '& p': {
      lineHeight: '22px'
    },
    '@media (max-width: 1150px)': {
      '& h3': {
        fontSize: '32px',
        marginBottom: '10px'
      }
    }
  },
  sections: {
    '& :nth-child(2n)': {
      '@media (min-width: 1150px)': {
        flexDirection: 'row-reverse'
      }
    }
  },
  section: {
    margin: '60px 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '50px',
    '@media (max-width: 1150px)': {
      margin: '30px 0',
      flexDirection: 'column',
      gap: '30px'
    }
  },
  sectionImg: {
    width: '100%',
    maxWidth: '530px'
  },
  bottomImg: {
    padding: '20px 0',
    width: '100%'
  }
}));
