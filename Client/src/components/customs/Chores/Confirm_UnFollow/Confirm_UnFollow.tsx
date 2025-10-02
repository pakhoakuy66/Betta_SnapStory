import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

interface UnFollowConfirmProps {
    open: boolean;
    onClose: () => void;
    onConfirm: () => void;
}

export function UnFollowConfirm({
    open,
    onClose,
    onConfirm,
}: UnFollowConfirmProps) {
    const [slideOut, setSlideOut] = useState(false);
    const unFollowConfirmRef = useRef<HTMLDivElement>(null);

    if (!open) return null;

    const handleCancel = () => {
        setSlideOut(true);
        setTimeout(() => onClose(), 300);
    };

    const handleConfirm = () => {
        setSlideOut(true);
        setTimeout(() => {
            onConfirm();
            onClose();
        }, 300);
    };

    return (
        <div className="flex h-screen justify-center items-center transition-all duration-300 ease-in-out">
            <div
                ref={unFollowConfirmRef}
                className={`grid bg-[#000] shadow-xl w-[400px] p-3
                h-[200px] rounded-sm drop-shadow-[0_0_1px_white] duration-300 hover:drop-shadow-[0_0_3px_white]
                transition-all ease-in-out ${
                    slideOut ? "scale-75 opacity-0" : "scale-100 opacity-100"
                }`}
            >
                <div className="w-full">
                    <h2 className="text-[#C7D5E0] text-center text-[20px] font-bold">
                        Bỏ theo dõi
                    </h2>
                </div>
                <div className="w-full">
                    <p className="text-[#C7D5E0] text-center text-[16px]">
                        Bạn có chắc chắn muốn bỏ theo dõi người này không?
                    </p>
                </div>
                <div className="flex w-full justify-evenly">
                    <button
                        onClick={handleCancel}
                        className="w-[90px] h-[30px] bg-[#151d2a] text-white 
                        rounded-sm drop-shadow-[0_0_1px_white] cursor-pointer
                        duration-300 hover:drop-shadow-[0_0_3px_white] 
                        active:scale-95 active:drop-shadow-[0_0_5px_white]"
                    >
                        Hủy
                    </button>
                    <button
                        onClick={handleConfirm}
                        className="w-[90px] h-[30px] bg-[#fa0000] 
                        text-white rounded-sm drop-shadow-[0_0_1px_white] cursor-pointer
                        duration-300 hover:drop-shadow-[0_0_3px_white] 
                        active:scale-95 active:drop-shadow-[0_0_5px_white]"
                    >
                        Bỏ theo dõi
                    </button>
                </div>
            </div>
        </div>
    );
}
