import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TextField, Button } from '@material-ui/core';
import { useStyles } from './profile-page.styles';
import ProfilePicture from '../../images/profile.png';
import {
  updateUser,
  sendConfirmationEmail,
  recoverUser
} from '../../redux/user/user.actions';
import { Loader } from '../../components/loader/loader';
import {
  PROFILE_DATA,
  PROFILE_PASSWORD_CHANGE,
  PROFILE_EMAIL_CONFIRM
} from '../../translations/user.translations';
import {
  IMG_URL,
  formRegExp,
  errorMessages,
  profileFields
} from '../../configs/index';

const ProfilePage = () => {
  const classes = useStyles();

  const {
    userData,
    userLoading,
    language,
    confirmationEmailSent,
    userRecovered,
    confirmationLoading,
    recoveryLoading
  } = useSelector(({ User, Language }) => ({
    userData: User.userData,
    userLoading: User.userLoading,
    language: Language.language,
    confirmationEmailSent: User.confirmationEmailSent,
    userRecovered: User.userRecovered,
    confirmationLoading: User.confirmationLoading,
    recoveryLoading: User.recoveryLoading
  }));

  const dispatch = useDispatch();

  const [user, setUser] = useState(userData);
  const [isEdited, setIsEdited] = useState(userData);
  const [userImageUrl, setUserImageUrl] = useState(null);
  const [upload, setUpload] = useState(null);
  const [validationObject, setValidationObject] = useState({});
  const [shouldValidate, setShouldValidate] = useState(false);

  const handleChange = (e, innerProp) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    if (innerProp) {
      return setUser({
        ...user,
        [innerProp]: { ...user[innerProp], [inputName]: inputValue }
      });
    }
    setUser({ ...user, [inputName]: inputValue });
  };

  const handleImageLoad = e => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = e => {
        setUserImageUrl(e.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
      setUpload(e.target.files[0]);
    }
  };

  const handleConfirmation = () => {
    dispatch(sendConfirmationEmail({ email: userData.email, language }));
  };

  const handleSaveUser = e => {
    e.preventDefault();
    setShouldValidate(true);
    if (Object.values(validationObject).every(item => item)) {
      delete user.token;
      dispatch(updateUser({ user, id: user._id, upload }));
    }
  };

  const handlePasswordChange = () => {
    dispatch(recoverUser({ email: userData.email, language }));
  };

  const handleImageError = e => {
    e.target.src = ProfilePicture;
  };

  const toEntries = useCallback(obj => {
    return Object.keys(obj)
      .filter(
        key =>
          (!(obj[key] instanceof Array) && obj[key]) ||
          (key === 'firstName' || key === 'lastName' || key === 'email')
      )
      .map(key => {
        if (obj[key] !== Object(obj[key])) {
          return [key, obj[key]];
        } else {
          return toEntries(obj[key]);
        }
      });
  }, []);

  const destructureObject = useCallback(
    obj => {
      return toEntries(obj)
        .map(item => {
          if (Array.isArray(item[0])) {
            return Object.fromEntries(item);
          }
          return Object.fromEntries([item]);
        })
        .reduce((prev, curr) => Object.assign(prev, curr), {});
    },
    [toEntries]
  );

  const checkFieldsForValidity = useCallback(
    obj => {
      return Object.fromEntries(
        Object.entries(destructureObject(obj))
          .filter(entry => formRegExp[entry[0]])
          .map(entry => {
            return [entry[0], new RegExp(formRegExp[entry[0]]).test(entry[1])];
          })
      );
    },
    [destructureObject]
  );

  const validateFields = useMemo(() => checkFieldsForValidity(user), [
    user,
    checkFieldsForValidity
  ]);

  useEffect(() => {
    setValidationObject(validateFields);
  }, [validateFields]);

  useEffect(() => {
    if (
      user.address &&
      Object.keys(user.address).every(key => !user.address[key])
    ) {
      user.address = null;
    }
  }, [user.address]);

  useEffect(() => {
    if (JSON.stringify(user) === JSON.stringify(userData)) {
      setIsEdited(false);
    } else {
      setIsEdited(true);
    }
  }, [userData, user]);

  useEffect(() => {
    if (userData) {
      setUser(userData);
    }
    if (userData.images && userData.images.thumbnail) {
      setUserImageUrl(IMG_URL + userData.images.thumbnail);
    }
  }, [userData]);

  return (
    <div>
      <div className={classes.profile}>
        <form className={classes.userForm} onSubmit={handleSaveUser}>
          {userLoading ? (
            <Loader gridColumn={'span 3'} />
          ) : (
            <>
              <div className={classes.imageContainer}>
                <img
                  src={userImageUrl || ProfilePicture}
                  alt='profile-logo'
                  className={classes.userImage}
                  onError={handleImageError}
                />
                <input
                  type='file'
                  className={classes.photoUpload}
                  id='photoUpload'
                  onChange={handleImageLoad}
                  multiple={true}
                  accept='image/*'
                />
                <label htmlFor='photoUpload' className={classes.uploadLabel}>
                  <Button component='span' className={classes.uploadBtn}>
                    {PROFILE_DATA[language].addPhoto}
                  </Button>
                </label>
              </div>
              {profileFields.map(name => (
                <TextField
                  key={name}
                  label={PROFILE_DATA[language][name]}
                  name={name}
                  value={
                    user.hasOwnProperty(name)
                      ? user[name] || ''
                      : user.address && user.address[name]
                      ? user.address[name]
                      : ''
                  }
                  onChange={
                    user.hasOwnProperty(name)
                      ? handleChange
                      : e => handleChange(e, 'address')
                  }
                  className={`${classes.userInput} ${(name === 'firstName' ||
                    name === 'lastName') &&
                    classes.nameInputs}`}
                  error={
                    shouldValidate &&
                    !validationObject[name] &&
                    (!user.hasOwnProperty(name)
                      ? user.address && !!user.address[name]
                      : name === 'phoneNumber'
                      ? !!user[name]
                      : true)
                  }
                  helperText={
                    shouldValidate &&
                    !validationObject[name] &&
                    (!user.hasOwnProperty(name)
                      ? user.address && !!user.address[name]
                      : name === 'phoneNumber'
                      ? !!user[name]
                      : true) &&
                    errorMessages[language].value[name]
                  }
                />
              ))}
              {!(isEdited || upload) ? null : (
                <Button
                  className={`${classes.button} ${classes.saveBtn}`}
                  type='submit'
                >
                  {PROFILE_DATA[language].saveBtnTitle}
                </Button>
              )}
            </>
          )}
        </form>
        <div className={classes.userActions}>
          <div className={classes.newPassword}>
            {recoveryLoading ? (
              <Loader />
            ) : (
              <>
                <h2>{PROFILE_PASSWORD_CHANGE[language].heading}</h2>
                <p>
                  {!userRecovered && PROFILE_PASSWORD_CHANGE[language].text}
                </p>
                {userRecovered ? (
                  <h3>{PROFILE_PASSWORD_CHANGE[language].checkEmailText}</h3>
                ) : (
                  <Button
                    className={classes.button}
                    onClick={handlePasswordChange}
                  >
                    {PROFILE_PASSWORD_CHANGE[language].btnTitle}
                  </Button>
                )}
              </>
            )}
          </div>
          {!user.confirmed && (
            <div className={classes.confirmUser}>
              {confirmationLoading ? (
                <Loader />
              ) : (
                <>
                  <h2>{PROFILE_EMAIL_CONFIRM[language].heading}</h2>
                  {confirmationEmailSent ? (
                    <h3>{PROFILE_EMAIL_CONFIRM[language].checkEmailText}</h3>
                  ) : (
                    <Button
                      className={classes.button}
                      onClick={handleConfirmation}
                    >
                      {PROFILE_EMAIL_CONFIRM[language].btnTitle}
                    </Button>
                  )}
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
