import { sendItems } from './getItems';

const loginUser = (user) => {
  const { email, password } = user;
  const query = ` 
  mutation {
  loginUser(
    user: {
      email: "${email}"
      password: "${password}"
    }
  ) {
    purchasedProducts
    orders
    cart
    token
    id
  }
}
  `;
  return sendItems(query);
};

export default loginUser;
