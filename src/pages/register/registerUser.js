import { setItems } from '../../utils/client';

const registerUser = (user, language) => {
  const { firstName, lastName, password, email } = user;
  const query = ` 
  mutation {
  registerUser(
    user: {
      firstName: "${firstName}"
      lastName: "${lastName}"
      password: "${password}"
      email: "${email}"
    },
    language: ${language}
  ) {
    email
  }
  }
  `;
  return setItems(query);
};

export default registerUser;
