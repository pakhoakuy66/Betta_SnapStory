import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export type SuggestionUser = {
    id: number;
    username: string;
    avatar: string;
    followed: boolean;
};

export function SuggestionListItem({ user }: { user: SuggestionUser }) {
    const [isFollow, setIsFollow] = useState(user.followed);

    const navigate = useNavigate();

    const { t } = useTranslation();

    const handleFollow = () => {
        setIsFollow((prev) => !prev);
    };

    return (
        <li className="flex justify-between items-center h-[70px]">
            <img
                src={user.avatar}
                className="w-10 h-10 rounded-[50%] object-cover cursor-pointer"
                onClick={() => navigate(`/o/${user.username}`)}
            />
            <nav className="ml-[15px] w-[100%]">
                <h2
                    className="text-[#fff] text-[13px] cursor-pointer font-bold"
                    onClick={() => navigate(`/o/${user.username}`)}
                >
                    {user.username}
                </h2>
                <span className="text-[#fff] text-[13px]">
                    {t("suggestionItem.forYou")}
                </span>
            </nav>
            <button
                onClick={handleFollow}
                className="text-[#fff] w-[90px] text-[13px] text-end cursor-pointer
                        duration-300 hover:text-[#848383] h-[100%]"
            >
                {isFollow
                    ? `${t("suggestionItem.following")}`
                    : `${t("suggestionItem.follow")}`}
            </button>
        </li>
    );
}
