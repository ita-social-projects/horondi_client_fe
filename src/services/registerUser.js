import { sendItems } from './getItems';

const registerUser = (user) => {
  const { firstName, lastName, email, password, confirmPassword } = user;
  const query = ` 
  mutation {
  registerUser(
    user: {
      firstName: "${firstName}"
      lastName: "${lastName}"
      email: "${email}"
      password: "${password}"
      confirmPassword: "${confirmPassword}"
    }
  ) {
    email
  }
  }
  `;
  return sendItems(query);
};

export default registerUser;
