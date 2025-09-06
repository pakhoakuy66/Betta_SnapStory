import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { BarMenu } from "./barMenu";
import Logo from "../../../../assets/imgaes/Akuy_logo.png";

export function SideMenu({
    onSearch,
    onNotification,
    onNewPost,
    onFeed,
    onProfile,
    onMenuLanguages,
    onHistoryLogin,
    onReportProblem,
}: {
    onSearch: () => void;
    onNotification: () => void;
    onNewPost: () => void;
    onFeed: () => void;
    onProfile: () => void;
    onMenuLanguages: () => void;
    onHistoryLogin: () => void;
    onReportProblem: () => void;
}) {
    const [showMenuBar, setShowMenuBar] = useState(false);

    const menuBarRef = useRef<HTMLDivElement>(null);

    const navigate = useNavigate();

    const { t } = useTranslation();

    useEffect(() => {
        const handleClickOutSide = (e: MouseEvent) => {
            if (
                menuBarRef.current &&
                !menuBarRef.current.contains(e.target as Node)
            ) {
                setShowMenuBar(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutSide);
        return () =>
            document.removeEventListener("mousedown", handleClickOutSide);
    }, []);

    return (
        <div className="fixed z-20">
            <aside
                className="grid bg-[#000] p-3 shadow-md text-white
                h-screen w-[80px] drop-shadow-[0_1px_white]"
            >
                <div className="items-start cursor-pointer">
                    <img
                        onClick={onFeed}
                        src={Logo}
                        className="w-[100%] block drop-shadow-[0_0_1px_white] 
                                duration-500 hover:drop-shadow-[0_0_5px_white]"
                    />
                </div>
                <ul className="grid justify-center items-center mt-[100px] w-[100%]">
                    <li className="mb-3.5 cursor-pointer">
                        <i
                            onClick={onFeed}
                            className="fa-solid fa-house
                            text-[20px] hover:text-[25px] duration-500 hover:drop-shadow-[0_0_10px_white]"
                        ></i>
                    </li>
                    <li className="my-3.5 cursor-pointer">
                        <i
                            onClick={onSearch}
                            className="fa-solid fa-magnifying-glass
                            text-[20px] hover:text-[25px] duration-500 hover:drop-shadow-[0_0_10px_white]"
                        ></i>
                    </li>
                    <li className="my-3.5 cursor-pointer">
                        <i
                            onClick={onNewPost}
                            className="fa-solid fa-plus
                            text-[20px] hover:text-[25px] duration-500 hover:drop-shadow-[0_0_10px_white]"
                        ></i>
                    </li>
                    <li className="my-3.5 cursor-pointer">
                        <i
                            onClick={onNotification}
                            className="fa-solid fa-bell
                            text-[20px] hover:text-[25px] duration-500 hover:drop-shadow-[0_0_10px_white]"
                        ></i>
                    </li>
                    <li className="my-3.5 cursor-pointer">
                        <i
                            onClick={onProfile}
                            className="fa-solid fa-user
                            text-[20px] hover:text-[25px] duration-500 hover:drop-shadow-[0_0_10px_white]"
                        ></i>
                    </li>
                </ul>
                <div
                    ref={menuBarRef}
                    className="grid relative justify-center items-end mt-[100px] w-[100%] cursor-pointer"
                >
                    <i
                        onClick={() => setShowMenuBar((prev) => !prev)}
                        className="fa-solid fa-bars
                        text-[20px] hover:text-[25px] duration-500 hover:drop-shadow-[0_0_10px_white]"
                    ></i>
                    {showMenuBar && (
                        <BarMenu
                            options={[
                                {
                                    label: `${t("menuBar.languages")}`,
                                    action: "Languages",
                                },
                                {
                                    label: `${t("menuBar.loginActivity")}`,
                                    action: "Login_Activity",
                                },
                                {
                                    label: `${t("menuBar.repostPost")}`,
                                    action: "Repost",
                                },
                                {
                                    label: `${t("menuBar.reportProblem")}`,
                                    action: "Report",
                                },
                                {
                                    label: `${t("menuBar.logout")}`,
                                    action: "Logout",
                                },
                            ]}
                            onOptionClick={(action) => {
                                if (action === "Languages") {
                                    onMenuLanguages();
                                } else if (action === "Login_Activity") {
                                    onHistoryLogin();
                                } else if (action === "Repost") {
                                    const currentUserName = "khoa"; // TODO: sau này lấy từ backend/login
                                    navigate(`/${currentUserName}/repost`); // ✅
                                } else if (action === "Report") {
                                    onReportProblem();
                                }
                            }}
                        />
                    )}
                </div>
            </aside>
        </div>
    );
}
