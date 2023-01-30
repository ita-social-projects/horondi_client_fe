import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ palette }) => ({
  searchBarListItem: {
    width: '100%',
    padding: '12px 12px 16px',
    borderBottom: '1px solid #c3c3c3',
    marginBottom: '1px'
  },
  itemBody: { display: 'flex', gap: '12px', cursor: 'pointer' },
  image: ({ imageUrl }) => ({
    background: `url(${imageUrl}) no-repeat center ${
      palette.type === 'light' ? '#f6f6f6' : '#323232'
    }`,
    width: '80px',
    height: '80px',
    '@media (max-width: 450px)': { width: '70px', height: '70px' }
  }),
  content: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    flex: 1,
    color: 'black',
    '@media (max-width: 450px)': { gap: '6px' }
  },
  title: {
    display: 'flex',
    columnGap: '10px',
    justifyContent: 'space-between'
  },
  name: { fontWeight: 600, '@media (max-width: 450px)': { fontSize: '14px' } },
  price: {
    fontSize: '16px',
    fontWeight: 600,
    flexWrap: 'nowrap',
    display: 'flex',
    gap: '4px',
    alignItems: 'center',
    '& svg': { fontSize: '16px' },
    '@media (max-width: 450px)': { fontSize: '14px' }
  },
  rate: { display: 'flex', alignItems: 'center' },
  category: { '@media (max-width: 450px)': { fontSize: '12px' } },
  unavailable: {
    fontSize: '12px',
    textAlign: 'end',
    '@media (max-width: 450px)': { fontSize: '10px', maxWidth: '60px' }
  }
}));
