import { setItems } from '../../utils/client';

const confirmUser = (token) => {
  const query = ` 
  mutation {
    confirmUser(token: "${token}")
  }
  `;
  return setItems(query);
};

export default confirmUser;
