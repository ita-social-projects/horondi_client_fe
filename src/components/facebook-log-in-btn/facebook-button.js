import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { Button } from '@material-ui/core';
import { loginByFacebook } from '../../redux/user/user.actions';
import { useStyles } from '../google-log-in-btn/google-button.styles';
import FacebookLogo from '../../images/facebook.png';

export const FacebookBtn = () => {
  const styles = useStyles();
  const dispatch = useDispatch();

  const responseFacebook = (response) => {
    dispatch(loginByFacebook({ idToken: response.accessToken }));
  };
  const facebookInit = () => {
    window.FB.init({
      appId: process.env.REACT_APP_FACEBOOK_CLIENT_ID,
      coockie: true,
      xfbml: true,
      version: 'v3.3'
    });
  };
  useEffect(() => {
    facebookInit();
  });
  return (
    <FacebookLogin
      appId={process.env.REACT_APP_FACEBOOK_CLIENT_ID}
      fields='name,email,picture'
      callback={responseFacebook}
      render={(renderProps) => (
        <Button
          onClick={renderProps.onClick}
          className={styles.loginBtn}
          disabled={renderProps.disabled}
          fullWidth
        >
          <span
            className={styles.socialLogo}
            style={{ background: `url(${FacebookLogo}) 0% 0% / contain no-repeat` }}
          />
          Facebook
        </Button>
      )}
    />
  );
};
