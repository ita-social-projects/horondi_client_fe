import React, { useCallback, useEffect, useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { TextField, InputAdornment } from '@material-ui/core';
import { useFormik } from 'formik';
import { OpenedLetterIcon } from '../../images/profile-icons';
import { useStyles } from './profile-page.styles';
import { updateUser, sendConfirmationEmail, recoverUser } from '../../redux/user/user.actions';
import Avatar from './avatar/avatar';
import { IMG_URL, MATERIAL_UI_COLOR, TEXT_FIELD_VARIANT } from '../../configs/index';
import { PROFILE_USER_CONTACT_DATA, PROFILE_USER_ADDRESS_DATA } from './constants';
import { validationSchema } from '../../validators/profile-page';
import { handleClassName, initialValues } from '../../utils/handle-profile-page';
import { useAppStyles } from '../../components/app/app.styles';
import AuthButton from '../../components/auth-form/auth-form-button/auth-form-button';
import { SnackBarContext } from '../../context/snackbar-context';
import SnackbarItem from '../../containers/snackbar';

const ProfilePage = () => {
  const [userImageUrl, setUserImageUrl] = useState(null);
  const [upload, setUpload] = useState(null);
  const [updated, setUpdated] = useState(false);
  const [deleteAvatar, setDeleteAvatar] = useState(false);
  const [shouldValidate, setShouldValidate] = useState(false);
  const { t, i18n } = useTranslation();
  const { setSnackBarMessage } = useContext(SnackBarContext);
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
    recoveryLoading,
    userError
  } = useSelector(({ User }) => ({
    userData: User.userData,
    userLoading: User.userLoading,
    confirmationEmailSent: User.confirmationEmailSent,
    userRecovered: User.userRecovered,
    confirmationLoading: User.confirmationLoading,
    recoveryLoading: User.recoveryLoading,
    userError: User.error
  }));

  const handleSaveUser = ({ firstName, lastName, email, phoneNumber, ...address }) => {
    const user = {
      firstName,
      lastName,
      email,
      phoneNumber,
      address,
      configs: { ...userData.configs, language: i18n.language }
    };

    dispatch(updateUser({ user, id: userData._id, upload, deleteAvatar }));
    setShouldValidate(false);
    setUpdated(true);
  };

  useEffect(() => {
    if (!userLoading && updated) {
      userError
        ? setSnackBarMessage(t('profilePage.updateError'), 'error')
        : setSnackBarMessage(t('profilePage.updateSuccess'));
      setUpdated(false);
    }
  }, [userLoading, userError, updated, setSnackBarMessage, t]);

  const { errors, isValid, values, dirty, handleBlur, handleSubmit, handleChange } = useFormik({
    initialValues: initialValues(userData),
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
    if (userData.images && userData.images.thumbnail) {
      setUserImageUrl(IMG_URL + userData.images.thumbnail);
    }
  }, [userData]);

  const getTextFields = useCallback(
    (textFields) =>
      Object.keys(textFields).map((name) => (
        <TextField
          key={name}
          type='text'
          name={name}
          variant={TEXT_FIELD_VARIANT.OUTLINED}
          value={values[name]}
          InputProps={{
            startAdornment: name === 'phoneNumber' && (
              <InputAdornment position='start'>+38</InputAdornment>
            )
          }}
          label={t(`profilePage.labels.${name}`)}
          fullWidth
          color={MATERIAL_UI_COLOR.PRIMARY}
          onChange={handleChange}
          onBlur={handleBlur}
          error={!!errors[name]}
          helperText={t(errors[name]) || ' '}
          className={handleClassName(classes.dataInput, classes.nameInputs, name)}
          disabled={name === 'email'}
        />
      )),
    [classes, errors, handleChange, handleBlur, t, values]
  );

  const emailSent = useCallback(
    (titleText) => (
      <div className={classes.emailSent} data-testid='emailSent'>
        <OpenedLetterIcon className={classes.openedLetterIcon} />
        <h3 className={classes.formTitle}>{titleText}</h3>
        <p>{t('profilePage.checkEmailText')}</p>
      </div>
    ),
    [classes, t]
  );

  const passwordChange = userRecovered ? (
    emailSent(t('profilePage.passwordChange.heading'))
  ) : (
    <>
      <h3 className={classes.formTitle}>{t('profilePage.passwordChange.heading')}</h3>
      <span className={classes.userActionsText}>{t('profilePage.passwordChange.text')}</span>
      <AuthButton
        onclick={handlePasswordChange}
        data-testid='passwordChangeBtn'
        loading={recoveryLoading}
      >
        {t('profilePage.passwordChange.btnTitle')}
      </AuthButton>
    </>
  );

  const confirmEmail = confirmationEmailSent ? (
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
        error={!!errors.confirmEmail}
        helperText={t(errors.confirmEmail)}
      />
      <span className={classes.userActionsText}>
        {!confirmationEmailSent && t('profilePage.emailConfirm.text')}
      </span>
      <AuthButton
        onclick={handleConfirmation}
        loading={confirmationLoading}
        data-testid='emailConfirmBtn'
      >
        {t('profilePage.emailConfirm.btnTitle')}
      </AuthButton>
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
              <AuthButton
                fullWidth
                className={classes.button}
                type='submit'
                loading={userLoading}
                onclick={() => setShouldValidate(true)}
                data-testid='submitBtn'
                disabled={!dirty || !isValid}
              >
                {t('profilePage.labels.saveBtnTitle')}
              </AuthButton>
            </form>
          </div>
          <div className={classes.userActions}>
            <div className={classes.newPassword}>{passwordChange}</div>
            {!userData.confirmed && <div className={classes.newPassword}>{confirmEmail}</div>}
          </div>
        </div>
      </div>
      <SnackbarItem />
    </div>
  );
};

export default ProfilePage;
