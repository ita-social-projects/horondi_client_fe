import axios from 'axios';

const getItems = (query) => {
  axios.post(
    'http://localhost:5000/graphql',
    { query },
    { headers: { 'Content-Type': 'application/json' } }
  );
};

export function sendItems(mutation) {
  return axios.post(
    'http://localhost:5000/graphql',
    { query: mutation },
    { headers: { 'Content-Type': 'application/json' } }
  );
}

export default getItems;
