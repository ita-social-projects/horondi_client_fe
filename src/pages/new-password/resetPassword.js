import { setItems } from '../../utils/client';

const resetPassword = (password, token) => {
  const query = ` 
  mutation {
    resetPassword(password: "${password}", token: "${token}")
  }
  `;
  return setItems(query);
};

export default resetPassword;
