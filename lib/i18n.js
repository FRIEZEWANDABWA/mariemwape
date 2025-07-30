import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslations from '../locales/en.json';
import frTranslations from '../locales/fr.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslations },
      fr: { translation: frTranslations }
    },
    lng: 'fr',
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['path', 'localStorage', 'navigator'],
      caches: ['localStorage']
    }
  });

export default i18n;