import { setItems } from '../../utils/client';

const recoverUser = (email, language) => {
  const query = ` 
  mutation {
    recoverUser(email: "${email}", language: ${language})
  }
  `;
  return setItems(query);
};

export default recoverUser;
