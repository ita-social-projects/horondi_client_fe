import { makeStyles } from '@material-ui/core';

export const dropdownStyles = makeStyles((theme) => ({
  rootItem: ({ fromSideBar }) => ({
    '& div': {
      padding: '0 !important'
    },

    '& svg': {
      display: fromSideBar ? null : 'none',
      left: '40px',
      '@media screen and (max-width: 552px)': {
        left: '25px'
      }
    },
    '&:hover': {
      '&:after': {
        color: 'white'
      }
    },
    '& .MuiInput-underline:before ': {
      borderBottom: '#0000'
    },
    '& .MuiInput-underline:after ': {
      borderBottom: 'none'
    }
  }),
  rootSelect: ({ fromSideBar }) => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '22px',
    textAlign: 'center',
    width: '60px',
    height: '33px',
    cursor: 'pointer',
    backgroundColor: '#0000',
    color: fromSideBar ? '#000' : '#fff',
    outline: 'none',
    border: 'none',
    transition: 'all 0.5s ease-out',
    '@media (max-width:768px)': {
      width: '33px'
    },
    '&:hover': {
      backgroundColor: fromSideBar ? '#0000' : '#fff',
      color: fromSideBar ? '#fff' : '#000'
    },
    '& li': {
      height: '33px',
      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      fontWeight: 'normal',
      width: '1rem !important',
      fontSize: '22px'
    }
  }),
  sticky: ({ fromSideBar }) => ({
    backgroundColor: fromSideBar ? '#fff' : '#0000'
  })
}));
