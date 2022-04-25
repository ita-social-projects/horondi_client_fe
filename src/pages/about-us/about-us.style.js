import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    padding: '80px 0',
    '& h1': {
      textAlign: 'center',
      fontSize: '59px',
      fontWeight: '300'
    },
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
      padding: '60px 0',
      '& h1': {
        fontSize: '40px'
      },
      '& h3': {
        fontSize: '32px',
        marginBottom: '10px'
      }
    }
  },
  section: {
    margin: '60px 0',
    display: 'flex',
    alignItems: 'center',
    gap: '50px',
    '@media (max-width: 1150px)': {
      margin: '50px 0',
      flexDirection: 'column',
      gap: '30px'
    }
  },
  oneParagraph: {
    '& p': {
      margin: '0'
    }
  },
  firstSectionImg: {
    width: '530px'
  },
  secondSectionImg: {
    width: '520px'
  },
  thirdSectionImg: {
    width: '590px'
  },
  bottomImg: {
    padding: '20px 0',
    width: '100%'
  }
}));
