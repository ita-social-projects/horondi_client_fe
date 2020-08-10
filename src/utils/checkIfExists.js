import { setItems } from './client';

const checkIfExists = (token) => {
  const query = ` 
  mutation {
  checkIfExists(token: "${token}")
  }
  `;
  return setItems(query);
};

export default checkIfExists;
