import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

export function PrivateStatusConfirm({
    onClose,
    onConfirm,
}: {
    onClose: () => void;
    onConfirm: () => void;
}) {
    const [slideOut, setSlideOut] = useState(false);
    const privateStatusConfirmRef = useRef<HTMLDivElement>(null);

    const { t } = useTranslation();

    useEffect(() => {
        const handleClickOutSide = (e: MouseEvent) => {
            if (
                privateStatusConfirmRef.current &&
                !privateStatusConfirmRef.current.contains(e.target as Node)
            ) {
                setSlideOut(true);
                setTimeout(onClose, 300);
            }
        };
        document.addEventListener("mousedown", handleClickOutSide);
        return () =>
            document.removeEventListener("mousedown", handleClickOutSide);
    }, [onClose]);

    return (
        <div className="fixed inset-0 flex h-screen justify-center items-center bg-black/50 transition-all duration-300 ease-in-out">
            <div
                ref={privateStatusConfirmRef}
                className={`grid bg-[#000] shadow-xl w-[400px] p-3
                h-[200px] rounded-sm drop-shadow-[0_0_1px_white] duration-300 hover:drop-shadow-[0_0_3px_white]
                transition-all ease-in-out ${
                    slideOut ? "scale-75 opacity-0" : "scale-100 opacity-100"
                }`}
            >
                <div className="w-full">
                    <h2 className="text-[#C7D5E0] text-[20px] text-center font-bold">
                        {t("privateConfirm.title")}
                    </h2>
                </div>
                <div className="w-full">
                    <p className="text-[#C7D5E0] text-center text-[16px]">
                        {t("privateConfirm.description")}
                    </p>
                </div>
                <div className="flex w-full justify-evenly mt-auto">
                    <button
                        onClick={onClose}
                        className="w-[90px] h-[30px] bg-[#151d2a] text-white 
                        rounded-sm drop-shadow-[0_0_1px_white] cursor-pointer
                        duration-300 hover:drop-shadow-[0_0_3px_white] 
                        active:scale-95 active:drop-shadow-[0_0_5px_white]"
                    >
                        {t("privateConfirm.cancel")}
                    </button>
                    <button
                        onClick={onConfirm}
                        className="w-[90px] h-[30px] bg-[#151d2a] 
                        text-white rounded-sm drop-shadow-[0_0_1px_white] cursor-pointer
                        duration-300 hover:drop-shadow-[0_0_3px_white] 
                        active:scale-95 active:drop-shadow-[0_0_5px_white]"
                    >
                        {t("privateConfirm.confirm")}
                    </button>
                </div>
            </div>
        </div>
    );
}
