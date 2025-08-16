import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { OtherMenu } from "../Context_Menu/OtherMenu";

export function UserOtherHead({
    onListFollow,
    onListFollower,
    onReportAccount,
}: {
    onListFollow: () => void;
    onListFollower: () => void;
    onReportAccount: () => void;
}) {
    const [showOtherMenu, setShowOtherMenu] = useState(false);
    const [btnFollow, setBtnFollow] = useState(false);

    const otherMenuRef = useRef<HTMLDivElement>(null);

    const navigate = useNavigate();

    const handleBtnFollow = () => {
        setBtnFollow((prev) => !prev);
    };

    useEffect(() => {
        const handleClickOutSide = (e: MouseEvent) => {
            if (
                otherMenuRef.current &&
                !otherMenuRef.current.contains(e.target as Node)
            ) {
                setShowOtherMenu(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutSide);
        return () =>
            document.removeEventListener("mousedown", handleClickOutSide);
    }, []);

    return (
        <header className="flex items-center gap-10 p-8 border-2">
            {/* Avatar */}
            <div
                className="flex justify-center items-center w-[200px] 
                h-[200px]"
            >
                <img
                    src="https://via.placeholder.com/150"
                    alt="Avatar"
                    className="w-[150px] h-[150px] rounded-full object-cover
                    border-1 cursor-pointer"
                />
            </div>

            {/* Thông tin bên phải */}
            <div className="flex-1 grid rounded-md p-6">
                <div className="flex items-center justify-between mb-[10px]">
                    <div className="text-[#C7D5E0] text-[26px] font-bold">
                        Tên người dùng khác
                        <span className="ml-2 text-[16px] font-normal italic hidden">
                            <i className="fa-solid fa-lock"></i> Tài khoản này
                            đang ở chế độ riêng tư
                        </span>
                    </div>
                    <div ref={otherMenuRef} className="cursor-pointer relative">
                        <i
                            onClick={() => setShowOtherMenu((prev) => !prev)}
                            className="fa-solid fa-ellipsis
                                    text-[20px] hover:text-[25px] duration-500 hover:drop-shadow-[0_0_10px_white]"
                        ></i>
                        {showOtherMenu && (
                            <OtherMenu
                                options={[
                                    {
                                        label: "Chặn",
                                        action: "Block",
                                    },
                                    {
                                        label: "Báo cáo",
                                        action: "Report_Account",
                                    },
                                    {
                                        label: "Sao chép liên kết",
                                        action: "Share_Account",
                                    },
                                ]}
                                onOptionClick={(action) => {
                                    if (action === "Block") {
                                    } else if (action === "Report_Account") {
                                        onReportAccount();
                                    } else if (action === "Share_Account") {
                                    }
                                }}
                            />
                        )}
                    </div>
                </div>
                <div className="flex items-center justify-between mb-[10px]">
                    <p className="text-[#C7D5E0] text-[16px]">
                        Chưa có tiểu sử
                    </p>
                </div>
                <div className="flex items-center my-[10px]">
                    <div className="text-[#C7D5E0] text-[20px]">
                        <span className="font-bold">0</span> bài biết
                    </div>
                    <div
                        onClick={onListFollower}
                        className="text-[#C7D5E0] text-[20px] ml-[50px] cursor-pointer"
                    >
                        <span className="font-bold">18</span> follower
                    </div>
                    <div
                        onClick={onListFollow}
                        className="text-[#C7D5E0] text-[20px] ml-[50px] cursor-pointer"
                    >
                        <span className="font-bold">0</span> đã follow
                    </div>
                </div>
                <div className="flex items-center my-[10px]">
                    <button
                        onClick={handleBtnFollow}
                        className="w-[130px] h-[30px] bg-[#151d2a] text-white 
                                rounded-sm drop-shadow-[0_0_1px_white] cursor-pointer
                                duration-300 hover:drop-shadow-[0_0_3px_white] 
                                active:scale-95 active:drop-shadow-[0_0_5px_white]"
                    >
                        {btnFollow ? "Đang theo dõi" : "Theo dõi"}
                    </button>
                </div>
            </div>
        </header>
    );
}
