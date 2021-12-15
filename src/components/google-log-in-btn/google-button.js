import React from 'react';
import { useDispatch } from 'react-redux';
import GoogleLogin from 'react-google-login';
import { Button } from '@material-ui/core';

import { loginByGoogle } from '../../redux/user/user.actions';
import GoogleLogo from '../../images/google.png';
import { useStyles } from './google-button.styles';
import { cookiePolicy } from '../../configs';

export const GoogleBtn = () => {
  const styles = useStyles();
  const dispatch = useDispatch();

  const responseGoogleSuccess = (response) => {
    dispatch(loginByGoogle({ idToken: response.tokenId }));
  };
  const responseGoogleFailure = (response) => response;

  return (
    <GoogleLogin
      disabled={false}
      clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
      render={(renderProps) => (
        <Button
          onClick={renderProps.onClick}
          disabled={renderProps.disabled}
          className={styles.loginBtn}
          fullWidth
        >
          <span
            className={styles.socialLogo}
            style={{ background: `url(${GoogleLogo}) 0% 0% / contain no-repeat` }}
          />
          Google
        </Button>
      )}
      onSuccess={responseGoogleSuccess}
      onFailure={responseGoogleFailure}
      cookiePolicy={cookiePolicy.SINGLE_HOST_ORIGIN}
    />
  );
};
