import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

export function FormPostStatus({ onClose }: { onClose: () => void }) {
    const [slideOut, setSlideOut] = useState(false);

    const formPostStatusRef = useRef<HTMLDivElement>(null);

    const { t } = useTranslation();

    useEffect(() => {
        const handleClickOutSide = (e: MouseEvent) => {
            if (
                formPostStatusRef.current &&
                !formPostStatusRef.current.contains(e.target as Node)
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
            ref={formPostStatusRef}
            className={`flex h-screen justify-center items-center transition-all duration-300 ease-in-out
                ${slideOut ? "scale-75 opacity-0" : "scale-100 opacity-100"}`}
        >
            <div
                className="grid bg-[#000] shadow-xl w-[300px] p-3
                h-auto rounded-sm drop-shadow-[0_0_1px_white] 
                duration-300 hover:drop-shadow-[0_0_3px_white]"
            >
                <div className="w-[100%]">
                    <h2 className="text-[#C7D5E0] text-[20px] text-center font-bold block">
                        {t("formPostStatus.title")}
                    </h2>
                </div>
                <ul className="text-center text-white">
                    <li className="px-4 py-2 hover:bg-neutral-800 cursor-pointer">
                        <i className="fa-solid fa-earth-americas mr-2" />{" "}
                        {t("formPostStatus.community")}
                    </li>
                    <li className="px-4 py-2 hover:bg-neutral-800 cursor-pointer">
                        <i className="fa-solid fa-users mr-2" />{" "}
                        {t("formPostStatus.followers")}
                    </li>
                    <li className="px-4 py-2 hover:bg-neutral-800 cursor-pointer">
                        <i className="fa-solid fa-user mr-2" />{" "}
                        {t("formPostStatus.personal")}
                    </li>
                    <li
                        onClick={onClose}
                        className="px-4 py-2 hover:bg-neutral-800 cursor-pointer"
                    >
                        {t("formPostStatus.cancel")}
                    </li>
                </ul>
            </div>
        </div>
    );
}
