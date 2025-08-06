import { useState, useEffect, useRef } from "react";
import { UserSettings } from "../Context_Menu/UserSettings";

export function UserHead({
    onMenuImage,
    onEditProfile,
    onListFollow,
    onListFollower,
}: {
    onMenuImage: () => void;
    onEditProfile: () => void;
    onListFollow: () => void;
    onListFollower: () => void;
}) {
    const [showMenuSettings, setShowMenuSettings] = useState(false);

    const menuSettingsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutSide = (e: MouseEvent) => {
            if (
                menuSettingsRef.current &&
                !menuSettingsRef.current.contains(e.target as Node)
            ) {
                setShowMenuSettings(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutSide);
        return () =>
            document.removeEventListener("mousedown", handleClickOutSide);
    }, []);

    return (
        <header className="flex items-center gap-10 p-8">
            {/* Avatar */}
            <div
                className="flex justify-center items-center w-[200px] 
                h-[200px]"
            >
                <img
                    onClick={onMenuImage}
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
                        Tên người dùng
                    </div>
                    <div
                        ref={menuSettingsRef}
                        className="cursor-pointer relative"
                    >
                        <i
                            onClick={() => setShowMenuSettings((prev) => !prev)}
                            className="fa-solid fa-gear
                                    text-[20px] hover:text-[25px] duration-500 hover:drop-shadow-[0_0_10px_white]"
                        ></i>
                        {showMenuSettings && (
                            <UserSettings
                                options={[
                                    {
                                        label: "Ngôn ngữ",
                                        action: "Languages",
                                    },

                                    { label: "Chia sẻ QR", action: "QRCode" },
                                    {
                                        label: "Cài đặt & quyền riêng tư",
                                        action: "QRCode",
                                    },
                                    {
                                        label: "Hoạt động đăng nhập",
                                        action: "Login_Activity",
                                    },
                                    { label: "Đăng xuất", action: "Logout" },
                                ]}
                                onOptionClick={(action) => {}}
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
                        <span className="font-bold">0</span> follower
                    </div>
                    <div
                        onClick={onListFollow}
                        className="text-[#C7D5E0] text-[20px] ml-[50px] cursor-pointer"
                    >
                        <span className="font-bold">10</span> đã follow
                    </div>
                </div>
                <div className="flex items-center my-[10px]">
                    <button
                        onClick={onEditProfile}
                        className="w-[220px] h-[30px] bg-[#151d2a] text-white 
                                rounded-sm drop-shadow-[0_0_1px_white] cursor-pointer
                                duration-300 hover:drop-shadow-[0_0_3px_white] 
                                active:scale-95 active:drop-shadow-[0_0_5px_white]"
                    >
                        <i className="fa-solid fa-pen-to-square"></i> Chỉnh sửa
                        trang cá nhân
                    </button>
                </div>
            </div>
        </header>
    );
}
