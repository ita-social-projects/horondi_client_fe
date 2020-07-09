import { setItems } from '../../utils/client';

const registerUser = (user) => {
  const { firstName, lastName, email, password } = user;
  const query = ` 
  mutation {
  registerUser(
    user: {
      firstName: "${firstName}"
      lastName: "${lastName}"
      email: "${email}"
      password: "${password}"
    }
  ) {
    email
  }
  }
  `;
  return setItems(query);
};

export default registerUser;
