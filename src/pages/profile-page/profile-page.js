import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { TextField, Button } from '@material-ui/core';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useStyles } from './profile-page.styles';
import ProfilePicture from '../../images/profile.png';
import { updateUser, sendConfirmationEmail, recoverUser } from '../../redux/user/user.actions';
import { Loader } from '../../components/loader/loader';
import {
  IMG_URL,
  formRegExp,
  PROFILE_USER_DATA,
  errorMessages,
  REQUIRED_USER_FIELDS
} from '../../configs/index';
import {
  handleProfilePage,
  handleClassName,
  handleText,
  handleProfileImg
} from '../../utils/handle-profile-page';
import { MATERIAL_UI_COLOR } from '../../const/material-ui';

const ProfilePage = () => {
  const [userImageUrl, setUserImageUrl] = useState(null);
  const [upload, setUpload] = useState(null);
  const [shouldValidate, setShouldValidate] = useState(false);
  const { t } = useTranslation();

  const classes = useStyles();
  const dispatch = useDispatch();

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

  const validationSchema = Yup.object(
    Object.fromEntries(
      Object.keys(PROFILE_USER_DATA).map((item) => {
        let fieldSchema = Yup.string().matches(
          formRegExp[item],
          errorMessages[language].value[item]
        );
        REQUIRED_USER_FIELDS.includes(item) &&
          (fieldSchema = fieldSchema.required(errorMessages[language].value[item]));
        return [item, fieldSchema];
      })
    )
  );

  const handleSaveUser = ({ firstName, lastName, email, phoneNumber, ...address }) => {
    const user = { firstName, lastName, email, phoneNumber, address };
    dispatch(updateUser({ user, id: userData._id, upload }));
    setShouldValidate(false);
  };

  const { errors, values, resetForm, dirty, handleSubmit, handleChange } = useFormik({
    initialValues: {},
    onSubmit: handleSaveUser,
    validationSchema,
    validateOnChange: shouldValidate,
    validateOnBlur: shouldValidate
  });

  const handleImageLoad = ({ target }) => {
    if (target.files && target.files[0]) {
      const reader = new FileReader();
      reader.onload = ({ target: { result } }) => {
        setUserImageUrl(result);
      };
      reader.readAsDataURL(target.files[0]);
      setUpload(target.files[0]);
    }
  };

  const handleConfirmation = () => {
    dispatch(sendConfirmationEmail({ email: userData.email, language }));
  };

  const handlePasswordChange = () => {
    dispatch(recoverUser({ email: userData.email, language }));
  };

  const handleImageError = (event) => {
    event.target.src = ProfilePicture;
  };

  useEffect(() => {
    if (userData) {
      const { firstName, lastName, email, phoneNumber, address } = userData;
      resetForm({
        values: {
          firstName,
          lastName,
          email,
          phoneNumber,
          ...address
        }
      });
    }
    if (userData.images && userData.images.thumbnail) {
      setUserImageUrl(IMG_URL + userData.images.thumbnail);
    }
  }, [userData, resetForm]);

  return (
    <div className={classes.profile}>
      <div>
        {userLoading ? (
          <div className={classes.userForm}>
            <Loader gridColumn='span 3' />
          </div>
        ) : (
          <form onSubmit={handleSubmit} className={classes.userForm}>
            <div className={classes.imageContainer}>
              <img
                src={handleProfileImg(userImageUrl)}
                alt='profile-logo'
                className={classes.userImage}
                onError={handleImageError}
              />
              <input
                type='file'
                className={classes.photoUpload}
                id='photoUpload'
                onChange={handleImageLoad}
                multiple
                accept='image/*'
              />
              <label htmlFor='photoUpload' className={classes.uploadLabel}>
                <Button component='span' className={classes.uploadBtn}>
                  {t('profilePage.labels.addPhoto')}
                </Button>
              </label>
            </div>
            {Object.keys(PROFILE_USER_DATA).map((name) => (
              <TextField
                key={name}
                type='text'
                name={name}
                value={handleText(values, name)}
                label={t(`profilePage.labels.${name}`)}
                fullWidth
                color={MATERIAL_UI_COLOR.PRIMARY}
                error={!!errors[name]}
                helperText={handleText(errors, name)}
                className={handleClassName(
                  classes.dataInput,
                  classes.nameInputs,
                  classes.afterText,
                  name
                )}
                onChange={handleChange}
              />
            ))}
            {dirty && (
              <Button
                fullWidth
                className={`${classes.button} ${classes.saveBtn}`}
                type='submit'
                onClick={() => setShouldValidate(true)}
              >
                {t('profilePage.labels.saveBtnTitle')}
              </Button>
            )}
          </form>
        )}
      </div>
      <div className={classes.userActions}>
        <div className={classes.newPassword}>
          {recoveryLoading ? (
            <Loader />
          ) : (
            <>
              <h2>{t('profilePage.passwordChange.heading')}</h2>
              <span className={classes.recoverPasswordText}>
                {!userRecovered && t('profilePage.passwordChange.text')}
              </span>
              {handleProfilePage(
                userRecovered,
                t('profilePage.passwordChange'),
                language,
                handlePasswordChange,
                classes.button
              )}
            </>
          )}
        </div>
        {!userData.confirmed && (
          <div className={classes.confirmUser}>
            {confirmationLoading ? (
              <Loader />
            ) : (
              <>
                <h2>{t('profilePage.emailConfirm.heading')}</h2>
                {handleProfilePage(
                  confirmationEmailSent,
                  t('profilePage.emailConfirm'),
                  language,
                  handleConfirmation,
                  classes.button
                )}
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
