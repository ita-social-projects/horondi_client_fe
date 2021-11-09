import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import axios from 'axios';

export default function useTranslationsLoad() {
  const { i18n } = useTranslation();

  useMemo(() => {
    axios.get('https://horondi-back-staging.azurewebsites.net/translations').then((response) => {
      if (response.data) {
        Object.keys(response.data).forEach((key) =>
          i18n.addResourceBundle(key, 'translations', response.data[key])
        );
      }
    });
  }, []);
}
