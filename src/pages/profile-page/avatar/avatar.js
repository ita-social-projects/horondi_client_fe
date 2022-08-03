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

  const checkOrResizeImageTo100x100 = (base64Str, maxWidth = 200, maxHeight = 200) => new Promise((resolve) => {
    const originalImage = new Image();
    originalImage.src = base64Str;
    originalImage.onload = () => {
      const canvas = document.createElement('canvas');
      const canvasCtx = canvas.getContext('2d');
      let width = originalImage.naturalWidth;
      let height = originalImage.naturalHeight;
      if (width >= height) {
        if (width > maxWidth) {
          height *= maxWidth / width;
          width = maxWidth;
        }
      } else if (height >= maxHeight) {
        width *= maxHeight / height;
        height = maxHeight;
      }
      canvas.width = width;
      canvas.height = height;
      canvasCtx.drawImage(originalImage, 0, 0, width, height);
      resolve(canvas.toDataURL('image/jpeg', 1));
    };
  });

  const dataURItoBlob = (dataURI) => {
    let byteString;
    if (dataURI.split(',')[0].indexOf('base64') >= 0) byteString = atob(dataURI.split(',')[1]);
    else byteString = unescape(dataURI.split(',')[1]);
    const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    const ia = new Uint8Array(byteString.length);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ia], { type: mimeString });
  };

  const handleImageLoad = async ({ target }) => {
    const imageFile = target.files[0];
    if (imageFile && checkExtension(imageFile) && checkFileSize(imageFile)) {
      const reader = new FileReader();
      reader.onload = async ({ target: { result } }) => {
        checkOrResizeImageTo100x100(result).then((checkedBase64Str) => {
          setUserImageUrl(checkedBase64Str);
          const blobStr = dataURItoBlob(checkedBase64Str);
          const imageFile = new File([blobStr], 'changedSizeAvatar.jpeg', {
            type: 'image/png'
          });
          setUpload(imageFile);
        });
      };
      reader.readAsDataURL(imageFile);
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
      {userImageUrl ? (
        <>
          <DeleteIcon className={classes.deleteIcon} onClick={deleteAvatar} />
          <img
            src={userImageUrl}
            alt='profile-logo'
            className={classes.userImage}
            data-testid='renderedImage'
          />
        </>
      ) : null}
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
