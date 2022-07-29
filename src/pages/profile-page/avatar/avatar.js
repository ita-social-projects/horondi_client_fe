import React, { useState } from 'react';
import { Button, FormHelperText } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import Resizer from 'react-image-file-resizer';

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

  const resizeFile = (file) => new Promise((resolve) => {
    Resizer.imageFileResizer(
      file,
      300,
      300,
      'JPEG',
      100,
      0,
      (uri) => {
        resolve(uri);
      },
      'base64'
    );
  });

  const changeImageSize = async (image) => {
    const result = await resizeFile(image);
    return result;
  };

  function dataURItoBlob(dataURI) {
    let byteString;
    if (dataURI.split(',')[0].indexOf('base64') >= 0) byteString = atob(dataURI.split(',')[1]);
    else byteString = unescape(dataURI.split(',')[1]);
    const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    const ia = new Uint8Array(byteString.length);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ia], { type: mimeString });
  }

  const makeBlobSource = async (result) => {
    const image = new Image();
    const promiseImg = new Promise((resolve, reject) => {
      image.onload = () => {
        resolve(true);
      };
      image.onerror = (error) => reject(error);
    });
    image.src = result; // adds 64string
    return promiseImg;
  };

  const handleImageLoad = async ({ target }) => {
    const image = target.files[0];
    if (image && checkExtension(image) && checkFileSize(image)) {
      const reader = new FileReader();
      reader.onload = async ({ target: { result } }) => {
        if (await checkDimension(result)) {
          // console.log(result, '5 result before setUserImageUrl if no resize') //blob
          setUserImageUrl(result);
          // console.log(image, '6 image File before setUpload if no resize') //image File
          setUpload(image);
        } else {
          const resizedImage = await changeImageSize(image);
          await makeBlobSource(resizedImage);
          // console.log(result, '3 result before setUserImageUrl if resize') //blob
          setUserImageUrl(result);
          // console.log(resizedImage, '4 resizedImage base64String before setUpload if resize') // convert it to image file
          const blobStr = dataURItoBlob(resizedImage);
          const imageFile = new File([blobStr], 'avatar.jpeg', {
            type: 'image/png'
          });
          // console.log(imageFile, '4-1 resizedImage File before setUpload if resize')
          setUpload(imageFile);
          // setErrorMessage(t('error.profile.dimension'));
        }
      };
      // console.log(image, '7 image before readAsDataUrl');
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
