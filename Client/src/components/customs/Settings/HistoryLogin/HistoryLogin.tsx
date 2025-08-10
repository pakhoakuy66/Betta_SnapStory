import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ItemLogin } from "./ItemLogin";

export function HistoryLogin({ onClose }: { onClose: () => void }) {
    const [slideOut, setShowSlideOut] = useState(false);

    const historyLoginRef = useRef<HTMLDivElement>(null);

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
                    <Link to="/:username" className="mr-3 cursor-pointer">
                        <i
                            className="fa-solid fa-arrow-left
                                text-[#C7D5E0] text-[16px] text-center font-bold 
                                block drop-shadow-[0_0_1px_white] 
                                duration-500 hover:drop-shadow-[0_0_5px_white]"
                        ></i>
                    </Link>
                    <h2 className="absolute left-1/2 -translate-x-1/2 font-bold text-[20px] block">
                        Hoạt động đăng nhập
                    </h2>
                </div>
                <ul className="w-[100%] max-h-[330px] mt-2 overflow-y-auto scrollbar-hide">
                    <ItemLogin />
                    <ItemLogin />
                    <ItemLogin />
                    <ItemLogin />
                    <ItemLogin />
                    <ItemLogin />
                    <ItemLogin />
                    <ItemLogin />
                </ul>
            </div>
        </div>
    );
}
