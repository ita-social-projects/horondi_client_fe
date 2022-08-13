export const checkOrResizeImage = (
  base64Str,
  originalImage,
  setUserImageUrl,
  setUpload,
  maxWidth = 200,
  maxHeight = 200
) => {
  const canvas = document.createElement('canvas');
  const canvasCtx = canvas.getContext('2d');
  let width = originalImage.naturalWidth;
  let height = originalImage.naturalHeight;
  if (width >= height && width > maxWidth) {
    height *= maxWidth / width;
    width = maxWidth;
  } else if (height >= maxHeight) {
    width *= maxHeight / height;
    height = maxHeight;
  }
  canvas.width = width;
  canvas.height = height;
  canvasCtx.drawImage(originalImage, 0, 0, width, height);
  const resultBase64Str = canvas.toDataURL('image/jpeg', 1);
  setUserImageUrl(resultBase64Str);
  canvas.toBlob((blob) => {
    const imageFileToUpload = new File([blob], 'changedSizeAvatar.jpeg', {
      type: 'image/png'
    });
    setUpload(imageFileToUpload);
  });
};
