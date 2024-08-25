import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        // Your English translations here
        "welcome": "Welcome",
        // Add more key-value pairs for translations
      }
    },
    fr: {
      translation: {
        // Your French translations here
        "welcome": "Bienvenue",
        // Add more key-value pairs for translations
      }
    },
    ar: {
      translation: {
        // Your Arabic translations here
        "welcome": "أهلا بك",
        // Add more key-value pairs for translations
      }
    },
    es: {
      translation: {
        // Your Spanish translations here
        "welcome": "Bienvenido",
        // Add more key-value pairs for translations
      }
    }
  },
  lng: "en", // Default language
  fallbackLng: "en",

  interpolation: {
    escapeValue: false
  }
});

export default i18n;
