import axios from 'axios';
import { useTranslation } from 'react-i18next';

export default function useTranslationsLoad() {
  const { i18n } = useTranslation();

  const loadedTranslationsHandler = (data) => {
    const translationsItem = { ua: {}, en: {} };
    const translations = [];

    if (data.length) {
      data.forEach((el) => {
        translationsItem.ua[el._id] = el.ua;
        translationsItem.en[el._id] = el.en;

        translations.push(translationsItem);
      });
      translations.forEach((item) => {
        Object.keys(item).forEach((key) => {
          Object.keys(item[key]).forEach((subKey) => {
            i18n.addResource(key, 'translations', subKey, item[key][subKey]);
          });
        });
      });
    }
  };

  axios
    .get('http://localhost:5000/translations')
    .then((response) => loadedTranslationsHandler(response.data));
}
