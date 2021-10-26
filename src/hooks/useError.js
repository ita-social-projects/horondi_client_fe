import React, { useEffect, useState } from 'react';

export const useError = (errorssArray = []) => {
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(errorssArray.some((item) => item));
  }, [...errorssArray]);

  return { error };
};
