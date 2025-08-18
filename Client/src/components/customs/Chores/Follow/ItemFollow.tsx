import { useNavigate } from "react-router-dom";
import { useState } from "react";

interface ItemFollowProps {
    avatar: string;
    username: string;
    isFollowing: boolean;
    isCurrentUser: boolean;
} 

export function ItemFollow({
    avatar,
    username,
    isFollowing: initialFollowing,
    isCurrentUser,
}: ItemFollowProps) {
    const [isFollowing, setIsFollowing] = useState(initialFollowing);

    const navigate = useNavigate();

    const handleFollowing = () => {
        setIsFollowing((prev) => !prev);
    };

    const buttonText = isFollowing ? "Đang theo dõi" : "Theo dõi";

    return (
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
                onClick={handleFollowing}
                className="w-[100px] h-[30px] flex-shrink-0 bg-[#151d2a] text-[12px]
                    text-white rounded-sm drop-shadow-[0_0_1px_white] cursor-pointer
                    duration-300 hover:drop-shadow-[0_0_3px_white]
                    active:scale-95 active:drop-shadow-[0_0_5px_white]"
            >
                {buttonText}
            </button>
        </li>
    );
}
