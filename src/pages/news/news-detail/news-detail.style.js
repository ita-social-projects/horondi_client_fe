import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  container: {
    boxShadow: 'none',
    backgroundColor: theme.palette.type === 'dark' ? '#242424' : '#FEFEFE',
    '& hr': {
      borderStyle: 'solid',
      borderColor: theme.palette.type === 'dark' ? '#5B5B5B' : '#DBDBDB'
    },
    '& iframe': {
      padding: '16px',
      minWidth: '100%',
      height: '600px',
      border: '0',
      '@media (max-width: 1024px)': {
        height: '500px'
      },
      '@media (max-width: 768px)': {
        height: '400px'
      },
      '@media (max-width: 425px)': {
        height: '300px'
      },
      '@media (max-width: 350px)': {
        height: '200px'
      }
    },
    '@media (max-width: 425px)': {
      padding: '1rem'
    },
    '@media (max-width: 350px)': {
      padding: '0px'
    }
  },
  breadcrumbs: {
    color: theme.palette.type === 'light' ? '#242424' : '#FEFEFE',
    marginTop: '60px'
  },
  content: {
    padding: 0
  },
  date: {
    textAlign: 'center',
    marginTop: '4rem',
    color: theme.palette.type === 'light' ? '#4A4A4A' : '#FEFEFE',
    '@media (max-width: 768px)': {
      marginTop: '2rem'
    },
    '@media (max-width: 425px)': {
      fontSize: '.75rem'
    },
    '@media (max-width: 350px)': {
      marginTop: '1rem'
    }
  },
  hide: {
    display: 'none'
  },
  articleTitle: {
    textAlign: 'center',
    fontSize: '3rem',
    lineHeight: '4rem',
    '@media (max-width: 1024px)': {
      fontSize: '2.5rem',
      lineHeight: '3.5rem'
    },
    '@media (max-width: 768px)': {
      fontSize: '2rem',
      lineHeight: '3rem'
    },
    '@media (max-width: 425px)': {
      fontSize: '1.5rem',
      lineHeight: '2.5rem'
    },
    '@media (max-width: 350px)': {
      fontSize: '1rem',
      lineHeight: '2rem'
    }
  },
  imagesContainer: {
    margin: '50px auto',
    width: '100%',
    overflow: 'hidden',
    borderRadius: '5px',
    '@media (max-width: 350px)': {
      margin: '20px auto'
    }
  },
  media: {
    width: '100%',
    paddingTop: '56.25%'
  },
  newsText: {
    textAlign: 'justify',
    '& h3': {
      fontSize: '2rem'
    },
    '@media (max-width: 768px)': {
      width: '100%',
      '& img': {
        width: '100%'
      }
    },
    '@media (max-width: 350px)': {
      '& p': {
        fontSize: '.75rem',
        lineHeight: '1.25rem'
      }
    }
  },
  shoppingButton: {
    display: 'flex',
    justifyContent: 'center',
    width: '196px',
    height: '44px',
    fontWeight: '600',
    fontSize: '14px',
    textTransform: 'uppercase',
    margin: '40px auto',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: theme.palette.textColor,
    borderRadius: '0px',
    background: 'inherit',
    color: theme.palette.textColor,
    '&:hover': {
      backgroundColor: theme.palette.button.hoverSecondary.backgroundColor,
      color: theme.palette.button.hoverSecondary.color
    },
    '@media (max-width: 350px)': {
      fontSize: '12px',
      width: '150px',
      height: '35px',
      margin: '20px auto'
    }
  },
  focusedText: {
    backgroundColor: theme.palette.type === 'light' ? '#f7f7f7' : '#393939',
    borderLeft: '3px solid #3F51B5',
    padding: '24px 32px',
    fontSize: '1.25rem',
    fontWeight: '600',
    lineHeight: '28px',
    '@media (max-width: 425px)': {
      fontSize: '1rem',
      padding: '14px 25px'
    },
    '@media (max-width: 350px)': {
      fontSize: '1rem',
      padding: '12px 18px',
      lineHeight: '20px'
    }
  },
  newsAuthorFooter: {
    marginTop: '70px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    '@media (max-width: 350px)': {
      marginTop: '40px'
    }
  },
  authorAvatar: {
    borderRadius: '50%',
    minHeight: '190px',
    minWidth: '190px',
    '@media (max-width: 425px)': {
      minHeight: '120px',
      minWidth: '120px'
    }
  },
  madeByAuthor: {
    fontSize: '1rem',
    marginTop: '20px'
  },
  authorName: {
    fontSize: '1.25rem',
    marginTop: '5px',
    fontWeight: '600',
    marginBottom: '108px',
    '@media (max-width: 768px)': {
      marginBottom: '70px'
    },
    '@media (max-width: 425px)': {
      fontSize: '1rem'
    }
  }
}));
