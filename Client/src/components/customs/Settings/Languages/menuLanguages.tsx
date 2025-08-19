import { useState, useEffect, useRef } from "react";
import i18n from "@/i18n/I18n";

export function MenuLanguages({ onClose }: { onClose: () => void }) {
    const [slideOut, setSlideOut] = useState(false);

    const menuLanguagesRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutSide = (e: MouseEvent) => {
            if (
                menuLanguagesRef.current &&
                !menuLanguagesRef.current.contains(e.target as Node)
            ) {
                setSlideOut(true);
                setTimeout(() => onClose(), 300);
            }
        };
        document.addEventListener("mousedown", handleClickOutSide);
        return () =>
            document.removeEventListener("mousedown", handleClickOutSide);
    }, [onClose]);

    const changeLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
        onClose();
    };

    return (
        <div
            className={`flex h-screen justify-center items-center transition-all duration-300 ease-in-out
                ${slideOut ? "scale-75 opacity-0" : "scale-100 opacity-100"}`}
        >
            <div
                ref={menuLanguagesRef}
                className="bg-[#000] shadow-xl w-[550px] p-3
                h-auto rounded-sm drop-shadow-[0_0_1px_white] duration-300 hover:drop-shadow-[0_0_3px_white]"
            >
                <div className="w-[100%]">
                    <h2 className="text-[#C7D5E0] text-[20px] text-center font-bold block">
                        Ngôn ngữ
                    </h2>
                </div>
                <ul className="text-center text-white">
                    <li
                        className="px-4 py-2 hover:bg-neutral-800 cursor-pointer"
                        onClick={() => changeLanguage("en")}
                    >
                        English
                    </li>
                    <li
                        className="px-4 py-2 hover:bg-neutral-800 cursor-pointer"
                        onClick={() => changeLanguage("zh")}
                    >
                        中文
                    </li>
                    <li
                        className="px-4 py-2 hover:bg-neutral-800 cursor-pointer"
                        onClick={() => changeLanguage("ja")}
                    >
                        日本語
                    </li>
                    <li
                        className="px-4 py-2 hover:bg-neutral-800 cursor-pointer"
                        onClick={() => changeLanguage("ko")}
                    >
                        한국어
                    </li>
                    <li
                        className="px-4 py-2 hover:bg-neutral-800 cursor-pointer"
                        onClick={() => changeLanguage("vi")}
                    >
                        Tiếng Việt
                    </li>
                    <li
                        onClick={onClose}
                        className="px-4 py-2 hover:bg-neutral-800 cursor-pointer"
                    >
                        Hủy
                    </li>
                </ul>
            </div>
        </div>
    );
}
