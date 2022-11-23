import React, { useMemo, useState } from 'react';
import { Button, FormHelperText } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { CameraIcon } from '../../../images/profile-icons';
import { useStyles } from './avatar.styles';

const Avatar = ({ setUserImageUrl, userImageUrl, setUpload, setDeleteAvatar, t }) => {
  const classes = useStyles();
  const [errorMessage, setErrorMessage] = useState('');

  const checkFileSize = (file) => {
    if (file.size < 5120000) {
      errorMessage && setErrorMessage();
      return true;
    }

    setErrorMessage(t('error.profile.size'));
    return false;
  };

  const checkExtension = (file) => {
    const availableExtensions = ['jpeg', 'jpg', 'png'];
    const fileExtension = file.name.split('.').pop().toLowerCase();

    if (availableExtensions.includes(fileExtension)) {
      errorMessage && setErrorMessage();
      return true;
    }

    setErrorMessage(t('error.profile.extension'));
    return false;
  };

  const handleImageLoad = async ({ target }) => {
    const imageFile = target.files[0];
    if (imageFile && checkExtension(imageFile) && checkFileSize(imageFile)) {
      const reader = new FileReader();
      reader.onload = async ({ target: { result } }) => {
        setUserImageUrl(result);
        setUpload(imageFile);
      };
      reader.readAsDataURL(imageFile);
    }
  };

  const handleLableClass = useMemo(
    () => (userImageUrl ? classes.updateLabel : classes.uploadLabel),
    [userImageUrl, classes]
  );

  const deleteAvatar = (e) => {
    e.preventDefault();
    setUserImageUrl(null);
    setUpload(null);
    setDeleteAvatar(true);
  };

  return (
    <div className={classes.imageContainer}>
      {userImageUrl && (
        <img
          src={userImageUrl}
          alt='profile-logo'
          className={classes.userImage}
          data-testid='renderedImage'
        />
      )}
      <input
        type='file'
        className={classes.photoUpload}
        id='photoUpload'
        onChange={handleImageLoad}
        accept='image/jpg, image/jpeg, image/png'
        data-testid='imageInput'
      />
      <label htmlFor='photoUpload' className={`${classes.imageContainerLabel} ${handleLableClass}`}>
        <Button component='span' className={classes.uploadBtn}>
          <CameraIcon className={classes.cameraIcon} />
          <FormHelperText
            data-testid='errorText'
            error={Boolean(errorMessage)}
            className={classes.formHelper}
          >
            {errorMessage}
          </FormHelperText>
        </Button>
        {userImageUrl && <DeleteIcon className={classes.deleteIcon} onClick={deleteAvatar} />}
      </label>
    </div>
  );
};

export default Avatar;
