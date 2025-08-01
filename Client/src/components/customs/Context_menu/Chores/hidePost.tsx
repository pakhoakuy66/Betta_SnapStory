import { useState, useEffect, useRef } from "react";

export function HidePost({ onClose }: { onClose: () => void }) {
    const [slideOut, setSlideOut] = useState(false);
    const hidePostRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutSide = (e: MouseEvent) => {
            if (
                hidePostRef.current &&
                !hidePostRef.current.contains(e.target as Node)
            ) {
                setSlideOut(true);
            }
        };
        document.addEventListener("mousedown", handleClickOutSide);
        return () =>
            document.removeEventListener("mousedown", handleClickOutSide);
    }, [onClose]);

    return (
        <div
            ref={hidePostRef}
            className={`flex h-screen justify-center items-center transition-all duration-300 ease-in-out
                ${slideOut ? "scale-75 opacity-0" : "scale-100 opacity-100"}`}
        >
            <div
                className="grid bg-[#000] shadow-xl w-[400px] p-3
                h-[200px] rounded-sm drop-shadow-[0_0_1px_white] duration-300 hover:drop-shadow-[0_0_3px_white]"
            >
                <div className="w-[100%]">
                    <h2 className="text-[#C7D5E0] text-[20px] text-center font-bold block">
                        Ẩn bài viết
                    </h2>
                </div>
                <div className="w-[100%]">
                    <p className="text-[#C7D5E0] text-center text-[16px] ">
                        Bạn có muốn ẩn bài viết này không?
                    </p>
                </div>
                <div className="flex w-[100%] justify-evenly">
                    <button
                        type="submit"
                        onClick={() => onClose()}
                        className="w-[90px] h-[30px] bg-[#151d2a] text-white 
                        rounded-sm drop-shadow-[0_0_1px_white] cursor-pointer
                        duration-300 hover:drop-shadow-[0_0_3px_white] 
                        active:scale-95 active:drop-shadow-[0_0_5px_white]"
                    >
                        Hủy
                    </button>
                    <button
                        type="submit"
                        className="w-[90px] h-[30px] bg-[#fa0000] 
                        text-white rounded-sm drop-shadow-[0_0_1px_white] cursor-pointer
                        duration-300 hover:drop-shadow-[0_0_3px_white] 
                        active:scale-95 active:drop-shadow-[0_0_5px_white]"
                    >
                        Đồng ý
                    </button>
                </div>
            </div>
        </div>
    );
}
