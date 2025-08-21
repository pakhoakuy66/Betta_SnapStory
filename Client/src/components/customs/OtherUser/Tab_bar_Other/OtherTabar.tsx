import { useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

export function OtherTab({ profileOwner }: { profileOwner: string }) {
    const navigate = useNavigate();
    const location = useLocation();

    // Kiểm tra saved dựa trên route gốc, không phải route hiện tại khi có postDetail
    const isSaved = location.pathname.includes("/saved");

    const { t } = useTranslation();

    const handleTabClick = (tabType: "posts" | "saved") => {
        // Đảm bảo profileOwner tồn tại trước khi navigate
        if (!profileOwner) return;

        if (tabType === "posts") {
            navigate(`/o/${profileOwner}`);
        } else {
            navigate(`/o/${profileOwner}/saved`);
        }
    };

    return (
        <nav className="flex border-b-2 border-[#333]">
            <button
                onClick={() => handleTabClick("posts")}
                className={`w-1/2 px-4 py-3 text-sm text-center font-medium transition duration-300 cursor-pointer
                        ${
                            !isSaved
                                ? "text-white duration-500 hover:drop-shadow-[0_0_10px_white] border-b-[2px] border-white font-bold"
                                : "text-[#C7D5E0] hover:text-white"
                        }`}
            >
                <i className="fa-solid fa-list"></i> {t("otherTab.postsTab")}
            </button>
            <button
                onClick={() => handleTabClick("saved")}
                className={`w-1/2 px-4 py-3 text-sm text-center font-medium transition duration-300 cursor-pointer
                        ${
                            isSaved
                                ? "text-white duration-500 hover:drop-shadow-[0_0_10px_white] border-b-[2px] border-white font-bold"
                                : "text-[#C7D5E0] hover:text-white"
                        }`}
            >
                <i className="fa-solid fa-bookmark"></i>{" "}
                {t("otherTab.savedPostsTab")}
            </button>
        </nav>
    );
}
