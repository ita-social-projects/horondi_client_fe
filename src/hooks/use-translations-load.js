import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import { REACT_APP_API_URL } from '../utils/client';

export default function useTranslationsLoad() {
  const { i18n } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get(`${REACT_APP_API_URL}/translations`).then((response) => {
      if (response.data) {
        Object.keys(response.data).forEach((key) =>
          i18n.addResourceBundle(key, 'translations', response.data[key])
        );
        setIsLoading(false);
      }
    });
  }, [i18n]);
  return isLoading;
}
