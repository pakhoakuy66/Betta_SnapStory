import { useState, useRef, useEffect } from "react";
import { ItemFollow } from "./ItemFollow";

interface FollowListProps {
    onClose: () => void;
    title: string;
    follows: {
        id: string;
        avatar: string;
        name: string;
        isFollowing: boolean;
    }[];
    isCurrentUser: boolean;
}

export function FollowList({
    onClose,
    title,
    follows,
    isCurrentUser,
}: FollowListProps) {
    const [slideOut, setSlideOut] = useState(false);
    const listFollowRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (
                listFollowRef.current &&
                !listFollowRef.current.contains(e.target as Node)
            ) {
                setSlideOut(true);
                setTimeout(() => onClose(), 300);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, [onClose]);

    return (
        <div
            className={`flex h-screen justify-center items-center transition-all duration-300 ease-in-out
                ${slideOut ? "scale-75 opacity-0" : "scale-100 opacity-100"}`}
        >
            <div
                ref={listFollowRef}
                className="bg-[#000] shadow-xl w-[450px] p-3
                    h-[350px] rounded-sm drop-shadow-[0_0_1px_white] 
                    duration-300 hover:drop-shadow-[0_0_3px_white] text-[#C7D5E0]"
            >
                <div className="w-full h-[40px] border-b-2 border-[#333]">
                    <h2 className="text-[20px] text-center font-bold">
                        {title}
                    </h2>
                </div>
                <ul className="w-full max-h-[290px] mt-2 overflow-y-auto scrollbar-hide">
                    {follows.map((user) => (
                        <ItemFollow
                            key={user.id}
                            avatar={user.avatar}
                            name={user.name}
                            isFollowing={user.isFollowing}
                            isCurrentUser={isCurrentUser}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
}
