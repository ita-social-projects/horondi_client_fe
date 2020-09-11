import React, { useEffect, useState } from 'react';
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

const ProfilePage = () => {
  const classes = useStyles();

  const {
    userData,
    userLoading,
    language,
    confirmationEmailSent,
    userRecovered
  } = useSelector(({ User, Language }) => ({
    userData: User.userData,
    userLoading: User.userLoading,
    language: Language.language,
    confirmationEmailSent: User.confirmationEmailSent,
    userRecovered: User.userRecovered
  }));

  const dispatch = useDispatch();

  const [user, setUser] = useState(userData);
  const [isEdited, setIsEdited] = useState(userData);
  const [userImageUrl, setUserImageUrl] = useState(null);
  const [upload, setUpload] = useState(null);

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

  const handleImageLoad = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUserImageUrl(e.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
      setUpload(e.target.files[0]);
    }
  };

  const handleConfirmation = () => {
    dispatch(sendConfirmationEmail({ email: userData.email, language }));
  };

  const handleSaveUser = () => {
    delete user.token;
    dispatch(updateUser({ user, id: user._id, upload }));
  };

  const handleImageError = (e) => {
    e.target.src = ProfilePicture;
  };

  const handlePasswordChange = () => {
    dispatch(recoverUser({ email: userData.email, language }));
  };

  useEffect(() => {
    if (
      user.address &&
      Object.keys(user.address).every((key) => !user.address[key])
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
      setUserImageUrl(userData.images.thumbnail);
    }
  }, [userData]);

  const { images } = user;

  return (
    <div>
      <div className={classes.profile}>
        <form className={classes.userForm}>
          {userLoading ? (
            <Loader />
          ) : (
            <>
              <div className={classes.imageAndName}>
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
                    multiple={false}
                    accept='image/*'
                  />
                  <label htmlFor='photoUpload' className={classes.uploadLabel}>
                    <Button component='span' className={classes.uploadBtn}>
                      {images
                        ? images.thumbnail
                          ? PROFILE_DATA[language].changePhoto
                          : PROFILE_DATA[language].addPhoto
                        : PROFILE_DATA[language].addPhoto}
                    </Button>
                  </label>
                </div>
                <div className={classes.userNames}>
                  <TextField
                    label={PROFILE_DATA[language].firstName}
                    name='firstName'
                    value={user.firstName || ''}
                    className={classes.userInput}
                    onChange={handleChange}
                  />
                  <TextField
                    label={PROFILE_DATA[language].lastName}
                    name='lastName'
                    value={user.lastName || ''}
                    className={classes.userInput}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className={classes.restOfUserInputs}>
                <TextField
                  label={PROFILE_DATA[language].email}
                  name='email'
                  value={user.email || ''}
                  onChange={handleChange}
                  className={classes.userInput}
                />
                <TextField
                  label={PROFILE_DATA[language].phoneNumber}
                  name='phoneNumber'
                  value={user.phoneNumber ? user.phoneNumber : ''}
                  onChange={handleChange}
                  className={classes.userInput}
                />
                <TextField
                  label={PROFILE_DATA[language].country}
                  name='country'
                  value={
                    user.address
                      ? user.address.country
                        ? user.address.country
                        : ''
                      : ''
                  }
                  onChange={(e) => handleChange(e, 'address')}
                  className={classes.userInput}
                />
                <TextField
                  label={PROFILE_DATA[language].region}
                  name='region'
                  value={
                    user.address
                      ? user.address.region
                        ? user.address.region
                        : ''
                      : ''
                  }
                  onChange={(e) => handleChange(e, 'address')}
                  className={classes.userInput}
                />
                <TextField
                  label={PROFILE_DATA[language].city}
                  name='city'
                  value={
                    user.address
                      ? user.address.city
                        ? user.address.city
                        : ''
                      : ''
                  }
                  onChange={(e) => handleChange(e, 'address')}
                  className={classes.userInput}
                />
                <TextField
                  label={PROFILE_DATA[language].street}
                  name='street'
                  value={
                    user.address
                      ? user.address.street
                        ? user.address.street
                        : ''
                      : ''
                  }
                  onChange={(e) => handleChange(e, 'address')}
                  className={classes.userInput}
                />
                <TextField
                  label={PROFILE_DATA[language].buildingNumber}
                  name='buildingNumber'
                  value={
                    user.address
                      ? user.address.buildingNumber
                        ? user.address.buildingNumber
                        : ''
                      : ''
                  }
                  onChange={(e) => handleChange(e, 'address')}
                  className={classes.userInput}
                />
                <TextField
                  label={PROFILE_DATA[language].appartment}
                  name='appartment'
                  value={
                    user.address
                      ? user.address.appartment
                        ? user.address.appartment
                        : ''
                      : ''
                  }
                  onChange={(e) => handleChange(e, 'address')}
                  className={classes.userInput}
                />
                <TextField
                  label={PROFILE_DATA[language].zipcode}
                  name='zipcode'
                  value={
                    user.address
                      ? user.address.zipcode
                        ? user.address.zipcode
                        : ''
                      : ''
                  }
                  onChange={(e) => handleChange(e, 'address')}
                  className={classes.userInput}
                />
              </div>
              {!(isEdited || upload) ? null : (
                <Button className={classes.saveBtn} onClick={handleSaveUser}>
                  {PROFILE_DATA[language].saveBtnTitle}
                </Button>
              )}
            </>
          )}
        </form>
        <div className={classes.userActions}>
          <div className={classes.newPassword}>
            <h2>{PROFILE_PASSWORD_CHANGE[language].heading}</h2>
            <p>{!userRecovered && PROFILE_PASSWORD_CHANGE[language].text}</p>
            {userRecovered ? (
              <h3>{PROFILE_PASSWORD_CHANGE[language].checkEmailText}</h3>
            ) : (
              <Button
                className={classes.saveBtn}
                onClick={handlePasswordChange}
              >
                {PROFILE_PASSWORD_CHANGE[language].btnTitle}
              </Button>
            )}
          </div>
          {!user.confirmed && (
            <div className={classes.confirmUser}>
              <h2>{PROFILE_EMAIL_CONFIRM[language].heading}</h2>
              {confirmationEmailSent ? (
                <h3>{PROFILE_EMAIL_CONFIRM[language].checkEmailText}</h3>
              ) : (
                <Button
                  className={classes.saveBtn}
                  onClick={handleConfirmation}
                >
                  {PROFILE_EMAIL_CONFIRM[language].btnTitle}
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
