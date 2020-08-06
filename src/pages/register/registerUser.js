import { setItems } from '../../utils/client';

const registerUser = (user) => {
  const { firstName, lastName, password, email } = user;
  const query = ` 
  mutation {
  registerUser(
    user: {
      firstName: "${firstName}"
      lastName: "${lastName}"
      password: "${password}"
      email: "${email}"
    }
  ) {
    email
  }
  }
  `;
  return setItems(query);
};

export default registerUser;
