import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

export function MenuImage({ onClose }: { onClose: () => void }) {
    const [slideOut, setSlideOut] = useState(false);

    const menuImageRef = useRef<HTMLDivElement>(null);

    const { t } = useTranslation();

    useEffect(() => {
        const handleClickOutSide = (e: MouseEvent) => {
            if (
                menuImageRef.current &&
                !menuImageRef.current.contains(e.target as Node)
            ) {
                setSlideOut(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutSide);
        return () =>
            document.removeEventListener("mousedown", handleClickOutSide);
    }, []);

    return (
        <div
            ref={menuImageRef}
            className={`flex h-screen justify-center items-center transition-all duration-300 ease-in-out
                ${slideOut ? "scale-75 opacity-0" : "scale-100 opacity-100"}`}
        >
            <div
                className="grid bg-[#000] shadow-xl w-[400px] p-3
                h-[200px] rounded-sm drop-shadow-[0_0_1px_white] 
                duration-300 hover:drop-shadow-[0_0_3px_white]"
            >
                <div className="w-[100%]">
                    <h2 className="text-[#C7D5E0] text-[20px] text-center font-bold block">
                        {t("menuImage.title")}
                    </h2>
                </div>
                <ul className="text-center text-white">
                    <li className="px-4 py-2 hover:bg-neutral-800 cursor-pointer">
                        {t("menuImage.changeAvatar")}
                    </li>
                    <li className="px-4 py-2 hover:bg-neutral-800 cursor-pointer">
                        {t("menuImage.deleteAvatar")}
                    </li>
                    <li
                        onClick={onClose}
                        className="px-4 py-2 hover:bg-neutral-800 cursor-pointer"
                    >
                        {t("menuImage.cancel")}
                    </li>
                </ul>
            </div>
        </div>
    );
}
