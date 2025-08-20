import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ItemLogin } from "./ItemLogin";

// Giả lập dữ liệu lịch sử đăng nhập
const loginHistory = [
    {
        id: 1,
        device: "Windows 11 - Chrome",
        location: "Hồ Chí Minh, Việt Nam",
        time: "2025-08-20 10:30",
    },
    {
        id: 2,
        device: "iPhone 15 - Safari",
        location: "Hà Nội, Việt Nam",
        time: "2025-08-19 21:15",
    },
    {
        id: 3,
        device: "MacBook Air - Edge",
        location: "Đà Nẵng, Việt Nam",
        time: "2025-08-19 08:42",
    },
];

export function HistoryLogin({ onClose }: { onClose: () => void }) {
    const [slideOut, setShowSlideOut] = useState(false);

    const historyLoginRef = useRef<HTMLDivElement>(null);

    const { t } = useTranslation();

    useEffect(() => {
        const handleClickOutSide = (e: MouseEvent) => {
            if (
                historyLoginRef.current &&
                !historyLoginRef.current.contains(e.target as Node)
            ) {
                setShowSlideOut(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutSide);
        return () =>
            document.removeEventListener("mousedown", handleClickOutSide);
    }, []);

    return (
        <div
            className={`flex h-screen justify-center items-center transition-all duration-300 ease-in-out
                ${slideOut ? "scale-75 opacity-0" : "scale-100 opacity-100"}`}
        >
            <div
                ref={historyLoginRef}
                className="bg-[#000] p-3 shadow-xl text-white w-[500px]
                    h-[400px] rounded-sm drop-shadow-[0_0_1px_white] duration-300 hover:drop-shadow-[0_0_3px_white]"
            >
                <div className="relative items-center flex w-[100%] h-[40px] border-b-2 border-[#333]">
                    <button onClick={onClose} className="mr-3 cursor-pointer">
                        <i
                            className="fa-solid fa-arrow-left
                                text-[#C7D5E0] text-[16px] text-center font-bold 
                                block drop-shadow-[0_0_1px_white] 
                                duration-500 hover:drop-shadow-[0_0_5px_white]"
                        ></i>
                    </button>
                    <h2 className="absolute left-1/2 -translate-x-1/2 font-bold text-[20px] block">
                        {t("historyLogin.loginActivity")}
                    </h2>
                </div>
                <ul className="w-[100%] max-h-[330px] mt-2 overflow-y-auto scrollbar-hide">
                    {loginHistory.map((item) => (
                        <ItemLogin
                            key={item.id}
                            device={item.device}
                            location={item.location}
                            time={item.time}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
}
