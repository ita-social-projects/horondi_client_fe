import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { TextField, Button, InputAdornment } from '@material-ui/core';
import { useFormik } from 'formik';
import { OpenedLetterIcon } from '../../images/profile-icons';
import { useStyles } from './profile-page.styles';
import { updateUser, sendConfirmationEmail, recoverUser } from '../../redux/user/user.actions';
import { Loader } from '../../components/loader/loader';
import Avatar from './avatar/avatar';
import { IMG_URL, MATERIAL_UI_COLOR, TEXT_FIELD_VARIANT } from '../../configs/index';
import { PROFILE_USER_CONTACT_DATA, PROFILE_USER_ADDRESS_DATA } from './constants';
import { validationSchema } from '../../validators/profile-page';
import { handleClassName, initialValues } from '../../utils/handle-profile-page';
import { useAppStyles } from '../../components/app/app.styles';

const ProfilePage = () => {
  const [userImageUrl, setUserImageUrl] = useState(null);
  const [upload, setUpload] = useState(null);
  const [deleteAvatar, setDeleteAvatar] = useState(false);
  const [shouldValidate, setShouldValidate] = useState(false);
  const { t, i18n } = useTranslation();
  const language = i18n.language === 'ua' ? 0 : 1;

  const classes = useStyles();
  const appStyles = useAppStyles();
  const dispatch = useDispatch();

  const {
    userData,
    userLoading,
    confirmationEmailSent,
    userRecovered,
    confirmationLoading,
    recoveryLoading
  } = useSelector(({ User }) => ({
    userData: User.userData,
    userLoading: User.userLoading,
    confirmationEmailSent: User.confirmationEmailSent,
    userRecovered: User.userRecovered,
    confirmationLoading: User.confirmationLoading,
    recoveryLoading: User.recoveryLoading
  }));
  const handleSaveUser = ({ firstName, lastName, email, phoneNumber, ...address }) => {
    if (phoneNumber === null) {
      phoneNumber = '';
    }
    const user = { firstName, lastName, email, phoneNumber, address };
    Object.keys(address).forEach((key) => {
      if (address[key] === null) {
        address[key] = '';
      }
    });

    dispatch(updateUser({ user, id: userData._id, upload, deleteAvatar }));
    setShouldValidate(false);
  };

  const { errors, values, touched, handleBlur, resetForm, handleSubmit, handleChange } = useFormik({
    initialValues,
    onSubmit: handleSaveUser,
    validationSchema,
    validateOnChange: shouldValidate,
    validateOnBlur: shouldValidate
  });

  const handleConfirmation = () => {
    dispatch(sendConfirmationEmail({ email: userData.email, language }));
  };

  const handlePasswordChange = () => {
    dispatch(recoverUser({ email: userData.email, language }));
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

  const getTextFields = (textFields) =>
    Object.keys(textFields).map((name) => (
      <TextField
        key={name}
        type='text'
        name={name}
        variant={TEXT_FIELD_VARIANT.OUTLINED}
        value={values[name]?.startsWith('+380') ? values[name].slice(4) : values[name]}
        InputProps={
          name === 'phoneNumber'
            ? {
              maxLength: 9,
              startAdornment: <InputAdornment position='start'>+380</InputAdornment>
            }
            : {}
        }
        label={t(`profilePage.labels.${name}`)}
        fullWidth
        color={MATERIAL_UI_COLOR.PRIMARY}
        onChange={handleChange}
        error={touched[name] && !!errors[name]}
        helperText={t(errors[name])}
        className={handleClassName(classes.dataInput, classes.nameInputs, name)}
        disabled={name === 'email'}
      />
    ));

  const emailSent = (titleText) => (
    <div className={classes.emailSent} data-testid='emailSent'>
      <OpenedLetterIcon className={classes.openedLetterIcon} />
      <h3 className={classes.formTitle}>{titleText}</h3>
      <p>{t('profilePage.checkEmailText')}</p>
    </div>
  );

  const passwordChange = () =>
    userRecovered ? (
      emailSent(t('profilePage.passwordChange.heading'))
    ) : (
      <>
        <h3 className={classes.formTitle}>{t('profilePage.passwordChange.heading')}</h3>
        <span className={classes.userActionsText}>{t('profilePage.passwordChange.text')}</span>
        <Button
          className={`${classes.button} ${classes.userActionsButton}`}
          onClick={handlePasswordChange}
          data-testid='passwordChangeBtn'
        >
          {t('profilePage.passwordChange.btnTitle')}
        </Button>
      </>
    );

  const confirmEmail = () =>
    confirmationEmailSent ? (
      emailSent(t('profilePage.emailConfirm.heading'))
    ) : (
      <>
        <h3 className={classes.formTitle}>{t('profilePage.emailConfirm.heading')}</h3>
        <TextField
          data-cy='confirmEmail'
          id='confirmEmail'
          label={t('profilePage.labels.confirmEmail')}
          className={classes.userActionsInput}
          fullWidth
          variant={TEXT_FIELD_VARIANT.OUTLINED}
          color={MATERIAL_UI_COLOR.PRIMARY}
          value={values.email}
          name='confirmEmail'
          onChange={handleChange}
          onBlur={handleBlur}
          error={Boolean(touched.confirmEmail && t(errors.confirmEmail))}
          helperText={touched.confirmEmail && t(errors.confirmEmail)}
        />
        <span className={classes.userActionsText}>
          {!confirmationEmailSent && t('profilePage.emailConfirm.text')}
        </span>
        <Button
          className={`${classes.button} ${classes.userActionsButton}`}
          onClick={handleConfirmation}
          data-testid='emailConfirmBtn'
        >
          {t('profilePage.emailConfirm.btnTitle')}
        </Button>
      </>
    );

  return (
    <div className={appStyles.rootApp}>
      <div className={appStyles.containerApp}>
        <div className={classes.profileTitleInfo}>
          <h2 className={classes.profileTitle}>{t('profilePage.titles.mainTitle')}</h2>
          <div className={classes.titleLine} />
        </div>
        <div className={classes.profile}>
          <div>
            {userLoading ? (
              <div className={classes.userForm}>
                <Loader gridColumn='span 3' />
              </div>
            ) : (
              <div className={classes.userFormControl}>
                <form onSubmit={handleSubmit} className={classes.userForm} data-testid='userForm'>
                  <Avatar
                    userImageUrl={userImageUrl}
                    setUserImageUrl={setUserImageUrl}
                    setUpload={setUpload}
                    setDeleteAvatar={setDeleteAvatar}
                    t={t}
                  />
                  <h3 className={classes.formTitle}>{t('profilePage.titles.contactTitle')}</h3>
                  {getTextFields(PROFILE_USER_CONTACT_DATA)}
                  <h3 className={classes.formTitle}>{t('profilePage.titles.addressTitle')}</h3>
                  {getTextFields(PROFILE_USER_ADDRESS_DATA)}
                  <Button
                    fullWidth
                    className={`${classes.button} ${classes.saveBtn}`}
                    type='submit'
                    onClick={() => setShouldValidate(true)}
                    data-testid='submitBtn'
                  >
                    {t('profilePage.labels.saveBtnTitle')}
                  </Button>
                </form>
              </div>
            )}
          </div>
          <div className={classes.userActions}>
            <div className={classes.newPassword}>
              {recoveryLoading ? <Loader /> : passwordChange()}
            </div>
            {!userData.confirmed && (
              <div className={classes.confirmUser}>
                {confirmationLoading ? <Loader /> : confirmEmail()}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
