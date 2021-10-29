import React, { useEffect, useState } from 'react';

export const useIsLoadingOrError = (loadingsArray = [], errorsArray = []) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(loadingsArray.some((item) => item));
  }, [...loadingsArray]);

  useEffect(() => {
    setIsError(errorsArray.some((item) => item));
  }, [...errorsArray]);

  return { isLoading, isError };
};
