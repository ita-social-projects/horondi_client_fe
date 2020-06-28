import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  categoryItem: (props) => ({
    backgroundImage: `url(${props.image})`,
    backgroundSize: 'cover',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 400,
    height: 500,
    margin: 20,
    cursor: 'pointer',
    borderRadius: 5,
    boxShadow: '0px 5px 8px #c5c5c5',
    '&:hover': {
      '& span': {
        fontSize: 30
      }
    }
  }),
  categoryNameWrapper: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    width: 250,
    height: 60,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    '& span': {
      fontSize: 24
    }
  },
  link: {
    textDecoration: 'none',
    color: 'black'
  }
}));
