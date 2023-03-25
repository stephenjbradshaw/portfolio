import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    fallbackLng: "en-GB",
    resources: {
      "en-GB": {
        translation: require("./en-GB.json"),
      },
      "de-DE": {
        translation: require("./de-DE.json"),
      },
    },
  });

export default i18n;
