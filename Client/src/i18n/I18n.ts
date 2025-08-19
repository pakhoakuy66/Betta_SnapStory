import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// import các file JSON ngôn ngữ
import en from "./locales/en.json";
import zh from "./locales/zh.json";
import ja from "./locales/ja.json";
import ko from "./locales/ko.json";
import vi from "./locales/vi.json";

// init i18next
i18n.use(LanguageDetector) // tự động detect ngôn ngữ trình duyệt
    .use(initReactI18next) // connect với React
    .init({
        resources: {
            en: { translation: en },
            zh: { translation: zh },    
            ja: { translation: ja },
            ko: { translation: ko },
            vi: { translation: vi },
        },
        fallbackLng: "en", // nếu ngôn ngữ hiện tại không có thì dùng en
        interpolation: { escapeValue: false }, // React đã escape rồi
        detection: {
            order: ["localStorage", "navigator"], // ưu tiên localStorage, nếu không thì dùng browser
            caches: ["localStorage"],
        },
    });

export default i18n;
