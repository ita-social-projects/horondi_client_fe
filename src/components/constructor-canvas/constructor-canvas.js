import React, { useRef, useLayoutEffect } from 'react';
import { IMG_URL } from '../../configs';

const ConstructorCanvas = ({ className, item, width, height, x, y }) => {
  const canvasRef = useRef();

  const mergeImages = (
    imagesToMerge,
    currentCanvas,
    canvasWidth = 50,
    canvasHeight = 50,
    canvasX = 0,
    canvasY = 0
  ) => {
    if (currentCanvas) {
      const ctx = currentCanvas.getContext('2d');
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      imagesToMerge.forEach((imageToMerge) => {
        ctx.drawImage(imageToMerge, canvasX, canvasY, canvasWidth, canvasHeight);
      });
    }
  };

  const loadImages = (sources = []) =>
    new Promise((resolve) => {
      const loadedImages = sources.map(
        (source) =>
          new Promise((resolveImage, rejectImage) => {
            const img = new Image();
            img.onload = () => resolveImage(img);
            img.onerror = () => {
              rejectImage(new Error());
            };
            img.src = `${IMG_URL}${source}`;
          })
      );

      resolve(Promise.all(loadedImages).then((loadedImage) => loadedImage));
    });

  useLayoutEffect(() => {
    const createImagesArray = (values) => {
      const result = [];

      Object.keys(values).forEach((key) => {
        if (key === 'pattern' && item.pattern) {
          result.unshift(values[key].constructorImg);
        } else if (
          typeof values[key] === 'object' &&
          !Array.isArray(values[key]) &&
          values[key].images
        ) {
          result.unshift(values[key].images.small);
        }
      });

      return result;
    };

    loadImages(createImagesArray(item)).then((loadedImages) => {
      mergeImages(loadedImages, canvasRef.current, width, height, x, y);
    });
  }, [item, canvasRef.current]);

  return <canvas className={className} ref={canvasRef} width={width} height={height} />;
};

export default ConstructorCanvas;
