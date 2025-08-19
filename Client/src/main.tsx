import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import i18n from "./i18n/I18n.ts";
import { I18nextProvider } from "react-i18next";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <I18nextProvider i18n={i18n}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
        </I18nextProvider>
    </StrictMode>
);
