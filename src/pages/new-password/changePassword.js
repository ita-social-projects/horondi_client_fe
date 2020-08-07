import { setItems } from '../../utils/client';

const changePassword = (password, token) => {
  const query = ` 
  mutation {
    changePassword(password: "${password}", token: "${token}")
  }
  `;
  return setItems(query);
};

export default changePassword;
