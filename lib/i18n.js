import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslations from '../locales/en.json';
import frTranslations from '../locales/fr.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslations },
      fr: { translation: frTranslations }
    },
    lng: 'fr', // French as default
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false
    },
    react: {
      useSuspense: false
    }
  });

// Initialize with French on client side
if (typeof window !== 'undefined') {
  const savedLang = localStorage.getItem('language') || 'fr';
  i18n.changeLanguage(savedLang);
}

export default i18n;