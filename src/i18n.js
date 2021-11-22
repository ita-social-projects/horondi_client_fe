import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { translations } from './locales';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    wait: false,
    fallbackLng: 'ua',
    detection: {
      order: ['cookie', 'htmlTag', 'localStorage', 'path', 'subdomain'],
      caches: ['cookie']
    },
    resources: translations,
    interpolation: {
      escapeValue: false
    },
    ns: ['translations'],
    defaultNS: 'translations'
  });

i18n.languages = ['en', 'ua'];

export default i18n;
