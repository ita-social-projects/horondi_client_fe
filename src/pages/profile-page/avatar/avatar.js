import React, { useState } from 'react';
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

  const checkDimension = async (result) => {
    const image = new Image();

    const promiseImg = new Promise((resolve, reject) => {
      image.onload = () => {
        if (image.height <= 100 && image.width <= 100) {
          resolve(true);
        } else {
          resolve(false);
        }
      };

      image.onerror = (error) => reject(error);
    });

    image.src = result;

    return promiseImg;
  };

  const handleImageLoad = async ({ target }) => {
    const image = target.files[0];

    if (image && checkExtension(image) && checkFileSize(image)) {
      const reader = new FileReader();

      reader.onload = async ({ target: { result } }) => {
        if (await checkDimension(result)) {
          setUserImageUrl(result);
          setUpload(image);
        } else {
          setErrorMessage(t('error.profile.dimension'));
        }
      };

      reader.readAsDataURL(image);
    }
  };

  const handleLableClass = () => (userImageUrl ? classes.updateLabel : classes.uploadLabel);

  const deleteAvatar = () => {
    setUserImageUrl(null);
    setUpload(null);
    setDeleteAvatar(true);
  };

  return (
    <div className={classes.imageContainer}>
      {userImageUrl && (
        <>
          <DeleteIcon className={classes.deleteIcon} onClick={deleteAvatar} />
          <img
            src={userImageUrl}
            alt='profile-logo'
            className={classes.userImage}
            data-testid='renderedimage'
          />
        </>
      )}
      <input
        type='file'
        className={classes.photoUpload}
        id='photoUpload'
        onChange={handleImageLoad}
        accept='image/jpg, image/jpeg, image/png'
        data-testid='imageInput'
      />
      <label
        htmlFor='photoUpload'
        className={`${classes.imageContainerLabel} ${handleLableClass()}`}
      >
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
      </label>
    </div>
  );
};

export default Avatar;
