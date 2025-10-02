import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

interface ItemFollowProps {
    avatar: string;
    username: string;
    isFollowing: boolean;
    isCurrentUser: boolean;
    // optional: callback để thông báo parent (FollowList) là đã unfollow
    onUnfollow?: (username: string) => void;
    onFollow?: (username: string) => void;
}

export function ItemFollow({
    avatar,
    username,
    isFollowing,
    isCurrentUser,
    onFollow,
    onUnfollow,
}: ItemFollowProps) {
    const navigate = useNavigate();

    const { t } = useTranslation();

    const handleBtnClick = () => {
        if (isFollowing) {
            if (onUnfollow) onUnfollow(username);
        } else {
            if (onFollow) onFollow(username);
        }
    };

    const buttonText = isFollowing
        ? `${t("followItem.following")}`
        : `${t("followItem.follow")}`;

    return (
        <div>
            <li className="flex items-center h-[70px] px-3">
                {/* Avatar cố định */}
                <img
                    src={avatar}
                    alt={username}
                    className="w-10 h-10 flex-shrink-0 rounded-full object-cover cursor-pointer"
                    onClick={() => navigate(`/o/${username}`)}
                />

                {/* Tên account với ellipsis nếu quá dài */}
                <div className="ml-4 flex-1 min-w-0">
                    <h2
                        className="text-white text-[13px] font-bold truncate cursor-pointer"
                        onClick={() => navigate(`/o/${username}`)}
                    >
                        {username}
                    </h2>
                </div>

                {/* Button cố định */}
                <button
                    onClick={handleBtnClick}
                    className="w-[100px] h-[30px] flex-shrink-0 bg-[#151d2a] text-[12px]
                    text-white rounded-sm drop-shadow-[0_0_1px_white] cursor-pointer
                    duration-300 hover:drop-shadow-[0_0_3px_white]
                    active:scale-95 active:drop-shadow-[0_0_5px_white]"
                >
                    {buttonText}
                </button>
            </li>
        </div>
    );
}
