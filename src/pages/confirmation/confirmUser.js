import { setItems } from '../../utils/client';

const confirmUser = (token, language) => {
  const query = ` 
  mutation {
    confirmUser(token: "${token}", language: ${language})
  }
  `;
  return setItems(query);
};

export default confirmUser;
