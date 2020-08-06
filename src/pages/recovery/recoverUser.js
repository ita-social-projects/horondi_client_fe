import { setItems } from '../../utils/client';

const recoverUser = (email) => {
  const query = ` 
  mutation {
    recoverUser(email: "${email}")
  }
  `;
  return setItems(query);
};

export default recoverUser;
