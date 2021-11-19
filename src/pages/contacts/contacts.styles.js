import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '100px'
  },
  contactsTitle: {
    fontWeight: '300',
    fontSize: '3em'
  },
  content: {
    marginRight: '400px',
    position: 'relative',
    '@media screen and (max-width: 1024px)': {
      marginRight: '200px'
    },
    '@media screen and (max-width: 768px)': {
      marginRight: '0px',
      marginBottom: '140px'
    }
  },
  mapImageInactive: {
    display: 'none'
  },
  mapImage: {
    width: '100%',
    '&:hover': {
      filter: 'brightness(.8)',
      transition: '.3s'
    }
  },
  contacts: {
    backgroundColor: theme.palette.black,
    top: '20%',
    right: '-55%',
    position: 'absolute',
    padding: '52px 90px 38px 63px',
    '@media screen and (max-width: 1024px)': {
      padding: '8% 10% 5% 10%',
      top: '20%',
      right: '-45%'
    },
    '@media screen and (max-width: 768px)': {
      padding: '8% 9% 4% 9%',
      top: '80%',
      right: '18%'
    },
    '@media screen and (max-width: 500px)': {
      top: '80%',
      right: '12%'
    }
  },
  contactsItem: {
    display: 'flex',
    alignItems: 'start',
    position: 'relative',
    marginBottom: '15px',
    width: '100%',
    fontSize: '1em',
    fontWeight: '500',
    color: theme.palette.white,
    '&:last-child': {
      marginTop: '45px'
    },
    '@media screen and (max-width: 500px)': {
      fontSize: '.8em',
      '&:last-child': {
        marginTop: '35px'
      }
    }
  },
  schedule: {
    display: 'flex',
    flexDirection: 'column',
    '@media screen and (max-width: 768px)': {
      width: 'auto'
    }
  },
  link: {
    width: '600px',
    display: 'block',
    lineHeight: '0',
    '@media screen and (max-width: 1024px)': {
      width: '500px'
    },
    '@media screen and (max-width: 768px)': {
      width: '450px'
    },
    '@media screen and (max-width: 500px)': {
      width: '300px'
    }
  },
  icon: {
    marginTop: '3px',
    marginRight: '16px',
    '@media screen and (max-width: 500px)': {
      marginTop: '1px'
    }
  },
  day: {
    display: 'block',
    marginBottom: '16px'
  }
}));
