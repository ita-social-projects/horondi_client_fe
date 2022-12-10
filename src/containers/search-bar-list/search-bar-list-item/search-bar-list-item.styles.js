import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ palette }) => ({
  searchBarListItem: {
    display: 'flex',
    height: '110px',
    width: '100%',
    padding: '10px',
    borderBottom: '1px solid #c3c3c3'
  },
  image: ({ imageUrl }) => ({
    background: `url(${imageUrl}) no-repeat center ${
      palette.type === 'light' ? '#f6f6f6' : '#323232'
    }`,
    width: '80px',
    height: '100%'
  }),
  content: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1
  },
  title: {
    display: 'flex',
    padding: '10px 0px 10px 10px',
    color: 'black',
    justifyContent: 'space-between',
    '& :last-child': {
      color: '#5a5a5a',
      fontSize: '12px'
    }
  },
  buttons: {
    display: 'flex',
    '& button': {
      width: 'fit-content',
      minWidth: 'fit-content',
      height: '25px',
      margin: '10px',
      borderRadius: '4px',
      '&:hover': {
        backgroundColor: 'rgba(0, 0, 0, 0.07)',
        color: 'black'
      }
    }
  }
}));
