import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState, useEffect, useRef } from "react";
import { UserSettings } from "../Context_Menu/UserSettings";
import QRCode from "react-qr-code";

export function UserHead({
    username,
    onMenuImage,
    onEditProfile,
    onListFollow,
    onListFollower,
    onMenuLanguages,
    onPersonalStatus,
    onHistoryLogin,
}: {
    username: string;
    onMenuImage: () => void;
    onEditProfile: () => void;
    onListFollow: () => void;
    onListFollower: () => void;
    onMenuLanguages: () => void;
    onPersonalStatus: () => void;
    onHistoryLogin: () => void;
}) {
    const [showMenuSettings, setShowMenuSettings] = useState(false);

    const menuSettingsRef = useRef<HTMLDivElement>(null);

    const navigate = useNavigate();

    const { t } = useTranslation();

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
                    <div className="text-[#C7D5E0] text-[24px] font-serif">
                        {username}
                        <span className="ml-2 text-[16px] font-normal italic hidden">
                            <i className="fa-solid fa-lock"></i>{" "}
                            {t("userHead.privateAccount")}
                        </span>
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
                                        label: `${t(
                                            "userHead.settings.languages"
                                        )}`,
                                        action: "Languages",
                                    },

                                    {
                                        label: `${t(
                                            "userHead.settings.shareQr"
                                        )}`,
                                        action: "QRCode",
                                    },
                                    {
                                        label: `${t(
                                            "userHead.settings.status"
                                        )}`,
                                        action: "Status",
                                    },
                                    {
                                        label: `${t(
                                            "userHead.settings.loginActivity"
                                        )}`,
                                        action: "Login_Activity",
                                    },
                                    {
                                        label: `${t(
                                            "userHead.settings.logout"
                                        )}`,
                                        action: "Logout",
                                    },
                                ]}
                                onOptionClick={(action) => {
                                    if (action === "Languages") {
                                        onMenuLanguages();
                                    } else if (action === "QRCode") {
                                        navigate(`/qr/${username}`);
                                    } else if (action === "Status") {
                                        onPersonalStatus();
                                    } else if (action === "Login_Activity") {
                                        onHistoryLogin();
                                    }
                                }}
                            />
                        )}
                    </div>
                </div>
                <div className="flex items-center justify-between mb-[10px]">
                    <p className="text-[#C7D5E0] text-[16px]">
                        {t("userHead.bio")}
                    </p>
                </div>
                <div className="flex items-center justify-between mb-[10px]">
                    <p className="text-[#C7D5E0] text-[16px]">
                        {t("userHead.yourLink")}
                    </p>
                </div>
                <div className="flex items-center my-[10px]">
                    <div className="text-[#C7D5E0] text-[20px]">
                        <span className="font-semibold">
                            {t("userOtherHead.posts", { count: 0 })}
                        </span>
                    </div>
                    <div
                        onClick={onListFollower}
                        className="text-[#C7D5E0] text-[20px] ml-[50px] cursor-pointer"
                    >
                        <span className="font-semibold">
                            {t("userOtherHead.followers", { count: 0 })}
                        </span>
                    </div>
                    <div
                        onClick={onListFollow}
                        className="text-[#C7D5E0] text-[20px] ml-[50px] cursor-pointer"
                    >
                        <span className="font-semibold">
                            {t("userOtherHead.following", { count: 0 })}
                        </span>
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
                        <i className="fa-solid fa-pen-to-square"></i>{" "}
                        {t("userHead.editProfile")}
                    </button>
                </div>
            </div>
        </header>
    );
}
