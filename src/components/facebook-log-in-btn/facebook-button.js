import React from 'react';
import { useDispatch } from 'react-redux';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { loginByFacebook } from '../../redux/user/user.actions';

export const FacebookBtn = () => {
  const dispatch = useDispatch();

  const responseFacebook = (response) => {
    dispatch(loginByFacebook({ idToken: response.accessToken }));
  };

  return (
    <FacebookLogin
      appId={process.env.REACT_APP_FACEBOOK_CLIENT_ID}
      fields='name,email,picture'
      callback={responseFacebook}
      render={(renderProps) => (
        <button onClick={renderProps.onClick}>This is my custom FB button</button>
      )}
    />
  );
};
