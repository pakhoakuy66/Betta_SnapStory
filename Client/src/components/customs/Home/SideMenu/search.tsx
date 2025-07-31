import { useState, useEffect, useRef } from "react";

export function Search({ onClose }: { onClose: () => void }) {
    const [slideOut, setSlideOut] = useState(false);
    const searchRef = useRef<HTMLDivElement>(null);

    // Bấm ở ngoài sẽ đóng - xử lý form search
    useEffect(() => {
        const handleClickOutSide = (e: MouseEvent) => {
            if (
                searchRef.current &&
                !searchRef.current.contains(e.target as Node)
            ) {
                setSlideOut(true); // Bắt đầu hiệu ứng trượt ra
                setTimeout(() => onClose(), 300); // Đợi animation xong rồi mới gọi đóng
            }
        };
        document.addEventListener("mousedown", handleClickOutSide);
        return () =>
            document.removeEventListener("mousedown", handleClickOutSide);
    }, [onClose]);

    return (
        <div
            ref={searchRef}
            className={`fixed top-0 left-[80px] h-screen w-[350px] p-5 bg-black 
              border-r border-[#604d4d] rounded-r-xl 
              transition-transform duration-300
              ${slideOut ? "-translate-x-full" : "translate-x-0"}`}
        >
            <h2 className="text-[#fff] text-[18px] font-bold">Tìm kiếm</h2>
            <nav className="h-[55px] border-b-1 border-[#604d4d]">
                <div className="relative w-full mt-[30px]">
                    {/* Icon kính lúp */}
                    <button className="cursor-pointer">
                        <i
                            className="fa-solid fa-magnifying-glass 
                        absolute left-3 top-1/2 -translate-y-1/2 
                        text-white text-sm z-10
                        text-[15px] hover:text-[16px] duration-500 hover:drop-shadow-[0_0_10px_white]"
                        ></i>
                    </button>

                    {/* Input */}
                    <input
                        type="text"
                        placeholder="Tìm kiếm"
                        className="w-full pl-10 pr-4 h-[35px] rounded-sm 
                bg-[#0a0e1a] text-white placeholder-gray-400
                duration-300 focus:outline-none
                hover:bg-[#12182d] hover:drop-shadow-[0_0_5px_white] relative z-0"
                    />
                </div>
            </nav>

            <div className="flex justify-between items-center my-2">
                <h3 className="text-[#fff] text-[16px] font-bold">Mới đây</h3>
                <button
                    className="text-[#fff] text-[13px] text-end cursor-pointer 
                    duration-300 hover:text-[#848383]"
                >
                    Xóa tất cả
                </button>
            </div>

            <ul className="grid max-h-[350px] overflow-y-auto w-[100%] mt-5 scrollbar-hide">
                <li className="flex justify-between items-center h-[70px]">
                    <img
                        src="./avatar"
                        className="w-10 h-10 rounded-[50%] object-cover"
                    />
                    <nav className="ml-[15px] w-[100%]">
                        <h2 className="text-[#fff] text-[13px] font-bold">
                            Tên
                        </h2>
                        <span className="text-[#fff] text-[13px]">
                            Gợi ý cho bạn
                        </span>
                    </nav>
                    <button
                        className="text-[#fff] w-[90px] text-[20px] text-end cursor-pointer
                        duration-300 hover:text-[#848383] h-[100%]"
                    >
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                </li>
            </ul>
        </div>
    );
}
