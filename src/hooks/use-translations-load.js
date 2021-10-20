import axios from 'axios';
import { useTranslation } from 'react-i18next';

export default function useTranslationsLoad() {
  const { i18n } = useTranslation();

  const loadedTranslationsHandler = (data) => {
    const keys = ['ua', 'en'];

    data.forEach((el) => {
      i18n.addResource(el._id, 'translations', keys[0], el[keys[0]]);
      i18n.addResource(el._id, 'translations', keys[1], el[keys[1]]);
    });
  };

  axios.get('http://localhost:5000/translations').then((response) => {
    if (response.data.length) loadedTranslationsHandler(response.data);
  });
}
