import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { PrivateStatusConfirm } from "./PrivateStatusConfirm";
import { PublicStatusConfirm } from "./PublicStatusConfirm";

export function PersonalStatus({ onClose }: { onClose: () => void }) {
    const [isPrivate, setIsPrivate] = useState(false);
    const [slideOut, setShowSlideOut] = useState(false);
    const [showPrivateConfirm, setShowPrivateConfirm] = useState(false);
    const [showPublicConfirm, setShowPublicConfirm] = useState(false);

    const personalStatusRef = useRef<HTMLDivElement>(null);

    const { t } = useTranslation();

    useEffect(() => {
        const handleClickOutSide = (e: MouseEvent) => {
            // Nếu click vào modal confirm thì bỏ qua
            if (
                document
                    .querySelector(".confirm-modal")
                    ?.contains(e.target as Node)
            ) {
                return;
            }

            if (
                personalStatusRef.current &&
                !personalStatusRef.current.contains(e.target as Node)
            ) {
                setShowSlideOut(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutSide);
        return () =>
            document.removeEventListener("mousedown", handleClickOutSide);
    }, []);

    const handleToggleClick = () => {
        if (!isPrivate) {
            // Chuyển từ public → private thì hỏi trước
            setShowPrivateConfirm(true);
        } else {
            // Chuyển từ private → public thì hỏi trước
            setShowPublicConfirm(true);
        }
    };

    const handleConfirmPrivate = () => {
        setIsPrivate(true);
        setShowPrivateConfirm(false);
    };

    const handleConfirmPublic = () => {
        setIsPrivate(false);
        setShowPublicConfirm(false);
    };

    return (
        <>
            <div
                className={`flex h-screen justify-center items-center transition-all duration-300 ease-in-out
                ${slideOut ? "scale-75 opacity-0" : "scale-100 opacity-100"}`}
            >
                <div
                    ref={personalStatusRef}
                    className="bg-[#000] p-3 shadow-xl text-white w-[300px]
                    h-auto rounded-sm drop-shadow-[0_0_1px_white] duration-300 hover:drop-shadow-[0_0_3px_white]"
                >
                    <div className="flex h-[20px] items-center my-3">
                        <button
                            onClick={onClose}
                            className="mr-3 cursor-pointer"
                        >
                            <i
                                className="fa-solid fa-arrow-left
                                text-[#C7D5E0] text-[16px] text-center font-bold 
                                block drop-shadow-[0_0_1px_white] 
                                duration-500 hover:drop-shadow-[0_0_5px_white]"
                            ></i>
                        </button>
                        <h2 className="text-[#C7D5E0] text-[16px] text-center font-bold block">
                            {t("personalStatus.title")}
                        </h2>
                    </div>
                    <div className="flex items-center justify-between bg-[#181818] px-4 py-2 rounded-lg">
                        <div className="flex items-center gap-2">
                            <i
                                className="fa-solid fa-lock
                                text-[16px] text-[#C7D5E0]"
                            ></i>
                            <span className="text-[#C7D5E0] text-sm">
                                {t("personalStatus.privatePage")}
                            </span>
                        </div>

                        <button
                            onClick={handleToggleClick}
                            className={`relative w-10 h-5 flex items-center rounded-full p-1 transition-colors cursor-pointer ${
                                isPrivate ? "bg-[#C7D5E0]" : "bg-gray-600"
                            }`}
                        >
                            <div
                                className={`bg-black w-4 h-4 rounded-full shadow-md transform transition-transform ${
                                    isPrivate
                                        ? "translate-x-5"
                                        : "translate-x-0"
                                }`}
                            />
                        </button>
                    </div>
                </div>
            </div>

            {showPrivateConfirm && (
                <div className="confirm-modal">
                    <PrivateStatusConfirm
                        onClose={() => setShowPrivateConfirm(false)}
                        onConfirm={handleConfirmPrivate}
                    />
                </div>
            )}

            {showPublicConfirm && (
                <div className="confirm-modal">
                    <PublicStatusConfirm
                        onClose={() => setShowPublicConfirm(false)}
                        onConfirm={handleConfirmPublic}
                    />
                </div>
            )}
        </>
    );
}
