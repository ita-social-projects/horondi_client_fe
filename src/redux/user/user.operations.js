import { getItems, setItems } from '../../utils/client';

const loginUser = async (data) => {
  const loginUserMutation = `
  mutation login($user: LoginInput!){
  loginUser(
    loginInput: $user
  ) {    
    orders
    token
    refreshToken
    _id
    email
    firstName
    lastName
    phoneNumber
    confirmed
    images {
      thumbnail
    }
    address {
      country
      city
      street
      buildingNumber
      appartment
      region
      zipcode
		}
		banned{
      blockPeriod
      blockCount
      updatedAt
    }
		wishlist {
			_id
			name {
				lang
				value
			}
			basePrice {
				currency
				value
			}
			images {
			  primary {
			    small
			  }			  
			}
		}
    cart{
      items {
        product {
        _id
        name {
            lang
            value
        }
        category{
          _id
        }
        bottomMaterial{
            material{
            name{
                lang
                value
            }
            }
        }
        mainMaterial{
          color{
            _id
            name{
              lang
              value
            }
          }
        }
        pattern{
          _id
        }
        images{
            primary{
            small
            thumbnail
            }
        }
        
        }
        quantity
        options {
        size {
            _id
            name
        }
        }
        price {
        value
        }
    }
      totalPrice{
        value
      }
    }
  }
}
  `;
  const result = await setItems(loginUserMutation, data);

  return result?.data?.loginUser;
};

const getGoogleUser = async (payload) => {
  const getGoogleUserMutation = `
    mutation($idToken:String!){googleUser(idToken:$idToken){
      _id
      firstName,
      lastName,
      email,
      credentials{
        source,
        tokenPass
      }
      token
} 

}
  `;
  const result = await getItems(getGoogleUserMutation, { payload });

  return result?.data?.googleUser;
};

const confirmUserEmail = async ({ token }) => {
  const confirmUserEmailMutation = `
  mutation confirmUserEmail($token: String!){
    confirmUserEmail(token: $token){
        token
        refreshToken
        confirmed
    }
  }
  `;
  const result = await setItems(confirmUserEmailMutation, { token });

  return result?.data?.confirmUserEmail;
};

const recoverUser = async (data) => {
  const recoverUserMutation = `
  mutation recovery($email: String!, $language: Int!){
    recoverUser(email: $email, language: $language)
  }
  `;
  const result = await setItems(recoverUserMutation, { data });

  return result?.data?.recoverUser;
};

const checkIfTokenIsValid = async (data) => {
  const checkIfTokenIsValidMutation = `
  mutation checkToken($token: String!){
    checkIfTokenIsValid(token: $token)
  }
  `;
  const result = await setItems(checkIfTokenIsValidMutation, { data });

  return result?.data?.checkIfTokenIsValid;
};

const registerUser = async ({ user, language }) => {
  const registerUserMutation = `
      mutation register($user: userRegisterInput!, $language: Int!){
        registerUser(
          user: $user
          language: $language
        ) {
          email
        }
        }
      `;
  const result = await setItems(registerUserMutation, { user, language });

  return result?.data?.registerUser;
};

const resetPassword = async (data) => {
  const resetPasswordMutation = `
  mutation reset($password: String!, $token: String!){
    resetPassword(password: $password, token: $token)
  }
  `;
  const result = await setItems(resetPasswordMutation, { data });

  return result?.data?.resetPassword;
};

const updateUserById = async ({ user, id, upload }) => {
  const updateUserByIdMutation = `
     mutation updateUser($user: UserUpdateInput!, $id: ID!, $upload: Upload){
      updateUserById(user: $user, id: $id, upload: $upload) { 
        orders
        _id
        email
        firstName
        lastName
        phoneNumber
        confirmed
        images {
          thumbnail
          large
          small
          medium
        }
        address {
          country
          city
          street
          buildingNumber
          appartment
          region
          zipcode
        }
        confirmed
      }
    }
  `;
  const result = await setItems(updateUserByIdMutation, { user, id, upload });

  return result?.data?.updateUserById;
};

const sendEmailConfirmation = async ({ email, language }) => {
  const sendEmailConfirmationMutation = `
     mutation sendConfirmation($email: String!, $language: Int!){
      sendEmailConfirmation(email: $email, language: $language)
    }
  `;
  const result = await setItems(sendEmailConfirmationMutation, { email, language });

  return result?.data?.sendEmailConfirmation;
};

const getUserByToken = async () => {
  const getUserByTokenQuery = `
      query {
        getUserByToken {
          ... on User {
            orders
            _id
            email
            firstName
            lastName
            phoneNumber
            images {
              thumbnail
            }
            address {
              country
              city
              street
              buildingNumber
              appartment
              zipcode
              region
            }
            confirmed
            wishlist {
              _id
              name {
                lang
                value
              }
              basePrice {
                currency
                value
              }
              images {
                primary {
                  small
                }
              }
            }
            cart {
              items {
                product {
                  _id
                }
                quantity
                options {
                  size {
                    _id
                  }
                }
              }
              totalPrice {
                value
              }
            }
          }
          ... on Error {
            statusCode
            message
          }
        }
      }
    `;

  const result = await getItems(getUserByTokenQuery);

  return result?.data?.getUserByToken;
};

const getUserOrders = async (pagination) => {
  const getUserOrdersQuery = `
      query ($pagination: Pagination){
        getUserOrders (pagination: $pagination){
        _id
        dateOfCreation
        status
        orderNumber
        items {
          quantity
          fixedPrice {
            currency
            value
          }
          options {
            size {
              name
            }
          }
          product {
            name {
              lang
              value
            }
            model {
              sizes {
                name
              }
            }
            images {
              primary {
                thumbnail
              }
            }
          }
        }
        totalItemsPrice {
          value
          currency
        }
      }
      }
  `;
  const result = await getItems(getUserOrdersQuery, { pagination });

  return result?.data?.getUserOrders;
};

const getPurchasedProducts = async (id) => {
  const getPurchasedProductsQuery = `
      query($id: ID!) {
        getPurchasedProducts(id: $id) {
          _id
        }
      }
    `;
  const result = await getItems(getPurchasedProductsQuery, { id });

  return result?.data?.getPurchasedProducts;
};

const regenerateUserTokenPairs = async (refreshToken) => {
  const regenerateUserTokenPairsMutation = `
      mutation($refreshToken: String!) {
        regenerateAccessToken(refreshToken: $refreshToken) {
          ... on Token {          
            token
            refreshToken
          }
          ... on Error {
            message
            statusCode
          }
        }
      }
    `;
  const result = await setItems(regenerateUserTokenPairsMutation, { refreshToken });

  return result?.data?.regenerateAccessToken;
};

const getCountUserOrders = async () => {
  const getCountUserOrdersQuery = `
      query($id: ID) {
        getCountUserOrders (id: $id){
          countOrder
        }
      }
    `;
  const result = await getItems(getCountUserOrdersQuery);
  return result?.data?.getCountUserOrders;
};

export {
  loginUser,
  getGoogleUser,
  confirmUserEmail,
  recoverUser,
  checkIfTokenIsValid,
  registerUser,
  resetPassword,
  updateUserById,
  sendEmailConfirmation,
  getUserOrders,
  getUserByToken,
  regenerateUserTokenPairs,
  getPurchasedProducts,
  getCountUserOrders
};
