import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import axios from 'axios';

export default function useTranslationsLoad() {
  const { i18n } = useTranslation();

  useMemo(() => {
    axios
      .get(
        process.env.NODE_ENV === 'development'
          ? process.env.REACT_APP_API_TRANSLATION_DEV
          : process.env.REACT_APP_API_TRANSLATION_PROD
      )
      .then((response) => {
        if (response.data) {
          Object.keys(response.data).forEach((key) =>
            i18n.addResourceBundle(key, 'translations', response.data[key])
          );
        }
      });
  }, []);
}
