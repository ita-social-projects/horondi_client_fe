import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  deliveryTypeSelected: ({ deliveryTypeValidator, shouldValidate }) => ({
    margin: '0 auto',
    border:
      !deliveryTypeValidator && shouldValidate
        ? '1px solid red'
        : '1px solid black',
    height: '350px',
    width: '800px',
    borderRadius: '4px',
    padding: '30px',
    transform: 'translateX(-30px)',
    boxSizing: 'content-box',
    '@media screen and (max-width: 768px)': {
      padding: 0,
      width: '100%',
      transform: 'none',
      border: 'none'
    }
  }),
  deliveryType: {
    marginBottom: '20px'
  },
  contactsFields: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '40px'
  },
  subTitle: {
    color: 'rgba(0, 0, 0, 0.54)',
    fontSize: '1.8rem',
    marginBottom: '20px',
    '@media screen and (max-width: 768px)': {
      display: 'flex',
      justifyContent: 'center'
    }
  }
}));
