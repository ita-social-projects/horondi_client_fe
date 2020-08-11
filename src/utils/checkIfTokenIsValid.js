import { setItems } from './client';

const checkIfTokenIsValid = (token) => {
  const query = ` 
  mutation {
  checkIfTokenIsValid(token: "${token}")
  }
  `;
  return setItems(query);
};

export default checkIfTokenIsValid;
