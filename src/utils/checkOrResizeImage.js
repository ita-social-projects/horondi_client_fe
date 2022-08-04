export const checkOrResizeImage = (base64Str, maxWidth = 200, maxHeight = 200) => new Promise((resolve) => {
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
