import { useNavigate, useLocation } from "react-router-dom";

export function UserTab({ profileOwner }: { profileOwner: string }) {
    const navigate = useNavigate();
    const location = useLocation();

    // Kiểm tra saved dựa trên route gốc, không phải route hiện tại khi có postDetail
    const isPrivate = location.pathname.includes("/private");
    const isSaved = location.pathname.includes("/saved");

    const handleTabClick = (tabType: "posts" | "private" | "saved") => {
        // Đảm bảo profileOwner tồn tại trước khi navigate
        if (!profileOwner) return;

        if (tabType === "posts") {
            navigate(`/${profileOwner}`);
        } else if (tabType === "private") {
            navigate(`/${profileOwner}/private`);
        } else if (tabType === "saved") {
            navigate(`/${profileOwner}/saved`);
        }
    };

    return (
        <nav className="flex border-b-2 border-[#333]">
            <button
                onClick={() => handleTabClick("posts")}
                className={`w-1/3 px-4 py-3 text-sm text-center font-medium transition duration-300 cursor-pointer
                        ${
                            !isSaved
                                ? "text-white duration-500 hover:drop-shadow-[0_0_10px_white] border-b-[2px] border-white font-bold"
                                : "text-[#C7D5E0] hover:text-white"
                        }`}
            >
                <i className="fa-solid fa-list"></i> Bài viết
            </button>
            <button
                onClick={() => handleTabClick("private")}
                className={`w-1/3 px-4 py-3 text-sm text-center font-medium transition duration-300 cursor-pointer
                        ${
                            isSaved
                                ? "text-white duration-500 hover:drop-shadow-[0_0_10px_white] border-b-[2px] border-white font-bold"
                                : "text-[#C7D5E0] hover:text-white"
                        }`}
            >
                <i className="fa-solid fa-user"></i> Cá nhân
            </button>
            <button
                onClick={() => handleTabClick("saved")}
                className={`w-1/3 px-4 py-3 text-sm text-center font-medium transition duration-300 cursor-pointer
                        ${
                            isSaved
                                ? "text-white duration-500 hover:drop-shadow-[0_0_10px_white] border-b-[2px] border-white font-bold"
                                : "text-[#C7D5E0] hover:text-white"
                        }`}
            >
                <i className="fa-solid fa-bookmark"></i> Bài viết đã lưu
            </button>
        </nav>
    );
}
