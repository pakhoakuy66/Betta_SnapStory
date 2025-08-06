import { useState, useRef, useEffect } from "react";
import { ItemFoollow } from "./ItemFollow";

export function UserFollow({ onClose }: { onClose: () => void }) {
    const [slideOut, setShowSlideOut] = useState(false);

    const listFollowRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutSide = (e: MouseEvent) => {
            if (
                listFollowRef.current &&
                !listFollowRef.current.contains(e.target as Node)
            ) {
                setShowSlideOut(true);
                setTimeout(() => onClose(), 300);
            }
        };
        document.addEventListener("mousedown", handleClickOutSide);
        return () =>
            document.removeEventListener("mousedown", handleClickOutSide);
    }, [onClose]);

    return (
        <div
            ref={listFollowRef}
            className={`flex h-screen justify-center items-center transition-all duration-300 ease-in-out
                ${slideOut ? "scale-75 opacity-0" : "scale-100 opacity-100"}`}
        >
            <div
                className="bg-[#000] shadow-xl w-[450px] p-3
                h-[350px] rounded-sm drop-shadow-[0_0_1px_white] 
                duration-300 hover:drop-shadow-[0_0_3px_white] text-[#C7D5E0]"
            >
                <div className="w-[100%] h-[40px] border-b-2 border-[#333]">
                    <h2 className="text-[20px] text-center font-bold block">
                        Đang theo dõi
                    </h2>
                </div>
                <ul className="w-[100%] max-h-[290px] mt-2 overflow-y-auto scrollbar-hide">
                    <ItemFoollow />
                    <ItemFoollow />
                    <ItemFoollow />
                    <ItemFoollow />
                    <ItemFoollow />
                    <ItemFoollow />
                    <ItemFoollow />
                    <ItemFoollow />
                </ul>
            </div>
        </div>
    );
}
