import React, { useEffect, useState } from 'react';

export const useIsLoading = (loadingsArray = []) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(loadingsArray.some((item) => item));
  }, [...loadingsArray]);

  return isLoading;
};
