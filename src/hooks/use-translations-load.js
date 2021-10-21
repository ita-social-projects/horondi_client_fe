import { useTranslation } from 'react-i18next';
import axios from 'axios';

export default function useTranslationsLoad() {
  const { i18n } = useTranslation();

  axios.get('http://localhost:5000/translations').then((response) => {
    if (response.data)
      Object.keys(response.data).forEach((key) =>
        i18n.addResourceBundle(key, 'translations', response.data[key])
      );
  });
}
