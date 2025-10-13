import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import home from "./locales/home.json";
// import about from "./locales/about.json";
// import products from "./locales/products.json";
// import contacts from "./locales/contacts.json";
import common from "./locales/common.json";

// Har bir til uchun tarjimalarni obyekt sifatida belgilaymiz
const resources = {
  en: {
    translation: {
      ...home.en,
    //   ...about.en,
    //   ...products.en,
    //   ...contacts.en,
      ...common.en,
    },
  },
  uz: {
    translation: {
      ...home.uz,
      // ...about.uz,
    //   ...products.uz,
    //   ...contacts.uz,
      ...common.uz,
    },
  },
  ru: {
    translation: {
      ...home.ru,
    //   ...about.ru,
    //   ...products.ru,
    //   ...contacts.ru,
      ...common.ru,
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // boshlang‘ich til
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
