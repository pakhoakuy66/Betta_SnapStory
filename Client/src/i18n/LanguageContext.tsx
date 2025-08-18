import { createContext, useContext, useState, useEffect } from "react";
import i18n from "./index";

interface LanguageContextType {
    language: string;
    changeLanguage: (lng: string) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
    undefined
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguage] = useState(i18n.language);

    useEffect(() => {
        i18n.on("languageChanged", (lng) => setLanguage(lng));
        return () => {
            i18n.off("languageChanged");
        };
    }, []);

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    return (
        <LanguageContext.Provider value={{ language, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage phải được sử dụng trong LanguageProvider");
    }
    return context;
}
