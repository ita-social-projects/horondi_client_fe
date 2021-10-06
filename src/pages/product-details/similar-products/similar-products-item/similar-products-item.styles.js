import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  similarItem: (props) => ({
    background: `url(${props.image}) center center ${props.isLightTheme ? '#e3e7ea' : '#262626'}`,
    width: '90%',
    height: '325px',
    backgroundSize: 'cover',
    '&:hover': {
      cursor: 'pointer'
    },
    margin: '0 auto',
    fontWeight: '500',
    borderRadius: '5px'
  }),
  info: {
    height: '69px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    padding: '10px',
    backgroundColor: 'rgb(3, 3, 3,.6)',
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '20px',
    lineHeight: '28px',
    color: 'white',
    position: 'absolute',
    bottom: 0,
    width: '90%',
    borderRadius: '0px 0px 5px 5px'
  },
  rating: {
    width: '350px',
    height: '20px'
  }
}));
